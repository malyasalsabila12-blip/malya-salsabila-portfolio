import { EvidenceBadge, ProjectKind, ProjectStatus, ReadinessStage } from "@/data/types";

export function StatusPill({ status }: { status: ProjectStatus }) {
  const styles: Record<ProjectStatus, string> = {
    "In production":
      "border-black bg-black text-white",
    Live: "border-black bg-black text-white",
    Built: "border-zinc-300 bg-zinc-100 text-zinc-800",
    "Internal use": "border-zinc-300 bg-zinc-100 text-zinc-800",
    Planned: "border-zinc-200 bg-white text-zinc-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-75" />
      {status}
    </span>
  );
}

export function FlagshipPill() {
  return (
    <span className="inline-flex items-center rounded-full border border-black/15 bg-black px-2.5 py-0.5 text-[11px] font-medium text-white">
      Featured
    </span>
  );
}

export function KindPill({ kind }: { kind: ProjectKind }) {
  if (kind === "engineering-case-study") {
    return (
      <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700">
        Engineering case study
      </span>
    );
  }
  if (kind === "planned-build") {
    return (
      <span className="inline-flex items-center rounded-full border border-dashed border-zinc-300 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600">
        Planned build
      </span>
    );
  }
  return null;
}

export function EvidencePill({ badge }: { badge: EvidenceBadge }) {
  const map: Record<EvidenceBadge, string> = {
    "Public record": "border-black bg-black text-white",
    "Documented scope": "border-zinc-300 bg-zinc-100 text-zinc-800",
    "Owner-reported": "border-zinc-200 bg-white text-zinc-600",
    "Internal benchmark": "border-zinc-300 bg-zinc-100 text-zinc-800",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-medium ${map[badge]}`}
    >
      {badge}
    </span>
  );
}

export function ReadinessLine({ stages }: { stages?: ReadinessStage[] }) {
  if (!stages || stages.length === 0) return null;
  return (
    <p className="mt-3 font-mono text-[11px] text-zinc-500">
      <span className="font-semibold text-zinc-700">Readiness evidence:</span>{" "}
      {stages.join(" · ")}
    </p>
  );
}
