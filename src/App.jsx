import React from "react";
import HeroSection from "./sections/HeroSection";
import Experience from "./sections/Experience";
import ProjectSection from "./sections/ProjectSection";
import SkillSection from "./sections/SkillSection";
import AchievementSection from "./sections/AchievementSection";
import DomainSection from "./Domain/DomainSection";
import ContactSection from "./sections/ContactSection";

export default function Portfolio() {
  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <ProjectSection />
      
      {/* Skills Section */}
      <SkillSection />

      {/* Achievements Section */}
      <AchievementSection />

      {/* Domain Section */}
      <DomainSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © 2025 Ansh R. Savadatti — Building what matters, learning what’s next.
      </footer>
    </div>
  );
}
