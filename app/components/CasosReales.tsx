import Reveal from "./Reveal";

const caseCards = [
  {
    title: "Jim Coleman Honda — MD",
    desc: "Tenían inventario de usados sin mover. El problema no era el producto — era que los clientes no llegaban al vendedor a tiempo. Implementamos un sistema de alcance con carruseles en Facebook conectados directamente al equipo de ventas.",
    result: "Las ventas ese mes se dispararon.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <path
          d="M4 16v-3.5L6 8h12l2 4.5V16M4 16a1.5 1.5 0 0 0 3 0M4 16h3m10 0a1.5 1.5 0 0 0 3 0m-3 0h3M6 12h12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "A&M Towing",
    desc: "Liberar un auto requería gestionar documentos en persona, generando filas y carga operacional. Implementamos un sistema de carga y envío de documentos en línea previo al retiro.",
    result: "Menos tiempo de espera, menos carga para el equipo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <path
          d="M3 16V7h9v9M12 10h5l3 3v3M3 16a1.5 1.5 0 0 0 3 0M3 16h6.5m6.5 0a1.5 1.5 0 0 0 3 0M16 16h4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Pedidos directos sin intermediarios",
    desc: "Dependían de apps de delivery que se quedaban con su margen. Creamos un sitio renovado conectado directamente a su POS con pedidos online.",
    result: "Los clientes ven las ofertas, piden directo, y el restaurante recupera el control de sus ventas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <path
          d="M6 3v6a2 2 0 0 0 4 0V3M8 9v12M17 3c-1.7 0-3 2-3 4.5S15.3 12 17 12s3-2 3-4.5S18.7 3 17 3Zm0 9v9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function CasosReales({
  bg = "#000000",
  text = "#FFFFFF",
}: {
  bg?: string;
  text?: string;
}) {
  return (
    <section style={{ backgroundColor: bg, color: text }} className="px-6 py-24 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
        <Reveal direction="left">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
            04 · Casos Reales
          </div>
          <h2 className="m-0 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[34px]">
            Negocios que ya
            <br />
            dan ese paso.
          </h2>
        </Reveal>

        <Reveal direction="right" className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseCards.map((card, i) => (
            <div
              key={i}
              className="rounded-[18px] border border-white/10 bg-white/[0.04] bg-[image:radial-gradient(160px_160px_at_0%_0%,rgba(37,99,235,0.22),transparent_70%)] p-7 transition-transform hover:-translate-y-1 hover:border-white/20"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#2563EB]">
                {card.icon}
              </div>
              <h3 className="m-0 mb-2.5 text-[19px] font-semibold text-white">{card.title}</h3>
              <p className="m-0 text-[15px] leading-[1.55] text-[#9AA0AB]">{card.desc}</p>
              {card.result && (
                <>
                  <div className="my-5 h-px bg-white/10" />
                  <p className="m-0 text-[15px] font-semibold leading-[1.4] text-white">
                    {card.result}
                  </p>
                </>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
