import { BadgeCheck, ShieldCheck, Truck } from "lucide-react";

export const ProductInfoGrid = () => {
  return (
    <div className="mt-8 grid items-stretch gap-6 xl:grid-cols-2">
      <section className="flex h-full flex-col rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_20px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur">
        <h2 className="min-h-[2rem] text-lg font-bold text-slate-950">
          Почему этот товар удобен
        </h2>
        <div className="mt-5 grid flex-1 auto-rows-fr gap-4 md:grid-cols-3">
          <div className="h-full rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Подходит для</p>
            <p className="mt-1 font-semibold text-slate-900">
              Повседневного использования и подарка
            </p>
          </div>
          <div className="h-full rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Ощущение покупки</p>
            <p className="mt-1 font-semibold text-slate-900">
              Чистый дизайн, понятная цена и быстрая доставка без лишних шагов
            </p>
          </div>
          <div className="h-full rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Поддержка</p>
            <p className="mt-1 font-semibold text-slate-900">
              Ответим по заказу, доставке и возврату после оформления
            </p>
          </div>
        </div>
      </section>

      <section className="flex h-full flex-col rounded-[2rem] border border-white/70 bg-slate-950 p-6 text-white shadow-[0_20px_80px_-45px_rgba(15,23,42,0.6)]">
        <h2 className="min-h-[2rem] text-lg font-bold uppercase tracking-[0.2em] text-sky-300">
          Детали покупки
        </h2>
        <div className="mt-5 grid flex-1 auto-rows-fr gap-4 md:grid-cols-3">
          <div className="flex h-full items-start gap-3 rounded-2xl bg-white/5 p-4">
            <Truck className="mt-0.5 h-5 w-5 text-sky-300" />
            <div>
              <p className="font-semibold">Доставка 1-4 дня</p>
              <p className="mt-1 text-sm text-slate-300">
                Точные сроки покажем при оформлении заказа.
              </p>
            </div>
          </div>
          <div className="flex h-full items-start gap-3 rounded-2xl bg-white/5 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-sky-300" />
            <div>
              <p className="font-semibold">Безопасная оплата</p>
              <p className="mt-1 text-sm text-slate-300">
                Поддерживаем стандартные способы оплаты без скрытых комиссий.
              </p>
            </div>
          </div>
          <div className="flex h-full items-start gap-3 rounded-2xl bg-white/5 p-4">
            <BadgeCheck className="mt-0.5 h-5 w-5 text-sky-300" />
            <div>
              <p className="font-semibold">Возврат 14 дней</p>
              <p className="mt-1 text-sm text-slate-300">
                Если товар не подойдёт, поможем оформить возврат.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
