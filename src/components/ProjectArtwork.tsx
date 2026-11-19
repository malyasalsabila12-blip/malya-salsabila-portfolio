import { PreviewVariant } from "@/data/types";

interface ProjectArtworkProps {
  variant: PreviewVariant;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  title: string;
  aspectClass?: string;
  showTerminalOnHover?: boolean;
}

interface VariantMeta {
  accentFrom: string;
  accentTo: string;
  badge: string;
  diagramLabel?: string;
  footerLabel?: string;
  minHeightClassName?: string;
  metricClassName?: string;
  nodeLabelClassName?: string;
  nodes: { step: string; label: string; metric: string }[];
  staticTerminal?: boolean;
  terminalLine: string;
  wrapNodeMetrics?: boolean;
  wrapTerminalLine?: boolean;
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
    diagramLabel: "AI architecture and QA validation pipeline",
    nodes: [
      { step: "01", label: "AI Agent Core", metric: "Built from scratch" },
      { step: "02", label: "Test Execution Engine", metric: "Automated scenarios" },
      { step: "03", label: "Defect Detection", metric: "Anomalies + edge cases" },
      { step: "04", label: "QA Evaluation", metric: "Reliability + stability" },
    ],
    staticTerminal: true,
    terminalLine: "chico --build --test-suite --verify-defects -> PASSED",
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
    badge: "SAUCEDEMO · PLAYWRIGHT E2E SUITE",
    diagramLabel: "Playwright E2E test suite architecture",
    footerLabel: "AUTOMATED TEST SUITE ARCHITECTURE",
    metricClassName: "text-[9px]",
    nodeLabelClassName: "text-[10px]",
    wrapNodeMetrics: true,
    nodes: [
      { step: "01", label: "Page Object Model", metric: "Reusable Page & Locators" },
      { step: "02", label: "Catalog & Sorting", metric: "Filter & Sort Validation" },
      { step: "03", label: "Cart Persistence", metric: "State & Item Assertions" },
      { step: "04", label: "Checkout & CI Report", metric: "E2E Flow + HTML Report" },
    ],
    staticTerminal: true,
    terminalLine:
      "npx playwright test --reporter=html -> auth, sort, cart, checkout [PASSED]",
    wrapTerminalLine: true,
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
    badge: "MALSTRO · FULL-STACK & PLAYWRIGHT E2E",
    diagramLabel: "end-to-end build and QA pipeline",
    footerLabel: "END-TO-END BUILD & QA PIPELINE",
    metricClassName: "text-[9px]",
    nodes: [
      { step: "01", label: "Storefront & Catalog", metric: "Built with FakeStore API" },
      { step: "02", label: "Payment Integration", metric: "Xendit Payment Gateway" },
      { step: "03", label: "Playwright E2E (POM)", metric: "Auth, cart & checkout" },
      { step: "04", label: "CI Regression", metric: "GitHub Actions Pipeline" },
    ],
    staticTerminal: true,
    terminalLine:
      "playwright test --project=chromium -> auth, cart, xendit-payment [PASSED]",
    wrapTerminalLine: true,
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
    badge: "POKEAPI · CUSTOM UI & QA",
    diagramLabel: "custom UI build and API/frontend QA workflow",
    footerLabel: "UI BUILD & API/FRONTEND QA",
    minHeightClassName: "min-h-[300px] sm:aspect-[16/8]",
    metricClassName: "text-[9px]",
    nodeLabelClassName: "text-[10px]",
    wrapNodeMetrics: true,
    nodes: [
      { step: "01", label: "Custom UI Build", metric: "Built from scratch" },
      { step: "02", label: "API & Data Validation", metric: "Status, schema & stats" },
      { step: "03", label: "Search & Filters", metric: "Name, type & filters" },
      { step: "04", label: "Responsive UI QA", metric: "Desktop & mobile views" },
    ],
    staticTerminal: true,
    terminalLine:
      "pokeapi-ui --validate-api --check-responsive -> lists, stats, filters [OK]",
    wrapTerminalLine: true,
  },
};

export function ProjectArtwork({
  variant,
  image,
  imageAlt,
  imageFit = "cover",
  title,
  aspectClass = "aspect-[16/9]",
  showTerminalOnHover = false,
}: ProjectArtworkProps) {
  if (image) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-zinc-200/80 ${
          imageFit === "contain" ? "bg-white" : "bg-black"
        } ${aspectClass}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt ?? title}
          className={`h-full w-full ${
            imageFit === "contain" ? "object-contain p-2" : "object-cover"
          } transition duration-500 group-hover:scale-[1.02]`}
        />
      </div>
    );
  }

  const meta = variantConfig[variant];

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-black p-4 text-zinc-100 ${aspectClass} ${meta.minHeightClassName ?? ""} flex flex-col justify-between`}
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

      {/* Illustrative workflow diagram */}
      <ul
        aria-label={`Illustrative ${meta.diagramLabel ?? "QA workflow"} for ${title}`}
        className="relative z-10 my-auto grid grid-cols-2 gap-2 py-3 sm:grid-cols-4"
      >
        {meta.nodes.map((node) => (
          <li
            key={node.step + node.label}
            className="workflow-node rounded-lg border border-white/15 bg-zinc-900/90 p-2 backdrop-blur-xs"
          >
            <span className="font-mono text-[10px] font-semibold text-white">
              {node.step}
            </span>
            <p
              className={`mt-0.5 truncate font-medium ${
                meta.nodeLabelClassName ?? "text-[11px]"
              } text-zinc-100`}
            >
              {node.label}
            </p>
            <p
              className={`mt-0.5 font-mono ${
                meta.wrapNodeMetrics
                  ? "whitespace-normal break-words leading-3"
                  : "truncate"
              } ${meta.metricClassName ?? "text-[10px]"} text-zinc-400`}
            >
              {node.metric}
            </p>
          </li>
        ))}
      </ul>

      <div className="relative z-10 flex min-w-0 flex-col gap-1">
        {meta.footerLabel ? (
          <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
            {meta.footerLabel}
          </p>
        ) : !meta.staticTerminal ? (
          <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
            Illustrative QA workflow
          </p>
        ) : null}
        {meta.staticTerminal ? (
          <p
            className="flex min-w-0 items-start gap-1 border-t border-white/10 pt-2 font-mono text-[10px] leading-4 text-emerald-300"
            aria-label={`Illustrative sample status: $ ${meta.terminalLine}`}
          >
            <span aria-hidden="true">$</span>
            <span
              className={`min-w-0 ${
                meta.wrapTerminalLine ? "break-words" : "truncate"
              }`}
            >
              {meta.terminalLine}
            </span>
          </p>
        ) : (
          showTerminalOnHover && (
            <p
              className="terminal-preview"
              aria-label={`Illustrative terminal preview: ${meta.terminalLine}`}
            >
              <span aria-hidden="true">$</span>
              <span className="terminal-command">{meta.terminalLine}</span>
            </p>
          )
        )}
      </div>
    </div>
  );
}
