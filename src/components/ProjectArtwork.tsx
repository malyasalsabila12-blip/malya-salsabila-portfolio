import { PreviewVariant } from "@/data/types";

interface ProjectArtworkProps {
  variant: PreviewVariant;
  image?: string;
  title: string;
  aspectClass?: string;
}

interface VariantMeta {
  accentFrom: string;
  accentTo: string;
  badge: string;
  nodes: { step: string; label: string; metric: string }[];
  terminalLine: string;
}

const variantConfig: Record<PreviewVariant, VariantMeta> = {
  "banking-pipeline": {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "GOTRADE · MOBILE QA",
    nodes: [
      { step: "01", label: "2FA & Tokens", metric: "Edge cases" },
      { step: "02", label: "Remote Config", metric: "Default off" },
      { step: "03", label: "API Tests", metric: "Negative cases" },
      { step: "04", label: "CI Device Farm", metric: "Smoke & widget" },
    ],
    terminalLine: "Flutter E2E · iOS + Android · CI/CD",
  },
  "mobile-agent-qa": {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "CHICO · AI-DRIVEN SQA",
    nodes: [
      { step: "01", label: "Test Execution", metric: "Automated" },
      { step: "02", label: "Defect Monitoring", metric: "Automated" },
      { step: "03", label: "SQA Workflows", metric: "AI-powered" },
      { step: "04", label: "Testing Cycles", metric: "Accelerated" },
    ],
    terminalLine: "AI-powered SQA agent -> test execution + defect monitoring",
  },
  "docs-matrix": {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "UNIVERSITAS INDONESIA · EMAS + SLCM",
    nodes: [
      { step: "01", label: "EMAS", metric: "Platform" },
      { step: "02", label: "SLCM", metric: "Platform" },
      { step: "03", label: "Data Sync", metric: "Real-time" },
      { step: "04", label: "Dashboard", metric: "Unified" },
    ],
    terminalLine: "EMAS + SLCM -> real-time synchronization -> unified dashboard",
  },
  "openapi-sdk": {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "SAUCEDEMO · PLAYWRIGHT E2E",
    nodes: [
      { step: "01", label: "POM Framework", metric: "Maintainable" },
      { step: "02", label: "Product Flows", metric: "Sort & filter" },
      { step: "03", label: "Cart & Inventory", metric: "Persistence" },
      { step: "04", label: "Checkout", metric: "E2E" },
    ],
    terminalLine: "GitHub Actions -> regression suite -> HTML report",
  },
  "offline-sync": {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "OFFLINE QUEUE & RETRY",
    nodes: [
      { step: "OFF", label: "Airplane Queue", metric: "Persisted" },
      { step: "RTRY", label: "FIFO Replay", metric: "Ordered" },
      { step: "GPS", label: "Background Sync", metric: "Deduped" },
      { step: "GC", label: "Firestore Prune", metric: "-30% storage" },
    ],
    terminalLine: "net.condition('loss=40%') -> queue_ack == delivered_only",
  },
  "playwright-e2e": {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "MALSTRO · PLAYWRIGHT E2E",
    nodes: [
      { step: "01", label: "Fakestore API", metric: "E-commerce" },
      { step: "02", label: "Playwright + POM", metric: "Maintainable" },
      { step: "03", label: "Cart & Checkout", metric: "Xendit simulation" },
      { step: "04", label: "CI Smoke Tests", metric: "GitHub Actions" },
    ],
    terminalLine: "E2E: authentication -> catalog -> cart -> checkout",
  },
  "testops-grid": {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "TESTOPS · DEVICE LEASING",
    nodes: [
      { step: "SLOT", label: "UDID Lease Lock", metric: "Isolated" },
      { step: "WIPE", label: "Keychain Reset", metric: "Clean state" },
      { step: "RUN", label: "Mobile / Web Suite", metric: "Parallel" },
      { step: "AUTH", label: "Allure Portal", metric: "Gated" },
    ],
    terminalLine: "lease.acquire('iphone-16-slot-02', ttl='15m') -> LOCKED",
  },
  "releaseops-ci": {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "RELEASEOPS · QUALITY GATES",
    nodes: [
      { step: "PR", label: "Types & Contract", metric: "<3 min" },
      { step: "RC", label: "Smoke + Device QA", metric: "Gated" },
      { step: "DIST", label: "TestFlight / EAS", metric: "Isolated" },
      { step: "MON", label: "Sentry Health", metric: " Crash-free" },
    ],
    terminalLine: "gate.promote('rc-2026.11') -> awaiting QA sign-off ✓",
  },
  flakeradar: {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "FLAKERADAR · TELEMETRY",
    nodes: [
      { step: "ING", label: "JUnit / JSON Parse", metric: "0ms runtime" },
      { step: "SIG", label: "Pass-on-Retry", metric: "Clustered" },
      { step: "P95", label: "Step Drift Alert", metric: "Tracked" },
      { step: "SLA", label: "Quarantine Lane", metric: "7-day fix" },
    ],
    terminalLine: "flake_score > 0.03 -> routed to @quarantine-lane",
  },
  contractguard: {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "SPECIFICATION · FAULT LAB",
    nodes: [
      { step: "V1-6", label: "6 Seeded Faults", metric: "Broken APIs" },
      { step: "PACT", label: "Schema & Contract", metric: "Diff gate" },
      { step: "CHAOS", label: "Toxiproxy Reset", metric: "2s latency" },
      { step: "LOAD", label: "k6 SLO Baseline", metric: "p95 budget" },
    ],
    terminalLine: "[PLANNED SPEC] toxiproxy-cli toxic add -t latency -a latency=2000",
  },
  evalforge: {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "SPECIFICATION · LLM EVALS",
    nodes: [
      { step: "DET", label: "JSON & Tool Args", metric: "100% strict" },
      { step: "SEC", label: "PII & Injection", metric: "Hard block" },
      { step: "JDG", label: "Calibrated Rubric", metric: "Threshold" },
      { step: "CI", label: "Replay Cassettes", metric: "Cost-capped" },
    ],
    terminalLine: "[PLANNED SPEC] pytest evals/ --deterministic-first",
  },
  ledgercore: {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "SPECIFICATION · INVARIANTS",
    nodes: [
      { step: "PROP", label: "Zero-Sum Ledger", metric: "∑Dr == ∑Cr" },
      { step: "RACE", label: "Barrier Goroutines", metric: "N=64 burst" },
      { step: "IDEM", label: "Replay Safety", metric: "Exact match" },
      { step: "REC", label: "Crash Recovery", metric: "Consistent" },
    ],
    terminalLine: "[PLANNED SPEC] invariant: balance >= 0 across 10,000 races",
  },
  perflens: {
    accentFrom: "from-zinc-500/10",
    accentTo: "to-zinc-500/10",
    badge: "POKEAPI · WEB APPLICATION",
    nodes: [
      { step: "01", label: "Pokémon Data", metric: "Lists & stats" },
      { step: "02", label: "API Validation", metric: "Payloads & status" },
      { step: "03", label: "Search & Filters", metric: "Name, type, generation" },
      { step: "04", label: "Responsive UI", metric: "Desktop & mobile" },
    ],
    terminalLine: "PokeAPI -> data validation -> searchable web application",
  },
};

