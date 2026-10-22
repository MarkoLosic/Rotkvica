"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { contact, useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import Stars from "./Stars";

export default function Testimonials() {
  const { t } = useLang();
  const items = t.testimonials.items;
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + items.length) % items.length);
  const current = items[index];

  return (
    <section id="utisci" className="border-y border-line bg-surface py-24 sm:py-32">
      <Reveal className="container-x flex flex-col items-center text-center">
        <p className="label">{t.testimonials.label}</p>
        <h2 className="heading mt-5">{t.testimonials.title}</h2>

        <div className="mt-8 flex items-center gap-3">
          <span className="font-serif text-2xl text-cream">{contact.rating}</span>
          <Stars />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">Google</span>
        </div>

        <div className="relative mt-14 flex min-h-[16rem] w-full max-w-4xl items-center justify-center sm:min-h-[13rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={`${index}-${current.author}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-serif text-2xl leading-snug text-cream italic sm:text-3xl lg:text-4xl">
                „{current.quote}“
              </blockquote>
              <figcaption className="mt-8 text-[11px] font-medium uppercase tracking-[0.3em] text-peach">
                — {current.author}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center gap-8">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={t.testimonials.prev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-cream transition-colors hover:border-peach hover:text-peach"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-2">
            {items.map((item, i) => (
              <button
                key={item.author}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${i + 1} / ${items.length}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-peach" : "w-1.5 bg-line hover:bg-muted"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={t.testimonials.next}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-cream transition-colors hover:border-peach hover:text-peach"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
