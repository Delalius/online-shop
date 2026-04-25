import { ShoppingBag, Truck } from "lucide-react";
import {
  getCheckoutInputClassName,
  type CheckoutForm,
  type FormErrors,
} from "@/pages/Checkout/model";

type Props = {
  form: CheckoutForm;
  errors: FormErrors;
  onChange: (
    field: "deliveryMethod" | "city" | "address",
    value: CheckoutForm["deliveryMethod"] | string
  ) => void;
  onBlur: (field: "city" | "address") => void;
  shouldShowError: (field: "city" | "address") => boolean;
};

export const CheckoutDeliverySection = ({
  form,
  errors,
  onChange,
  onBlur,
  shouldShowError,
}: Props) => {
  return (
    <section className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5">
      <h2 className="text-lg font-bold text-slate-950">Delivery</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onChange("deliveryMethod", "courier")}
          className={`rounded-2xl border px-4 py-4 text-left transition ${
            form.deliveryMethod === "courier"
              ? "border-amber-700 bg-amber-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <Truck className="h-5 w-5 text-amber-800" />
          <p className="mt-3 font-semibold text-slate-900">Courier</p>
          <p className="mt-1 text-sm text-slate-500">1-4 days, to your door</p>
        </button>

        <button
          type="button"
          onClick={() => onChange("deliveryMethod", "pickup")}
          className={`rounded-2xl border px-4 py-4 text-left transition ${
            form.deliveryMethod === "pickup"
              ? "border-amber-700 bg-amber-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <ShoppingBag className="h-5 w-5 text-amber-800" />
          <p className="mt-3 font-semibold text-slate-900">Pickup</p>
          <p className="mt-1 text-sm text-slate-500">
            Free from a pickup point
          </p>
        </button>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          City
        </span>
        <input
          value={form.city}
          onChange={(event) => onChange("city", event.target.value)}
          onBlur={() => onBlur("city")}
          className={getCheckoutInputClassName(shouldShowError("city"))}
          placeholder="Paris"
          aria-invalid={shouldShowError("city")}
        />
        {shouldShowError("city") && (
          <span className="mt-2 block text-sm text-rose-500">{errors.city}</span>
        )}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Address or pickup point
        </span>
        <input
          value={form.address}
          onChange={(event) => onChange("address", event.target.value)}
          onBlur={() => onBlur("address")}
          className={getCheckoutInputClassName(shouldShowError("address"))}
          placeholder="12 Rue Saint-Honoré"
          aria-invalid={shouldShowError("address")}
        />
        {shouldShowError("address") && (
          <span className="mt-2 block text-sm text-rose-500">
            {errors.address}
          </span>
        )}
      </label>
    </section>
  );
};
