const steps = [
  "Athlete Profile",
  "Workload Intelligence",
  "Goals & Seasons",
  "AI Orchestration",
  "Structured Training Plans",
];

export default function PlatformIntelligenceSection() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden border-y border-slate-100 bg-[linear-gradient(180deg,#fafafa_0%,#ffffff_45%,#fafafa_100%)] py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, transparent, transparent 48px, rgba(148,163,184,0.06) 48px, rgba(148,163,184,0.06) 49px)",
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Platform intelligence, end to end
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            From structured profiles to governed AI orchestration—Peakflow is
            designed as a coherent operating system for athlete performance.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto pb-2">
          <ol className="flex min-w-[52rem] items-center gap-2 px-1 md:min-w-0 md:flex-wrap md:justify-center md:gap-3">
            {steps.map((label, index) => {
              const isOrchestration = label === "AI Orchestration";
              return (
                <li key={label} className="flex items-center gap-2 md:gap-3">
                  {index > 0 && (
                    <span
                      className="hidden text-slate-300 sm:inline"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                  <span
                    className={`whitespace-nowrap rounded-xl px-4 py-3 text-center text-sm font-semibold ${
                      isOrchestration
                        ? "border-2 border-orange-500 bg-orange-500/10 text-slate-900"
                        : "border border-slate-200 bg-white text-slate-800 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                    }`}
                  >
                    {label}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
