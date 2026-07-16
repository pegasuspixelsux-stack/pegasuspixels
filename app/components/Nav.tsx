"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems: {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}[] = [
  { label: "Características", href: "#" },
  {
    label: "Soluciones",
    dropdown: [
      { label: "DealiOS", href: "/dealios" },
      { label: "OikOS", href: "/oikos" },
      { label: "Hermios", href: "/hermios" },
    ],
  },
  { label: "Industrias", href: "/industriaspage" },
  { label: "Precios", href: "#" },
  { label: "Contacto", href: "/contacto" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={2}>
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/5 bg-[#141E33]/50 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-lg font-bold tracking-[-0.01em] text-white no-underline"
        >
          Pegasus <span className="text-[#2563EB]">Pixels</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.label} className="group relative">
                  <button className="cursor-pointer text-[15px] text-[#9AA0AB] transition-colors hover:text-white">
                    {item.label}
                  </button>
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[160px] rounded-xl border border-white/10 bg-[#101625] p-2 shadow-xl">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-[#9AA0AB] no-underline transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return item.href!.startsWith("/") ? (
              <Link
                key={item.label}
                href={item.href!}
                className="text-[15px] text-[#9AA0AB] no-underline transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] text-[#9AA0AB] no-underline transition-colors hover:text-white"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <a href="#assessment" className="button no-underline">
            Agendá tu Evaluación
            <svg viewBox="0 0 24 24" fill="none" className="icon" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="text-white md:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/5 bg-[#0B1120] transition-all duration-300 md:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.label} className="flex flex-col">
                  <span className="px-3 py-2 text-sm font-semibold uppercase tracking-[0.05em] text-[#9AA0AB]">
                    {item.label}
                  </span>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-[15px] text-[#9AA0AB] no-underline transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              );
            }

            return item.href!.startsWith("/") ? (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] text-[#9AA0AB] no-underline transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] text-[#9AA0AB] no-underline transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="#assessment"
            onClick={() => setOpen(false)}
            className="button mt-3 no-underline"
          >
            Agendá tu Evaluación
            <svg viewBox="0 0 24 24" fill="none" className="icon" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
