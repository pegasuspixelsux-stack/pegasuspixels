"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import concesionaria1 from "../images/concesionaria-1.png";
import desarrolloPunta from "../images/desarrollo_slide_punta.png";
import puntaBallena from "../images/punta ballena_2.png";
import restaurantPunta from "../images/restaurant_punta_slide.png";
import Reveal from "./Reveal";

const slides = [
  {
    image: puntaBallena,
    alt: "Villa sobre los acantilados de Punta Ballena",
    text: "Aplicaciones empresariales diseñadas para publicar propiedades, gestionar prospectos y automatizar procesos clave de su inmobiliaria.",
    word: "Inmobiliarias",
  },
  {
    image: concesionaria1,
    alt: "Fachada de concesionaria Drive Auto Group con vehículos exhibidos",
    text: "Publique vehículos, gestione prospectos y ventas con herramientas que mejoran la eficiencia y convierten más oportunidades en clientes.",
    word: "Concesionarias",
  },
  {
    image: restaurantPunta,
    alt: "Restaurante frente al mar en Punta del Este al atardecer",
    text: "Digitalice su restaurante con herramientas para gestionar pedidos, clientes y operaciones desde un solo lugar.",
    word: "Restaurantes",
  },
  {
    image: desarrolloPunta,
    alt: "Torre de desarrollo inmobiliario frente a la playa en Punta del Este",
    text: "Soluciones diseñadas para facilitar la comercialización de proyectos, gestionar prospectos y mejorar la eficiencia del proceso de ventas.",
    word: "Desarrollos Inmobiliarios",
  },
];

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <Reveal direction="left" className="px-5 pt-[72px] pb-24">
      <div className="relative w-full overflow-hidden rounded-[16px] border border-white/10">
        <div className="relative h-[80vh] w-full overflow-hidden bg-white/[0.04] md:h-auto md:aspect-[21/9]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[image:repeating-linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.06)_10px,rgba(255,255,255,0.06)_20px)] text-sm font-medium text-[#9AA0AB]">
                  Imagen {i + 1}
                </div>
              )}
            </div>
          ))}

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),transparent_30%),linear-gradient(to_top,rgba(0,0,0,0.95),rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.2)_80%,transparent)] md:bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.2)_60%,transparent)]" />

          <div className="absolute inset-0 flex flex-col justify-end gap-8 p-6 md:flex-row md:items-end md:justify-between md:p-12">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
                Punta del Este
              </div>
              <h3 className="m-0 text-[30px] leading-[0.95] text-white md:text-[64px]">
                <span className="font-[family-name:var(--font-inter-display)] font-normal tracking-[-0.8px]">
                  Soluciones
                  <br />
                  Tecnológicas
                  <br />
                  Diseñadas para
                </span>
                <br />
                <em className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
                  {slides[active].word}
                </em>
              </h3>
            </div>

            <div className="flex max-w-sm flex-col gap-5 md:items-end md:text-right">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className="text-xl text-amber-400">
                      ★
                    </span>
                  ))}
                  <span className="text-xl text-white/30">★</span>
                </div>
                <span className="text-lg font-semibold text-white">4 / 5</span>
              </div>

              <p className="max-w-xs text-lg leading-relaxed text-white">
                {slides[active].text}
              </p>

              <a
                href="#assessment"
                className="group relative inline-flex items-center gap-2 px-1 text-lg font-medium text-white no-underline"
              >
                Ver Servicios
                <ArrowRightIcon />
                <span className="absolute bottom-0 left-0 h-px w-full bg-white/30" />
                <span className="absolute bottom-0 left-0 h-px w-full origin-left -translate-x-full bg-white transition-transform duration-700 ease-in-out group-hover:translate-x-0" />
              </a>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {slides.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`relative cursor-pointer overflow-hidden rounded-md border transition-all duration-300 ${
                      i === active
                        ? "h-16 w-24 border-white/60"
                        : "h-12 w-12 border-white/20 opacity-50 hover:opacity-80"
                    }`}
                  >
                    {slide.image ? (
                      <Image src={slide.image} alt={slide.alt} fill className="object-cover" />
                    ) : (
                      <div className="h-full w-full bg-[image:repeating-linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06)_6px,rgba(255,255,255,0.1)_6px,rgba(255,255,255,0.1)_12px)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
