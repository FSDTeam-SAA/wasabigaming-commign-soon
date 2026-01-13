import { FAQSection } from '@/components/SchoolFAQSection'
import Applications from '@/components/school/Applications'
import Assembly from '@/components/school/Assembly'
import Features from '@/components/school/Features'
import { FeaturesSection } from '@/components/school/FeaturesSection'
import Testomonial from '@/components/Testomonial'
import Minutes from '@/components/school/Minutes'
import Student from '@/components/school/Student'
import { SchoolHero } from '@/components/SchoolHero'
import { StoryBehind } from '@/components/web/behind-story'
import React from 'react'
import AchievementsSection from '@/components/web/achivement-section'
// import HowALNWorks from '@/components/web/aln-network'

const page = () => {
  return (
    <div>
      <SchoolHero />
      <Features />
      <FeaturesSection />
      <Minutes />
      <Assembly />
      <Student />
      <Applications />
      {/* <HowALNWorks /> */}
      <AchievementsSection />
      <Testomonial />
      {/* <ReviewsSection /> */}
      <StoryBehind />
      <FAQSection />
    </div>
  )
}

export default page
