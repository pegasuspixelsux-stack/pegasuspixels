"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "left" | "right";

export default function Reveal({
  children,
  direction = "left",
  className = "",
}: {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenOffset = direction === "left" ? "-translate-x-16" : "translate-x-16";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-x-0 opacity-100" : `${hiddenOffset} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}
