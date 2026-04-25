import { CreditCard, ShieldCheck } from "lucide-react";
import type { CheckoutForm } from "@/pages/Checkout/model";

type Props = {
  paymentMethod: CheckoutForm["paymentMethod"];
  onChange: (value: CheckoutForm["paymentMethod"]) => void;
};

export const CheckoutPaymentSection = ({ paymentMethod, onChange }: Props) => {
  return (
    <section className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5">
      <h2 className="text-lg font-bold text-slate-950">Payment</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onChange("card")}
          className={`rounded-2xl border px-4 py-4 text-left transition ${
            paymentMethod === "card"
              ? "border-amber-700 bg-amber-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <CreditCard className="h-5 w-5 text-amber-800" />
          <p className="mt-3 font-semibold text-slate-900">Pay online</p>
          <p className="mt-1 text-sm text-slate-500">Visa, Mastercard, Apple Pay</p>
        </button>

        <button
          type="button"
          onClick={() => onChange("cash")}
          className={`rounded-2xl border px-4 py-4 text-left transition ${
            paymentMethod === "cash"
              ? "border-amber-700 bg-amber-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <ShieldCheck className="h-5 w-5 text-amber-800" />
          <p className="mt-3 font-semibold text-slate-900">Pay on delivery</p>
          <p className="mt-1 text-sm text-slate-500">
            Pay by cash or card to the courier
          </p>
        </button>
      </div>
    </section>
  );
};
