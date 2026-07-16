import Reveal from "./Reveal";

const boxes = [
  {
    title: "Presencia en el mercado local",
    desc: "Te asesoramos sobre cómo posicionarte en Punta del Este — qué comunica tu marca, cómo se percibe, y cómo llegar a los clientes correctos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="12" cy="12" rx="4" ry="9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Procesos para operar mejor",
    desc: "Implementamos los sistemas que tu operación local necesita para funcionar de forma ordenada y eficiente desde el primer día.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M19.4 13.5c.04-.33.06-.66.06-1s-.02-.67-.06-1l2.02-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.6 7.6 0 0 0-1.73-1l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.63.24-1.2.58-1.73 1l-2.39-.96a.5.5 0 0 0-.6.22L2.66 9.28a.5.5 0 0 0 .12.64L4.8 11.5c-.04.33-.06.66-.06 1s.02.67.06 1l-2.02 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.13.22.4.31.6.22l2.39-.96c.53.42 1.1.76 1.73 1l.36 2.54c.05.24.25.42.5.42h3.84c.25 0 .45-.18.5-.42l.36-2.54c.63-.24 1.2-.58 1.73-1l2.39.96c.22.09.47 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64L19.4 13.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function PuntaDelEste({
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#9AA0AB]">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" stroke="#2563EB" strokeWidth={2}>
              <path
                d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="9.5" r="2.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Punta del Este
          </div>

          <div className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
            06 · Para empresas internacionales
          </div>
          <h2 className="m-0 mb-6 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[34px]">
            ¿<span className="text-[#2563EB]">Tu negocio</span> opera
            <br />
            en Punta del Este?
          </h2>
          <p className="m-0 text-lg leading-[1.6]" style={{ color: muted }}>
            Asesoramos a empresas internacionales en cómo presentarse y operar
            en el mercado local. No manejamos tu negocio — te ayudamos a
            construir la presencia y los procesos para que funcione.
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
