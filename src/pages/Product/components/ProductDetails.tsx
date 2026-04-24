type Props = {
  description: string;
  rating: number;
  reviewCount: number;
  category: string;
};

export const ProductDetails = ({
  description,
  rating,
  reviewCount,
  category,
}: Props) => {
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_20px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur">
      <h2 className="text-2xl font-bold text-slate-950">Описание и характеристики</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Материал и уход</p>
          <p className="mt-1 font-semibold text-slate-900">
            Рекомендуем бережное использование и хранение в сухом месте.
          </p>
        </div>
        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Формат поставки</p>
          <p className="mt-1 font-semibold text-slate-900">
            1 товар в упаковке, готов к отправке сразу после заказа.
          </p>
        </div>
        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Рейтинг покупателей</p>
          <p className="mt-1 font-semibold text-slate-900">
            {rating.toFixed(1)} из 5 на основе {reviewCount} отзывов
          </p>
        </div>
        <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Подходит для категории</p>
          <p className="mt-1 font-semibold capitalize text-slate-900">{category}</p>
        </div>
      </div>
    </div>
  );
};
