import Reveal from "../components/Reveal";

const contactMethods = [
  {
    title: "Email",
    desc: "Escribinos y te respondemos en menos de 24 horas.",
    action: "hello@pegasuspixels.com",
    href: "mailto:hello@pegasuspixels.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    desc: "Contanos qué necesitás y coordinamos por chat.",
    action: "Enviar mensaje",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <path
          d="M4 20l1.4-4.2A8 8 0 1 1 9 18.5L4 20Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.5 9.5c0 3.5 2.5 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Evaluación Digital",
    desc: "Agendá una consulta gratuita sobre tu presencia digital.",
    action: "Agendá tu Consulta",
    href: "/#assessment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="white" strokeWidth={1.8}>
        <rect x="3" y="5" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const footerNav = ["Características", "Soluciones", "Precios"];

export default function ContactoPage() {
  return (
    <div className="w-full overflow-x-hidden bg-[#000000] font-sans text-white antialiased">
      <section className="px-6 pt-[140px] pb-24 md:px-12 md:pt-[180px]">
        <Reveal direction="left" className="mx-auto max-w-[800px] text-center">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
            Contacto
          </div>
          <h1 className="m-0 mb-6 text-[32px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[44px]">
            Hablemos de tu negocio.
          </h1>
          <p className="m-0 text-lg leading-[1.6] text-[#9AA0AB]">
            Contanos qué necesitás y te ayudamos a definir la mejor solución
            digital para tu empresa. Respondemos rápido — por WhatsApp, email
            o agendando una consulta.
          </p>
        </Reveal>

        <Reveal
          direction="right"
          className="mx-auto mt-16 grid max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-3"
        >
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="flex flex-col rounded-[18px] border border-white/10 bg-white/[0.04] p-7 no-underline transition-transform hover:-translate-y-1 hover:border-white/20"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]">
                {method.icon}
              </div>
              <h3 className="m-0 mb-2.5 text-xl font-semibold text-white">{method.title}</h3>
              <p className="m-0 mb-5 text-[15px] leading-[1.6] text-[#9AA0AB]">{method.desc}</p>
              <span className="mt-auto text-[15px] font-semibold text-[#2563EB]">
                {method.action} →
              </span>
            </a>
          ))}
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#141E33] px-6 py-14 md:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6">
          <div className="text-lg font-bold tracking-[-0.01em] text-white">Pegasus Pixels</div>
          <nav className="flex flex-wrap gap-7">
            {footerNav.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[15px] text-[#9AA0AB] no-underline transition-colors hover:text-[#2563EB]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-5 text-sm text-[#9AA0AB]">
            <a
              href="mailto:hello@pegasuspixels.com"
              className="text-[#9AA0AB] no-underline transition-colors hover:text-[#2563EB]"
            >
              hello@pegasuspixels.com
            </a>
            <a href="#" className="text-[#9AA0AB] no-underline transition-colors hover:text-[#2563EB]">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1200px] text-[13px] text-[#6B7280]">
          © 2026 Pegasus Pixels. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
