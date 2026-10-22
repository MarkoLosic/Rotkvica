"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { contact, useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

const timeSlots = Array.from({ length: 29 }, (_, i) => {
  const minutes = 8 * 60 + i * 30; // 08:00 – 22:00
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${minutes % 60 === 0 ? "00" : "30"}`;
});
const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

const fieldClass =
  "w-full border-b border-line bg-transparent py-3 text-base text-cream placeholder:text-muted/50 transition-colors outline-none focus:border-peach [color-scheme:dark]";
const labelClass = "block text-[10px] font-semibold uppercase tracking-[0.25em] text-muted";

export default function Reservation() {
  const { t } = useLang();
  const r = t.reservation;
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [name, setName] = useState("");
  const [minDate, setMinDate] = useState<string>();

  useEffect(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    setMinDate(now.toISOString().slice(0, 10));
  }, []);

  // Lažni submit — ovdje kasnije povežite backend, email servis ili npr. Formspree
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setName(String(data.get("name") ?? "").trim().split(" ")[0]);
    setStatus("sending");
    setTimeout(() => setStatus("done"), 900);
  };

  return (
    <section id="rezervacije" className="py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <Reveal className="lg:pt-8">
          <p className="label">{r.label}</p>
          <h2 className="heading mt-5">{r.title}</h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">{r.text}</p>
          <div className="mt-12 border-t border-line pt-10">
            <p className={labelClass}>{r.callUs}</p>
            <a
              href={contact.phoneHref}
              className="mt-4 inline-flex items-center gap-4 font-serif text-3xl text-cream transition-colors hover:text-peach sm:text-4xl"
            >
              <Phone size={24} className="text-peach" />
              {contact.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-sm border border-line bg-surface p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "done" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <CheckCircle2 size={56} strokeWidth={1.25} className="text-peach" />
                  <h3 className="mt-6 font-serif text-4xl text-cream">{r.successTitle}</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-muted">{r.successText(name)}</p>
                  <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-10">
                    {r.another}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="grid gap-8 sm:grid-cols-2"
                >
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className={labelClass}>{r.fields.name}</label>
                    <input id="name" name="name" required autoComplete="name" placeholder={r.placeholders.name} className={fieldClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className={labelClass}>{r.fields.phone}</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      pattern="[0-9+\(\)\s\-]{6,}"
                      placeholder={r.placeholders.phone}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className={labelClass}>{r.fields.date}</label>
                    <input id="date" name="date" type="date" required min={minDate} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="time" className={labelClass}>{r.fields.time}</label>
                    <select id="time" name="time" required defaultValue="" className={`${fieldClass} cursor-pointer`}>
                      <option value="" disabled className="bg-surface">{r.placeholders.select}</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-surface">{slot}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="guests" className={labelClass}>{r.fields.guests}</label>
                    <select id="guests" name="guests" required defaultValue="2" className={`${fieldClass} cursor-pointer`}>
                      {guestOptions.map((n) => (
                        <option key={n} value={n} className="bg-surface">
                          {n} {r.guestsSuffix(n)}
                        </option>
                      ))}
                      <option value="10+" className="bg-surface">10+</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="note" className={labelClass}>{r.fields.note}</label>
                    <textarea id="note" name="note" rows={3} placeholder={r.placeholders.note} className={`${fieldClass} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn btn-peach w-full py-4 disabled:opacity-60 sm:col-span-2"
                  >
                    {status === "sending" ? r.sending : r.submit}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
