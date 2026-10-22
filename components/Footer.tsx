"use client";

import { contact, useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-line py-14">
      <div className="container-x flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <a href="#top" className="font-serif text-3xl text-cream">
            Rotkvica
          </a>
          <p className="mt-2 text-sm text-muted">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col items-center gap-2 md:items-end">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted">{contact.address}</p>
          <p className="text-xs text-muted/70">
            © {new Date().getFullYear()} Restoran Rotkvica. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
