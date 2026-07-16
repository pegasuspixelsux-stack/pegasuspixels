"use client";

import { useEffect, useState } from "react";

export default function TechList({
  items,
  text = "#FFFFFF",
}: {
  items: string[];
  text?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, 1800);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-y-4 p-0">
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <li
            key={item}
            style={{ color: text }}
            className={`flex items-start gap-3 text-xl font-bold leading-[1.4] transition-all duration-500 ${
              isActive ? "opacity-100" : "opacity-35"
            }`}
          >
            <span
              className={`mt-2.5 h-2 w-2 shrink-0 rounded-full transition-colors duration-500 ${
                isActive ? "bg-[#2563EB]" : "bg-[#4B5563]"
              }`}
            />
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
