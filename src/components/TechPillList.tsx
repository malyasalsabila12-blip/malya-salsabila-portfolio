"use client";

import { useEffect, useRef } from "react";

interface TechPillListProps {
  groups: {
    label: string;
    items: string[];
  }[];
}

export function TechPillList({ groups }: TechPillListProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (
      !marquee ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    marquee.classList.add("tech-list-motion");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          marquee.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(marquee);
    return () => observer.disconnect();
  }, []);

  const renderGroups = (copy: string) =>
    groups.map((group) => (
      <li
        key={`${copy}-${group.label}`}
        className="tech-marquee-category"
      >
        <span className="tech-marquee-label">{group.label}</span>
        <ul className="tech-marquee-items" aria-label={`${group.label} technologies`}>
          {group.items.map((tech, index) => (
            <li
              key={`${copy}-${group.label}-${tech}`}
              style={{ animationDelay: `${index * 30}ms` }}
              className="tech-pill rounded-lg border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs text-zinc-700"
            >
              {tech}
            </li>
          ))}
        </ul>
      </li>
    ));

  return (
    <div ref={marqueeRef} className="tech-marquee mt-5 min-w-0">
      <div className="tech-marquee-track">
        <ul className="tech-marquee-group" aria-label="Technology and tooling">
          {renderGroups("primary")}
        </ul>
        <ul className="tech-marquee-group" aria-hidden="true">
          {renderGroups("duplicate")}
        </ul>
      </div>
    </div>
  );
}
