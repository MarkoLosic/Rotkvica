"use client";

import Image from "next/image";
import { images } from "@/lib/images";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLang();

  return (
    <section id="o-nama" className="py-24 sm:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative mr-4 mb-8 sm:mr-8 lg:mr-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={images.about}
              alt={t.about.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover brightness-[0.7] saturate-[0.85]"
            />
          </div>
          <div className="absolute -right-4 -bottom-8 max-w-[15rem] bg-peach p-6 text-ink shadow-2xl sm:-right-8 sm:max-w-xs sm:p-8">
            <p className="font-serif text-xl leading-snug italic sm:text-2xl">„{t.about.quote}“</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="label">{t.about.label}</p>
          <h2 className="heading mt-5">{t.about.title}</h2>
          <p className="mt-8 text-base leading-relaxed text-muted sm:text-lg">{t.about.text}</p>

          <ul className="mt-10 flex flex-wrap gap-3">
            {t.about.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-cream/80"
              >
                {tag}
              </li>
            ))}
          </ul>

          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-10">
            {t.about.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-5xl text-cream">{s.value}</dd>
                <dd className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
