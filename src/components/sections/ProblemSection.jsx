import { EyeOff, GitBranch, MessageSquareWarning, Layers } from "lucide-react";

const problems = [
  {
    title: "Disconnected workflows",
    description:
      "Training plans, athlete records, communication, workload decisions, and performance data often sit in different tools, making it hard for coaches to see the full picture.",
    icon: GitBranch,
  },
  {
    title: "Poor planning visibility",
    description:
      "Coaches and academy leaders struggle to track workloads, goals, readiness, performance progress, and training direction across athletes and teams.",
    icon: EyeOff,
  },
  {
    title: "Fragmented performance measurement",
    description:
      "Performance tests, skill assessments, training observations, and athlete progress markers are often tracked manually across spreadsheets, notes, and separate tools.",
    icon: MessageSquareWarning,
  },
  {
    title: "Lack of structured performance systems",
    description:
      "Many programs depend on individual habits and manual tracking instead of repeatable planning, measurement, and governed coaching workflows.",
    icon: Layers,
  },
];

export default function ProblemSection() {
  return (
    <section className="section-y bg-slate-900">
      <div className="container mx-auto min-w-0 max-w-full px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="type-heading-section stack-heading text-balance text-white">
            Athlete data is scattered. Coaching decisions suffer.
          </h2>
          <p className="type-lede stack-lede text-slate-400">
            Training plans, athlete readiness, workload decisions, performance
            measurements, and coach communication often sit in different
            places. As teams grow, coaches lose visibility, progress becomes
            harder to measure, and athlete development becomes difficult to
            manage consistently.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600">
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="type-heading-card mt-5 text-white">{title}</h3>
              <p className="type-card-body mt-2 text-slate-400">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
