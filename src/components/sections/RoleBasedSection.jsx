import { User, ClipboardList, Building2, ChevronRight } from "lucide-react";

const audiences = [
  {
    title: "Athletes",
    description:
      "Clear plans, transparent progression, and communication tied to the work—not scattered threads.",
    icon: User,
  },
  {
    title: "Coaches",
    description:
      "Review-ready drafts, workload context, and workflows that respect real coaching judgment.",
    icon: ClipboardList,
  },
  {
    title: "Academies",
    description:
      "Operate at scale with structured profiles, roles, and consistency across programs.",
    icon: Building2,
  },
];

const flow = [
  "Athlete Profile",
  "Workload Intelligence",
  "Structured Training Plans",
];

export default function RoleBasedSection() {
  return (
    <section id="about" className="bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Built for every role in the organization
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            One platform architecture—experiences that match how athletes,
            coaches, and academies collaborate.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 lg:grid-cols-3">
          {audiences.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-16 max-w-4xl">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-slate-500">
            How intelligence flows
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            {flow.map((label, i) => (
              <div key={label} className="flex items-center gap-3 sm:contents">
                <span className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-800 sm:flex-none sm:min-w-[10rem]">
                  {label}
                </span>
                {i < flow.length - 1 && (
                  <ChevronRight
                    className="hidden h-5 w-5 shrink-0 text-slate-400 sm:block"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
