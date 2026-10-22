"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/images";
import { useLang } from "@/lib/i18n";
import { menu } from "@/lib/menu";
import Reveal from "./Reveal";

export default function MenuSection() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="meni" className="border-t border-line bg-surface py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="label">{t.menu.label}</p>
            <h2 className="heading mt-5">{t.menu.title}</h2>
          </div>
          {/* Stavite svoj PDF jelovnik u /public/meni.pdf */}
          <a
            href="/meni.pdf"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-3 self-start border-b border-peach/40 pb-1 text-[11px] font-medium uppercase tracking-[0.25em] text-peach transition-colors hover:border-peach lg:self-auto"
          >
            {t.menu.download}
            <ArrowDownToLine size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="tablist"
            className="-mx-5 mt-14 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {menu.map((c) => (
              <button
                key={c.id}
                role="tab"
                type="button"
                aria-selected={active === c.id}
                aria-controls="menu-panel"
                onClick={() => setActive(c.id)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                  active === c.id
                    ? "border-peach bg-peach text-ink"
                    : "border-line text-cream/70 hover:border-cream/40 hover:text-cream"
                }`}
              >
                {c.label[lang]}
              </button>
            ))}
          </div>
        </Reveal>

        <div id="menu-panel" role="tabpanel" className="mt-12 min-h-[22rem] sm:min-h-[16rem] md:min-h-[11rem]">
          <AnimatePresence mode="wait">
            <motion.ul
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-x-16 gap-y-10 md:grid-cols-2"
            >
              {category.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-xl text-cream sm:text-2xl">{item.name}</h3>
                    <span className="mb-1 flex-1 border-b border-dotted border-muted/40" aria-hidden="true" />
                    <span className="font-serif text-lg whitespace-nowrap text-peach sm:text-xl">{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc[lang]}</p>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <Reveal className="mt-20 grid overflow-hidden rounded-sm border border-line bg-bg lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[28rem]">
            <Image
              src={images.burger}
              alt="Rotkvica Burger"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover brightness-[0.85]"
            />
            <span className="absolute top-5 left-5 rounded-full bg-peach px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink">
              {t.menu.featuredBadge}
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="label">{t.menu.featuredLabel}</p>
            <h3 className="mt-5 font-serif text-4xl leading-tight text-cream sm:text-5xl">Rotkvica Burger</h3>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{t.menu.featuredText}</p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <span className="font-serif text-4xl text-peach">16 KM</span>
              <a href="#rezervacije" className="btn btn-outline">
                {t.menu.featuredCta}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
