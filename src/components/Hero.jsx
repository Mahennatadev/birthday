import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import imageHero from "../assets/hero.jpg";
import Celebration from "./Celebrations"; // efek konfeti-mu
import Modal from "./Modal"; // pastikan file Modal.jsx sudah dibuat

export default function Hero() {
  const [party, setParty] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openSurprise = (e) => {
    e.preventDefault();
    setParty(true); // animasi konfeti di background (opsional)
    setOpen(true); // tampilkan modal ucapan
  };

  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src={imageHero}
          alt="hero"
          className="w-full h-[60vh] md:h-[70vh] object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-[60vh] md:h-[70vh] flex items-end pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-black drop-shadow">
            Selamat Ulang Tahun, <span className="text-primary">Sayang</span>!
            🎂
          </h1>
          <p className="max-w-2xl text-white/80 mt-3">
            Semoga harimu penuh tawa, pelukan hangat, dan kejutan manis.
          </p>
          <div className="mt-5 flex gap-3">
            {/* buka modal + animasi */}
            <Link
              to="/gallery"
              onClick={openSurprise}
              className="bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-lg font-semibold shadow-soft"
            >
              Buka Kejutan ✨
            </Link>

            {/* link biasa ke galeri */}
            <Link
              to="/gallery"
              className="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg font-semibold"
            >
              Lihat Kenangan
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Efek konfeti (opsional) */}
      <Celebration
        show={party}
        onDone={() => setParty(false)}
        duration={1200}
      />

      {/* Modal ucapan */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Selamat Ulang Tahun Cemuyuku! 🎉"
        actions={
          <button
            onClick={() => {
              setOpen(false);
              navigate("/gallery");
            }}
            className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 font-semibold"
          >
            Lihat Kenangan
          </button>
        }
      >
        <p>
          Sayang, hari ini udah semakin menua yaa, ututuuuu budak ketut nii udaa
          becal.
        </p>
        <p>
          Makasih yaa sayang udah ada buat aku selama ini, aku sayaang banget
          sama kamu 🤍.
        </p>
        <p>
          Semoga semua yang kamu cita-citakan dan impikan bisa terwujud yaa
          sayaang.
        </p>
        <p>
          Selamat ulang tahun cantikku. I love you—today, tomorrow, always. 💖
        </p>
      </Modal>
    </section>
  );
}
