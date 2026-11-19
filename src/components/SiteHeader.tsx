"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLightBar = scrolled;

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
          className="group inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <Image
            src="/images/profile-photo.png"
            alt=""
            width={28}
            height={28}
            className={`h-7 w-7 rounded-lg object-cover object-[center_30%] ring-1 ${
              isLightBar ? "ring-zinc-200" : "ring-white/20"
            }`}
          />
          <span>{profile.name}</span>
        </Link>

        {/* Primary right nav */}
        <div className="flex items-center gap-2">
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
      </div>
    </header>
  );
}
