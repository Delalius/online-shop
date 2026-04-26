import { FlaskConical, Gift, ShieldCheck, type LucideIcon } from "lucide-react";
import type { Product } from "@/shared/types/product";

export type ProductBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ProductReview = {
  author: string;
  context: string;
  rating: number;
  text: string;
};

export const productBenefits: ProductBenefit[] = [
  {
    icon: FlaskConical,
    title: "Selective formula",
    description: "Each edit is built around expressive niche compositions.",
  },
  {
    icon: ShieldCheck,
    title: "Authenticity guaranteed",
    description: "Every bottle is checked by batch before dispatch.",
  },
  {
    icon: Gift,
    title: "Gift wrapping",
    description: "Complimentary Maison Éclat wrapping is included from $180.",
  },
];

export const getProductRating = (product: Product | null) =>
  product?.rating?.rate ?? 4.8;

export const getProductReviews = (product: Product | null): ProductReview[] => {
  if (!product) {
    return [];
  }

  const baseRating = getProductRating(product);
  const topNote = product.notes.top[0] ?? product.accords[0] ?? "opening";
  const heartNote = product.notes.heart[0] ?? product.accords[1] ?? "heart";
  const baseNote = product.notes.base[0] ?? product.accords[2] ?? "drydown";

  return [
    {
      author: "Mira K.",
      context: "Verified purchase",
      rating: Math.min(5, Number((baseRating + 0.1).toFixed(1))),
      text: `${product.title} opens with a clear ${topNote} note and settles beautifully into ${baseNote}. It feels polished without becoming loud.`,
    },
    {
      author: "Anton R.",
      context: product.collection,
      rating: baseRating,
      text: `The ${heartNote} heart is the part that sold me. I wore it through a full workday and the trail stayed close, smooth, and expensive.`,
    },
    {
      author: "Elena S.",
      context: `${product.concentration}, ${product.volumeMl} ml`,
      rating: Math.max(4.5, Number((baseRating - 0.2).toFixed(1))),
      text: `A refined ${product.category} fragrance with real character. The bottle also feels gift-ready, which made the whole order feel special.`,
    },
  ];
};

export const getProductReviewCount = (product: Product | null) =>
  product?.rating?.count ?? 128;

export const getProductCode = (product: Product | null) =>
  product ? `ATELIER-${String(product.id).padStart(3, "0")}` : "";

export const getProductCategoryLabel = (product: Product | null) =>
  product?.category ?? "Family";
