import Image, { type StaticImageData } from "next/image";

import Reveal from "./Reveal";

export default function PrimeraImpresion({
  bg = "#000000",
  text = "#FFFFFF",
  muted = "#9AA0AB",
  image,
}: {
  bg?: string;
  text?: string;
  muted?: string;
  image?: StaticImageData;
}) {
  return (
    <section style={{ backgroundColor: bg, color: text }} className="px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 md:grid-cols-2">
        <Reveal direction="left">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
            01 · El Problema
          </div>
          <h2 className="m-0 mb-6 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[34px]">
            Tus clientes te eligen antes de visitar tu negocio.
          </h2>
          <p className="m-0 mb-6 text-lg leading-[1.6]" style={{ color: muted }}>
            Hoy, la primera interacción con tu negocio ocurre en la pantalla
            de un celular.
          </p>
          <p className="m-0 mb-5 text-lg leading-[1.6]" style={{ color: muted }}>
            Antes de llamar, visitar o comprar, los clientes ya están
            decidiendo:
          </p>
          <ul className="m-0 mb-6 flex list-none flex-col gap-3 p-0">
            {[
              "¿Este negocio parece confiable?",
              "¿Puedo encontrar la información que necesito?",
              "¿Van a responder rápido?",
              "¿Es la empresa correcta para mí?",
            ].map((question) => (
              <li
                key={question}
                className="flex items-start gap-3 text-lg leading-[1.5]"
                style={{ color: muted }}
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                <span>{question}</span>
              </li>
            ))}
          </ul>
          <p className="m-0 mb-8 text-lg leading-[1.6]" style={{ color: muted }}>
            Un sitio web lento, información desactualizada, mala comunicación
            o un proceso desconectado te pueden costar clientes.
          </p>
          <p className="m-0 text-lg font-semibold leading-[1.5]">
            Porque si no estás listo para atenderlos, alguien más lo va a
            estar.
          </p>
        </Reveal>

        <Reveal direction="right">
          {image ? (
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10">
              <Image src={image} alt="" fill className="object-cover" />
            </div>
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] bg-[image:repeating-linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.06)_10px,rgba(255,255,255,0.06)_20px)] text-sm font-medium text-[#9AA0AB]">
              Imagen
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
