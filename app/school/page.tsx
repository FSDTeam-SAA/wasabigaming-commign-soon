import Applications from '@/components/school/Applications'
import Assembly from '@/components/school/Assembly'
import Features from '@/components/school/Features'
import { FeaturesSection } from '@/components/school/FeaturesSection'
import Minutes from '@/components/school/Minutes'
import Student from '@/components/school/Student'
import { SchoolHero } from '@/components/SchoolHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <SchoolHero/>
      <Features/>
      <FeaturesSection/>
      <Minutes/>
      <Assembly/>
      <Student/>
      <Applications/>
    </div>
  )
}

export default page