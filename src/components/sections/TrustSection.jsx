import { Lock, ShieldCheck, Layers, KeyRound } from "lucide-react";

const items = [
  {
    title: "Secure infrastructure",
    icon: Lock,
  },
  {
    title: "Governed AI workflows",
    icon: ShieldCheck,
  },
  {
    title: "Scalable platform architecture",
    icon: Layers,
  },
  {
    title: "Role-based access control",
    icon: KeyRound,
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

      <div className="container relative mx-auto px-4">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, icon: Icon }) => (
            <li key={title} className="text-center lg:text-left">
              <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-white lg:mx-0">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-white">
                {title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
