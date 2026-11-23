import { Globe, House, Scale, Settings } from "lucide-react";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-48 shrink-0 flex-col items-center justify-between overflow-hidden bg-sidebar px-4 py-6 text-slate-100 max-sm:w-16 max-sm:px-2">
      <div className="flex flex-col items-center">
        <img
          src="/logo.png"
          alt="GeoMetric Logo"
          className="mb-6 w-[120px] object-contain max-sm:mb-8 max-sm:w-12"
        />
        <nav className="flex w-full flex-col gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors max-sm:justify-center max-sm:px-0 ${
                isActive
                  ? "bg-brand text-white shadow-sm"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <House size={18} />
            <span className="max-sm:hidden">Dashboard</span>
          </NavLink>
          <NavLink
            to="/countries"
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors max-sm:justify-center max-sm:px-0 ${
                isActive
                  ? "bg-brand text-white shadow-sm"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Globe size={18} />
            <span className="max-sm:hidden">Countries</span>
          </NavLink>
          <NavLink
            to="/compare"
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors max-sm:justify-center max-sm:px-0 ${
                isActive
                  ? "bg-brand text-white shadow-sm"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Scale size={18} />
            <span className="max-sm:hidden">Compare</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors max-sm:justify-center max-sm:px-0 ${
                isActive
                  ? "bg-brand text-white shadow-sm"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Settings size={18} />
            <span className="max-sm:hidden">Settings</span>
          </NavLink>
        </nav>
      </div>
      <div className="w-full rounded-lg bg-sidebar px-3 py-2 max-sm:flex max-sm:justify-center max-sm:px-0">
        <img
          src="/world-map.png"
          alt="World Map"
          className="mb-4 w-full opacity-40 max-sm:hidden"
        />
        <div className="text-xs">
          <h6 className="font-medium max-sm:hidden">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
            API Status
          </h6>
          <p className="pl-3.5 text-emerald-400 max-sm:hidden">Online</p>
          <span
            aria-label="API Status: Online"
            className="hidden h-2.5 w-2.5 rounded-full bg-emerald-400 max-sm:block"
          />
        </div>
      </div>
    </aside>
  );
}
