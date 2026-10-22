import type { Lang } from "./i18n";

type Text = Record<Lang, string>;

export type MenuItem = { name: string; desc: Text; price: string };
export type MenuCategory = { id: string; label: Text; items: MenuItem[] };

// Cijene i jela uređujete ovdje. Opis ide na oba jezika (sr / en).
export const menu: MenuCategory[] = [
  {
    id: "dorucak",
    label: { sr: "Doručak", en: "Breakfast" },
    items: [
      {
        name: "Avocado Toast",
        desc: {
          sr: "Kiselo tijesto, avokado, poširano jaje, čili pahuljice",
          en: "Sourdough, avocado, poached egg, chilli flakes",
        },
        price: "12 KM",
      },
      {
        name: "American Pancakes",
        desc: {
          sr: "Javorov sirup, sezonsko voće, puter",
          en: "Maple syrup, seasonal fruit, butter",
        },
        price: "10 KM",
      },
      {
        name: "Omlet Rotkvica",
        desc: {
          sr: "Tri jaja, pršut, trapist, svježe začinsko bilje",
          en: "Three eggs, prosciutto, cheese, fresh herbs",
        },
        price: "13 KM",
      },
      {
        name: "Granola Bowl",
        desc: {
          sr: "Domaća granola, grčki jogurt, med, bobičasto voće",
          en: "House granola, Greek yoghurt, honey, berries",
        },
        price: "9 KM",
      },
    ],
  },
  {
    id: "salate",
    label: { sr: "Salate", en: "Salads" },
    items: [
      {
        name: "Cezar salata",
        desc: {
          sr: "Rimska salata, piletina, parmezan, krutoni, cezar dresing",
          en: "Romaine, chicken, parmesan, croutons, caesar dressing",
        },
        price: "14 KM",
      },
      {
        name: "Rotkvica salata",
        desc: {
          sr: "Mladi listovi, rotkvice, kozji sir, orasi, med-senf",
          en: "Baby leaves, radish, goat cheese, walnuts, honey mustard",
        },
        price: "13 KM",
      },
      {
        name: "Burrata",
        desc: {
          sr: "Burrata, čeri paradajz, pesto, maslinovo ulje",
          en: "Burrata, cherry tomatoes, pesto, olive oil",
        },
        price: "16 KM",
      },
      {
        name: "Tuna tataki",
        desc: {
          sr: "Pečena tuna, edamame, avokado, susam, ponzu",
          en: "Seared tuna, edamame, avocado, sesame, ponzu",
        },
        price: "19 KM",
      },
    ],
  },
  {
    id: "glavna-jela",
    label: { sr: "Glavna jela", en: "Mains" },
    items: [
      {
        name: "Teleći kotlet",
        desc: {
          sr: "Na kosti, pire od celera, jus od crnog vina",
          en: "On the bone, celeriac purée, red wine jus",
        },
        price: "29 KM",
      },
      {
        name: "Losos",
        desc: {
          sr: "File lososa, povrće sa žara, sos od limuna",
          en: "Salmon fillet, grilled vegetables, lemon sauce",
        },
        price: "26 KM",
      },
      {
        name: "Pileći file",
        desc: {
          sr: "Pečeni krompir, pečurke, krem sos",
          en: "Roast potatoes, mushrooms, cream sauce",
        },
        price: "18 KM",
      },
      {
        name: "Rižoto sa vrganjima",
        desc: {
          sr: "Arborio riža, vrganji, parmezan, tartufovo ulje",
          en: "Arborio rice, porcini, parmesan, truffle oil",
        },
        price: "19 KM",
      },
    ],
  },
  {
    id: "burgeri",
    label: { sr: "Burgeri", en: "Burgers" },
    items: [
      {
        name: "Rotkvica Burger",
        desc: {
          sr: "Juneće meso, tajni sos, karamelizovani luk",
          en: "Beef, secret sauce, caramelised onion",
        },
        price: "16 KM",
      },
      {
        name: "Cheeseburger",
        desc: {
          sr: "Juneće meso, čedar, kiseli krastavac, senf",
          en: "Beef, cheddar, pickles, mustard",
        },
        price: "14 KM",
      },
      {
        name: "Chicken Burger",
        desc: {
          sr: "Hrskava piletina, coleslaw, chipotle majonez",
          en: "Crispy chicken, coleslaw, chipotle mayo",
        },
        price: "13 KM",
      },
      {
        name: "Veggie Burger",
        desc: {
          sr: "Pljeskavica od leblebija, avokado, rukola",
          en: "Chickpea patty, avocado, rocket",
        },
        price: "13 KM",
      },
    ],
  },
  {
    id: "deserti",
    label: { sr: "Deserti", en: "Desserts" },
    items: [
      {
        name: "Čokoladni sufle",
        desc: {
          sr: "Topla tamna čokolada, sladoled od vanile",
          en: "Warm dark chocolate, vanilla ice cream",
        },
        price: "8 KM",
      },
      {
        name: "Cheesecake",
        desc: {
          sr: "Krem sir, keks podloga, preliv od šumskog voća",
          en: "Cream cheese, biscuit base, forest berry coulis",
        },
        price: "7 KM",
      },
      {
        name: "Tiramisu",
        desc: {
          sr: "Mascarpone, espresso, kakao",
          en: "Mascarpone, espresso, cocoa",
        },
        price: "7 KM",
      },
      {
        name: "Palačinke",
        desc: {
          sr: "Nutella, plazma ili domaći džem",
          en: "Nutella, biscuit crumble or homemade jam",
        },
        price: "6 KM",
      },
    ],
  },
  {
    id: "pice",
    label: { sr: "Piće", en: "Drinks" },
    items: [
      {
        name: "Espresso",
        desc: { sr: "Specialty zrno, pečeno lokalno", en: "Specialty beans, locally roasted" },
        price: "2,5 KM",
      },
      {
        name: "Cappuccino",
        desc: { sr: "Espresso, mlijeko, mliječna pjena", en: "Espresso, milk, milk foam" },
        price: "3,5 KM",
      },
      {
        name: "Domaća limunada",
        desc: { sr: "Limun, nana, med", en: "Lemon, mint, honey" },
        price: "4 KM",
      },
      {
        name: "Čaša vina",
        desc: { sr: "Izbor domaćih i regionalnih vina", en: "Selection of local and regional wines" },
        price: "6 KM",
      },
    ],
  },
];
