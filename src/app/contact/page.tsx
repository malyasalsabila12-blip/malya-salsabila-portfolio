import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ContactFormClient } from "@/components/ContactFormClient";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} for QA Automation Engineer opportunities.`,
};

export default function ContactPage() {
  return (
    <div>
      <section className="hero-night -mt-16 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="page-container relative z-10 hero-entrance">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs font-medium text-white">
            <span className="status-pulse h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {profile.availabilityBadge}
          </p>

          <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Get in touch
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">
            Tell me about your team, release pipeline, and the quality challenges you want help solving.
          </p>
        </div>
      </section>

      <section className="page-container pt-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>

          <div className="space-y-5 lg:col-span-5">
            <div className="card-surface p-6">
              <h2 className="text-base font-semibold text-black">
                Other ways to reach me
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center justify-between gap-2">
                  <span className="text-zinc-500">Email</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono text-xs font-medium text-zinc-700 hover:underline"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center justify-between gap-2">
                  <span className="text-zinc-500">Phone</span>
                  <a
                    href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
                    className="font-mono text-xs font-medium text-zinc-700 hover:underline"
                  >
                    {profile.phone}
                  </a>
                </li>
                {profile.githubUrl && (
                  <li className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-zinc-500">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-zinc-700"
                        fill="currentColor"
                      >
                        <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.4 3.003-.405 1.02.005 2.046.139 3.003.405 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.901-.015 3.293 0 .319.216.694.825.576C20.565 22.092 24 17.597 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      GitHub
                    </span>
                    <a
                      href={profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-black hover:text-zinc-800"
                    >
                      View profile ↗
                    </a>
                  </li>
                )}
                {profile.linkedinName && (
                  <li className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-zinc-500">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-zinc-700"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.997 20.452H3.67V9h3.327v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </span>
                    {profile.linkedinUrl ? (
                      <a
                        href={profile.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-800 hover:underline"
                      >
                        {profile.linkedinName}
                      </a>
                    ) : (
                      <span className="text-zinc-800">{profile.linkedinName}</span>
                    )}
                  </li>
                )}
                <li className="flex items-center justify-between gap-2">
                  <span className="text-zinc-500">Location</span>
                  <span className="text-zinc-800">{profile.location}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
