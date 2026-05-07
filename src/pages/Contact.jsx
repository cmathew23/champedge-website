import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

const emailHref =
  "mailto:champedge.tech@gmail.com?subject=Peakflow%20Demo%20Request";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="py-14 md:py-20">
          <div className="container mx-auto min-w-0 max-w-full px-4">
            <div className="mx-auto max-w-3xl">
              <p className="type-eyebrow-brand text-orange-600">Contact</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Contact ChampEdge
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                Interested in Peakflow for your academy or coaching team? Reach
                out to us and we&apos;ll get back to you.
              </p>

              <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white p-6 md:p-8">
                <a
                  href={emailHref}
                  className="type-btn inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2 text-white transition-colors hover:bg-orange-600"
                >
                  Email Champedge
                </a>
                <p className="mt-5 text-base text-slate-600">
                  Email:{" "}
                  <a
                    href="mailto:champedge.tech@gmail.com"
                    className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-orange-500"
                  >
                    champedge.tech@gmail.com
                  </a>
                </p>

                <div className="mt-6 space-y-1.5 text-slate-600">
                  <p className="type-footer text-slate-900">
                    ChampEdge Technologies Private Limited
                  </p>
                  <p className="type-footer">IIT Madras Research Park 1F1A</p>
                  <p className="type-footer">Kanagam Road, Taramani</p>
                  <p className="type-footer">Chennai 600113</p>
                  <p className="type-footer">Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
