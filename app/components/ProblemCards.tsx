"use client";

import { useEffect, useState } from "react";

type Card = { title: string; desc: string };

export default function ProblemCards({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % cards.length);
    }, 2000);
    return () => clearInterval(id);
  }, [cards.length]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
      {cards.map((card, i) => {
        const isActive = i === active;
        return (
          <div
            key={card.title}
            className={`rounded-[18px] border bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_55%)] p-7 transition-colors duration-500 ${
              isActive
                ? "border-white bg-white"
                : "border-white/10 bg-white/4"
            }`}
          >
            <div className="mb-5 h-10 w-10 rounded-[10px] bg-[#2563EB]" />
            <h3
              className={`m-0 mb-2.5 text-[19px] font-semibold transition-colors duration-500 ${
                isActive ? "text-[#0B0B0F]" : "text-white"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`m-0 text-[15px] leading-[1.55] transition-colors duration-500 ${
                isActive ? "text-[#5B5F6A]" : "text-[#9AA0AB]"
              }`}
            >
              {card.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
