const APP_URL = "https://app.champedge.ai";

const primaryBtn =
  "inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600";

const outlineBtn =
  "inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50";

export default function FinalCTASection() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Experience Peakflow
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Launch the product or talk with our team about rolling Peakflow out
            across your organization.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={APP_URL} className={primaryBtn}>
              Launch Platform
            </a>
            <a href="/contact" className={outlineBtn}>
              Request Demo
            </a>
          </div>
          <p className="mt-10 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-500">
            Trusted by teams who take performance operations seriously
          </p>
        </div>
      </div>
    </section>
  );
}
