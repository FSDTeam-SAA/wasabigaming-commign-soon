// import Footer from "@/components/web/Footer";
// import Navbar from "@/components/web/Navbar";

import CommunitySection from '@/components/CommunitySection'
import { FAQSection } from '@/components/FAQSection'

import FeaturedOpportunities from '@/components/FeaturedOpportunities'
import Hero from '@/components/Hero'
import HowItWorksSection from '@/components/HowItWorksSection'
import Interview from '@/components/Interview'
import Model from '@/components/Model'
import Opportunities from '@/components/Opportunities'
import Testomonial from '@/components/Testomonial'
import ToolsSection from '@/components/ToolsSection'
import AchievementsSection from '@/components/web/achivement-section'
import HowALNWorks from '@/components/web/aln-network'
import { StoryBehind } from '@/components/web/behind-story'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ToolsSection />
      <CommunitySection />
      <HowItWorksSection />
      <Opportunities />
      <Model />
      <Interview />
      <FeaturedOpportunities />
      <HowALNWorks />
      <AchievementsSection />
      <Testomonial />
      {/* <ReviewsSection /> */}
      <StoryBehind />
      <FAQSection />
    </main>
  )
}
