import Reveal from "./Reveal";

const pilares = [
  {
    title: "Presencia Digital",
    desc: "Creamos sitios web y plataformas modernas que generan confianza y convierten visitantes en clientes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 9h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 21h8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Gestión del Cliente",
    desc: "Organizamos consultas, oportunidades y comunicaciones para que ningún cliente quede sin seguimiento.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <path d="M4 5h16v11H8l-4 4V5Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9h8M8 12h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Automatización",
    desc: "Reducimos tareas manuales y optimizamos procesos para ahorrar tiempo y mejorar respuestas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <path
          d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Sistemas Empresariales",
    desc: "Desarrollamos herramientas digitales adaptadas a las necesidades de cada negocio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <rect x="4" y="4" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function LaSolucion({
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
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 md:grid-cols-2">
        <Reveal direction="left">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
            02 · La Solución
          </div>
          <h2 className="m-0 mb-6 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[34px]">
            Creamos experiencias digitales que conectan empresas con sus
            clientes.
          </h2>
          <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
            Las expectativas de los clientes han cambiado.
          </p>
          <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
            Hoy esperan encontrar información clara, respuestas rápidas y una
            experiencia simple desde el primer contacto.
          </p>
          <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
            Pegasus Pixels ayuda a las empresas a adaptarse creando
            soluciones digitales que mejoran la forma en que atraen,
            gestionan y atienden a sus clientes.
          </p>
          <p className="m-0 text-lg leading-[1.6]" style={{ color: muted }}>
            Combinamos diseño, tecnología y automatización para crear
            sistemas que trabajan para tu negocio.
          </p>
        </Reveal>

        <Reveal direction="right" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pilares.map((pilar) => (
            <div
              key={pilar.title}
              className="rounded-[18px] border border-white/10 bg-white/[0.04] p-7 transition-transform hover:-translate-y-1 hover:border-white/20"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]">
                {pilar.icon}
              </div>
              <h3 className="m-0 mb-2.5 text-xl font-semibold text-white">{pilar.title}</h3>
              <p className="m-0 text-[15px] leading-[1.6]" style={{ color: muted }}>
                {pilar.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
