import Reveal from "./Reveal";
import TechList from "./TechList";

const combinamos = ["Estrategia", "Diseño", "Desarrollo", "Automatización", "Soporte continuo"];

export default function PorQuePegasusPixels({
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
      <div className="mx-auto max-w-[1260px]">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
          <Reveal direction="left">
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
              05 · Por qué Pegasus Pixels
            </div>
            <h2 className="m-0 mb-6 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[34px]">
              Más que una empresa de páginas web, tu socio tecnológico
            </h2>
            <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
              No solo diseñamos sitios web.
            </p>
            <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
              Ayudamos a las empresas a utilizar la tecnología para atraer
              clientes, organizar sus operaciones y trabajar de forma más
              eficiente.
            </p>
            <p className="m-0 text-lg leading-[1.6]" style={{ color: muted }}>
              Creamos soluciones que combinan presencia digital, aplicaciones
              empresariales y automatización para que todo funcione como un
              solo sistema.
            </p>
          </Reveal>

          <Reveal direction="right">
            <p className="m-0 mb-5 text-lg leading-[1.6]">Combinamos:</p>
            <TechList items={combinamos} text={text} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
