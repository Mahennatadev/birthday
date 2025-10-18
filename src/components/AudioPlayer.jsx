import { useRef, useState, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";

export default function AudioPlayer({ src, title = "Our Song" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const pauseOthers = () => {
    document.querySelectorAll("audio").forEach((el) => {
      if (el !== audioRef.current) el.pause();
    });
  };

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    setPlaying(false);
    a.src = src;
    a.load();
  }, [src]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      pauseOthers();
      const p = a.play();
      if (p && p.catch)
        p.then(() => setPlaying(true)).catch(() => setPlaying(false));
      else setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5">
      <div className="p-2 rounded-full bg-white/10">
        <Music size={18} />
      </div>
      <div className="mr-auto">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-white/60">Tekan Play untuk memulai</div>
      </div>
      <button
        onClick={toggle}
        className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg font-semibold"
      >
        {playing ? (
          <span className="inline-flex items-center gap-2">
            <Pause size={16} /> Pause
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <Play size={16} /> Play
          </span>
        )}
      </button>
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}
