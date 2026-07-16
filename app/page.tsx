import autotrader from "./images/autotrader.png";
import CasosReales from "./components/CasosReales";
import ComoTrabajamos from "./components/ComoTrabajamos";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import LaSolucion from "./components/LaSolucion";
import PorQuePegasusPixels from "./components/PorQuePegasusPixels";
import PrimeraImpresion from "./components/PrimeraImpresion";
import PuntaDelEste from "./components/PuntaDelEste";
import Reveal from "./components/Reveal";

const footerNav = ["Características", "Soluciones", "Precios"];

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[#000000] font-sans text-white antialiased">
      <Hero />

      <PrimeraImpresion image={autotrader} />

      <LaSolucion />

      <ComoTrabajamos />

      <CasosReales />

      <PorQuePegasusPixels />

      <PuntaDelEste />

      <FAQSection />

      {/* SECTION 7 — CTA */}
      <section id="assessment" className="bg-[#000000] px-6 py-[120px] text-center md:px-12">
        <Reveal direction="right" className="mx-auto max-w-[640px]">
          <h2 className="m-0 mb-5.5 text-[32px] font-bold tracking-[-0.01em] text-white md:text-[38px]">
            Analicemos tu presencia digital.
          </h2>
          <p className="m-0 mb-10 text-lg leading-[1.6] text-[#9AA0AB]">
            Descubrí en qué está perdiendo oportunidades tu negocio y recibí
            recomendaciones prácticas para mejorar tu desempeño en línea.
          </p>
          <div className="flex justify-center">
            <a href="#assessment" className="button no-underline">
              Agendá tu Consulta
              <svg viewBox="0 0 24 24" fill="none" className="icon" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#141E33] px-6 py-14 md:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6">
          <div className="text-lg font-bold tracking-[-0.01em] text-white">Pegasus Pixels</div>
          <nav className="flex flex-wrap gap-7">
            {footerNav.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[15px] text-[#9AA0AB] no-underline transition-colors hover:text-[#2563EB]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-5 text-sm text-[#9AA0AB]">
            <a
              href="mailto:hello@pegasuspixels.com"
              className="text-[#9AA0AB] no-underline transition-colors hover:text-[#2563EB]"
            >
              hello@pegasuspixels.com
            </a>
            <a href="#" className="text-[#9AA0AB] no-underline transition-colors hover:text-[#2563EB]">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1200px] text-[13px] text-[#6B7280]">
          © 2026 Pegasus Pixels. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
