import champedgeWordmark from "../../assets/branding/champedge-wordmark.png";
import { useLocation } from "react-router-dom";

const primaryBtn =
  "type-btn inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2 text-white transition-colors hover:bg-orange-600";

export default function Navbar() {
  const { pathname } = useLocation();
  const navLinkBase =
    "type-nav-link border-b border-transparent pb-0.5 text-slate-600 transition-colors hover:border-orange-300 hover:text-slate-900";
  const activeLink = "border-orange-500 text-slate-900";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto min-w-0 max-w-full px-4 py-4">
        <div className="flex min-w-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 items-center justify-between gap-3 sm:gap-4">
            <a href="/" className="flex items-center" aria-label="Champedge Home">
              <img
                src={champedgeWordmark}
                alt="Champedge"
                className="h-10 w-auto object-contain md:h-12 lg:h-14"
              />
            </a>
            <a href="/contact" className={`${primaryBtn} md:hidden`}>
              Request Demo
            </a>
          </div>

          <nav
            className="flex min-w-0 flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-8 md:flex-1"
            aria-label="Primary"
          >
            <a
              href="/#features"
              className={navLinkBase}
            >
              Features
            </a>
            <a
              href="/#platform"
              className={navLinkBase}
            >
              Platform
            </a>
            <a
              href="/#about"
              className={navLinkBase}
            >
              About
            </a>
            <a
              href="/contact"
              className={`${navLinkBase} ${
                pathname === "/contact" ? activeLink : ""
              }`}
            >
              Contact
            </a>
          </nav>

          <a href="/contact" className={`${primaryBtn} hidden md:inline-flex`}>
            Request Demo
          </a>
        </div>
      </div>
    </header>
  );
}
