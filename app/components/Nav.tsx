import Link from "next/link";

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
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#141E33]/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="text-lg font-bold tracking-[-0.01em] text-white no-underline">
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

        <a
          href="#assessment"
          className="inline-block rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#1D4ED8]"
        >
          Agendá tu Evaluación
        </a>
      </div>
    </header>
  );
}
