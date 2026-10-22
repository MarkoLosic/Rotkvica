"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang, type Lang } from "@/lib/i18n";

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-full border border-line p-0.5" role="group" aria-label="Language">
      {(["sr", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors ${
            lang === l ? "bg-cream text-ink" : "text-muted hover:text-cream"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  // Zatvori mobilni meni kada se prozor proširi na desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="container-x flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="font-serif text-2xl tracking-tight text-cream" onClick={() => setOpen(false)}>
          Rotkvica
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-[11px] font-medium uppercase tracking-[0.25em] text-cream/75 transition-colors hover:text-peach"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitch />
          <a href="#rezervacije" className="btn btn-peach px-6 py-3">
            {t.nav.reserve}
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-cream lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-6">
              {t.nav.links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-sm font-medium uppercase tracking-[0.25em] text-cream/85 hover:text-peach"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 flex items-center justify-between gap-4">
                <LangSwitch />
                <a href="#rezervacije" onClick={() => setOpen(false)} className="btn btn-peach">
                  {t.nav.reserve}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
