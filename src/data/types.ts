export type EvidenceBadge =
  | "Public record"
  | "Documented scope"
  | "Owner-reported"
  | "Internal benchmark";

export type ProjectKind =
  | "shipped"
  | "engineering-case-study"
  | "planned-build";

export type ProjectStatus =
  | "In production"
  | "Built"
  | "Live"
  | "Internal use"
  | "Planned";

export type ReadinessStage =
  | "Specification ready"
  | "Implementation in progress"
  | "Production deployed";

export type PreviewVariant =
  | "banking-pipeline"
  | "mobile-agent-qa"
  | "openapi-sdk"
  | "playwright-e2e"
  | "offline-sync"
  | "docs-matrix"
  | "testops-grid"
  | "releaseops-ci"
  | "flakeradar"
  | "contractguard"
  | "evalforge"
  | "ledgercore"
  | "perflens";

export interface QualityDimension {
  title: string;
  description: string;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  category: string;
  region: string;
  kind: ProjectKind;
  status: ProjectStatus;
  flagship?: boolean;
  /** Optional path under /public, e.g. "/images/my-project.webp". Falls back to crisp interactive architecture preview if omitted. */
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  previewVariant: PreviewVariant;
  summary: string;
  focus: string;
  techStack: string[];
  readiness?: ReadinessStage[];
  roleMeta: {
    myRole: string;
    context: string;
    period: string;
    visibility: string;
    statusNote: string;
  };
  executiveSummary: string;
  problemAndConstraints: {
    overview: string;
    whoWasAffected: string;
    whyItWasHard: string;
    constraints: string[];
    whatIOwned: string[];
  };
  ownershipBullets: string[];
  confidentialityNote?: string;
  qualityEngineeringIntro: string;
  qualityDimensions: QualityDimension[];
  results: {
    summary: string;
    metrics?: {
      label: string;
      value: string;
      source: EvidenceBadge;
    }[];
  };
  lessonsLearned: string[];
  visualCaption: string;
  externalLinks?: {
    label: string;
    href: string;
  }[];
  relatedSlugs: string[];
}

export interface ExperienceItem {
  period: string;
  roleAndCompany: string;
  description: string;
  relatedProjects: { slug: string; title: string }[];
}

export interface TopResultItem {
  title: string;
  description: string;
  badge: EvidenceBadge;
  evidenceSlug: string;
  evidenceTitle: string;
}

export interface ProfileConfig {
  name: string;
  initials: string;
  roleBadge: string;
  heroHeadline: string;
  heroBio: string;
  email: string;
  phone: string;
  location: string;
  linkedinName?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  defaultResumePath: string;
  availabilityBadge: string;
  education: string[];
  certifications: string[];
  languages: string[];
  stats: {
    value: string;
    label: string;
  }[];
  technologyGroups: {
    label: string;
    items: string[];
  }[];
  experience: ExperienceItem[];
  topResults: TopResultItem[];
}
