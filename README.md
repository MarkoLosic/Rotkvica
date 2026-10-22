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
