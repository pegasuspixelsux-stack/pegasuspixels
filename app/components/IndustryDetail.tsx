import Reveal from "./Reveal";

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="#F87171" strokeWidth={2.2}>
      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="#34D399" strokeWidth={2.2}>
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="#2563EB" strokeWidth={2.2}>
      <path d="M3 17 9 11l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="white" strokeWidth={2.2}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconList({
  items,
  icon,
  iconBg,
  muted,
}: {
  items: string[];
  icon: React.ReactNode;
  iconBg: string;
  muted: string;
}) {
  return (
    <ul className="m-0 flex list-none flex-col gap-4 p-0">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${iconBg}`}
          >
            {icon}
          </span>
          <span className="text-[15px] leading-[1.55]" style={{ color: muted }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function IndustryDetail({
  category,
  intro,
  challenges,
  solutions,
  benefits,
  ctaLabel,
  showArrow = false,
  bg = "#7A1F1F",
  text = "#FFFFFF",
  muted = "#9AA0AB",
}: {
  category: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  ctaLabel: string;
  showArrow?: boolean;
  bg?: string;
  text?: string;
  muted?: string;
}) {
  return (
    <section style={{ backgroundColor: bg, color: text }} className="px-6 py-24 md:px-12">
      <Reveal direction="left" className="mx-auto max-w-[1200px]">
        <div className="mb-14 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
              {category}
            </div>
            <p className="m-0 max-w-[560px] text-lg leading-[1.6]" style={{ color: muted }}>
              {intro}
            </p>
          </div>
          <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] bg-[image:repeating-linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.06)_10px,rgba(255,255,255,0.06)_20px)] text-sm font-medium text-[#9AA0AB]">
            Imagen
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="m-0 mb-5 text-xl font-semibold">Desafíos Comunes</h3>
            <IconList items={challenges} icon={<MinusIcon />} iconBg="bg-red-500/10" muted={muted} />
          </div>
          <div>
            <h3 className="m-0 mb-5 text-xl font-semibold">Soluciones Aplicadas</h3>
            <IconList items={solutions} icon={<CheckIcon />} iconBg="bg-emerald-500/10" muted={muted} />
          </div>
          <div>
            <h3 className="m-0 mb-5 text-xl font-semibold">Beneficios Obtenidos</h3>
            <IconList items={benefits} icon={<TrendingUpIcon />} iconBg="bg-[#2563EB]/10" muted={muted} />
          </div>
        </div>

        <a
          href="#assessment"
          className="mt-14 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[17px] font-semibold text-white no-underline transition-colors hover:bg-[#1D4ED8]"
        >
          {ctaLabel}
          {showArrow && <ArrowRightIcon />}
        </a>
      </Reveal>
    </section>
  );
}
