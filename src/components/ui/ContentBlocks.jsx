const ContentBlocks = ({ blocks = [] }) => {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-4"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="text-xl sm:text-2xl font-semibold text-white pt-2">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={index} className="space-y-2.5 text-slate-300 leading-relaxed">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="space-y-2.5 text-slate-300 leading-relaxed">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xs font-semibold text-blue-300">
                      {itemIndex + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "code":
            return (
              <pre
                key={index}
                className="overflow-x-auto rounded-2xl border border-slate-700/70 bg-[#070c18] p-4 sm:p-5 text-xs sm:text-sm leading-relaxed text-slate-200"
              >
                <code>{block.code}</code>
              </pre>
            );
          case "note":
            return (
              <div
                key={index}
                className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-100"
              >
                {block.text}
              </div>
            );
          default:
            return (
              <p key={index} className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
};

export default ContentBlocks;
