import amexLogo from "../../assets/logos/amex.png";

export default function SupportedBySection() {
  return (
    <section className="section-y-compact border-b border-slate-100 bg-white">
      <div className="container mx-auto min-w-0 max-w-full px-4">
        <div className="mx-auto flex w-full min-w-0 max-w-md flex-col items-center gap-5 text-center">
          <p className="type-caption text-slate-500">SUPPORTED BY</p>
          <img
            src={amexLogo}
            alt="American Express"
            width={800}
            height={798}
            className="mx-auto h-20 w-auto max-w-full shrink-0 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
