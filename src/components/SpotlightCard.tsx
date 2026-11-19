"use client";

import { type PointerEvent, type ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - bounds.top}px`,
    );
  }

  return (
    <article className={className} onPointerMove={handlePointerMove}>
      {children}
    </article>
  );
}
