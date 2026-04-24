export const CheckoutNextSteps = () => {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_20px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur">
      <h2 className="text-lg font-bold text-slate-950">Что дальше</h2>
      <div className="mt-5 space-y-4">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">1. Подтверждение заказа</p>
          <p className="mt-1 text-sm text-slate-500">
            Мы свяжемся с вами для проверки адреса и времени доставки.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">2. Подготовка к отправке</p>
          <p className="mt-1 text-sm text-slate-500">
            Обычно собираем и передаём заказ в службу доставки в течение дня.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">3. Получение</p>
          <p className="mt-1 text-sm text-slate-500">
            Отправим номер накладной или сообщим о готовности к самовывозу.
          </p>
        </div>
      </div>
    </section>
  );
};
