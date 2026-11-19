import Link from "next/link";
import { profile } from "@/data/profile";
import { getFeaturedQaProjects, projects } from "@/data/projects";
import { EvidencePill } from "@/components/Badges";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const featuredProjects = getFeaturedQaProjects();

  return (
    <div>
      {/* 1. Midnight Hero */}
      <section className="hero-night -mt-16 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="page-container relative z-10 flex flex-col items-center text-center hero-entrance">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {profile.roleBadge}
          </p>

          <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
            {profile.heroHeadline}
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href={profile.defaultResumePath}
              download
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Download CV (PDF)
            </a>
          </div>

          {/* Stats strip */}
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-zinc-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. Skills and tools */}
      <section className="page-container pt-14">
        <div className="reveal">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Technologies &amp; tooling used in quality work
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {profile.technologyGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold text-zinc-800">
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs text-zinc-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Work Experience */}
      <section className="page-container pt-16">
        <div className="reveal max-w-2xl">
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Work Experience
          </h2>
        </div>

        <ol className="mt-6 space-y-4">
          {profile.experience.map((exp) => (
            <li
              key={exp.period + exp.roleAndCompany}
              className="card-surface reveal p-6 sm:p-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold tracking-tight text-black">
                  {exp.roleAndCompany}
                </h3>
                <p className="font-mono text-xs font-medium text-zinc-500">
                  {exp.period}
                </p>
              </div>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-600">
                {exp.description}
              </p>

              {exp.relatedProjects.length > 0 && (
                <div className="mt-6 grid gap-6">
                  {exp.relatedProjects.map((rel) => {
                    const project = projects.find((p) => p.slug === rel.slug);
                    if (!project) return null;
                    return (
                      <div key={project.slug} className="not-prose max-w-2xl">
                        <ProjectCard project={project} />
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Featured QA Projects */}
      <section className="page-container pt-16">
        <div className="reveal flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Projects
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
              Four projects showcasing AI-powered SQA automation, Playwright and POM-based e-commerce testing, API validation, and CI/CD.
            </p>
          </div>
        </div>

        <ul className="mt-6 grid gap-6">
          {featuredProjects.map((project, index) => (
            <li key={project.slug} className="max-w-2xl">
              <ProjectCard project={project} indexNumber={index + 1} />
            </li>
          ))}
        </ul>
      </section>

      {/* 6. Additional Highlights */}
      <section className="page-container pt-16">
        <div className="reveal">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-700">
            Background
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Additional highlights and credentials
          </h2>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-12">
          {/* Education */}
          <div className="card-surface reveal p-6 sm:p-8 lg:col-span-7">
            <h3 className="text-lg font-semibold text-black">Education</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              {profile.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Top results */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {profile.topResults.length > 0 && (
              <div className="space-y-4">
                {profile.topResults.map((res) => (
                  <div
                    key={res.title}
                    className="card-surface spotlight reveal p-5"
                  >
                    <h3 className="text-sm font-semibold text-black">
                      {res.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                      {res.description}
                    </p>
                    <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-100 pt-3 text-xs">
                      <EvidencePill badge={res.badge} />
                      <Link
                        href={`/projects/${res.evidenceSlug}`}
                        className="font-semibold text-black hover:text-zinc-800"
                      >
                        Details: {res.evidenceTitle} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="card-surface reveal p-5">
              <h3 className="text-sm font-semibold text-black">Certifications</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {profile.certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card-surface reveal p-5">
              <h3 className="text-sm font-semibold text-black">Languages</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {profile.languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
