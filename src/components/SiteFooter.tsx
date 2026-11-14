import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-zinc-200 bg-white">
      <div className="page-container py-8">
        <div className="flex flex-col justify-between gap-2 text-xs text-zinc-500 sm:flex-row">
          <p className="pl-14">
            © 2026 {profile.name} · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
