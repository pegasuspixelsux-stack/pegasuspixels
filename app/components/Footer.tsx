import Link from "next/link";

const navLinks = ["Características", "Soluciones", "Precios"];

const solutionLinks = [
  { label: "DealiOS", href: "/dealios" },
  { label: "OikOS", href: "/oikos" },
  { label: "Hermios", href: "/hermios" },
  { label: "Industrias", href: "/industriaspage" },
];

const socialIcons = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="18" height="18" rx="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" stroke="currentColor" strokeWidth={1.8}>
        <path
          d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.5c0-.5.3-1 .9-1H16V8Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="18" height="18" rx="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10.5v6M8 7.8v.01M12.5 16.5v-3.5c0-1.2.8-2 2-2s2 .8 2 2v3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 text-lg font-bold tracking-[-0.01em] text-white">
            Pegasus <span className="text-[#2563EB]">Pixels</span>
          </div>
          <p className="m-0 mb-6 max-w-[260px] text-[15px] leading-[1.6] text-[#9AA0AB]">
            Diseñamos sitios web modernos, sistemas de gestión de clientes y
            automatización de negocios que ayudan a las empresas a crecer.
          </p>
          <div className="flex gap-3">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#9AA0AB] no-underline transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-white">
            Navegación
          </div>
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[15px] text-[#9AA0AB] no-underline transition-colors hover:text-[#2563EB]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-white">
            Contacto
          </div>
          <div className="flex flex-col gap-3 text-[15px] text-[#9AA0AB]">
            <a
              href="mailto:hello@pegasuspixels.com"
              className="no-underline transition-colors hover:text-[#2563EB]"
            >
              hello@pegasuspixels.com
            </a>
            <a href="#" className="no-underline transition-colors hover:text-[#2563EB]">
              WhatsApp
            </a>
            <span>Punta del Este, Uruguay</span>
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-white">
            Soluciones
          </div>
          <nav className="flex flex-col gap-3">
            {solutionLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] text-[#9AA0AB] no-underline transition-colors hover:text-[#2563EB]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1440px] border-t border-white/10 pt-8 text-[13px] text-[#6B7280]">
        © 2026 Pegasus Pixels. Todos los derechos reservados.
      </div>
    </footer>
  );
}
