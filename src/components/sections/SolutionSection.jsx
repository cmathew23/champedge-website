import {
  UserRound,
  Activity,
  Target,
  Sparkles,
  ClipboardCheck,
  Users,
} from "lucide-react";

const capabilities = [
  {
    title: "Athlete Planning Profile (APP)",
    description:
      "A structured athlete record that captures training context, constraints, progression history, and planning readiness.",
    icon: UserRound,
  },
  {
    title: "Workload Assessment",
    description:
      "Understand training load, readiness, and risk signals before plans are created or adjusted.",
    icon: Activity,
  },
  {
    title: "Goals & Seasons",
    description:
      "Connect athlete goals with seasonal timelines so every plan has context, direction, and purpose.",
    icon: Target,
  },
  {
    title: "Sport Intelligence",
    description:
      "Bring sport-specific context into the planning process so training decisions reflect the demands of each sport.",
    icon: Sparkles,
  },
  {
    title: "AI-assisted Training Plan Generation",
    description:
      "Generate structured plan drafts using athlete context, workload data, sport context, and coach-defined guardrails.",
    icon: ClipboardCheck,
  },
  {
    title: "Coach Review & Approval Workflows",
    description:
      "Keep coaches in control with governed review steps before plans reach athletes.",
    icon: Users,
  },
];

export default function SolutionSection() {
  return (
    <section
      id="features"
      className="section-y border-b border-slate-100 bg-white"
    >
      <div className="container mx-auto min-w-0 max-w-full px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="type-heading-section stack-heading text-balance text-slate-900">
            Built for Athlete Performance Planning
          </h2>
          <p className="type-lede stack-lede text-slate-600">
            Peakflow connects athlete profiles, workload signals, goals,
            seasons, sport context, AI-assisted planning, and coach review into
            one structured workflow — so training plans are created with
            context, not guesswork.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ title, description, icon: Icon }) => (
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
