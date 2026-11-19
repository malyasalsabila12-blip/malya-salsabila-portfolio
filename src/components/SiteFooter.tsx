import { profile } from "@/data/profile";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-zinc-200 bg-white">
      <div className="page-container py-8">
        <div className="flex flex-col justify-between gap-4 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>
            © 2026 {profile.name} · {profile.location}
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 font-medium">
              <li>
                <Link className="transition hover:text-black" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  className="transition hover:text-black"
                  href={`mailto:${profile.email}`}
                >
                  Email
                </a>
              </li>
              {profile.githubUrl && (
                <li>
                  <a
                    className="transition hover:text-black"
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              )}
              {profile.linkedinUrl && (
                <li>
                  <a
                    className="transition hover:text-black"
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
