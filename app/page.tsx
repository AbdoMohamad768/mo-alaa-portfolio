import { AboutSection } from "../components/AboutSection";
import { ConnectSection } from "../components/ConnectSection";
import { HeroSection } from "../components/HeroSection";
import { WorkSection } from "../components/WorkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ConnectSection />
    </>
  );
}
