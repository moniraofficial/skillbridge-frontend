

import Categories from "./components/Categories";
import FeaturedSkills from "./components/FeaturedSkills";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Newsletter from "./components/Newsletter";
import WhySkillBridge from "./components/WhySkillBridge";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 👈 ২. এখানে আমাদের Hero সেকশনটি বসিয়ে দিলাম */}
    <Hero />
    <Categories />
    <FeaturedSkills />
    <HowItWorks />
    <WhySkillBridge />
    <Newsletter />
    </main>
  );
}