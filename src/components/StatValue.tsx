"use client";

import { useEffect, useRef, useState } from "react";

interface StatValueProps {
  value: string;
}

export function StatValue({ value }: StatValueProps) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const numericValue = /^(\d+(?:\.\d+)?)(.*)$/.exec(value);
  const target = numericValue ? Number(numericValue[1]) : null;
  const suffix = numericValue?.[2] ?? "";
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const element = valueRef.current;
    if (target === null || !element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        setDisplayValue(`0${suffix}`);

        const updateValue = (now: number) => {
          const progress = Math.min((now - start) / 750, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(`${Math.round(target * easedProgress)}${suffix}`);

          if (progress < 1) {
            frame = requestAnimationFrame(updateValue);
          } else {
            setDisplayValue(value);
          }
        };

        frame = requestAnimationFrame(updateValue);
      },
      { threshold: 0.6 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [suffix, target, value]);

  return (
    <>
      <span ref={valueRef} aria-hidden="true">
        {displayValue}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
