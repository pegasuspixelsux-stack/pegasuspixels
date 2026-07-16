import Reveal from "./Reveal";

const images = [1, 2, 3, 4, 5, 6];

export default function GaleriaSection({
  bg = "#7A1F1F",
  text = "#FFFFFF",
  muted = "#9AA0AB",
}: {
  bg?: string;
  text?: string;
  muted?: string;
}) {
  return (
    <section style={{ backgroundColor: bg, color: text }} className="px-6 py-24 md:px-12">
      <Reveal direction="left" className="mx-auto max-w-[1200px] text-center">
        <h2 className="m-0 mb-5 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[34px]">
          Proyectos que hablan por sí solos.
        </h2>
        <p className="m-0 mx-auto mb-14 max-w-[560px] text-lg leading-[1.6]" style={{ color: muted }}>
          Un vistazo a los resultados que ayudamos a construir para negocios
          como el tuyo.
        </p>

        <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-3">
          {images.map((n) => (
            <div
              key={n}
              className="flex aspect-square w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] bg-[image:repeating-linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.06)_10px,rgba(255,255,255,0.06)_20px)] text-sm font-medium text-[#9AA0AB]"
            >
              Imagen
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
