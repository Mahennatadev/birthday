import { Outlet, NavLink } from "react-router-dom";
import { Search, Heart } from "lucide-react";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-10">
            <div className="text-primary font-black tracking-wide text-2xl">
              KMFLIX
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-primary ${isActive ? "text-primary" : ""}`
                }
              >
                Home
              </NavLink>
              {/* Browse dihapus */}
              <NavLink to="/gallery" className="hover:text-primary">
                Gallery
              </NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-white/10 hover:bg-white/20 p-2">
              <Search size={18} />
            </button>
            <button className="rounded-full bg-primary/90 hover:bg-primary p-2">
              <Heart size={18} />
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="text-center text-white/60 text-sm py-8">
        Made with ♥ for your birthday.
      </footer>
    </div>
  );
}
