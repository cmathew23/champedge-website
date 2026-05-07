import { Database, ShieldCheck, GitBranch, Building2 } from "lucide-react";

const items = [
  {
    title: "Structured Athlete Data",
    description:
      "Athlete profiles, workload context, goals, seasons, and plans are organized around a connected planning model.",
    icon: Database,
  },
  {
    title: "Governed AI Planning",
    description:
      "AI assists plan generation within defined context, guardrails, and coach-controlled workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Versioned Plan Workflows",
    description:
      "Training plans move through draft, review, approval, and release states with traceable versions.",
    icon: GitBranch,
  },
  {
    title: "Scalable Academy Architecture",
    description:
      "Built for multiple roles, athletes, coaches, and programs without losing operational control.",
    icon: Building2,
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249,115,22,0.2), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(148,163,184,0.12), transparent)",
        }}
      />

      <div className="container relative mx-auto min-w-0 max-w-full px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="type-heading-section stack-heading text-balance text-white">
            Built with governance at the core
          </h2>
          <p className="type-lede stack-lede text-slate-300">
            Peakflow is designed for structured athlete data, controlled AI
            workflows, and review-based planning — not black-box automation.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, description, icon: Icon }) => (
            <li key={title} className="text-center lg:text-left">
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-500/15 text-orange-300 lg:mx-0">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="type-trust-label mt-5 text-white">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
