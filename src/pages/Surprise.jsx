import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import { motion } from "framer-motion";
import { items } from "../data/sample";

export default function Surprise() {
  const { id } = useParams();
  const active = items.find((i) => i.id === id) ?? items[0];
  const [current, setCurrent] = useState(active);

  useEffect(() => {
    document.title = "🎉 Surprise!";
    setCurrent(active);
  }, [id]);

  const defaultLines = [
    "Hari ini kamu bertambah usia, dan hatiku bertambah syukur.",
    "Terima kasih sudah hadir: teman cerita, partner berjuang, peluk terhangat.",
    "Semoga setiap mimpimu menemukan jalannya—aku berjalan di sampingmu.",
    "Selamat ulang tahun. I love you—today, tomorrow, always. 💖",
  ];

  const lines = current?.lines?.length ? current.lines : defaultLines;

  const src = current.audio;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* tombol kembali */}
      <div className="mb-4">
        <Link
          to={`/detail/${active.id}`}
          className="inline-block bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg text-sm"
        >
          ← Kembali ke Detail
        </Link>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-black"
      >
        Kejutan untukmu ✨
      </motion.h1>

      <div className="mt-4 space-y-3">
        {lines.map((t, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="text-white/80"
          >
            {t}
          </motion.p>
        ))}
      </div>

      {/* Pemutar lagu khusus item ini */}
      <div className="mt-6">
        <AudioPlayer
          key={current.id}
          src={src}
          title={`Playing: ${current.title}`}
        />
      </div>

      {/* (opsional) playlist mini: klik thumb ganti lagu */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => setCurrent(it)}
            className={`relative rounded-xl overflow-hidden border ${
              current.id === it.id ? "border-primary" : "border-white/10"
            }`}
            title={`Putar ${it.title}`}
          >
            <img
              src={it.cover}
              alt={it.title}
              className="h-28 w-full object-cover"
            />
            <span className="absolute bottom-1 left-1 right-1 text-xs bg-black/60 rounded px-1.5 py-0.5">
              {it.title}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => {
            // konfeti sederhana
            for (let i = 0; i < 80; i++) {
              const s = document.createElement("span");
              s.className = "confetti";
              s.style.cssText = `position:fixed;left:${
                Math.random() * 100
              }vw;top:-10px;width:8px;height:12px;background:hsl(${
                Math.random() * 360
              } 90% 60%);transform:rotate(${
                Math.random() * 360
              }deg);opacity:.9;z-index:50`;
              document.body.appendChild(s);
              const d = 5 + Math.random() * 5;
              s.animate(
                [
                  { transform: `translateY(0)` },
                  { transform: `translateY(${window.innerHeight + 60}px)` },
                ],
                { duration: d * 1000, iterations: 1, easing: "linear" }
              ).onfinish = () => s.remove();
            }
          }}
          className="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg font-semibold"
        >
          Luncurkan Konfeti 🥳
        </button>
      </div>
    </div>
  );
}
