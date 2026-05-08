import React, { useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navbar({
  t,
  language,
  theme,
  mobileMenuOpen,
  setMobileMenuOpen,
  toggleTheme,
  toggleLanguage,
}) {
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#tools", label: t.nav.tools },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[rgba(10,10,10,0.72)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a
            href="#hero"
            className="text-xl font-black tracking-[-0.08em] text-text-primary md:text-2xl"
          >
            <span className="text-orange-400">{t.brand}</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary transition hover:border-orange-400/40 hover:text-text-primary"
            >
              {language === "id" ? "EN" : "ID"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-secondary transition hover:border-orange-400/40 hover:text-text-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-primary lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(10,10,10,0.96)] px-6 pt-28 transition duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {links.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-[1.5rem] border border-white/8 bg-white/4 px-5 py-4 text-lg font-semibold text-text-primary transition hover:border-orange-400/30 hover:bg-white/8"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs uppercase tracking-[0.24em] text-text-secondary"
            >
              {language === "id" ? "EN" : "ID"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-text-secondary"
            >
              {theme === "dark" ? "☀ Light" : "☾ Dark"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
