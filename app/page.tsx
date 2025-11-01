import AboutSection from "./components/pages/homepage/AboutSection";
import HeroSection from "./components/pages/homepage/HeroSection";
import OnSaleCards from "./components/pages/homepage/OnSaleCards";
import TemperedGlassCard from "./components/pages/homepage/TemperedGlassCard";
import WhyChooseUs from "./components/pages/homepage/WhyChooseUs";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <OnSaleCards />
      <AboutSection />
      <TemperedGlassCard />
      <WhyChooseUs />
    </div>
  );
}
