import { ProjectEntry } from "./types";

export const projects: ProjectEntry[] = [
  {
    slug: "chico-ai-agent",
    title: "AI Agent",
    category: "AI-driven SQA Automation",
    region: "Achievement",
    kind: "shipped",
    status: "Built",
    previewVariant: "mobile-agent-qa",
    summary:
      "Designed and deployed an AI-powered SQA agent that automates test execution and defect monitoring workflows to accelerate software testing cycles.",
    focus:
      "Applying AI-driven testing strategies to test execution and defect monitoring.",
    techStack: [
      "AI-driven SQA Automation",
      "Test Execution",
      "Defect Monitoring",
      "Scalable Test Frameworks",
    ],
    roleMeta: {
      myRole: "SQA Automation Engineer",
      context: "AI-driven software testing",
      period: "Not specified",
      visibility: "Achievement",
      statusNote: "Details reflect the project's documented scope.",
    },
    executiveSummary:
      "Chico is an AI-powered SQA automation agent designed and deployed to automate test execution and defect monitoring workflows.",
    problemAndConstraints: {
      overview:
        "The stated goal was to automate test execution and defect monitoring workflows and accelerate software testing cycles.",
      whoWasAffected: "Software testing and defect monitoring workflows.",
      whyItWasHard:
        "The work applied AI-driven testing strategies alongside scalable test-framework development.",
      constraints: [],
      whatIOwned: [
        "Designed and deployed the Chico AI-powered SQA automation agent.",
        "Automated test execution and defect monitoring workflows.",
      ],
    },
    ownershipBullets: [
      "Designed and deployed Chico, an AI-powered SQA automation agent.",
      "Automated test execution and defect monitoring workflows.",
      "Accelerated software testing cycles.",
    ],
    qualityEngineeringIntro:
      "The work focuses on AI-driven test execution and defect monitoring.",
    qualityDimensions: [
      {
        title: "Test execution",
        description:
          "The agent automates test execution workflows.",
      },
      {
        title: "Defect monitoring",
        description:
          "The agent automates defect monitoring workflows.",
      },
    ],
    results: {
      summary:
        "Designed and deployed Chico to automate test execution and defect monitoring workflows and accelerate software testing cycles.",
    },
    lessonsLearned: [],
    visualCaption: "Illustrative overview of Chico's AI-driven SQA workflow.",
    relatedSlugs: [],
  },
  {
    slug: "academic-automation",
    title: "Universitas Indonesia EMAS and SLCM Integration",
    category: "Academic Automation",
    region: "Achievement",
    kind: "shipped",
    status: "Built",
    previewVariant: "docs-matrix",
    summary:
      "Built a custom academic automation system integrating Universitas Indonesia's EMAS and SLCM platforms.",
    focus:
      "Centralizing real-time data synchronization and eliminating manual tracking in a unified dashboard.",
    techStack: [
      "EMAS",
      "SLCM",
      "Real-time Data Synchronization",
      "Unified Dashboard",
    ],
    roleMeta: {
      myRole: "Automation System Developer",
      context: "Universitas Indonesia academic platforms",
      period: "Not specified",
      visibility: "Achievement",
      statusNote: "Details reflect the project's documented scope.",
    },
    executiveSummary:
      "A custom academic automation system integrates Universitas Indonesia's EMAS and SLCM platforms, synchronizes data in real time, and centralizes information in a unified dashboard.",
    problemAndConstraints: {
      overview:
        "The system was built to eliminate manual tracking by bringing platform data together in a unified dashboard.",
      whoWasAffected: "Academic data tracking across EMAS and SLCM.",
      whyItWasHard:
        "The work integrated two named platforms and centralized their data through real-time synchronization.",
      constraints: [],
      whatIOwned: [
        "Engineered an academic automation system integrating EMAS and SLCM.",
        "Centralized real-time data synchronization in a unified dashboard.",
      ],
    },
    ownershipBullets: [
      "Integrated Universitas Indonesia's EMAS and SLCM platforms.",
      "Centralized real-time data synchronization.",
      "Eliminated manual tracking efforts with a unified dashboard.",
    ],
    qualityEngineeringIntro:
      "The system integrates two platforms, synchronizes data in real time, and centralizes tracking.",
    qualityDimensions: [
      {
        title: "Platform integration",
        description:
          "The system integrates Universitas Indonesia's EMAS and SLCM platforms.",
      },
      {
        title: "Centralized tracking",
        description:
          "Real-time data synchronization is presented in a unified dashboard.",
      },
    ],
    results: {
      summary:
        "Integrated EMAS and SLCM, centralizing real-time synchronization and eliminating manual tracking efforts in a unified dashboard.",
    },
    lessonsLearned: [],
    visualCaption:
      "Illustrative overview of the EMAS and SLCM integration.",
    relatedSlugs: [],
  },
  {
    slug: "gotrade-automation",
    title: "GoTrade",
    category: "Cross-platform Mobile QA",
    region: "iOS and Android",
    kind: "shipped",
    status: "Built",
    previewVariant: "banking-pipeline",
    summary:
      "Designed and maintained automated E2E regression suites for a cross-platform Flutter trading app.",
    focus:
      "Testing fractional US-stock trading flows, 2FA and invite-token onboarding, remote configuration, APIs, and CI integration.",
    techStack: [
      "Flutter",
      "iOS",
      "Android",
      "End-to-End Testing",
      "Firebase Remote Config",
      "API Testing",
      "CI/CD Pipelines",
    ],
    roleMeta: {
      myRole: "Quality Assurance Automation Engineer",
      context: "Cross-platform Flutter trading app",
      period: "October 2025 – April 2026",
      visibility: "Professional experience",
      statusNote: "Details reflect the project's documented scope.",
    },
    confidentialityNote:
      "Test scripts and project-specific QA documentation are not available as public links.",
    executiveSummary:
      "Designed and maintained automated E2E regression suites for a cross-platform Flutter trading app, covering core fractional US-stock flows, security-sensitive onboarding, Firebase Remote Config, API validation, and CI tests.",
    problemAndConstraints: {
      overview:
        "The role covered mobile regression testing, security-sensitive onboarding, remote feature configuration, API integration, and continuous integration.",
      whoWasAffected: "Core trading and onboarding flows in the Flutter app.",
      whyItWasHard:
        "Edge cases included expired invite tokens, network timeouts, invalid credentials, authorization failures, and connectivity drops.",
      constraints: [
        "Firebase Remote Config fallback states default off.",
        "Smoke and widget tests run in CI across real-device farms.",
      ],
      whatIOwned: [
        "Designed and maintained E2E regression suites for iOS and Android.",
        "Automated 2FA and encrypted invite-token onboarding.",
        "Built test matrices for Firebase Remote Config toggles.",
        "Developed API integration and negative test suites.",
        "Integrated smoke and widget tests into CI/CD pipelines.",
      ],
    },
    ownershipBullets: [
      "Covered core fractional US-stock trading flows with automated E2E regression suites.",
      "Tested 2FA and encrypted invite-token onboarding, including expired tokens, network timeouts, and invalid credentials.",
      "Verified Firebase Remote Config fallback states default off.",
      "Tested Firebase Remote Config rollouts to ensure zero production crashes without app-store releases.",
      "Tested server-side API validation and distinguished authorization failures from connectivity drops.",
      "Integrated smoke and widget tests into CI/CD pipelines across real-device farms.",
    ],
    qualityEngineeringIntro:
      "Work covered mobile E2E regression, negative API testing, remote-configuration fallback checks, and CI integration.",
    qualityDimensions: [
      {
        title: "Mobile regression",
        description:
          "Automated E2E suites cover the Flutter app on iOS and Android.",
      },
      {
        title: "Onboarding edge cases",
        description:
          "2FA and encrypted invite-token flows include expired-token, timeout, and invalid-credential cases.",
      },
      {
        title: "Remote configuration",
        description:
          "Test matrices verify Firebase Remote Config fallback states default off.",
      },
      {
        title: "API and CI validation",
        description:
          "Negative API suites and CI smoke/widget tests cover server validation and real-device runs.",
      },
    ],
    results: {
      summary:
        "Integrated smoke and widget tests into pull-request CI across real-device farms to block regressions. Test matrices validated default-off Remote Config fallbacks for live rollouts without app-store releases.",
      metrics: [
        {
          label: "Mobile platforms",
          value: "2 · iOS and Android",
          source: "Documented scope",
        },
        {
          label: "Regression gate",
          value: "Pull-request CI",
          source: "Owner-reported",
        },
      ],
    },
    lessonsLearned: [],
    visualCaption: "Illustrative overview of GoTrade's mobile QA test scope.",
    relatedSlugs: [],
  },
  {
    slug: "malstro-ecommerce",
    title: "Malstro",
    category: "E-commerce QA",
    region: "Web application",
    kind: "shipped",
    status: "Built",
    flagship: true,
    previewVariant: "playwright-e2e",
    summary:
      "Developed a Fakestore API-based e-commerce application with simulated checkout using the Xendit platform, alongside Playwright automation.",
    focus:
      "Testing authentication, product catalog filtering, cart management, and checkout with a maintainable POM framework.",
    techStack: [
      "Playwright",
      "Page Object Model (POM)",
      "Fakestore API",
      "Xendit",
      "GitHub Actions",
      "End-to-End Testing",
    ],
    roleMeta: {
      myRole: "Quality Assurance Engineer",
      context: "Fakestore API-based e-commerce application",
      period: "July 2026 – September 2026",
      visibility: "Professional experience",
      statusNote: "Details reflect the project's documented scope.",
    },
    executiveSummary:
      "Developed a dynamic web application leveraging Fakestore API for dummy e-commerce and simulated checkout with Xendit, then built Playwright E2E automation using the Page Object Model.",
    problemAndConstraints: {
      overview:
        "The work combined a simulated e-commerce checkout application with maintainable automated regression testing.",
      whoWasAffected: "E-commerce authentication, catalog, cart, and checkout flows.",
      whyItWasHard:
        "The work used a scalable POM test framework and continuous smoke testing across multi-step e-commerce journeys.",
      constraints: [
        "Automated test suites run through GitHub Actions on deployments.",
      ],
      whatIOwned: [
        "Designed and developed the Fakestore API-based application and simulated Xendit checkout.",
        "Built a Playwright framework based on the POM architecture.",
        "Executed E2E regression tests for authentication, filtering, cart, and checkout.",
        "Integrated smoke tests into GitHub Actions.",
      ],
    },
    ownershipBullets: [
      "Developed a dynamic e-commerce application leveraging the public Fakestore API.",
      "Simulated checkout with the Xendit platform.",
      "Built maintainable Playwright E2E tests using the POM architecture.",
      "Covered authentication, catalog filtering, cart management, and checkout.",
      "Integrated CI smoke testing and analyzed test reports to track defects.",
    ],
    qualityEngineeringIntro:
      "Work included Playwright E2E regression, POM, GitHub Actions, and test-report analysis.",
    qualityDimensions: [
      {
        title: "E-commerce journeys",
        description:
          "Regression tests cover authentication, catalog filtering, cart management, and checkout.",
      },
      {
        title: "Maintainable automation",
        description:
          "The test framework uses the Page Object Model architecture.",
      },
      {
        title: "Continuous testing",
        description:
          "GitHub Actions runs smoke tests on code deployments.",
      },
    ],
    results: {
      summary:
        "Created a simulated e-commerce checkout and integrated Playwright regression smoke testing into GitHub Actions.",
    },
    lessonsLearned: [],
    visualCaption: "Illustrative overview of MALSTRO's Playwright test scope.",
    externalLinks: [
      {
        label: "GitHub",
        href: "https://github.com/malyasalsabila/Malstro-Ecommerce",
      },
    ],
    relatedSlugs: [],
  },
  {
    slug: "saucedemo-playwright",
    title: "SauceDemo",
    category: "E-commerce QA",
    region: "Web application",
    kind: "shipped",
    status: "Built",
    previewVariant: "openapi-sdk",
    summary:
      "Created Playwright E2E scripts and a scalable Page Object Model framework for core SauceDemo user journeys.",
    focus:
      "Testing authentication, product sorting, inventory filtering and persistence, cart operations, and checkout.",
    techStack: [
      "Playwright",
      "Page Object Model (POM)",
      "GitHub Actions",
      "Regression Testing",
      "HTML Reports",
    ],
    roleMeta: {
      myRole: "Quality Assurance",
      context: "SauceDemo e-commerce platform",
      period: "October 2026",
      visibility: "Professional experience",
      statusNote: "Details reflect the project's documented scope.",
    },
    executiveSummary:
      "Designed Playwright E2E scripts and a POM-based framework for SauceDemo, covering authentication user types, product sorting and filtering, cart state, checkout, CI regression, and HTML reporting.",
    problemAndConstraints: {
      overview:
        "The test scope covers end-to-end user journeys and regression automation for the SauceDemo e-commerce platform.",
      whoWasAffected: "Authentication, inventory, cart, and checkout workflows.",
      whyItWasHard:
        "Testing covered multiple authentication states, inventory persistence, and full checkout flows.",
      constraints: [
        "Automated regression suites run in GitHub Actions on deployments.",
      ],
      whatIOwned: [
        "Designed and executed Playwright E2E scripts.",
        "Developed a maintainable Page Object Model framework.",
        "Created positive and negative test cases and bug-tracking reports.",
        "Analyzed execution logs and generated HTML reports.",
      ],
    },
    ownershipBullets: [
      "Tested standard, locked-out, and performance-glitch authentication users.",
      "Automated product sorting, inventory filtering, and cart operations.",
      "Validated inventory state persistence and complete checkout workflows.",
      "Integrated regression suites with GitHub Actions.",
      "Analyzed logs and generated HTML reports to support defect debugging.",
    ],
    qualityEngineeringIntro:
      "Work covered Playwright E2E testing, POM-based organization, CI regression, and HTML test reports.",
    qualityDimensions: [
      {
        title: "Functional scenarios",
        description:
          "Tested authentication, sorting, inventory filtering, cart operations, and checkout.",
      },
      {
        title: "Framework maintainability",
        description:
          "Organized automation using the Page Object Model pattern.",
      },
      {
        title: "Regression reporting",
        description:
          "Ran suites in GitHub Actions and used HTML reports for defect debugging.",
      },
    ],
    results: {
      summary:
        "Created and integrated automated SauceDemo regression tests with documentation and HTML reporting.",
    },
    lessonsLearned: [],
    visualCaption:
      "Illustrative overview of SauceDemo's Playwright test scope.",
    externalLinks: [
      {
        label: "GitHub",
        href: "https://github.com/malyasalsabila/saucedemo-playwright",
      },
      { label: "Live Demo", href: "https://www.saucedemo.com/" },
    ],
    relatedSlugs: [],
  },
  {
    slug: "pokeapi-validation",
    title: "PokeAPI",
    category: "API and Frontend QA",
    region: "Web application",
    kind: "shipped",
    status: "Built",
    previewVariant: "perflens",
    summary:
      "Developed a dynamic web application using the public PokeAPI to display Pokémon lists, stats, and attributes.",
    focus:
      "Validating API responses and data integrity, and testing search, filters, responsive layouts, and data fetching.",
    techStack: [
      "PokeAPI",
      "API Testing",
      "Manual Testing",
      "Git",
      "Search and Filtering",
      "Responsive UI",
    ],
    roleMeta: {
      myRole: "Quality Assurance Analyst",
      context: "Public PokeAPI-based web application",
      period: "August 2025 – October 2025",
      visibility: "Professional experience",
      statusNote: "Details reflect the project's documented scope.",
    },
    executiveSummary:
      "Developed a PokeAPI-based web application and tested API response payloads, HTTP status codes, data integrity, search and filter features, frontend data fetching, and responsive UI.",
    problemAndConstraints: {
      overview:
        "The work combined a Pokémon information application with API validation and functional testing.",
      whoWasAffected: "Pokémon list, stats, attribute, search, and filter features.",
      whyItWasHard:
        "Testing covered API payload validation and responsive application behavior across desktop and mobile.",
      constraints: [],
      whatIOwned: [
        "Developed a dynamic web application leveraging the public PokeAPI.",
        "Implemented automated and manual API testing scenarios.",
        "Developed search and filter features by name, type, and generation.",
        "Created functional test cases and API endpoint validation documentation.",
      ],
    },
    ownershipBullets: [
      "Validated API response payloads, HTTP status codes, and data integrity.",
      "Tested Pokémon search and filtering by name, type, and generation.",
      "Optimized frontend performance and data fetching mechanisms.",
      "Validated responsive UI across desktop and mobile devices.",
      "Maintained test documentation and collaborated using Git.",
    ],
    qualityEngineeringIntro:
      "Work covered API response validation, functional testing, responsive UI, and frontend data fetching.",
    qualityDimensions: [
      {
        title: "API validation",
        description:
          "Tested response payloads, HTTP status codes, and data integrity.",
      },
      {
        title: "Search and filtering",
        description:
          "Validated queries by Pokémon name, type, and generation.",
      },
      {
        title: "Responsive application",
        description:
          "Checked accessibility across desktop and mobile devices.",
      },
    ],
    results: {
      summary:
        "Developed and tested a responsive PokeAPI web application with search, filtering, and API validation.",
    },
    lessonsLearned: [],
    visualCaption: "Illustrative overview of the PokeAPI application test scope.",
    externalLinks: [
      {
        label: "GitHub",
        href: "https://github.com/malyasalsabila/Pokeapi-Application",
      },
    ],
    relatedSlugs: [],
  },
];

const featuredQaProjectSlugs = [
  "chico-ai-agent",
  "malstro-ecommerce",
  "saucedemo-playwright",
  "pokeapi-validation",
];

export function getFeaturedQaProjects(): ProjectEntry[] {
  return featuredQaProjectSlugs.map((slug) => {
    const project = projects.find((entry) => entry.slug === slug);
    if (!project) {
      throw new Error(`Featured QA project not found: ${slug}`);
    }
    return project;
  });
}

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}
