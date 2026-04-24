import { CreditCard, ShieldCheck } from "lucide-react";
import type { CheckoutForm } from "@/pages/Checkout/model";

type Props = {
  paymentMethod: CheckoutForm["paymentMethod"];
  onChange: (value: CheckoutForm["paymentMethod"]) => void;
};

export const CheckoutPaymentSection = ({ paymentMethod, onChange }: Props) => {
  return (
    <section className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5">
      <h2 className="text-lg font-bold text-slate-950">Оплата</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onChange("card")}
          className={`rounded-2xl border px-4 py-4 text-left transition ${
            paymentMethod === "card"
              ? "border-sky-500 bg-sky-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <CreditCard className="h-5 w-5 text-sky-600" />
          <p className="mt-3 font-semibold text-slate-900">Картой онлайн</p>
          <p className="mt-1 text-sm text-slate-500">Visa, Mastercard, Apple Pay</p>
        </button>

        <button
          type="button"
          onClick={() => onChange("cash")}
          className={`rounded-2xl border px-4 py-4 text-left transition ${
            paymentMethod === "cash"
              ? "border-sky-500 bg-sky-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <ShieldCheck className="h-5 w-5 text-sky-600" />
          <p className="mt-3 font-semibold text-slate-900">При получении</p>
          <p className="mt-1 text-sm text-slate-500">
            Оплата наличными или картой курьеру
          </p>
        </button>
      </div>
    </section>
  );
};
