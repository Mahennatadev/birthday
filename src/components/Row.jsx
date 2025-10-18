import Card from "./Card";

export default function Row({ title, items = [] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 my-6">
      <h2 className="text-lg md:text-2xl font-bold mb-4">{title}</h2>
      {/* dari horizontal scroll -> grid penuh container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((i) => (
          <Card key={i.id} item={i} />
        ))}
      </div>
    </section>
  );
}
