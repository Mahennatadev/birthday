import { useParams, Link } from "react-router-dom";
import { items } from "../data/sample";

export default function Detail() {
  const { id } = useParams();
  const item = items.find((i) => i.id === id) ?? items[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
      <img
        src={item.cover}
        alt={item.title}
        className="rounded-2xl w-full h-[260px] md:h-[360px] object-cover"
      />
      <div>
        <h1 className="text-3xl font-black">{item.title}</h1>
        <div className="text-white/60">{item.tag}</div>
        <p className="mt-3 text-white/80">{item.desc}</p>
        <Link
          to={`/surprise/${item.id}`}
          className="inline-block mt-6 bg-primary hover:bg-primary/90 px-5 py-3 rounded-lg font-semibold"
        >
          Putar Kejutan 💖
        </Link>
      </div>
    </div>
  );
}
