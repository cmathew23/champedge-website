import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

const sections = [
  {
    title: "Introduction",
    content:
      "This Privacy Policy describes how Champedge Technologies Private Limited handles information related to the Peakflow website and platform. This draft is provided for transparency while legal language is being finalized.",
  },
  {
    title: "Information We May Collect",
    content:
      "We may collect account details, organization details, athlete planning data entered by authorized users, usage analytics, and communication records that help operate and improve Peakflow.",
  },
  {
    title: "How We Use Information",
    content:
      "Information may be used to provide platform functionality, support planning workflows, maintain service quality, improve product experience, and communicate important updates related to account use.",
  },
  {
    title: "Athlete and Academy Data",
    content:
      "Peakflow is designed to structure athlete and academy planning information such as profiles, workload context, goals, seasons, and plan history. Organizations using Peakflow remain responsible for the data they input and manage.",
  },
  {
    title: "Data Security",
    content:
      "We use practical technical and operational safeguards intended to protect data from unauthorized access, misuse, and accidental loss. No system can guarantee absolute security, and controls may evolve over time.",
  },
  {
    title: "Cookies and Analytics",
    content:
      "The website and platform may use cookies or similar technologies to support core functionality, understand usage patterns, and improve reliability and performance.",
  },
  {
    title: "Third-Party Services",
    content:
      "Peakflow may rely on trusted third-party infrastructure and service providers for hosting, analytics, and operational support. Their services are governed by their own terms and privacy practices.",
  },
  {
    title: "Contact Us",
    content:
      "ChampEdge Technologies Private Limited\nIIT Madras Research Park 1F1A\nKanagam Road, Taramani\nChennai 600113\nTamil Nadu\n\nEmail: champedge.tech@gmail.com",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="py-14 md:py-20">
          <div className="container mx-auto min-w-0 max-w-full px-4">
            <div className="mx-auto max-w-3xl">
              <p className="type-eyebrow-brand text-orange-600">Legal</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                This Privacy Policy explains how Champedge Technologies Private
                Limited handles information related to the Peakflow platform and
                website.
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Last updated: May 7, 2026
              </p>

              <div className="mt-10 space-y-8 md:mt-12">
                {sections.map((section) => (
                  <section key={section.title} className="space-y-3">
                    <h2 className="text-xl font-semibold text-slate-900">
                      {section.title}
                    </h2>
                    <p className="whitespace-pre-line text-base leading-relaxed text-slate-600">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
