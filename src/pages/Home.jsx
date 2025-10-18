import Hero from "../components/Hero";
import Row from "../components/Row";
import { items } from "../data/sample";

export default function Home() {
  return (
    <div>
      <Hero />
      <Row title="Kenangan Terbaru" items={items} />
    </div>
  );
}
