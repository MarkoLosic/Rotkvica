"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { contact, useLang } from "@/lib/i18n";
import Stars from "./Stars";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden">
      <Image
        src={images.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-110 object-cover blur-[3px] brightness-[0.45]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="container-x relative py-24">
        <div className="max-w-3xl">
          <motion.p {...fadeUp(0.1)} className="label">
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            {...fadeUp(0.2)}
            className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-cream sm:text-6xl lg:text-[5.5rem]"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p {...fadeUp(0.35)} className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {t.hero.subtitle}
          </motion.p>
          <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#meni" className="btn btn-light">
              {t.hero.viewMenu}
            </a>
            <a href="#rezervacije" className="btn btn-outline">
              {t.hero.reserve}
            </a>
          </motion.div>
          <motion.div {...fadeUp(0.65)} className="mt-12 flex items-center gap-3">
            <span className="font-serif text-3xl text-cream">{contact.rating}</span>
            <div className="flex flex-col gap-1">
              <Stars />
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted">{t.hero.rating}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#o-nama"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute right-6 bottom-10 hidden flex-col items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-muted transition-colors hover:text-cream md:flex lg:right-12"
      >
        <span className="[writing-mode:vertical-rl]">{t.hero.scroll}</span>
        <span className="relative h-16 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute inset-x-0 top-0 h-6 bg-peach"
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
