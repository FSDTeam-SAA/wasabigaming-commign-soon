// import Footer from "@/components/web/Footer";
// import Navbar from "@/components/web/Navbar";

import CommunitySection from '@/components/CommunitySection'
import { FAQSection } from '@/components/FAQSection'

import FeaturedOpportunities from '@/components/FeaturedOpportunities'
import Hero from '@/components/Hero'
import HowItWorksSection from '@/components/HowItWorksSection'
// import ReviewsSection from '@/components/partnersMarqueeSection'
import Testomonial from '@/components/Testomonial'
import ToolsSection from '@/components/ToolsSection'
import { StoryBehind } from '@/components/web/behind-story'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ToolsSection />
      <CommunitySection />
      <HowItWorksSection />
      <FeaturedOpportunities />
      <Testomonial />
      {/* <ReviewsSection /> */}
      <StoryBehind />
      <FAQSection />
    </main>
  )
}
