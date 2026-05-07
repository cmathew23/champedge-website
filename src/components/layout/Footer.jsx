import champedgeWordmark from "../../assets/branding/champedge-wordmark.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="container mx-auto min-w-0 max-w-full px-4">
        <div className="grid gap-10 text-center sm:text-left md:grid-cols-2 lg:grid-cols-4">
          <section className="space-y-3">
            <a href="/" aria-label="Champedge Home">
              <img
                src={champedgeWordmark}
                alt="Champedge"
                className="mx-auto h-10 w-auto object-contain sm:mx-0 md:h-12"
              />
            </a>
            <p className="type-footer text-slate-900">Peakflow by Champedge</p>
            <p className="type-footer text-slate-500">
              AI-powered athlete management &amp; performance platform.
            </p>
          </section>

          <section className="space-y-3">
            <p className="type-footer text-slate-900">Navigation</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#features"
                  className="type-footer-link text-slate-600 transition-colors hover:text-slate-900"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#platform"
                  className="type-footer-link text-slate-600 transition-colors hover:text-slate-900"
                >
                  Platform
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="type-footer-link text-slate-600 transition-colors hover:text-slate-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="type-footer-link text-slate-600 transition-colors hover:text-slate-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <p className="type-footer text-slate-900">Contact</p>
            <div className="space-y-1.5 text-slate-500">
              <p className="type-footer">
                ChampEdge Technologies Private Limited
              </p>
              <p className="type-footer">IIT Madras Research Park 1F1A</p>
              <p className="type-footer">Kanagam Road, Taramani</p>
              <p className="type-footer">Chennai 600113</p>
              <p className="type-footer">Tamil Nadu</p>
            </div>
            <div className="space-y-1.5">
              <p className="type-footer text-slate-500">
                Email:{" "}
                <a
                  href="mailto:champedge.tech@gmail.com"
                  className="type-footer-link text-slate-600 transition-colors hover:text-slate-900"
                >
                  champedge.tech@gmail.com
                </a>
              </p>
              <p className="type-footer text-slate-500">
                Phone:{" "}
                <a
                  href="tel:+919400882145"
                  className="type-footer-link text-slate-600 transition-colors hover:text-slate-900"
                >
                  9400882145
                </a>
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <p className="type-footer text-slate-900">Legal</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="type-footer-link text-slate-600 transition-colors hover:text-slate-900"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="type-footer-link text-slate-600 transition-colors hover:text-slate-900"
                >
                  Terms
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
