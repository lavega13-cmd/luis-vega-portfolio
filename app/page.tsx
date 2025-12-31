import HeroSection from "@/components/home/HeroSection";
import ImpactTiles from "@/components/home/ImpactTiles";
import SelectedWork from "@/components/home/SelectedWork";
import LeadershipCredibility from "@/components/home/LeadershipCredibility";
import IndependentAdvisory from "@/components/home/IndependentAdvisory";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ImpactTiles />
      <SelectedWork />
      <LeadershipCredibility />
      <IndependentAdvisory />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
