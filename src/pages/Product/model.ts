import { BadgeCheck, ShieldCheck, Truck, type LucideIcon } from "lucide-react";
import type { Product } from "@/shared/types/product";

export type ProductBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const productBenefits: ProductBenefit[] = [
  {
    icon: Truck,
    title: "Быстрая доставка",
    description: "Отправим заказ в течение 24 часов после подтверждения.",
  },
  {
    icon: ShieldCheck,
    title: "Проверенное качество",
    description: "Каждый товар проходит контроль перед отправкой.",
  },
  {
    icon: BadgeCheck,
    title: "Лёгкий возврат",
    description: "Можно вернуть или обменять товар в течение 14 дней.",
  },
];

export const getProductRating = (product: Product | null) =>
  product?.rating?.rate ?? 4.8;

export const getProductReviewCount = (product: Product | null) =>
  product?.rating?.count ?? 128;

export const getProductCode = (product: Product | null) =>
  product ? `SKU-${String(product.id).padStart(4, "0")}` : "";

export const getProductCategoryLabel = (product: Product | null) =>
  product?.category ?? "Категория";
