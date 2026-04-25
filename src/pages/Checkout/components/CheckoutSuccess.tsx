import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import type { CheckoutForm } from "@/pages/Checkout/model";

type Props = {
  form: CheckoutForm;
};

export const CheckoutSuccess = ({ form }: Props) => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fbf7f2_0%,#ffffff_52%,#eef6f0_100%)] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/70 bg-white/90 p-8 text-center shadow-[0_20px_80px_-45px_rgba(28,25,23,0.45)] backdrop-blur sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <BadgeCheck className="h-8 w-8" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Order placed
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          We have received your details and will contact you soon to confirm the
          order. A confirmation email will be sent to {form.email || "your email"}.
        </p>
        <div className="mt-8 grid gap-4 rounded-[1.5rem] bg-slate-50 p-5 text-left sm:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">Recipient</p>
            <p className="mt-1 font-semibold text-slate-900">{form.fullName}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Phone</p>
            <p className="mt-1 font-semibold text-slate-900">{form.phone}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Delivery</p>
            <p className="mt-1 font-semibold text-slate-900">
              {form.deliveryMethod === "courier" ? "Courier" : "Pickup"}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Payment</p>
            <p className="mt-1 font-semibold text-slate-900">
              {form.paymentMethod === "card"
                ? "Online card payment"
                : "Payment on delivery"}
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Back to collection
          </Link>
          <Link
            to="/cart"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Open cart
          </Link>
        </div>
      </div>
    </div>
  );
};
