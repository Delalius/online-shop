import {
  getCheckoutInputClassName,
  type CheckoutForm,
  type FormErrors,
} from "@/pages/Checkout/model";

type Props = {
  form: CheckoutForm;
  errors: FormErrors;
  onChange: (field: "fullName" | "phone" | "email", value: string) => void;
  onBlur: (field: "fullName" | "phone" | "email") => void;
  shouldShowError: (field: "fullName" | "phone" | "email") => boolean;
};

export const CheckoutContactSection = ({
  form,
  errors,
  onChange,
  onBlur,
  shouldShowError,
}: Props) => {
  return (
    <section className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5">
      <h2 className="text-lg font-bold text-slate-950">Контактные данные</h2>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Имя и фамилия
        </span>
        <input
          value={form.fullName}
          onChange={(event) => onChange("fullName", event.target.value)}
          onBlur={() => onBlur("fullName")}
          className={getCheckoutInputClassName(shouldShowError("fullName"))}
          placeholder="Иван Петров"
          aria-invalid={shouldShowError("fullName")}
        />
        {shouldShowError("fullName") && (
          <span className="mt-2 block text-sm text-rose-500">
            {errors.fullName}
          </span>
        )}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Телефон
        </span>
        <input
          value={form.phone}
          onChange={(event) => onChange("phone", event.target.value)}
          onBlur={() => onBlur("phone")}
          className={getCheckoutInputClassName(shouldShowError("phone"))}
          placeholder="+380 67 123 45 67"
          aria-invalid={shouldShowError("phone")}
        />
        {shouldShowError("phone") && (
          <span className="mt-2 block text-sm text-rose-500">{errors.phone}</span>
        )}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input
          type="email"
          value={form.email}
          onChange={(event) => onChange("email", event.target.value)}
          onBlur={() => onBlur("email")}
          className={getCheckoutInputClassName(shouldShowError("email"))}
          placeholder="you@example.com"
          aria-invalid={shouldShowError("email")}
        />
        {shouldShowError("email") && (
          <span className="mt-2 block text-sm text-rose-500">{errors.email}</span>
        )}
      </label>
    </section>
  );
};
