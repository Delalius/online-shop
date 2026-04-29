import { useMemo, useState, type FormEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { useCartStore } from "@/features/cart/store";
import { CheckoutCommentSection } from "@/pages/Checkout/components/CheckoutCommentSection";
import { CheckoutContactSection } from "@/pages/Checkout/components/CheckoutContactSection";
import { CheckoutDeliverySection } from "@/pages/Checkout/components/CheckoutDeliverySection";
import { CheckoutNextSteps } from "@/pages/Checkout/components/CheckoutNextSteps";
import { CheckoutPaymentSection } from "@/pages/Checkout/components/CheckoutPaymentSection";
import { CheckoutSuccess } from "@/pages/Checkout/components/CheckoutSuccess";
import { CheckoutSummary } from "@/pages/Checkout/components/CheckoutSummary";
import {
  initialCheckoutForm,
  requiredCheckoutFields,
  validateCheckoutForm,
  type CheckoutField,
  type CheckoutForm,
} from "@/pages/Checkout/model";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const getTotal = useCartStore((state) => state.getTotal);
  const clearCart = useCartStore((state) => state.clearCart);

  const [form, setForm] = useState<CheckoutForm>(initialCheckoutForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<
    Partial<Record<CheckoutField, boolean>>
  >({});
  const [showErrors, setShowErrors] = useState(false);

  const itemsCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );
  const subtotal = getTotal();
  const deliveryFee = form.deliveryMethod === "courier" ? 7.99 : 0;
  const finalTotal = subtotal + deliveryFee;
  const errors = useMemo(() => validateCheckoutForm(form), [form]);
  const isFormValid = Object.keys(errors).length === 0;

  if (items.length === 0 && !isSubmitted) {
    return <Navigate to="/cart" replace />;
  }

  const handleFieldChange = <K extends CheckoutField>(
    field: K,
    value: CheckoutForm[K],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleFieldBlur = (field: CheckoutField) => {
    setTouched((current) => ({ ...current, [field]: true }));
  };

  const shouldShowError = (field: CheckoutField) =>
    Boolean(errors[field] && (touched[field] || showErrors));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowErrors(true);

    if (!isFormValid) {
      setTouched(
        requiredCheckoutFields.reduce<Partial<Record<CheckoutField, boolean>>>(
          (acc, field) => ({ ...acc, [field]: true }),
          {},
        ),
      );
      return;
    }

    clearCart();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <CheckoutSuccess form={form} />;
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fbf7f2_0%,#ffffff_52%,#eef6f0_100%)] px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-slate-700 shadow-sm transition hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to cart
          </Link>
          <span className="rounded-full bg-amber-50 px-4 py-2 font-medium text-amber-800">
            Checkout
          </span>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_420px]">
          <form
            id="checkout-form"
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_20px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-800">
                  Boutique checkout
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                  Checkout
                </h1>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Add your contact details, choose delivery and payment, and
                  review your selected products on the right.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 px-5 py-4 text-right">
                <p className="text-sm text-slate-500">Items in order</p>
                <p className="mt-1 text-2xl font-bold text-slate-950">
                  {itemsCount}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <CheckoutContactSection
                form={form}
                errors={errors}
                onChange={handleFieldChange}
                onBlur={handleFieldBlur}
                shouldShowError={shouldShowError}
              />
              <CheckoutDeliverySection
                form={form}
                errors={errors}
                onChange={handleFieldChange}
                onBlur={handleFieldBlur}
                shouldShowError={shouldShowError}
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
              <CheckoutPaymentSection
                paymentMethod={form.paymentMethod}
                onChange={(value) => handleFieldChange("paymentMethod", value)}
              />
              <CheckoutCommentSection
                comment={form.comment}
                onChange={(value) => handleFieldChange("comment", value)}
              />
            </div>
          </form>

          <aside className="space-y-6">
            <CheckoutSummary
              items={items}
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              finalTotal={finalTotal}
              isFormValid={isFormValid}
            />
            <CheckoutNextSteps />
          </aside>
        </div>
      </div>
    </div>
  );
}
