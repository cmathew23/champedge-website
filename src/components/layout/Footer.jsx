export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center">
        <p className="text-sm font-medium text-slate-500">
          Peakflow by Champedge
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <li>
            <a
              href="/contact"
              className="text-slate-600 hover:text-slate-900"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="text-slate-600 hover:text-slate-900"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-slate-600 hover:text-slate-900">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
