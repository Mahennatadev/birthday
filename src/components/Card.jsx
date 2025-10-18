import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function Card({ item }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = (e) => {
    e.preventDefault(); // jangan navigate
    e.stopPropagation();
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  const onEnded = () => setPlaying(false);

  return (
    <Link to={`/detail/${item.id}`} className="group block w-full">
      <div className="relative rounded-2xl overflow-hidden bg-white/5 aspect-[4/3]">
        <img
          src={item.cover}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

        {/* Play/Pause button */}
        <button
          onClick={toggle}
          className="absolute bottom-2 left-2 z-10 inline-flex items-center gap-2 text-xs
                     bg-black/70 hover:bg-black/80 px-3 py-1.5 rounded-full border border-white/10"
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
          {playing ? "Pause" : "Play"}
        </button>

        {/* Audio element */}
        <audio
          ref={audioRef}
          src={item.audio}
          preload="none"
          onEnded={onEnded}
        />
      </div>

      <div className="mt-2">
        <div className="text-sm md:text-base font-semibold leading-tight">
          {item.title}
        </div>
        <div className="text-xs text-white/60">{item.tag}</div>
      </div>
    </Link>
  );
}
