const DraftNotice = ({ items = [], title = "Draft - content review needed" }) => {
  if (!items.length) return null;

  return (
    <aside className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:p-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-amber-100/90">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DraftNotice;
