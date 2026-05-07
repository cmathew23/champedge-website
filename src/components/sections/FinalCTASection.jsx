const primaryBtn =
  "type-btn inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 text-white transition-colors hover:bg-orange-600";

const outlineBtn =
  "type-btn inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-3 text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50";

export default function FinalCTASection() {
  return (
    <section id="contact" className="section-y bg-white">
      <div className="container mx-auto min-w-0 max-w-full px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="type-heading-section stack-heading text-balance text-slate-900">
            Experience Peakflow
          </h2>
          <p className="type-lede stack-lede text-slate-600">
            Launch the product or talk with our team about rolling Peakflow out
            across your organization.
          </p>
          <div className="mt-10 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <a
              href="/contact"
              className={`${primaryBtn} w-full shrink-0 sm:w-auto`}
            >
              Request Demo
            </a>
            <a
              href="/contact"
              className={`${outlineBtn} w-full shrink-0 sm:w-auto`}
            >
              Contact ChampEdge
            </a>
          </div>
          <p className="type-caption-badge mx-auto mt-10 max-w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-center text-slate-500">
            Trusted by teams who take performance operations seriously
          </p>
        </div>
      </div>
    </section>
  );
}
