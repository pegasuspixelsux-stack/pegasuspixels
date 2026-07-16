import AutomotorasSection from "../components/AutomotorasSection";
import CasosReales from "../components/CasosReales";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import GaleriaSection from "../components/GaleriaSection";
import NuestroEnfoque from "../components/NuestroEnfoque";
import OpportunitiesSection from "../components/OpportunitiesSection";
import PrimeraImpresion from "../components/PrimeraImpresion";
import ProblemSection from "../components/ProblemSection";
import ProductTabs from "../components/ProductTabs";
import PuntaDelEste from "../components/PuntaDelEste";
import Reveal from "../components/Reveal";
import TuNegocio from "../components/TuNegocio";

const featureCards = [
  { title: "Presencia Digital", desc: "Un sitio web que convierte visitantes en clientes." },
  { title: "Gestión de Clientes Potenciales", desc: "Organizá las consultas y el seguimiento de tus clientes." },
  { title: "Automatización de Negocios", desc: "Reducí el trabajo repetitivo y mejorá la eficiencia." },
];

const industryCards = [
  { title: "Concesionarias", desc: "Convertí las búsquedas de inventario en oportunidades de venta organizadas." },
  { title: "Inmobiliarias", desc: "Capturá y gestioná las consultas sobre propiedades." },
  { title: "Restaurantes", desc: "Convertí los menús en pedidos directos de tus clientes." },
];

const pricingTiers = [
  {
    name: "Básico",
    features: ["Sitio Web Profesional", "Hosting"],
    price: "$100",
    period: "/mes",
  },
  {
    name: "Lanzamiento Digital",
    features: ["Sitio Web Profesional", "Hosting", "Mantenimiento", "Analítica", "Soporte"],
    price: "$400",
    priceSuffix: "de Configuración",
    period: "+$200/mes",
  },
  {
    name: "Personalizado",
    features: ["Adaptado a tu negocio"],
    price: "A definir",
  },
];

