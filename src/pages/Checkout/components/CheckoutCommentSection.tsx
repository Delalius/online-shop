type Props = {
  comment: string;
  onChange: (value: string) => void;
};

export const CheckoutCommentSection = ({ comment, onChange }: Props) => {
  return (
    <section className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5">
      <h2 className="text-lg font-bold text-slate-950">Order note</h2>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Additional information
        </span>
        <textarea
          value={comment}
          onChange={(event) => onChange(event.target.value)}
          rows={6}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-700"
          placeholder="For example: call 30 minutes before arrival, leave with concierge..."
        />
      </label>
    </section>
  );
};
