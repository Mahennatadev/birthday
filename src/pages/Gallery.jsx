import { items } from "../data/sample";

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((i) => (
        <figure
          key={i.id}
          className="relative rounded-2xl overflow-hidden border border-white/10"
        >
          <img
            src={i.cover}
            alt={i.title}
            className="h-[220px] w-full object-cover"
          />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="font-semibold">{i.title}</div>
            <div className="text-sm text-white/70">{i.desc}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