export function ProjectArtwork({
  variant,
  image,
  title,
  aspectClass = "aspect-[16/9]",
}: ProjectArtworkProps) {
  if (image) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-black ${aspectClass}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  const meta = variantConfig[variant];

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-black p-4 text-zinc-100 ${aspectClass} flex flex-col justify-between`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.accentFrom} via-transparent ${meta.accentTo}`}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Top chrome bar */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-zinc-600" />
          <span className="h-2 w-2 rounded-full bg-zinc-600" />
          <span className="h-2 w-2 rounded-full bg-zinc-600" />
        </div>
        <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] tracking-wider text-white">
          {meta.badge}
        </span>
      </div>

      {/* Pipeline node cards */}
      <div className="relative z-10 my-auto grid grid-cols-2 gap-2 py-2 sm:grid-cols-4">
        {meta.nodes.map((node) => (
          <div
            key={node.step + node.label}
            className="rounded-lg border border-white/10 bg-zinc-900/85 p-2 backdrop-blur-xs"
          >
            <span className="font-mono text-[10px] font-semibold text-white">
              {node.step}
            </span>
            <p className="mt-0.5 truncate text-[11px] font-medium text-zinc-100">
              {node.label}
            </p>
            <p className="mt-0.5 truncate font-mono text-[10px] text-zinc-400">
              {node.metric}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom terminal trace */}
      <div className="relative z-10 truncate rounded-md border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-zinc-300">
        <span className="text-white">$</span> {meta.terminalLine}
      </div>
    </div>
  );
}
