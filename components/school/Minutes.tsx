import React from 'react'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

const Minutes = () => {
  return (
    <div className="bg-[#FFFFE6]" style={{
      backgroundImage: "url('/banner1.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>

      <div className="container flex flex-col items-center lg:gap-60 lg:flex-row ">
        <div className="py-20">
          <Button variant="secondary" size="sm" className="rounded-full bg-[#EBEBEB] mb-2 text-[#2B6BA1] backdrop-blur">
            <Sparkles className="mr-2 h-4 w-4" />
           Set up in minutes
          </Button>
          <div className='mt-2'>
            <h3 className="text-3xl sm:text-[52px] leading-10 lg:leading-[60px]  font-bold mb-4">The starting point of your  career <span className='text-[#E4E403]'>transforming ambition</span> into real opportunity</h3>
            <p className='max-w-2xl text-[#5A5A5A]'>Aspiring Legal Network is a careers and education platform for <br /> students of all ages. Through practical legal experiences, employer <br /> led sessions, and AI powered tools, students develop real insight,<br /> skills, and confidence to progress across work experience,<br /> apprenticeships, and university pathways, with progress tracked in <br /> one place.</p>
          </div>
         <div className='mt-10 '>
            <h3 className='text-[#131313] font-bold text-[64px]'>10K+</h3>
            <p>Students Using The Aspiring Legal Network</p>
         </div>
        </div>
        <div className="py-16">
          <Image
            src="/career.png"
            alt="How It Works"
            width={1200}
            height={600}
            className=""
            priority
          />
        </div>
      </div>

    </div>
  )
}

export default Minutes