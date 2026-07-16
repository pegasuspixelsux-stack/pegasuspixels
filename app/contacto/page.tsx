import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const contactInfo = [
  {
    label: "Email",
    value: "hello@pegasuspixels.com",
    href: "mailto:hello@pegasuspixels.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="white" strokeWidth={1.8}>
        <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "Enviar mensaje",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="white" strokeWidth={1.8}>
        <path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.5L4 20Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 9.5c0 3.5 2.5 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Ubicación",
    value: "Punta del Este, Uruguay",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="white" strokeWidth={1.8}>
        <path
          d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="2.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ContactoPage() {
  return (
    <div className="w-full overflow-x-hidden bg-[#000000] font-sans text-white antialiased">
      <section className="px-6 pt-[140px] pb-24 md:px-12 md:pt-[180px]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-14 md:grid-cols-2 md:items-start">
          <Reveal direction="left">
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-[#2563EB]">
              Contacto
            </div>
            <h1 className="m-0 mb-6 text-[32px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[44px]">
              Hablemos de tu negocio.
            </h1>
            <p className="m-0 mb-10 text-lg leading-[1.6] text-[#9AA0AB]">
              Contanos qué necesitás y te ayudamos a definir la mejor
              solución digital para tu empresa. Respondemos rápido — por
              WhatsApp, email o completando el formulario.
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map((item) => {
                const content = (
                  <>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-[#9AA0AB]">{item.label}</div>
                      <div className="text-[16px] font-semibold text-white">{item.value}</div>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 no-underline transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4">
                    {content}
                  </div>
                );
              })}
            </div>

            <a
              href="/#assessment"
              className="mt-10 inline-block text-[15px] font-semibold text-[#2563EB] no-underline"
            >
              ¿Preferís agendar directamente? Agendá tu Consulta →
            </a>
          </Reveal>

          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
