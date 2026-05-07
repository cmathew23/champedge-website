import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.champedge.ai";

const primaryBtn =
  "type-btn inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-2.5 text-white transition-colors hover:bg-orange-600";

function DashboardPlaceholder() {
  return (
    <div
      className="w-full min-w-0 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.06)] sm:p-5"
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
              <p className="type-meta text-slate-500">Load score</p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-slate-900">
                31,532
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <p className="type-meta text-slate-500">Sessions</p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-slate-900">
                12
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 pb-4 pt-3">
            <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <span className="type-meta text-slate-500">Performance trend</span>
              <span className="type-meta text-slate-400">Last 30 days</span>
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
    <section className="section-y border-b border-slate-100 bg-white">
      <div className="container mx-auto min-w-0 max-w-full px-4">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:gap-y-14">
          <div className="min-w-0 max-w-xl">
            <p className="type-eyebrow-brand mb-4 text-orange-600">
              Peakflow by Champedge
            </p>
            <h1 className="type-display-hero text-balance text-slate-900">
              AI-Powered Athlete Management & Performance Platform
            </h1>
            <p className="type-lede mt-6 text-slate-600">
              Structured athlete intelligence, coach workflows, and AI-assisted
              training planning for sports academies and coaching teams.
            </p>
            <div className="mt-10 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href={APP_URL}
                className={`${primaryBtn} w-full shrink-0 justify-center sm:w-auto`}
              >
                Launch Peakflow
              </a>
              <a
                href="/contact"
                className="type-link-cta group flex w-full shrink-0 items-center justify-center gap-1.5 text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-orange-500 sm:inline-flex sm:w-auto sm:justify-start"
              >
                Request Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
          <div className="min-w-0 lg:min-h-0">
            <DashboardPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
