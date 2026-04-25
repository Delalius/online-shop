import type { Product } from "@/shared/types/product";

type BottleVisual = {
  liquid: string;
  accent: string;
  label: string;
  background: string;
};

const createBottleImage = ({ liquid, accent, label, background }: BottleVisual) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 640" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${background}" />
          <stop offset="1" stop-color="#ffffff" />
        </linearGradient>
        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.92" />
          <stop offset="0.52" stop-color="${liquid}" stop-opacity="0.55" />
          <stop offset="1" stop-color="${accent}" stop-opacity="0.84" />
        </linearGradient>
        <linearGradient id="cap" x1="0" x2="1">
          <stop offset="0" stop-color="#18181b" />
          <stop offset="0.55" stop-color="${accent}" />
          <stop offset="1" stop-color="#0f172a" />
        </linearGradient>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="30" stdDeviation="28" flood-color="#111827" flood-opacity="0.22" />
        </filter>
      </defs>
      <rect width="520" height="640" rx="56" fill="url(#bg)" />
      <circle cx="140" cy="126" r="72" fill="${liquid}" opacity="0.2" />
      <circle cx="396" cy="502" r="96" fill="${accent}" opacity="0.12" />
      <g filter="url(#shadow)">
        <rect x="218" y="86" width="84" height="72" rx="18" fill="url(#cap)" />
        <rect x="182" y="142" width="156" height="54" rx="18" fill="#f8fafc" stroke="#d7cdbf" stroke-width="5" />
        <path d="M128 228c0-34 27-62 61-62h142c34 0 61 28 61 62v260c0 40-32 72-72 72H200c-40 0-72-32-72-72V228Z" fill="url(#glass)" stroke="#f8fafc" stroke-width="10" />
        <path d="M158 256c0-30 24-54 54-54h28v320h-42c-22 0-40-18-40-40V256Z" fill="#ffffff" opacity="0.34" />
        <rect x="178" y="326" width="164" height="118" rx="18" fill="#fffaf3" stroke="${accent}" stroke-opacity="0.35" stroke-width="3" />
        <text x="260" y="372" text-anchor="middle" fill="#111827" font-size="26" font-family="Georgia, serif" font-weight="700">${label}</text>
        <line x1="214" y1="394" x2="306" y2="394" stroke="${accent}" stroke-width="4" stroke-linecap="round" />
      </g>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const perfumeProducts: Product[] = [
  {
    id: 1,
    brand: "Maison Luma",
    title: "Noir Bloom",
    price: 189,
    description:
      "A deep evening fragrance built around velvet rose, black pepper, and a dry woody base. Designed for after-dark dinners, candlelit rooms, and a confident lingering trail.",
    category: "oriental floral",
    collection: "Private Atelier",
    concentration: "Eau de Parfum",
    volumeMl: 75,
    gender: "unisex",
    mood: "evening, warm, dramatic",
    accords: ["rose", "pepper", "amber", "sandalwood"],
    notes: {
      top: ["bergamot", "black pepper", "saffron"],
      heart: ["damask rose", "plum", "iris"],
      base: ["amber", "sandalwood", "frankincense"],
    },
    image: createBottleImage({
      liquid: "#7f1d1d",
      accent: "#b45309",
      label: "Noir",
      background: "#f9ece7",
    }),
    rating: { rate: 4.9, count: 24 },
  },
  {
    id: 2,
    brand: "Atelier Veyra",
    title: "Silk Neroli",
    price: 156,
    description:
      "A clean daytime fragrance with neroli, white tea, and soft musk. It feels like a crisp shirt, a glass vase, and a light breeze through an open window.",
    category: "citrus musky",
    collection: "Soft Tailoring",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    gender: "unisex",
    mood: "clean, bright, polished",
    accords: ["neroli", "tea", "musk", "citrus"],
    notes: {
      top: ["neroli", "lemon", "green mandarin"],
      heart: ["white tea", "petitgrain", "jasmine"],
      base: ["white musk", "cedar", "rice powder"],
    },
    image: createBottleImage({
      liquid: "#facc15",
      accent: "#166534",
      label: "Silk",
      background: "#eef8ef",
    }),
    rating: { rate: 4.7, count: 18 },
  },
  {
    id: 3,
    brand: "Oro & Ash",
    title: "Velvet Oud",
    price: 245,
    description:
      "A rich oud blend with cacao, leather, and smoky vanilla. Dense, polished, and long-lasting for those who enjoy a fragrance with presence.",
    category: "woody amber",
    collection: "Night Reserve",
    concentration: "Extrait de Parfum",
    volumeMl: 50,
    gender: "unisex",
    mood: "opulent, resinous, long-lasting",
    accords: ["oud", "leather", "cacao", "vanilla"],
    notes: {
      top: ["cardamom", "pink pepper", "plum liqueur"],
      heart: ["oud", "leather", "cacao"],
      base: ["vanilla", "patchouli", "smoky amber"],
    },
    image: createBottleImage({
      liquid: "#3f1d12",
      accent: "#ca8a04",
      label: "Oud",
      background: "#f5efe7",
    }),
    rating: { rate: 4.8, count: 13 },
  },
  {
    id: 4,
    brand: "Clairborne",
    title: "Pearl Fig",
    price: 172,
    description:
      "Creamy fig, coconut water, and soft woods. Not a sugary dessert, but a smooth skin scent with the ease of an expensive body lotion.",
    category: "green creamy",
    collection: "Riviera Objects",
    concentration: "Eau de Parfum",
    volumeMl: 75,
    gender: "unisex",
    mood: "soft, creamy, relaxed",
    accords: ["fig", "coconut", "green notes", "cedar"],
    notes: {
      top: ["fig leaf", "coconut water", "bergamot"],
      heart: ["milky fig", "violet", "magnolia"],
      base: ["cedar", "musk", "cashmeran"],
    },
    image: createBottleImage({
      liquid: "#a7c957",
      accent: "#31572c",
      label: "Fig",
      background: "#edf7e9",
    }),
    rating: { rate: 4.6, count: 16 },
  },
  {
    id: 5,
    brand: "Santalier",
    title: "Amber Library",
    price: 198,
    description:
      "A warm library of polished woods, dry amber, and a subtle tobacco sweetness. Comfortable, intelligent, and quietly elegant.",
    category: "woody spicy",
    collection: "Cabinet Series",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    gender: "unisex",
    mood: "dry, woody, intimate",
    accords: ["sandalwood", "tobacco", "amber", "spice"],
    notes: {
      top: ["nutmeg", "orange zest", "sage"],
      heart: ["sandalwood", "tobacco leaf", "iris"],
      base: ["dry amber", "tonka bean", "vetiver"],
    },
    image: createBottleImage({
      liquid: "#b45309",
      accent: "#78350f",
      label: "Amber",
      background: "#fff4df",
    }),
    rating: { rate: 4.9, count: 21 },
  },
  {
    id: 6,
    brand: "Eau d'Astrum",
    title: "Moon Jasmine",
    price: 214,
    description:
      "Night-blooming jasmine, mineral freshness, and translucent vanilla. A white floral without excess sweetness, finished with a cool, luminous trail.",
    category: "white floral",
    collection: "Celestial Florals",
    concentration: "Extrait de Parfum",
    volumeMl: 50,
    gender: "unisex",
    mood: "luminous, floral, clean",
    accords: ["jasmine", "mineral notes", "vanilla", "musk"],
    notes: {
      top: ["aldehydes", "pear", "iced lemon"],
      heart: ["sambac jasmine", "tuberose", "peony"],
      base: ["vanilla orchid", "mineral musk", "ambroxan"],
    },
    image: createBottleImage({
      liquid: "#dbeafe",
      accent: "#3730a3",
      label: "Moon",
      background: "#eef2ff",
    }),
    rating: { rate: 4.8, count: 11 },
  },
];

export const boutiqueStats = [
  { value: "6", label: "niche perfume houses" },
  { value: "24h", label: "order dispatch" },
  { value: "100%", label: "authentic luxury perfume" },
];
