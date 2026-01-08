// import Footer from "@/components/web/Footer";
// import Navbar from "@/components/web/Navbar";

import CommunitySection from "@/components/CommunitySection";
import FAQSection from "@/components/FAQSection";
import FeaturedOpportunities from "@/components/FeaturedOpportunities";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReviewsSection from "@/components/ReviewsSection";
import Testomonial from "@/components/Testomonial";
import ToolsSection from "@/components/ToolsSection";



export default function Home() {
  return (
    <main
      className="min-h-screen"

    >
      <div className="max-w-7xl mx-auto px-4">
        <Hero />
        <ToolsSection />
        <CommunitySection />
        <HowItWorksSection />
        <FeaturedOpportunities />
        <ReviewsSection />
        <Testomonial/>
        <FAQSection />
        
      </div>
    </main>
  )
}
