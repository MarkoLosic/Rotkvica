"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "sr" | "en";

export const contact = {
  phone: "+387 65 123 456",
  phoneHref: "tel:+38765123456",
  address: "Braće Pantića 6, 78000 Banja Luka",
  instagram: "https://www.instagram.com/rotkvica_restoran",
  instagramHandle: "@rotkvica_restoran",
  facebook: "https://www.facebook.com/",
  mapQuery: "Braće Pantića 6, Banja Luka",
  rating: "4.7",
};

const sr = {
  nav: {
    links: [
      { id: "meni", label: "Meni" },
      { id: "o-nama", label: "O nama" },
      { id: "galerija", label: "Galerija" },
      { id: "kontakt", label: "Kontakt" },
    ],
    reserve: "Rezerviši sto",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
  },
  hero: {
    eyebrow: "Banja Luka · Braće Pantića 6",
    title: "Moderna kuhinja u srcu Banjaluke",
    subtitle:
      "Iskustvo koje spaja industrijski dizajn i toplinu domaće gostoprimljivosti. Od jutarnje kafe do večernjeg kotleta.",
    viewMenu: "Pogledaj meni",
    reserve: "Rezerviši sto",
    rating: "Google ocjena",
    scroll: "Scroll za doživljaj",
  },
  about: {
    label: "Naša priča",
    title: "Spoj elegancije i topline",
    text: "Smješteni pored parka Petar Kočić, gradili smo Rotkvicu kao mjesto koje se ne bira — koje se pamti. Crni viseći lusteri, drveni stolovi, cozy uglovi. Filozofija u kuhinji je jednostavna: svježe namirnice, kreativna jela, pažljivi ljudi.",
    tags: ["Pet friendly", "English menu", "Pogodno za proslave"],
    stats: [
      { value: "4.7", label: "Google ocjena" },
      { value: "15+", label: "Godina strasti" },
    ],
    quote: "Mjesto koje se ne bira — koje se pamti.",
    imageAlt: "Enterijer restorana Rotkvica",
  },
  menu: {
    label: "Meni",
    title: "Pažljivo birano, sa strašću servirano",
    download: "Preuzmi puni meni (PDF)",
    featuredBadge: "Preporuka kuće",
    featuredLabel: "Potpis kuhinje",
    featuredText:
      "100% juneće meso, domaći tajni sos, karamelizovani luk, brioche zemička sa susamom.",
    featuredCta: "Rezerviši sto",
  },
  gallery: {
    label: "Galerija",
    title: "Gdje vrijeme usporava",
    alts: ["Kafa na drvenom stolu", "Detalj lustera", "Pas gost restorana"],
  },
  testimonials: {
    label: "Utisci gostiju",
    title: "Ono što gosti kažu",
    prev: "Prethodni utisak",
    next: "Sljedeći utisak",
    items: [
      {
        quote:
          "Najbolji burger u Banjaluci, bez konkurencije. Ambijent je predivan — vratićemo se sigurno.",
        author: "Marija P.",
      },
      {
        quote:
          "Nedjeljni doručak u Rotkvici postao je naša porodična tradicija. Palačinke su savršene, a kafa još bolja.",
        author: "Nikola S.",
      },
      {
        quote:
          "Proslavili smo rođendan za dvadeset osoba i sve je bilo besprijekorno. Osoblje je pažljivo do detalja.",
        author: "Ana K.",
      },
    ],
  },
  reservation: {
    label: "Rezervacije",
    title: "Rezervišite svoje mjesto",
    text: "Doručak, poslovni ručak, večera ili proslava — pripremamo sto po vašoj mjeri. Za grupne rezervacije preporučujemo poziv.",
    callUs: "Pozovite nas",
    fields: {
      name: "Ime i prezime",
      phone: "Telefon",
      date: "Datum",
      time: "Vrijeme",
      guests: "Broj osoba",
      note: "Napomena (opciono)",
    },
    placeholders: {
      name: "Vaše ime",
      phone: "+387 6x xxx xxx",
      note: "Alergije, posebna prilika, sto napolju...",
      select: "Izaberite",
    },
    guestsSuffix: (n: number): string => (n === 1 ? "osoba" : n < 5 ? "osobe" : "osoba"),
    submit: "Potvrdi rezervaciju",
    sending: "Šaljemo...",
    successTitle: "Hvala vam!",
    successText: (name: string) =>
      `${name}, vaš zahtjev za rezervaciju je primljen. Kontaktiraćemo vas uskoro radi potvrde.`,
    another: "Nova rezervacija",
  },
  contact: {
    label: "Kontakt",
    title: "Pronađite nas",
    address: "Adresa",
    hours: "Radno vrijeme",
    hoursLines: ["Pon–Sub · 08:00 – 23:00", "Nedjelja · 09:00 – 22:00"],
    phone: "Telefon",
    social: "Društvene mreže",
    mapTitle: "Mapa — Restoran Rotkvica",
  },
  footer: {
    tagline: "Moderna kuhinja u srcu Banjaluke.",
    rights: "Sva prava zadržana.",
  },
};

