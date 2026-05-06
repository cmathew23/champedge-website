import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import ProblemSection from "../components/sections/ProblemSection.jsx";
import SolutionSection from "../components/sections/SolutionSection.jsx";
import RoleBasedSection from "../components/sections/RoleBasedSection.jsx";
import PlatformIntelligenceSection from "../components/sections/PlatformIntelligenceSection.jsx";
import SupportedBySection from "../components/sections/SupportedBySection.jsx";
import TrustSection from "../components/sections/TrustSection.jsx";
import FinalCTASection from "../components/sections/FinalCTASection.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <RoleBasedSection />
        <PlatformIntelligenceSection />
        <SupportedBySection />
        <TrustSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
