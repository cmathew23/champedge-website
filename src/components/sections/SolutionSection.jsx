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
      "A structured profile that anchors seasons, constraints, and progression context.",
    icon: UserRound,
  },
  {
    title: "Workload Assessment",
    description:
      "Surface training stress and readiness signals to guide adjustments with clarity.",
    icon: Activity,
  },
  {
    title: "Goals & Seasons",
    description:
      "Align objectives and timelines so plans stay coherent across teams and roles.",
    icon: Target,
  },
  {
    title: "AI-assisted Training Plan Generation",
    description:
      "Draft structured plans faster—grounded in profile data and coach-approved guardrails.",
    icon: Sparkles,
  },
  {
    title: "Coach Review & Approval Workflows",
    description:
      "Keep humans in control with clear review steps before anything reaches athletes.",
    icon: ClipboardCheck,
  },
  {
    title: "Role-based Athlete/Coach/Admin Infrastructure",
    description:
      "Permissions and surfaces tuned for how each role actually works day to day.",
    icon: Users,
  },
];

export default function SolutionSection() {
  return (
    <section
      id="features"
      className="border-b border-slate-100 bg-white py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Capabilities built for performance intelligence
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Everything connects—profile, workload context, goals, and governed
            AI assistance—without turning your homepage into a dense dashboard.
          </p>
        </div>

        <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <li key={title} className="rounded-2xl border border-slate-200/90 bg-white p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-500/10 text-orange-600">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
