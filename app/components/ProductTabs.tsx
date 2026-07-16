"use client";

import { useState } from "react";

import Reveal from "./Reveal";

type TabDef = {
  name: string;
  problem: string;
  solution: string;
  result: string;
};

const tabs: TabDef[] = [
  {
    name: "Dealio",
    problem: "Las consultas de los clientes se pierden en conversaciones de WhatsApp.",
    solution: "Un sitio web que convierte visitantes en clientes.",
    result: "Convertí las búsquedas de inventario en oportunidades de venta organizadas.",
  },
  {
    name: "Oikos",
    problem: "Los visitantes no encuentran rápido lo que necesitan.",
    solution: "Organizá las consultas y el seguimiento de tus clientes.",
    result: "Capturá y gestioná las consultas sobre propiedades.",
  },
  {
    name: "Restaurante",
    problem: "Tu sitio web ya no genera confianza.",
    solution: "Reducí el trabajo repetitivo y mejorá la eficiencia.",
    result: "Convertí los menús en pedidos directos de tus clientes.",
  },
];

function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5 border-b border-[#EEF0F3] px-3.5 py-2.5">
      <div className="h-[7px] w-[7px] rounded-full bg-[#E5E7EB]" />
      <div className="h-[7px] w-[7px] rounded-full bg-[#E5E7EB]" />
      <div className="h-[7px] w-[7px] rounded-full bg-[#E5E7EB]" />
    </div>
  );
}

function WebsiteCard() {
  return (
    <div className="flex-1 min-w-[220px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_16px_32px_-14px_rgba(15,15,20,0.14)]">
      <TrafficLights />
      <div className="flex flex-col gap-2 p-4">
        <div className="h-3 w-[60%] rounded bg-[#111827]" />
        <div className="h-[9px] w-[40%] rounded bg-[#D8DBE0]" />
        <div className="mt-1.5 h-[60px] rounded-lg bg-[repeating-linear-gradient(135deg,#F2F3F5,#F2F3F5_6px,#EAEBEE_6px,#EAEBEE_12px)]" />
        <div className="mt-1 h-[26px] w-[84px] rounded-[7px] bg-[#2563EB]" />
      </div>
    </div>
  );
}

function AnalyticsCard() {
  return (
    <div className="flex-1 min-w-[220px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_16px_32px_-14px_rgba(15,15,20,0.14)]">
      <div className="h-[9px] w-14 rounded bg-[#C6CAD2] px-4 pt-3.5" />
      <div className="flex h-16 items-end gap-1.5 px-4 pb-4 pt-2">
        <div className="h-[45%] flex-1 rounded-t-[3px] bg-[#DCE6FB]" />
        <div className="h-[70%] flex-1 rounded-t-[3px] bg-[#2563EB]" />
        <div className="h-[55%] flex-1 rounded-t-[3px] bg-[#B9CFF8]" />
        <div className="h-[80%] flex-1 rounded-t-[3px] bg-[#DCE6FB]" />
      </div>
    </div>
  );
}

function LeadsCard() {
  return (
    <div className="flex-1 min-w-[220px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_16px_32px_-14px_rgba(15,15,20,0.14)]">
      <div className="h-[9px] w-14 rounded bg-[#C6CAD2] px-4 pt-3.5" />
      <div className="flex flex-col gap-[7px] px-4 pb-4 pt-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="h-[18px] w-[18px] rounded-full bg-[#EAF1FF]" />
            <div className="h-[7px] flex-1 rounded-[3px] bg-[#EAEBEE]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductTabs({ text = "#FFFFFF" }: { text?: string }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div style={{ "--tt": text } as React.CSSProperties}>
      <div className="mb-11 flex gap-2 border-b border-white/10">
        {tabs.map((t, i) => (
          <button
            key={t.name}
            onClick={() => setActive(i)}
            className={`cursor-pointer px-5 py-3.5 text-base font-semibold transition-colors ${
              i === active
                ? "border-b-2 border-[#2563EB] text-[#2563EB]"
                : "border-b-2 border-transparent text-[#9AA0AB] hover:text-[var(--tt)]"
            }`}
            style={{ marginBottom: i === active ? "-1px" : undefined }}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-14">
        <Reveal direction="left" className="flex flex-1 min-w-[320px] flex-wrap gap-4.5 basis-[480px]">
          <WebsiteCard />
          <AnalyticsCard />
          <LeadsCard />
        </Reveal>

        <Reveal direction="right" className="flex flex-1 min-w-[280px] flex-col gap-5.5 basis-[320px]">
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.06em] text-[#2563EB]">
              Problema
            </div>
            <p className="m-0 text-[17px] leading-[1.5]" style={{ color: text }}>
              {tab.problem}
            </p>
          </div>
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.06em] text-[#2563EB]">
              Solución
            </div>
            <p className="m-0 text-[17px] leading-[1.5]" style={{ color: text }}>
              {tab.solution}
            </p>
          </div>
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.06em] text-[#2563EB]">
              Resultado del Negocio
            </div>
            <p className="m-0 text-[17px] leading-[1.5]" style={{ color: text }}>
              {tab.result}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
