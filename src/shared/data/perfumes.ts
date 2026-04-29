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

const createShampooImage = ({ liquid, accent, label, background }: BottleVisual) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 640" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${background}" />
          <stop offset="1" stop-color="#ffffff" />
        </linearGradient>
        <linearGradient id="bottle" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.96" />
          <stop offset="0.5" stop-color="${liquid}" stop-opacity="0.62" />
          <stop offset="1" stop-color="${accent}" stop-opacity="0.78" />
        </linearGradient>
        <linearGradient id="pump" x1="0" x2="1">
          <stop offset="0" stop-color="#f8fafc" />
          <stop offset="0.45" stop-color="${accent}" stop-opacity="0.88" />
          <stop offset="1" stop-color="#111827" />
        </linearGradient>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="30" stdDeviation="28" flood-color="#111827" flood-opacity="0.18" />
        </filter>
      </defs>
      <rect width="520" height="640" rx="56" fill="url(#bg)" />
      <circle cx="128" cy="148" r="78" fill="${liquid}" opacity="0.22" />
      <circle cx="392" cy="500" r="104" fill="${accent}" opacity="0.12" />
      <g filter="url(#shadow)">
        <path d="M236 78h56v54h-56z" fill="url(#pump)" />
        <path d="M264 74h92c18 0 32 14 32 32v12h-124V74Z" fill="url(#pump)" />
        <rect x="222" y="126" width="84" height="54" rx="18" fill="#f8fafc" stroke="${accent}" stroke-opacity="0.32" stroke-width="5" />
        <path d="M142 222c0-34 28-62 62-62h112c34 0 62 28 62 62v280c0 42-34 76-76 76h-84c-42 0-76-34-76-76V222Z" fill="url(#bottle)" stroke="#f8fafc" stroke-width="10" />
        <path d="M174 250c0-28 22-50 50-50h24v334h-36c-21 0-38-17-38-38V250Z" fill="#ffffff" opacity="0.38" />
        <rect x="174" y="338" width="172" height="124" rx="20" fill="#fffaf3" stroke="${accent}" stroke-opacity="0.32" stroke-width="3" />
        <text x="260" y="385" text-anchor="middle" fill="#111827" font-size="25" font-family="Georgia, serif" font-weight="700">${label}</text>
        <text x="260" y="418" text-anchor="middle" fill="${accent}" font-size="16" font-family="Arial, sans-serif" font-weight="700">SHAMPOO</text>
        <line x1="214" y1="438" x2="306" y2="438" stroke="${accent}" stroke-width="4" stroke-linecap="round" />
      </g>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const perfumeProducts: Product[] = [
  {
    id: 1,
    productType: "perfume",
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
    productType: "perfume",
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
    productType: "perfume",
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
    productType: "perfume",
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
    productType: "perfume",
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
    productType: "perfume",
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

export const shampooProducts: Product[] = [
  {
    id: 101,
    productType: "shampoo",
    brand: "Aster Hair Lab",
    title: "Silk Hydro Shampoo",
    price: 42,
    description:
      "A soft hydrating shampoo with aloe water, silk proteins, and a clean neroli veil. Made for hair that needs light moisture without losing movement.",
    category: "hydrating care",
    collection: "Clean Rituals",
    concentration: "Sulfate-free shampoo",
    volumeMl: 300,
    gender: "all hair types",
    mood: "fresh, soft, weightless",
    accords: ["aloe", "silk protein", "neroli", "soft musk"],
    notes: {
      top: ["aloe water", "neroli", "green mandarin"],
      heart: ["silk protein", "white tea", "panthenol"],
      base: ["soft musk", "cedar water", "rice extract"],
    },
    image: createShampooImage({
      liquid: "#bfdbfe",
      accent: "#0f766e",
      label: "Hydro",
      background: "#edf7f5",
    }),
    rating: { rate: 4.8, count: 37 },
  },
  {
    id: 102,
    productType: "shampoo",
    brand: "Root & Petal",
    title: "Rosemary Lift",
    price: 36,
    description:
      "A balancing shampoo for the roots with rosemary, mint, and airy botanical foam. It leaves the scalp feeling clean and the lengths easy to style.",
    category: "volume care",
    collection: "Scalp Garden",
    concentration: "Clarifying shampoo",
    volumeMl: 250,
    gender: "fine hair",
    mood: "cool, clean, lifted",
    accords: ["rosemary", "mint", "green tea", "cotton"],
    notes: {
      top: ["rosemary water", "peppermint", "lime leaf"],
      heart: ["green tea", "nettle", "sage"],
      base: ["cotton musk", "cedar", "oat protein"],
    },
    image: createShampooImage({
      liquid: "#bbf7d0",
      accent: "#166534",
      label: "Lift",
      background: "#effaf0",
    }),
    rating: { rate: 4.7, count: 29 },
  },
  {
    id: 103,
    productType: "shampoo",
    brand: "Velour Botanics",
    title: "Amber Repair Wash",
    price: 48,
    description:
      "A rich repairing shampoo with ceramides, oat lipids, and warm amber. Built for dry or color-treated hair that wants a polished, flexible finish.",
    category: "repair care",
    collection: "Velvet Routine",
    concentration: "Bond-support shampoo",
    volumeMl: 300,
    gender: "dry hair",
    mood: "creamy, warm, restored",
    accords: ["ceramide", "oat", "amber", "vanilla"],
    notes: {
      top: ["orange flower", "oat milk", "cardamom"],
      heart: ["ceramide complex", "shea", "iris"],
      base: ["amber", "vanilla", "cashmere wood"],
    },
    image: createShampooImage({
      liquid: "#fde68a",
      accent: "#a16207",
      label: "Repair",
      background: "#fff7df",
    }),
    rating: { rate: 4.9, count: 22 },
  },
  {
    id: 104,
    productType: "shampoo",
    brand: "Clairborne",
    title: "Pearl Fig Cleanse",
    price: 44,
    description:
      "A creamy daily shampoo with fig leaf, coconut water, and amino acids. It cleanses gently and leaves a soft skin-care-like finish on the hair.",
    category: "daily care",
    collection: "Riviera Objects",
    concentration: "Amino acid shampoo",
    volumeMl: 300,
    gender: "normal hair",
    mood: "creamy, green, relaxed",
    accords: ["fig leaf", "coconut water", "amino acids", "cedar"],
    notes: {
      top: ["fig leaf", "bergamot", "coconut water"],
      heart: ["amino acids", "magnolia", "violet"],
      base: ["cedar water", "musk", "rice protein"],
    },
    image: createShampooImage({
      liquid: "#d9f99d",
      accent: "#3f6212",
      label: "Fig",
      background: "#f1f8e9",
    }),
    rating: { rate: 4.6, count: 31 },
  },
  {
    id: 105,
    productType: "shampoo",
    brand: "Aster Hair Lab",
    title: "Rain Gloss Shampoo",
    price: 46,
    description:
      "A glossy hydrating shampoo with hyaluronic acid, rainwater accord, and blue chamomile. It smooths the surface while keeping the finish fresh.",
    category: "hydrating care",
    collection: "Clean Rituals",
    concentration: "Gloss shampoo",
    volumeMl: 300,
    gender: "dull hair",
    mood: "dewy, glossy, calm",
    accords: ["hyaluronic acid", "rainwater", "chamomile", "musk"],
    notes: {
      top: ["rainwater accord", "blue chamomile", "bergamot"],
      heart: ["hyaluronic acid", "lotus", "panthenol"],
      base: ["clear musk", "cedar water", "linen"],
    },
    image: createShampooImage({
      liquid: "#bae6fd",
      accent: "#0369a1",
      label: "Gloss",
      background: "#edf8ff",
    }),
    rating: { rate: 4.8, count: 26 },
  },
  {
    id: 106,
    productType: "shampoo",
    brand: "Velour Botanics",
    title: "Oat Milk Recovery",
    price: 50,
    description:
      "A nourishing repair shampoo with oat milk, peptides, and a soft vanilla-wood finish. It is made for brittle lengths that need comfort and shine.",
    category: "repair care",
    collection: "Velvet Routine",
    concentration: "Peptide shampoo",
    volumeMl: 300,
    gender: "damaged hair",
    mood: "milky, comforting, smooth",
    accords: ["oat milk", "peptide", "shea", "vanilla wood"],
    notes: {
      top: ["oat milk", "mandarin", "almond"],
      heart: ["peptides", "shea butter", "white iris"],
      base: ["vanilla wood", "amber", "soft musk"],
    },
    image: createShampooImage({
      liquid: "#fef3c7",
      accent: "#92400e",
      label: "Oat",
      background: "#fff8e8",
    }),
    rating: { rate: 4.9, count: 19 },
  },
];

export const products: Product[] = [...perfumeProducts, ...shampooProducts];

export const boutiqueStats = [
  { value: String(products.length), label: "selective formulas" },
  { value: "24h", label: "order dispatch" },
  { value: "100%", label: "authentic boutique care" },
];
