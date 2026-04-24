import type { CartItem } from "@/features/cart/store";

type Props = {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  finalTotal: number;
  isFormValid: boolean;
};

export const CheckoutSummary = ({
  items,
  subtotal,
  deliveryFee,
  finalTotal,
  isFormValid,
}: Props) => {
  return (
    <section className="rounded-[2rem] border border-slate-900 bg-slate-950 p-6 text-white shadow-[0_20px_80px_-45px_rgba(15,23,42,0.65)]">
      <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
        Ваш заказ
      </p>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-300">
                {item.quantity} x ${item.price.toFixed(2)}
              </p>
            </div>
            <p className="font-semibold text-white">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3 rounded-[1.5rem] bg-white/5 p-4">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>Товары</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>Доставка</span>
          <span>{deliveryFee === 0 ? "Бесплатно" : `$${deliveryFee.toFixed(2)}`}</span>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-lg font-semibold text-white">
          <span>Итого</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="submit"
        form="checkout-form"
        disabled={!isFormValid}
        className="mt-6 w-full rounded-2xl bg-sky-500 px-5 py-4 text-base font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        Подтвердить заказ
      </button>
    </section>
  );
};
