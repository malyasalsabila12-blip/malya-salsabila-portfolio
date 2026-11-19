import Link from "next/link";
import { ProjectEntry } from "@/data/types";
import { FlagshipPill, KindPill, ReadinessLine, StatusPill } from "./Badges";
import { ProjectArtwork } from "./ProjectArtwork";
import { SpotlightCard } from "./SpotlightCard";

interface ProjectCardProps {
  project: ProjectEntry;
  indexNumber?: number;
  showArtwork?: boolean;
}

export function ProjectCard({
  project,
  indexNumber,
  showArtwork = true,
}: ProjectCardProps) {
  const isPlanned = project.kind === "planned-build";
  const maxVisibleTags = 5;
  const visibleTags = project.techStack.slice(0, maxVisibleTags);
  const extraCount = project.techStack.length - visibleTags.length;

  const ctaLabel =
    project.kind === "planned-build"
      ? "Read specification"
      : "View details";

  const typeSubLabel =
    project.kind === "planned-build"
      ? "Specification"
      : project.kind === "engineering-case-study"
      ? "Engineering case study"
      : "Project";

  return (
    <SpotlightCard
      className={`group spotlight reveal flex h-full flex-col justify-between p-5 sm:p-6 ${
        isPlanned ? "card-dashed" : "card-surface"
      }`}
    >
      <div>
        {showArtwork && (
          <Link
            href={`/projects/${project.slug}`}
            className="mb-5 block focus:outline-none"
          >
            <ProjectArtwork
              variant={project.previewVariant}
              image={project.image}
              imageAlt={project.imageAlt}
              imageFit={project.imageFit}
              title={project.title}
              aspectClass={project.image ? "aspect-[27/16]" : undefined}
              showTerminalOnHover={
                !isPlanned && project.previewVariant !== "mobile-agent-qa"
              }
            />
          </Link>
        )}

        {/* Badges + Category */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {indexNumber !== undefined && (
              <span className="mr-1 font-mono text-xs font-semibold text-zinc-400">
                {String(indexNumber).padStart(2, "0")}
              </span>
            )}
            {project.flagship && <FlagshipPill />}
            <KindPill kind={project.kind} />
          </div>
          <span className="font-mono text-[11px] text-zinc-500">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-3.5 text-lg font-semibold tracking-tight text-black group-hover:text-zinc-800 transition-colors">
          <Link href={`/projects/${project.slug}`} className="focus:outline-none">
            {project.title}
          </Link>
        </h3>

        {/* Summary */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {project.summary}
        </p>

        <p className="mt-3 text-xs leading-relaxed text-zinc-600">
          <span className="font-semibold text-zinc-800">Outcome:</span>{" "}
          {project.results.summary}
        </p>

        {/* Focus */}
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          <span className="font-semibold text-zinc-700">Test scope:</span>{" "}
          {project.focus}
        </p>

        {/* Readiness if applicable */}
        <ReadinessLine stages={project.readiness} />
      </div>

      <div className="mt-5 pt-4 border-t border-zinc-100">
        {/* Region + Tech tags */}
        <ul
          className="flex flex-wrap items-center gap-1.5"
          aria-label="Project context and technologies"
        >
          <li className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
            {project.region}
          </li>
          {visibleTags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-zinc-200/90 bg-white px-2 py-0.5 font-mono text-[11px] text-zinc-600"
            >
              {tag}
            </li>
          ))}
          {extraCount > 0 && (
            <li className="rounded-md border border-zinc-200/80 bg-zinc-50 px-2 py-0.5 font-mono text-[11px] text-zinc-500">
              +{extraCount}
            </li>
          )}
        </ul>

        {/* Footer action */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="font-mono text-[11px] text-zinc-400">
            {typeSubLabel}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {project.externalLinks?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                {link.label}
              </a>
            ))}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 font-semibold text-black transition-colors group-hover:text-zinc-800"
            >
              {ctaLabel}{" "}
              <span className="project-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
