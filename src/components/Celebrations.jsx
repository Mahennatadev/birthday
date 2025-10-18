import { useEffect, useRef } from "react";

export default function Celebration({ show, onDone, duration = 1400 }) {
  if (!show) return null;
  const canvasRef = useRef(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    const ctx = cvs.getContext("2d");
    let raf,
      start,
      stopped = false;

    // full screen
    const fit = () => {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    };
    fit();
    window.addEventListener("resize", fit, { passive: true });

    // particles
    const colors = ["#ff6ea8", "#ffd166", "#60a5fa", "#34d399", "#f472b6"];
    const parts = Array.from({ length: 180 }, () => ({
      x: Math.random() * cvs.width,
      y: -20 - Math.random() * 200,
      s: 6 + Math.random() * 8,
      vx: -2 + Math.random() * 4,
      vy: 2 + Math.random() * 3,
      a: Math.random() * Math.PI * 2,
      va: -0.2 + Math.random() * 0.4,
      c: colors[(Math.random() * colors.length) | 0],
    }));

    // sparkle dots
    const sparks = Array.from({ length: 80 }, () => ({
      x: Math.random() * cvs.width,
      y: Math.random() * cvs.height * 0.5,
      r: 1 + Math.random() * 2,
      v: 0.5 + Math.random() * 1.2,
    }));

    const draw = (ts) => {
      if (!start) start = ts;
      const t = ts - start;
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      // confetti squares
      for (const p of parts) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.a += p.va));
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.95;
        ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s);
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // gravity
        if (p.y > cvs.height + 40) {
          p.y = -20;
          p.vy = 2 + Math.random() * 3;
        }
      }

      // sparkles
      ctx.fillStyle = "#ffffff";
      for (const s of sparks) {
        ctx.globalAlpha = 0.7 + Math.sin(t / 200 + s.x) * 0.3;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.v;
        if (s.y > cvs.height * 0.75) s.y = Math.random() * 80;
      }

      if (!stopped) raf = requestAnimationFrame(draw);
      if (t >= duration) {
        stopped = true;
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", fit);
        onDone?.();
      }
    };

    raf = requestAnimationFrame(draw);
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", fit);
    };
  }, [show, onDone, duration]);

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
