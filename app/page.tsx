import WhyChooseUs from "./ui/homepage/WhyChooseUs";
import HeroSection from "./ui/homepage/HeroSection";
import TemperedGlassCard from "./ui/homepage/TemperedGlassCard";
import OnSaleCards from "./ui/homepage/OnSaleCards";
import AboutSection from "./ui/homepage/AboutSection";

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
