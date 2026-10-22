"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";
import { contact, useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

const tiles = [
  { src: images.galleryCoffee, className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto", sizes: "(min-width: 768px) 66vw, 100vw" },
  { src: images.galleryLights, className: "aspect-[4/3] md:aspect-auto", sizes: "(min-width: 768px) 33vw, 100vw" },
  { src: images.galleryDog, className: "aspect-[4/3] md:aspect-auto", sizes: "(min-width: 768px) 33vw, 100vw" },
];

export default function Gallery() {
  const { t } = useLang();

  return (
    <section id="galerija" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label">{t.gallery.label}</p>
            <h2 className="heading mt-5">{t.gallery.title}</h2>
          </div>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start border-b border-peach/40 pb-1 text-[11px] font-medium uppercase tracking-[0.25em] text-peach transition-colors hover:border-peach md:self-auto"
          >
            {contact.instagramHandle}
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-4 md:h-[640px] md:grid-cols-3 md:grid-rows-2">
          {tiles.map((tile, i) => (
            <Reveal key={tile.src} delay={i * 0.12} className={`group relative overflow-hidden rounded-sm ${tile.className}`}>
              <Image
                src={tile.src}
                alt={t.gallery.alts[i]}
                fill
                sizes={tile.sizes}
                className="object-cover brightness-[0.75] transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-90"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
