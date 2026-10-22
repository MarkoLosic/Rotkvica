"use client";

import { contact, useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=16&output=embed`;

  const rows = [
    { label: c.address, content: <p>{contact.address}</p> },
    {
      label: c.hours,
      content: (
        <div className="space-y-1">
          {c.hoursLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ),
    },
    {
      label: c.phone,
      content: (
        <a href={contact.phoneHref} className="transition-colors hover:text-peach">
          {contact.phone}
        </a>
      ),
    },
    {
      label: c.social,
      content: (
        <p>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-peach">
            Instagram
          </a>
          <span className="mx-2 text-muted">·</span>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-peach">
            Facebook
          </a>
        </p>
      ),
    },
  ];

  return (
    <section id="kontakt" className="border-t border-line bg-surface py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="label">{c.label}</p>
          <h2 className="heading mt-5">{c.title}</h2>
          <dl className="mt-12">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="pt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">{row.label}</dt>
                <dd className="text-lg text-cream">{row.content}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="min-h-[24rem] overflow-hidden rounded-sm border border-line lg:min-h-full">
          <iframe
            title={c.mapTitle}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[24rem] w-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(0.9)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
