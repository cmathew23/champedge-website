import { Flag, BarChart3, GitBranch } from "lucide-react";

const proofPoints = [
  {
    title: "Golf-specific context",
    description:
      "Planning inputs reflect the demands, training patterns, and competitive structure of the sport.",
    icon: Flag,
  },
  {
    title: "Performance measurement",
    description:
      "Track progress through structured metrics, assessments, and athlete development markers.",
    icon: BarChart3,
  },
  {
    title: "Extensible sport model",
    description:
      "The same planning architecture can support future sports without rebuilding the platform from scratch.",
    icon: GitBranch,
  },
];

export default function SportProofSection() {
  return (
    <section className="section-y border-b border-slate-100 bg-slate-50">
      <div className="container mx-auto min-w-0 max-w-full px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="type-heading-section stack-heading text-balance text-slate-900">
            Starting with Golf. Built to extend across sports.
          </h2>
          <p className="type-lede stack-lede text-slate-600">
            Peakflow begins with Golf to validate sport-specific planning,
            workload context, performance measurement, and coach review
            workflows — while keeping the platform architecture ready for
            additional sports.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {proofPoints.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-slate-200/90 bg-white p-6"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600">
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="type-heading-card mt-5 text-slate-900">{title}</h3>
              <p className="type-card-body mt-2 text-slate-600">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
