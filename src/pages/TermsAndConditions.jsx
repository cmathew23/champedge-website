import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the Champedge website or Peakflow platform, you agree to these Terms & Conditions. If you do not agree, please discontinue use of the services.",
  },
  {
    title: "About Peakflow",
    content:
      "Peakflow is a platform for athlete planning, performance context, and workflow coordination across academies, coaches, and authorized team staff.",
  },
  {
    title: "User Responsibilities",
    content:
      "Users are responsible for maintaining accurate information, protecting account credentials, and using the platform in a lawful and professional manner.",
  },
  {
    title: "Academy and Coach Use",
    content:
      "Academies and coaches are responsible for configuring workflows, reviewing plans, and ensuring platform use aligns with their internal policies and athlete development practices.",
  },
  {
    title: "AI-Assisted Planning",
    content:
      "Peakflow may assist with training planning, but final coaching decisions remain the responsibility of qualified coaches, academies, or authorized users.",
  },
  {
    title: "No Medical Advice",
    content:
      "Peakflow is not a medical service and does not provide diagnosis, treatment, medication, or medical advice.",
  },
  {
    title: "Intellectual Property",
    content:
      "All platform content, software, branding, and related materials are owned by Champedge Technologies Private Limited or its licensors, except where otherwise stated.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by applicable law, Champedge Technologies Private Limited is not liable for indirect, incidental, special, or consequential damages arising from service use.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms from time to time. Continued use of the website or platform after updates are posted constitutes acceptance of the revised Terms.",
  },
  {
    title: "Contact Us",
    content:
      "ChampEdge Technologies Private Limited\nIIT Madras Research Park 1F1A\nKanagam Road, Taramani\nChennai 600113\nTamil Nadu\n\nEmail: champedge.tech@gmail.com",
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="py-14 md:py-20">
          <div className="container mx-auto min-w-0 max-w-full px-4">
            <div className="mx-auto max-w-3xl">
              <p className="type-eyebrow-brand text-orange-600">Legal</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Terms &amp; Conditions
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                These Terms govern access to and use of the Champedge website
                and Peakflow platform.
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
