import Reveal from "./Reveal";

const bentoBoxes = [
  { title: "Analizamos", desc: "Entendemos tu negocio, tus clientes y tus necesidades actuales." },
  { title: "Diseñamos", desc: "Creamos una solución enfocada en tus objetivos comerciales." },
  { title: "Implementamos", desc: "Desarrollamos e integramos tus herramientas digitales." },
  { title: "Evolucionamos", desc: "Continuamos mejorando tu tecnología a medida que tu negocio crece." },
];

export default function NuestroEnfoque({
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
            05 · Cómo Trabajamos
          </div>
          <h2 className="m-0 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[34px]">
            Desde la idea hasta la implementación.
          </h2>
        </Reveal>

        <Reveal direction="right" className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {bentoBoxes.map((box, i) => (
            <div
              key={i}
              className="rounded-[18px] border border-white/10 bg-white/[0.04] p-8 transition-transform hover:-translate-y-1 hover:border-white/20"
            >
              <div className="mb-5 text-5xl font-bold tracking-[-0.02em] text-[#2563EB]">
                {String(i + 1).padStart(2, "0")}
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
