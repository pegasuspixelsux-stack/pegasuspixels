"use client";

import { useState } from "react";

import Reveal from "./Reveal";

const faqs = [
  {
    question: "¿Cuánto tiempo toma tener mi sitio web listo?",
    answer:
      "El tiempo varía según el proyecto, pero la mayoría de los sitios están listos en pocas semanas desde la evaluación inicial.",
  },
  {
    question: "¿Qué incluye el mantenimiento mensual?",
    answer:
      "Incluye hosting, actualizaciones, soporte técnico y ajustes menores para que tu sitio siga funcionando sin problemas.",
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer:
      "Sí, no hay contratos de permanencia forzosa. Podés cancelar el servicio mensual cuando lo necesites.",
  },
  {
    question: "¿Trabajan con negocios fuera de Uruguay?",
    answer:
      "Sí, trabajamos con negocios en toda la región de forma remota, sin importar dónde estés ubicado.",
  },
  {
    question: "¿Qué pasa después de la evaluación gratuita?",
    answer:
      "Te compartimos recomendaciones concretas para tu presencia digital y, si querés avanzar, armamos un plan a medida para tu negocio.",
  },
];

export default function FAQSection({
  bg = "#000000",
  text = "#FFFFFF",
  muted = "#9AA0AB",
}: {
  bg?: string;
  text?: string;
  muted?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: bg, color: text }} className="px-6 py-24 md:px-12">
      <Reveal direction="left" className="mx-auto max-w-[800px]">
        <div className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
          07 · Preguntas Frecuentes
        </div>
        <h2 className="m-0 mb-10 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[34px]">
          Preguntas Frecuentes
        </h2>

        <div className="flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = i === openIndex;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span
                    className={`shrink-0 text-2xl font-light text-[#2563EB] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 max-w-[640px] text-base leading-[1.6]" style={{ color: muted }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
