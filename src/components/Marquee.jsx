function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-neutral-800/60">
      <div className="flex w-max animate-marquee gap-12">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-bold text-neutral-700 hover:text-amber-400 transition whitespace-nowrap"
          >
            {item} <span className="text-amber-500/40 mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;