const steps = [
  "Athlete Profile",
  "Workload Intelligence",
  "Goals & Seasons",
  "Planning Intelligence",
  "Structured Training Plans",
];

export default function PlatformIntelligenceSection() {
  return (
    <section
      id="platform"
      className="section-y relative overflow-x-clip border-y border-slate-100 bg-[linear-gradient(180deg,#fafafa_0%,#ffffff_45%,#fafafa_100%)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, transparent, transparent 48px, rgba(148,163,184,0.06) 48px, rgba(148,163,184,0.06) 49px)",
        }}
      />

      <div className="container relative mx-auto min-w-0 max-w-full px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="type-heading-section stack-heading text-balance text-slate-900">
            Platform intelligence, end to end
          </h2>
          <p className="type-lede stack-lede text-slate-600">
            From structured profiles to planning intelligence, Peakflow is
            designed as a coherent operating system for athlete performance.
          </p>
        </div>

        <ol className="mx-auto mt-14 flex w-full max-w-md flex-col items-center gap-3 md:max-w-none md:flex-row md:flex-wrap md:justify-center md:gap-x-2 md:gap-y-3 lg:gap-x-3">
          {steps.map((label, index) => {
            return (
              <li
                key={label}
                className="flex w-full flex-col items-center gap-2 md:w-auto md:max-w-none md:flex-row md:items-center md:gap-2 lg:gap-3"
              >
                {index > 0 && (
                  <>
                    <span
                      className="select-none text-center text-slate-300 md:hidden"
                      aria-hidden
                    >
                      ↓
                    </span>
                    <span
                      className="hidden shrink-0 select-none text-slate-300 md:inline"
                      aria-hidden
                    >
                      →
                    </span>
                  </>
                )}
                <span
                  className="type-label-pill w-full max-w-md rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-slate-800 shadow-[0_1px_2px_rgba(15,23,42,0.04)] md:w-auto md:max-w-none md:whitespace-nowrap"
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
