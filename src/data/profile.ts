import { ProfileConfig } from "./types";

/**
 * EDIT THIS FILE WITH YOUR PERSONAL DETAILS
 * Every page (Home, Role pages, Case studies, Header, Footer, Contact) reads from here.
 */
export const profile: ProfileConfig = {
  name: "Harfy Malya Salsabila Utami",
  initials: "HM",
  roleBadge: "Software Quality Assurance Automation Engineer · 2 Years Experience",
  heroHeadline:
    "QA Engineer dedicated to building reliable automation frameworks and driving software quality from manual to CI/CD pipelines.",
  heroBio:
    "Quality Assurance Engineer with GoTrade experience in manual and automated testing, bug tracking, and release quality. I build maintainable Playwright and Page Object Model (POM) test frameworks, validate APIs, and integrate regression checks into CI/CD pipelines. My projects include AI-powered SQA automation, e-commerce testing, and API validation.",
  email: "malyasalsabila12@gmail.com",
  phone: "+62 819 9939 0817",
  location: "Sawangan, Depok City 16511",
  linkedinName: "Harfy Malya Salsabila Utami",
  linkedinUrl: "https://www.linkedin.com/in/malyaqualityassurance/",
  githubUrl: "https://github.com/malyasalsabila12-blip",
  defaultResumePath: "/resume/qa-sdet-resume.pdf",
  availabilityBadge: "Software Quality Assurance Automation Engineer",
  education: [
    "Universitas Indonesia · Russian Literature (Bachelor's degree, in progress)",
    "SMK Taman Siswa · Software Engineering · 2021–2024",
  ],
  certifications: [
    "Software Testing · Udemy",
    "Software Quality Assurance · MySkill",
  ],
  languages: [
    "Indonesian · Native",
    "English · A2 (Elementary)",
    "Russian · A1 (Beginner)",
  ],
  stats: [
    { value: "2", label: "years of QA automation experience" },
    { value: "iOS + Android", label: "cross-platform Flutter E2E regression" },
    { value: "PR CI", label: "smoke and widget checks on real-device farms" },
  ],
  technologyGroups: [
    {
      label: "Automation & Frameworks",
      items: [
        "Playwright",
        "Python",
        "UI Automation",
        "End-to-End Testing",
        "Scalable Test Frameworks",
        "Page Object Model (POM)",
      ],
    },
    {
      label: "API, Tools & CI/CD",
      items: [
        "Postman",
        "API Testing",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Git",
        "GitHub",
        "Jira",
      ],
    },
    {
      label: "Testing & Quality",
      items: ["Regression Testing", "AI-driven SQA Automation"],
    },
  ],
  experience: [
    {
      period: "October 2025 – April 2026",
      roleAndCompany: "Quality Assurance Automation Engineer · GoTrade",
      description:
        "Designed and maintained Flutter E2E regression for fractional U.S.-stock trading on iOS and Android; tested 2FA and invite-token edge cases, default-off Firebase Remote Config, and API failures; integrated smoke and widget checks into pull-request CI on real-device farms.",
      relatedProjects: [
        { slug: "gotrade-automation", title: "GoTrade" },
      ],
    },
  ],
  topResults: [],
};
