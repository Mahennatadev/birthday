import { useEffect } from "react";

export default function Modal({ open, onClose, title, children, actions }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
        onClick={onClose}
      />
      {/* dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className="absolute inset-0 flex items-center justify-center p-4"
      >
        <div className="w-full max-w-lg rounded-2xl bg-[#11121a] border border-white/10 shadow-2xl">
          <div className="px-6 py-4 border-b border-white/10">
            <h3 className="text-xl md:text-2xl font-extrabold">{title}</h3>
          </div>
          <div className="px-6 py-5 text-white/85 space-y-3">{children}</div>
          <div className="px-6 py-4 flex items-center justify-end gap-3 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
              autoFocus
            >
              Tutup
            </button>
            {actions}
          </div>
        </div>
      </div>
    </div>
  );
}
