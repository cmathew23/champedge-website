import { User, UserCheck, Building2 } from "lucide-react";

const audiences = [
  {
    title: "Athletes",
    description:
      "See clear training plans, progress markers, and performance context.",
    icon: User,
  },
  {
    title: "Coaches",
    description:
      "Make better planning decisions with athlete profiles, workload intelligence, and measurable progress.",
    icon: UserCheck,
  },
  {
    title: "Academies",
    description:
      "Bring consistency, visibility, and governance across athletes, coaches, and programs.",
    icon: Building2,
  },
];

export default function RoleBasedSection() {
  return (
    <section id="about" className="section-y bg-slate-50">
      <div className="container mx-auto min-w-0 max-w-full px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="type-heading-section stack-heading text-balance text-slate-900">
            One platform. Clear value for every role.
          </h2>
          <p className="type-lede stack-lede text-slate-600">
            Peakflow connects athlete planning, coaching decisions, and academy
            oversight in one structured system.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="type-heading-card-lg mt-5 text-slate-900">{title}</h3>
              <p className="type-body mt-3 text-slate-600">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
