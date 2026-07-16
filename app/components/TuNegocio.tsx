import Reveal from "./Reveal";

const boxes = [
  {
    title: "Soluciones que funcionan.",
    desc: "No vendemos tecnología genérica. Construimos soluciones específicas para tu realidad — y te acompañamos hasta que son parte de tu día a día.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <path
          d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.65 2.65a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12L14.7 6.3Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Resultados medibles.",
    desc: "Cada solución que implementamos tiene un objetivo claro. Medimos el impacto y ajustamos hasta que los resultados sean reales y sostenibles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <path d="M3 17 9 11l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TuNegocio({
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
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 md:grid-cols-2">
        <Reveal direction="left">
          <h2 className="m-0 mb-6 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[34px]">
            Vos conocés tu negocio.
            <br />
            Nosotros lo digitalizamos.
          </h2>
          <p className="m-0 text-lg leading-[1.6]" style={{ color: muted }}>
            Nos contás cómo operás y qué te está frenando. Nosotros
            construimos la solución que replica tu operación y resuelve
            exactamente esos problemas. Sin tecnicismos. Sin soluciones
            predefinidas.
          </p>
        </Reveal>

        <Reveal direction="right" className="flex flex-col gap-6">
          {boxes.map((box) => (
            <div
              key={box.title}
              className="rounded-[18px] border border-white/10 bg-white/[0.04] p-7 transition-transform hover:-translate-y-1 hover:border-white/20"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]">
                {box.icon}
              </div>
              <h3 className="m-0 mb-2.5 text-xl font-semibold text-white">{box.title}</h3>
              <p className="m-0 text-[15px] leading-[1.6] text-[#9AA0AB]">{box.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
