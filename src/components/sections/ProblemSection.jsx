import { EyeOff, GitBranch, MessageSquareWarning, Layers } from "lucide-react";

const problems = [
  {
    title: "Disconnected workflows",
    description:
      "Planning, communication, and execution live in different tools—nothing connects end to end.",
    icon: GitBranch,
  },
  {
    title: "Poor planning visibility",
    description:
      "Coaches and admins lack a shared view of workloads, goals, and readiness across teams.",
    icon: EyeOff,
  },
  {
    title: "Fragmented communication",
    description:
      "Critical context gets lost across chats and spreadsheets instead of living with the athlete record.",
    icon: MessageSquareWarning,
  },
  {
    title: "Lack of structured performance systems",
    description:
      "Programs rely on ad hoc habits rather than repeatable intelligence and governed workflows.",
    icon: Layers,
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-slate-900 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Modern organizations outgrow fragmented tooling
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Peakflow brings planning, workload intelligence, and coaching
            workflows into one structured platform.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
