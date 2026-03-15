import { Link, NavLink, useLocation } from "react-router-dom";
import type { User } from "../App";

type NavbarProps = {
  user: User | null;
  cartCount: number;
  onLogout: () => void;
};

export const Navbar = ({ user, cartCount, onLogout }: NavbarProps) => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(path));

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 shadow-glow-primary">
            <span className="text-lg font-black text-white">L</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="bg-gradient-to-r from-primary-300 via-white to-accent-300 bg-clip-text text-base font-semibold text-transparent">
              Lumina
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Learning Studio
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <NavLink
            to="/"
            className={isActive("/") ? "text-white" : "hover:text-white"}
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={isActive("/courses") ? "text-white" : "hover:text-white"}
          >
            Courses
          </NavLink>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-slate-200 hover:border-primary-500/60 hover:text-white"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-[11px] font-semibold text-white">
              {cartCount}
            </span>
            <span className="hidden sm:inline">Cart</span>
          </Link>

          {user ? (
            <>
              <div className="hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-[11px] text-slate-200 sm:flex">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-xs font-semibold text-white">
                  {user.name[0]?.toUpperCase()}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] font-semibold text-slate-50">
                    {user.name}
                  </span>
                  <span className="text-[10px] text-slate-400">Learner</span>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="rounded-full border border-slate-700 px-3 py-1.5 text-[11px] font-semibold text-slate-200 hover:border-accent-500 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="btn-primary text-xs px-4 py-1.5">
              Login / Sign up
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

