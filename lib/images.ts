// Sve slike sajta na jednom mjestu.
// Da zamijenite Unsplash fotografiju svojom: stavite fajl u /public/images/
// i ovdje promijenite putanju, npr. hero: "/images/hero.jpg"
const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: unsplash("1517248135467-4c7edcad34c4", 2000),
  about: unsplash("1552566626-52f8b828add9", 1400),
  burger: unsplash("1568901346375-23c9450c58cd", 1400),
  galleryCoffee: unsplash("1495474472287-4d71bcdd2085", 1400),
  galleryLights: unsplash("1540932239986-30128078f3c5", 900),
  galleryDog: unsplash("1477884213360-7e9d7dcc1e48", 900),
};
