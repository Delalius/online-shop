import { BadgeCheck, ShieldCheck, Truck } from "lucide-react";
import type { Product } from "@/shared/types/product";

type Props = {
  product: Product;
};

export const ProductInfoGrid = ({ product }: Props) => {
  const isShampoo = product.productType === "shampoo";

  return (
    <div className="mt-8 grid items-stretch gap-6 xl:grid-cols-2">
      <section className="flex h-full flex-col rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-[0_20px_80px_-45px_rgba(28,25,23,0.45)] backdrop-blur">
        <h2 className="min-h-[2rem] text-lg font-bold text-stone-950">
          Boutique experience
        </h2>
        <div className="mt-5 grid flex-1 auto-rows-fr gap-4 md:grid-cols-3">
          <div className="h-full rounded-2xl bg-stone-50 p-4">
            <p className="text-sm text-stone-500">For whom</p>
            <p className="mt-1 font-semibold text-stone-950">
              {isShampoo
                ? "For a daily routine, a salon-style reset, or a thoughtful care gift"
                : "For a personal wardrobe, a gift, or a first niche fragrance"}
            </p>
          </div>
          <div className="h-full rounded-2xl bg-stone-50 p-4">
            <p className="text-sm text-stone-500">Packaging</p>
            <p className="mt-1 font-semibold text-stone-950">
              {isShampoo
                ? "Protective box, tissue paper, and a card with care notes"
                : "Rigid box, tissue paper, and a card with fragrance notes"}
            </p>
          </div>
          <div className="h-full rounded-2xl bg-stone-50 p-4">
            <p className="text-sm text-stone-500">Consultation</p>
            <p className="mt-1 font-semibold text-stone-950">
              {isShampoo
                ? "We can suggest similar care formulas after your order is placed"
                : "We can suggest similar notes after your order is placed"}
            </p>
          </div>
        </div>
      </section>

      <section className="flex h-full flex-col rounded-[2rem] border border-stone-900 bg-stone-950 p-6 text-white shadow-[0_20px_80px_-45px_rgba(28,25,23,0.6)]">
        <h2 className="min-h-[2rem] text-lg font-bold uppercase tracking-[0.2em] text-amber-200">
          Purchase details
        </h2>
        <div className="mt-5 grid flex-1 auto-rows-fr gap-4 md:grid-cols-3">
          <div className="flex h-full items-start gap-3 rounded-2xl bg-white/5 p-4">
            <Truck className="mt-0.5 h-5 w-5 text-amber-200" />
            <div>
              <p className="font-semibold">Delivery in 1-4 days</p>
              <p className="mt-1 text-sm text-slate-300">
                Exact timing is shown during checkout.
              </p>
            </div>
          </div>
          <div className="flex h-full items-start gap-3 rounded-2xl bg-white/5 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-amber-200" />
            <div>
              <p className="font-semibold">Secure payment</p>
              <p className="mt-1 text-sm text-slate-300">
                Standard payment methods are supported without hidden fees.
              </p>
            </div>
          </div>
          <div className="flex h-full items-start gap-3 rounded-2xl bg-white/5 p-4">
            <BadgeCheck className="mt-0.5 h-5 w-5 text-amber-200" />
            <div>
              <p className="font-semibold">14-day return</p>
              <p className="mt-1 text-sm text-slate-300">
                If the item is not right, we will help arrange a return.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
