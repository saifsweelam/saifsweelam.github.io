import CTASection from "@/components/CTASection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import RoadmapSection from "@/components/RoadmapSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <RoadmapSection />
      <ExperienceSection />
      <CTASection />
    </main>
  );
}