type Dict = typeof sr;

const en: Dict = {
  nav: {
    links: [
      { id: "meni", label: "Menu" },
      { id: "o-nama", label: "About" },
      { id: "galerija", label: "Gallery" },
      { id: "kontakt", label: "Contact" },
    ],
    reserve: "Book a table",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Banja Luka · Braće Pantića 6",
    title: "Modern cuisine in the heart of Banja Luka",
    subtitle:
      "An experience that blends industrial design with the warmth of local hospitality. From morning coffee to an evening cutlet.",
    viewMenu: "View menu",
    reserve: "Book a table",
    rating: "Google rating",
    scroll: "Scroll to explore",
  },
  about: {
    label: "Our story",
    title: "Where elegance meets warmth",
    text: "Set beside Petar Kočić park, we built Rotkvica as a place you don't just choose — you remember. Black pendant lights, wooden tables, cozy corners. Our kitchen philosophy is simple: fresh ingredients, creative dishes, attentive people.",
    tags: ["Pet friendly", "English menu", "Great for celebrations"],
    stats: [
      { value: "4.7", label: "Google rating" },
      { value: "15+", label: "Years of passion" },
    ],
    quote: "A place you don't just choose — you remember.",
    imageAlt: "Rotkvica restaurant interior",
  },
  menu: {
    label: "Menu",
    title: "Carefully chosen, served with passion",
    download: "Download full menu (PDF)",
    featuredBadge: "House favourite",
    featuredLabel: "Signature dish",
    featuredText:
      "100% beef, homemade secret sauce, caramelised onion, sesame brioche bun.",
    featuredCta: "Book a table",
  },
  gallery: {
    label: "Gallery",
    title: "Where time slows down",
    alts: ["Coffee on a wooden table", "Pendant light detail", "A four-legged guest"],
  },
  testimonials: {
    label: "Guest reviews",
    title: "What our guests say",
    prev: "Previous review",
    next: "Next review",
    items: [
      {
        quote:
          "The best burger in Banja Luka, no competition. The ambience is beautiful — we'll definitely be back.",
        author: "Marija P.",
      },
      {
        quote:
          "Sunday breakfast at Rotkvica has become our family tradition. The pancakes are perfect and the coffee even better.",
        author: "Nikola S.",
      },
      {
        quote:
          "We celebrated a birthday for twenty people and everything was flawless. The staff pay attention to every detail.",
        author: "Ana K.",
      },
    ],
  },
  reservation: {
    label: "Reservations",
    title: "Reserve your table",
    text: "Breakfast, business lunch, dinner or a celebration — we'll set a table just for you. For group bookings we recommend giving us a call.",
    callUs: "Call us",
    fields: {
      name: "Full name",
      phone: "Phone",
      date: "Date",
      time: "Time",
      guests: "Guests",
      note: "Note (optional)",
    },
    placeholders: {
      name: "Your name",
      phone: "+387 6x xxx xxx",
      note: "Allergies, special occasion, outdoor table...",
      select: "Select",
    },
    guestsSuffix: (n: number) => (n === 1 ? "guest" : "guests"),
    submit: "Confirm reservation",
    sending: "Sending...",
    successTitle: "Thank you!",
    successText: (name: string) =>
      `${name}, your reservation request has been received. We'll contact you shortly to confirm.`,
    another: "New reservation",
  },
  contact: {
    label: "Contact",
    title: "Find us",
    address: "Address",
    hours: "Opening hours",
    hoursLines: ["Mon–Sat · 08:00 – 23:00", "Sunday · 09:00 – 22:00"],
    phone: "Phone",
    social: "Social media",
    mapTitle: "Map — Rotkvica Restaurant",
  },
  footer: {
    tagline: "Modern cuisine in the heart of Banja Luka.",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Lang, Dict> = { sr, en };

type LangContextValue = { lang: Lang; setLang: (lang: Lang) => void; t: Dict };

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "rotkvica-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "sr" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
