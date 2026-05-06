import amexLogo from "../../assets/logos/amex.jpg";

export default function SupportedBySection() {
  return (
    <section className="border-b border-slate-100 bg-white py-14">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-md flex-col items-center gap-5 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Supported By
          </p>
          <img
            src={amexLogo}
            alt="American Express"
            width={960}
            height={958}
            className="h-12 w-auto max-w-[10rem] object-contain opacity-90 transition-opacity hover:opacity-100 sm:h-14"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
