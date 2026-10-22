# Restoran Rotkvica — web sajt

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide.

## Pokretanje lokalno

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # produkcijska verzija
```

## Gdje se šta mijenja

| Šta | Fajl |
| --- | --- |
| Slike | `lib/images.ts` |
| Jela i cijene | `lib/menu.ts` |
| Svi tekstovi (SR / EN), telefon, adresa, linkovi | `lib/i18n.tsx` |
| Boje i fontovi | `app/globals.css` (`@theme`) i `app/layout.tsx` |
| SEO (title, description, Open Graph) | `app/layout.tsx` |
| PDF jelovnik | stavite fajl u `public/meni.pdf` |

## Zamjena Unsplash slika

1. Napravite folder `public/images/` i ubacite svoje fotografije (npr. `hero.jpg`, `enterijer.jpg`).
2. U `lib/images.ts` zamijenite poziv `unsplash(...)` putanjom, npr. `hero: "/images/hero.jpg"`.
3. Preporuka: JPG/WebP, širina 1600–2000px za hero i galeriju, do ~500 KB po slici.

## Produkcija

Postavite `NEXT_PUBLIC_SITE_URL` (npr. `https://rotkvica.ba`) da Open Graph linkovi budu ispravni.
Forma za rezervaciju trenutno samo prikazuje poruku o uspjehu — slanje se povezuje u `components/Reservation.tsx` (funkcija `onSubmit`).
