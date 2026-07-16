"use client";

import { useEffect, useRef, useState } from "react";

import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Analizamos",
    desc: "Conocemos tu negocio, tus procesos y tus objetivos para identificar oportunidades de mejora.",
  },
  {
    number: "02",
    title: "Diseñamos",
    desc: "Definimos una solución tecnológica adaptada a las necesidades de tu empresa.",
  },
  {
    number: "03",
    title: "Implementamos",
    desc: "Desarrollamos e integramos las herramientas necesarias para poner la solución en funcionamiento.",
  },
  {
    number: "04",
    title: "Acompañamos",
    desc: "Brindamos soporte, mantenimiento y mejoras para que tu tecnología crezca junto con tu negocio.",
  },
];

function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = refs.current.findIndex((el) => el === entry.target);
          if (idx !== -1) setActive(idx);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col gap-16 md:gap-24">
      <div className="absolute top-2 bottom-2 left-[21px] w-px bg-white/10" aria-hidden="true" />
      {steps.map((step, i) => {
        const isActive = i === active;
        return (
          <div
            key={step.number}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`relative flex gap-6 transition-opacity duration-500 ${
              isActive ? "opacity-100" : "opacity-35"
            }`}
          >
            <div
              className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-colors duration-500 ${
                isActive
                  ? "border-[#2563EB] bg-[#2563EB] text-white"
                  : "border-white/10 bg-[#000000] text-[#9AA0AB]"
              }`}
            >
              {step.number}
            </div>
            <div>
              <h3
                className={`m-0 mb-2 text-xl font-semibold transition-colors duration-500 ${
                  isActive ? "text-white" : "text-[#9AA0AB]"
                }`}
              >
                {step.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-[#9AA0AB]">{step.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ComoTrabajamos({
  bg = "#000000",
  text = "#FFFFFF",
  muted = "#9AA0AB",
}: {
  bg?: string;
  text?: string;
  muted?: string;
}) {
  return (
    <section style={{ backgroundColor: bg, color: text }} className="px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 md:grid-cols-[45%_55%] md:items-start">
        <Reveal direction="left" className="md:sticky md:top-32 md:self-start">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
            03 · Nuestro Proceso
          </div>
          <h2 className="m-0 mb-6 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[34px]">
            Cómo Trabajamos
          </h2>
          <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
            Cada negocio tiene necesidades diferentes. Por eso no ofrecemos
            soluciones genéricas.
          </p>
          <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
            Nuestro proceso comienza entendiendo cómo funciona tu empresa,
            continúa con el diseño e implementación de la solución adecuada y
            evoluciona con soporte y mejoras continuas.
          </p>
          <p className="m-0 text-lg leading-[1.6]" style={{ color: muted }}>
            Trabajamos para que la tecnología sea una herramienta que impulse
            tu negocio, no una complicación más.
          </p>
        </Reveal>

        <Reveal direction="right">
          <ProcessTimeline />
        </Reveal>
      </div>
    </section>
  );
}
