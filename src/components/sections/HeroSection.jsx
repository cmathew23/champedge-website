import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.champedge.ai";

const primaryBtn =
  "inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600";

function DashboardPlaceholder() {
  return (
    <div
      className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.06)]"
      aria-hidden
    >
      <div className="flex gap-4">
        <aside className="hidden w-24 shrink-0 flex-col gap-2 rounded-xl bg-slate-50 p-3 sm:flex">
          <div className="h-2 w-full rounded bg-slate-200" />
          <div className="h-2 w-4/5 rounded bg-slate-200" />
          <div className="mt-2 h-2 w-full rounded bg-orange-200/80" />
          <div className="h-2 w-full rounded bg-slate-200" />
          <div className="h-2 w-full rounded bg-slate-200" />
        </aside>
        <div className="min-w-0 flex-1 space-y-4">
          <div className="flex flex-wrap gap-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <p className="text-xs font-medium text-slate-500">Load score</p>
              <p className="text-lg font-semibold tabular-nums text-slate-900">
                31,532
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <p className="text-xs font-medium text-slate-500">Sessions</p>
              <p className="text-lg font-semibold tabular-nums text-slate-900">
                12
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 pb-4 pt-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                Performance trend
              </span>
              <span className="text-xs text-slate-400">Last 30 days</span>
            </div>
            <svg
              viewBox="0 0 320 96"
              className="h-24 w-full text-orange-500"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="heroChartFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#heroChartFill)"
                d="M0 72 L40 64 L80 52 L120 58 L160 38 L200 44 L240 28 L280 36 L320 24 L320 96 L0 96 Z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0 72 L40 64 L80 52 L120 58 L160 38 L200 44 L240 28 L280 36 L320 24"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="border-b border-slate-100 bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-orange-600">
              Peakflow by Champedge
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl md:leading-[1.08]">
              AI-Powered Athlete Management & Performance Platform
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Structured athlete intelligence, coach workflows, and AI-assisted
              training planning for modern sports organizations.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={APP_URL} className={primaryBtn}>
                Launch Peakflow
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-orange-500"
              >
                Request Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
          <DashboardPlaceholder />
        </div>
      </div>
    </section>
  );
}
