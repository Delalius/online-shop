import { FlaskConical, Gift, ShieldCheck, type LucideIcon } from "lucide-react";
import type { Product } from "@/shared/types/product";

export type ProductBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
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

export const getProductReviewCount = (product: Product | null) =>
  product?.rating?.count ?? 128;

export const getProductCode = (product: Product | null) =>
  product ? `ATELIER-${String(product.id).padStart(3, "0")}` : "";

export const getProductCategoryLabel = (product: Product | null) =>
  product?.category ?? "Family";
