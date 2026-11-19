"use client";

import { useEffect, useRef } from "react";

interface TechPillListProps {
  items: string[];
}

export function TechPillList({ items }: TechPillListProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (
      !list ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    list.classList.add("tech-list-motion");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          list.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={listRef} className="mt-3 flex flex-wrap gap-2">
      {items.map((tech, index) => (
        <li
          key={tech}
          style={{ animationDelay: `${index * 30}ms` }}
          className="tech-pill rounded-lg border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs text-zinc-700"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
