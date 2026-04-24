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
      <h2 className="text-lg font-bold text-slate-950">Доставка</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onChange("deliveryMethod", "courier")}
          className={`rounded-2xl border px-4 py-4 text-left transition ${
            form.deliveryMethod === "courier"
              ? "border-sky-500 bg-sky-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <Truck className="h-5 w-5 text-sky-600" />
          <p className="mt-3 font-semibold text-slate-900">Курьером</p>
          <p className="mt-1 text-sm text-slate-500">1-4 дня, до двери</p>
        </button>

        <button
          type="button"
          onClick={() => onChange("deliveryMethod", "pickup")}
          className={`rounded-2xl border px-4 py-4 text-left transition ${
            form.deliveryMethod === "pickup"
              ? "border-sky-500 bg-sky-50"
              : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <ShoppingBag className="h-5 w-5 text-sky-600" />
          <p className="mt-3 font-semibold text-slate-900">Самовывоз</p>
          <p className="mt-1 text-sm text-slate-500">
            Бесплатно из пункта выдачи
          </p>
        </button>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Город
        </span>
        <input
          value={form.city}
          onChange={(event) => onChange("city", event.target.value)}
          onBlur={() => onBlur("city")}
          className={getCheckoutInputClassName(shouldShowError("city"))}
          placeholder="Киев"
          aria-invalid={shouldShowError("city")}
        />
        {shouldShowError("city") && (
          <span className="mt-2 block text-sm text-rose-500">{errors.city}</span>
        )}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Адрес или отделение
        </span>
        <input
          value={form.address}
          onChange={(event) => onChange("address", event.target.value)}
          onBlur={() => onBlur("address")}
          className={getCheckoutInputClassName(shouldShowError("address"))}
          placeholder="ул. Крещатик, 10"
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
