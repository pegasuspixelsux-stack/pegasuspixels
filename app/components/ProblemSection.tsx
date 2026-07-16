import Reveal from "./Reveal";
import TechList from "./TechList";

const techList = [
  "Un sitio web profesional que represente tu marca.",
  "Una presencia sólida en redes sociales.",
  "Buscadores para que los clientes te encuentren.",
  "Una aplicación de negocio para gestionar las operaciones diarias.",
  "Software de contabilidad para mantener tus finanzas organizadas.",
  "Control de horarios y asistencia de empleados.",
  "Herramientas de comunicación con clientes como WhatsApp y correo electrónico.",
  "Formularios en línea, reservas, turnos o comercio electrónico.",
  "Plataformas de marketing y publicidad.",
  "Analítica para medir qué está funcionando.",
];

export default function ProblemSection({
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
            <h2 className="m-0 mb-8 text-[28px] font-bold tracking-[-0.01em] md:text-[34px]">
              Pegasus Pixels — <span className="text-[#2563EB]">Tu Socio Tecnológico</span>
            </h2>

            <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
              Los negocios evolucionaron, y la tecnología está hoy en el centro
              de casi todo lo que hacen.
            </p>

            <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
              Te guste o no, ya no llevás un negocio como se hacía en los años
              80. Hoy, tu éxito depende de un ecosistema creciente de
              herramientas digitales.
            </p>

            <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
              El desafío no es tener tecnología, sino lograr que todos estos
              sistemas funcionen juntos.
            </p>

            <p className="m-0 mb-6 text-lg leading-[1.6]">
              Ahí es donde entra Pegasus Pixels.
            </p>

            <p className="m-0 text-lg leading-[1.6]" style={{ color: muted }}>
              Ayudamos a las pequeñas empresas a elegir, construir, conectar y
              gestionar la tecnología que necesitan para operar de forma más
              eficiente, atender mejor a sus clientes y crecer con confianza.
            </p>
          </Reveal>

          <Reveal direction="right">
            <p className="m-0 mb-5 text-lg leading-[1.6]">
              Tu negocio puede depender de:
            </p>

            <TechList items={techList} text={text} />
          </Reveal>
        </div>

        <div className="mt-14">
          <p className="m-0 border-t border-white/10 pt-8 text-xl font-semibold tracking-[-0.01em]">
            Pegasus Pixels. <span className="text-[#2563EB]">Tu Socio Tecnológico.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
