export const CheckoutNextSteps = () => {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_20px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur">
      <h2 className="text-lg font-bold text-slate-950">What happens next</h2>
      <div className="mt-5 space-y-4">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">1. Order confirmation</p>
          <p className="mt-1 text-sm text-slate-500">
            We will contact you to confirm the address and delivery time.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">2. Dispatch preparation</p>
          <p className="mt-1 text-sm text-slate-500">
            Orders are usually packed and handed to the delivery service within a day.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">3. Delivery or pickup</p>
          <p className="mt-1 text-sm text-slate-500">
            We will send a tracking number or notify you when pickup is ready.
          </p>
        </div>
      </div>
    </section>
  );
};
