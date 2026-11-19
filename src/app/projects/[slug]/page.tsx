import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import {
  FlagshipPill,
  KindPill,
  ReadinessLine,
  StatusPill,
} from "@/components/Badges";
import { ProjectArtwork } from "@/components/ProjectArtwork";
import { ProjectCard } from "@/components/ProjectCard";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  return (
    <Suspense
      fallback={
        <div
          className="page-container py-16 text-sm text-zinc-500"
          aria-busy="true"
        >
          Loading project details...
        </div>
      }
    >
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}

async function ProjectDetailContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = project.relatedSlugs
    .map((s) => getProjectBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      {/* Midnight Hero */}
      <section className="hero-night -mt-16 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="page-container relative z-10 hero-entrance">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300">
            <Link
              href="/"
              className="font-mono text-zinc-400 transition hover:text-white"
            >
              ← Home
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="font-mono text-white">{project.category}</span>
            <span className="text-zinc-600">·</span>
            <span className="font-mono text-zinc-300">{project.region}</span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <StatusPill status={project.status} />
            {project.flagship && <FlagshipPill />}
            <KindPill kind={project.kind} />
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {project.summary}
          </p>

          {/* Hero Artwork */}
          <div className="mt-8 max-w-4xl">
            <ProjectArtwork
              variant={project.previewVariant}
              image={project.image}
              imageFit={project.imageFit}
              title={project.title}
              aspectClass="aspect-[16/8]"
            />
          </div>

          {/* 4-column Metadata Grid */}
          <dl className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                My role
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">
                {project.roleMeta.myRole}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Context
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">
                {project.roleMeta.context}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Period
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">
                {project.roleMeta.period}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                Visibility
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">
                {project.roleMeta.visibility}
              </dd>
            </div>
          </dl>

          <div className="mt-4 inline-flex max-w-full rounded-lg border border-white/10 bg-black/70 px-3 py-2 text-xs text-zinc-100">
            <span>Status note: {project.roleMeta.statusNote}</span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <div className="page-container pt-14">
        <div className="max-w-4xl space-y-14">
          {/* Executive Summary */}
          <section className="reveal">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Overview
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-700">
              {project.executiveSummary}
            </p>
            <ReadinessLine stages={project.readiness} />
          </section>

          {/* Project Context */}
          <section className="reveal">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Project context
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-700">
              {project.problemAndConstraints.overview}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="card-surface p-5">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Who was affected
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  {project.problemAndConstraints.whoWasAffected}
                </p>
              </div>
              <div className="card-surface p-5">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Why it was hard
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  {project.problemAndConstraints.whyItWasHard}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {project.problemAndConstraints.constraints.length > 0 && (
                <div className="card-surface p-5">
                  <h3 className="text-sm font-semibold text-black">
                    Constraints
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                    {project.problemAndConstraints.constraints.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="card-surface p-5">
                <h3 className="text-sm font-semibold text-black">
                  What I owned
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                  {project.problemAndConstraints.whatIOwned.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* My Role & Ownership */}
          <section className="reveal">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              My role and ownership
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-700">
              {project.ownershipBullets.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="font-mono text-xs font-bold text-black mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.confidentialityNote && (
              <p className="mt-4 rounded-xl border border-zinc-200 bg-zinc-100/80 px-4 py-3 text-xs text-zinc-600">
                {project.confidentialityNote}
              </p>
            )}
          </section>

          {project.results.metrics && project.results.metrics.length > 0 && (
            <section className="reveal">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Impact and outcomes
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-700">
                {project.results.summary}
              </p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.results.metrics.map((metric) => (
                  <div key={metric.label} className="card-surface p-5">
                    <dt className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {metric.label}
                    </dt>
                    <dd className="mt-2 text-lg font-semibold text-black">
                      {metric.value}
                    </dd>
                    <p className="mt-2 text-xs text-zinc-500">
                      Evidence: {metric.source}
                    </p>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {project.externalLinks && project.externalLinks.length > 0 && (
            <section className="reveal">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Supporting links
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.externalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-300 hover:bg-zinc-50"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </section>
          )}

          {project.lessonsLearned.length > 0 && (
            <section className="reveal">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Lessons learned
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-700">
                {project.lessonsLearned.map((lesson) => (
                  <li
                    key={lesson}
                    className="rounded-xl border border-zinc-200 bg-white px-4 py-3"
                  >
                    {lesson}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Visual Evidence */}
          <section className="reveal">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Illustrative overview
            </h2>
            <figure className="mt-4 max-w-4xl">
              <ProjectArtwork
                variant={project.previewVariant}
                image={project.image}
                imageFit={project.imageFit}
                title={project.title}
              />
              <figcaption className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
                {project.visualCaption}
              </figcaption>
            </figure>
          </section>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="mt-20 border-t border-zinc-200 pt-14">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Related projects
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.slug} project={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
