import { Activity } from "lucide-react";

const APP_URL = "https://app.champedge.ai";

const primaryBtn =
  "inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-2.5 text-slate-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600">
                <Activity className="h-5 w-5" strokeWidth={2.25} aria-hidden />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Champedge
              </span>
            </a>
            <a href={APP_URL} className={`${primaryBtn} md:hidden`}>
              Launch Peakflow
            </a>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:flex-1"
            aria-label="Primary"
          >
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Features
            </a>
            <a
              href="#platform"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Platform
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Contact
            </a>
          </nav>

          <a href={APP_URL} className={`${primaryBtn} hidden md:inline-flex`}>
            Launch Peakflow
          </a>
        </div>
      </div>
    </header>
  );
}