export default function DealiOSPage() {
  return (
    <div className="w-full overflow-x-hidden bg-[#FF0000] font-sans text-white antialiased">
      {/* SECTION 1 — HERO */}
      <section className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-16 px-6 pb-24 pt-24 md:px-12 md:pt-[120px] md:pb-[100px]">
        <Reveal direction="left" className="min-w-[320px] flex-1 basis-[460px]">
          <h1 className="m-0 mb-4 text-[38px] font-bold leading-[1.12] tracking-[-0.02em] text-white md:text-[52px]">
            DealiOS
            <br />
            <span className="text-[22px] font-semibold text-[#9AA0AB] md:text-[28px]">
              Vehicle Inventory &amp; Lead Management Platform
            </span>
          </h1>
          <p className="m-0 mb-7 text-sm font-semibold uppercase tracking-[0.06em] text-[#2563EB]">
            Diseño Web • Desarrollo de Aplicaciones • Soluciones Digitales •
            Asesoramiento y Soporte Tecnológico
          </p>
          <p className="m-0 mb-9 max-w-[480px] text-lg leading-[1.6] text-[#9AA0AB]">
            Diseñamos sitios web modernos, sistemas de gestión de clientes y
            automatización de negocios que ayudan a las empresas a atraer,
            organizar y convertir más clientes.
          </p>
          <a
            href="#assessment"
            className="inline-block rounded-xl bg-[#2563EB] px-7 py-4 text-[17px] font-semibold text-white no-underline shadow-[0_8px_20px_-6px_rgba(37,99,235,0.45)] transition-all hover:bg-[#1D4ED8] hover:shadow-[0_10px_24px_-6px_rgba(37,99,235,0.55)]"
          >
            Obtené tu Evaluación Digital Gratuita
          </a>
          <p className="m-0 mt-4.5 text-sm leading-[1.5] text-[#8A8F99]">
            Sin compromiso.
            <br />
            Recomendaciones personalizadas.
          </p>
        </Reveal>

        <Reveal direction="right" className="relative h-[460px] min-w-[340px] flex-1 basis-[520px]">
          {/* Desktop website mockup */}
          <div className="absolute left-0 top-0 w-[86%] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-1.5 border-b border-[#EEF0F3] px-4 py-3">
              <div className="h-[9px] w-[9px] rounded-full bg-[#E5E7EB]" />
              <div className="h-[9px] w-[9px] rounded-full bg-[#E5E7EB]" />
              <div className="h-[9px] w-[9px] rounded-full bg-[#E5E7EB]" />
            </div>
            <div className="flex flex-col gap-3 px-6 pb-[26px] pt-[22px]">
              <div className="h-2.5 w-24 rounded bg-[#2563EB]" />
              <div className="h-4 w-[70%] rounded bg-[#111827]" />
              <div className="h-4 w-[45%] rounded bg-[#111827]" />
              <div className="mt-1.5 h-[9px] w-[55%] rounded bg-[#D8DBE0]" />
              <div className="mt-3 flex gap-2.5">
                <div className="h-[34px] w-[118px] rounded-lg bg-[#2563EB]" />
                <div className="h-[34px] w-24 rounded-lg bg-[#F2F3F5]" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                <div className="h-16 rounded-[10px] bg-[repeating-linear-gradient(135deg,#F2F3F5,#F2F3F5_6px,#EAEBEE_6px,#EAEBEE_12px)]" />
                <div className="h-16 rounded-[10px] bg-[repeating-linear-gradient(135deg,#F2F3F5,#F2F3F5_6px,#EAEBEE_6px,#EAEBEE_12px)]" />
                <div className="h-16 rounded-[10px] bg-[repeating-linear-gradient(135deg,#F2F3F5,#F2F3F5_6px,#EAEBEE_6px,#EAEBEE_12px)]" />
              </div>
            </div>
          </div>

          {/* Analytics dashboard mockup */}
          <div className="absolute right-0 top-[190px] w-[62%] animate-[floatSlow_7s_ease-in-out_infinite] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_24px_48px_-16px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between px-4.5 pb-2 pt-4">
              <div className="h-[9px] w-[70px] rounded bg-[#C6CAD2]" />
              <div className="h-[18px] w-[30px] rounded-md bg-[#EAF1FF]" />
            </div>
            <div className="flex h-[90px] items-end gap-2 px-4.5 pb-5 pt-1.5">
              <div className="h-[40%] flex-1 rounded-t bg-[#DCE6FB]" />
              <div className="h-[65%] flex-1 rounded-t bg-[#B9CFF8]" />
              <div className="h-[50%] flex-1 rounded-t bg-[#DCE6FB]" />
              <div className="h-[85%] flex-1 rounded-t bg-[#2563EB]" />
              <div className="h-[60%] flex-1 rounded-t bg-[#B9CFF8]" />
              <div className="h-[72%] flex-1 rounded-t bg-[#DCE6FB]" />
            </div>
          </div>

          {/* Lead management dashboard mockup */}
          <div className="absolute bottom-0 left-[6%] w-[48%] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_20px_40px_-14px_rgba(0,0,0,0.5)]">
            <div className="h-[9px] w-[60px] rounded border-b border-[#EEF0F3] bg-[#C6CAD2] px-4 py-3.5" />
            <div className="flex flex-col gap-2 px-4 pb-4 pt-3">
              <div className="flex items-center gap-2">
                <div className="h-[22px] w-[22px] rounded-full bg-[#EAF1FF]" />
                <div className="h-2 flex-1 rounded bg-[#EAEBEE]" />
                <div className="h-[14px] w-[30px] rounded bg-[#DCFCE7]" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-[22px] w-[22px] rounded-full bg-[#EAF1FF]" />
                <div className="h-2 flex-1 rounded bg-[#EAEBEE]" />
                <div className="h-[14px] w-[30px] rounded bg-[#FEF3C7]" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-[22px] w-[22px] rounded-full bg-[#EAF1FF]" />
                <div className="h-2 flex-1 rounded bg-[#EAEBEE]" />
                <div className="h-[14px] w-[30px] rounded bg-[#DCFCE7]" />
              </div>
            </div>
          </div>

          {/* Mobile website mockup */}
          <div className="absolute bottom-[-18px] right-[4%] h-[220px] w-[108px] rounded-[22px] border border-white/10 bg-[#FF0000] p-2 shadow-[0_20px_40px_-14px_rgba(0,0,0,0.5)]">
            <div className="flex h-full w-full flex-col gap-2 rounded-2xl bg-white px-2.5 py-3.5">
              <div className="mx-auto mb-1 h-1.5 w-8 rounded-[3px] bg-[#2563EB]" />
              <div className="h-2 w-[80%] rounded-[3px] bg-[#111827]" />
              <div className="h-2 w-[60%] rounded-[3px] bg-[#111827]" />
              <div className="mt-1.5 h-10 w-full rounded-lg bg-[#F2F3F5]" />
              <div className="mt-auto h-[22px] w-full rounded-md bg-[#2563EB]" />
            </div>
          </div>
        </Reveal>
      </section>

      <AutomotorasSection bg="transparent" />

      <GaleriaSection bg="transparent" />

      <PrimeraImpresion bg="#FF0000" />

      <Reveal direction="left">
        <OpportunitiesSection bg="#FF0000" />
      </Reveal>

      <ProblemSection bg="#FF0000" />

      <CasosReales bg="#FF0000" />

      <NuestroEnfoque bg="#FF0000" />

      <PuntaDelEste bg="#FF0000" />

      <TuNegocio bg="#FF0000" />

      {/* SECTION 3 — FEATURES */}
      <section className="bg-[#FF0000] px-6 py-24 md:px-12">
        <Reveal direction="right" className="mx-auto max-w-[1200px]">
          <h2 className="m-0 mb-12 max-w-[640px] text-[28px] font-bold tracking-[-0.01em] text-white md:text-[34px]">
            Todo lo que tu negocio necesita para crecer en línea.
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-10 transition-transform hover:-translate-y-1 hover:border-white/20"
              >
                <div className="mb-5.5 h-11 w-11 rounded-xl bg-[#2563EB]" />
                <h3 className="m-0 mb-2.5 text-xl font-semibold text-white md:text-[21px]">{card.title}</h3>
                <p className="m-0 text-[15px] leading-[1.6] text-[#9AA0AB]">{card.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SECTION 4 — INDUSTRIES */}
      <section className="bg-[#FF0000] px-6 py-24 md:px-12">
        <Reveal direction="left" className="mx-auto max-w-[1200px]">
          <h2 className="m-0 mb-12 text-[28px] font-bold tracking-[-0.01em] text-white md:text-[34px]">
            Soluciones Para Tu Industria
          </h2>
          <div className="flex flex-col gap-4.5">
            {industryCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-wrap items-center gap-7 rounded-[18px] border border-white/10 bg-white/[0.04] px-7 py-7 transition-colors hover:border-white/20 md:px-9"
              >
                <div className="min-w-[200px] text-xl font-semibold text-white">{card.title}</div>
                <div className="hidden self-stretch bg-white/10 md:block md:w-px" />
                <p className="m-0 min-w-[260px] flex-1 text-base leading-[1.5] text-[#9AA0AB]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SECTION 5 — PRODUCT TABS */}
      <section className="bg-[#FF0000] px-6 py-24 md:px-12">
        <Reveal direction="right" className="mx-auto max-w-[1200px]">
          <h2 className="m-0 mb-10 text-[28px] font-bold tracking-[-0.01em] text-white md:text-[34px]">
            Mirá Cómo Funcionan Nuestros Sistemas
          </h2>
          <ProductTabs />
        </Reveal>
      </section>

      {/* SECTION 6 — PRICING */}
      <section className="bg-[#FF0000] px-6 py-24 md:px-12">
        <Reveal direction="left" className="mx-auto max-w-[1100px] text-center">
          <h2 className="m-0 mb-11 text-[28px] font-bold tracking-[-0.01em] text-white md:text-[34px]">
            Paquete de Lanzamiento Digital
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col rounded-[20px] border border-white/10 bg-white/[0.04] p-9 text-left transition-colors hover:border-white/20"
              >
                <h3 className="m-0 mb-6 text-xl font-semibold tracking-[-0.01em] text-white">{tier.name}</h3>
                <div className="mb-7 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-[16px] text-white">
                      <span className="font-bold text-[#2563EB]">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto border-t border-white/10 pt-7">
                  {tier.price !== "A definir" && (
                    <div className="mb-1.5 text-sm text-[#9AA0AB]">Desde</div>
                  )}
                  <div className="mb-1 text-[32px] font-bold tracking-[-0.01em] text-white">
                    {tier.price}
                    {tier.priceSuffix && (
                      <span className="text-lg font-medium text-[#9AA0AB]"> {tier.priceSuffix}</span>
                    )}
                  </div>
                  {tier.period && (
                    <div className="mb-7 text-base text-[#9AA0AB]">{tier.period}</div>
                  )}
                  {!tier.period && <div className="mb-7" />}
                  <a
                    href="#assessment"
                    className="block w-full rounded-xl bg-[#2563EB] py-4 text-[17px] font-semibold text-white no-underline transition-colors hover:bg-[#1D4ED8]"
                  >
                    Agendá tu Evaluación
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <FAQSection bg="#FF0000" />

      {/* SECTION 7 — CTA */}
      <section id="assessment" className="bg-[#FF0000] px-6 py-[120px] text-center md:px-12">
        <Reveal direction="right" className="mx-auto max-w-[640px]">
          <h2 className="m-0 mb-5.5 text-[32px] font-bold tracking-[-0.01em] text-white md:text-[38px]">
            Analicemos tu presencia digital.
          </h2>
          <p className="m-0 mb-10 text-lg leading-[1.6] text-[#9AA0AB]">
            Descubrí en qué está perdiendo oportunidades tu negocio y recibí
            recomendaciones prácticas para mejorar tu desempeño en línea.
          </p>
          <a
            href="#assessment"
            className="inline-block rounded-xl bg-[#2563EB] px-9 py-[18px] text-lg font-semibold text-white no-underline shadow-[0_12px_28px_-8px_rgba(37,99,235,0.5)] transition-colors hover:bg-[#1D4ED8]"
          >
            Iniciá tu Evaluación Digital Gratuita
          </a>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
