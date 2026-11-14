"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLightBar = scrolled || mobileOpen;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        isLightBar
          ? "border-zinc-200/90 bg-white/90 text-black backdrop-blur-md"
          : "border-white/10 bg-black/50 text-white backdrop-blur-md"
      }`}
    >
      <div className="page-container flex h-16 items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span
            className={`inline-flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors ${
              isLightBar
                ? "bg-black text-white"
                : "bg-zinc-800 text-white ring-1 ring-white/20"
            }`}
          >
            {profile.initials}
          </span>
          <span>{profile.name}</span>
        </Link>

        {/* Primary right nav */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/contact"
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
              isLightBar
                ? "bg-black text-white hover:bg-zinc-900"
                : "bg-white text-black hover:bg-zinc-100"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className={`inline-flex md:hidden items-center justify-center rounded-lg p-2 text-xs font-medium ${
            isLightBar
              ? "text-zinc-700 hover:bg-zinc-100"
              : "text-zinc-200 hover:bg-white/10"
          }`}
        >
          {mobileOpen ? "Close ✕" : "Menu ☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white px-5 py-4 text-black md:hidden">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-black px-3.5 py-2 text-xs font-medium text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
