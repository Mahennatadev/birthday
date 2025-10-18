import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Detail from "./pages/Detail";
import Gallery from "./pages/Gallery";
import Surprise from "./pages/Surprise";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/surprise/:id" element={<Surprise />} />
      </Route>
    </Routes>
  );
}
