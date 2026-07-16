import Reveal from "./Reveal";

const caseCards = [
  {
    title: "Jim Coleman Honda — MD",
    desc: "Tenían inventario de usados sin mover. El problema no era el producto — era que los clientes no llegaban al vendedor a tiempo. Implementamos un sistema de alcance con carruseles en Facebook conectados directamente al equipo de ventas.",
    result: "Las ventas ese mes se dispararon.",
  },
  {
    title: "Mark Johnson — A&M Towing",
    desc: "Liberar un auto requería gestionar documentos en persona, generando filas y carga operacional. Implementamos un sistema de carga y envío de documentos en línea previo al retiro.",
    result: "Menos tiempo de espera, menos carga para el equipo.",
  },
  {
    title: "Pedidos directos sin intermediarios",
    desc: "Dependían de apps de delivery que se quedaban con su margen. Creamos un sitio renovado conectado directamente a su POS con pedidos online.",
    result: "Los clientes ven las ofertas, piden directo, y el restaurante recupera el control de sus ventas.",
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
              <div className="mb-5 h-10 w-10 rounded-[10px] bg-[#2563EB]" />
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
