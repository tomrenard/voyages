// Native disclosure: answers stay in the HTML for search engines.
export function FaqList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="border-b border-gray-300">
      {items.map((item, idx) => (
        <details
          key={item.question}
          className="group border-t border-gray-300 py-6"
          open={idx === 0}
        >
          <summary className="flex list-none items-start justify-between gap-6 font-serif text-xl text-gray-900 [&::-webkit-details-marker]:hidden">
            <h3>{item.question}</h3>
            <span
              aria-hidden
              className="text-primary mt-0.5 text-2xl leading-none transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
