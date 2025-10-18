import Row from "../components/Row";
import { items } from "../data/sample";

export default function Browse() {
  return (
    <div className="pt-6">
      <Row title="Semua Kenangan" items={items} />
    </div>
  );
}
