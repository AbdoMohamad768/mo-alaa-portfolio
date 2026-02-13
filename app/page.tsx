import { AboutSection } from "../components/AboutSection";
import { ConnectSection } from "../components/ConnectSection";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { WorkSection } from "../components/WorkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <WorkSection />
      <ConnectSection />
    </>
  );
}
