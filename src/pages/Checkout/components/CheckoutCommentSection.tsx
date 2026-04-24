type Props = {
  comment: string;
  onChange: (value: string) => void;
};

export const CheckoutCommentSection = ({ comment, onChange }: Props) => {
  return (
    <section className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5">
      <h2 className="text-lg font-bold text-slate-950">Комментарий к заказу</h2>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Дополнительная информация
        </span>
        <textarea
          value={comment}
          onChange={(event) => onChange(event.target.value)}
          rows={6}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-500"
          placeholder="Например: позвонить за 30 минут, оставить у консьержа..."
        />
      </label>
    </section>
  );
};
