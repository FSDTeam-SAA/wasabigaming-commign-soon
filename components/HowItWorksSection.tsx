import React from 'react'
import { Button } from './ui/button'
import { Sparkles } from 'lucide-react'

const HowItWorksSection = () => {
  return (
    <div className="bg-[#FFFFE6]">

      <div className="container ">
        <div className="py-16">
          <Button variant="secondary" size="sm" className="rounded-full bg-[#EBEBEB] text-[#2B6BA1] backdrop-blur">
            <Sparkles className="mr-2 h-4 w-4" />
            Career Insight Tools
          </Button>
          <div className='mt-2'>
            <h3 className="text-3xl sm:text-4xl leading-[60px]  font-bold mb-4">The starting point of your <br /> career Set up in minutes, <br /> <span className='text-[#E4E403]'>transforming ambition</span> into <br /> real opportunity</h3>
          </div>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default HowItWorksSection