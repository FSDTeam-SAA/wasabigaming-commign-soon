'use client'
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Button } from './ui/button'

const Hero = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ['DREAMS', 'FUTURE', 'PASSION']

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [words])

  return (
    <section
      className=" text-center py-20 px-4 bg-gradient-to-r  overflow-hidden"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className=" flex  justify-center">
        <div className="">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl text-center md:text-[52px] leading-10 lg:leading-[60px] font-bold text-gray-900 mb-6">
            PURSUE YOUR LEGAL <br />{' '}
            <span className="text-[#E4E403]"> {words[index]} </span>
            WITH CONFIDENCE
          </h1>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Your pathway into the legal profession starts here
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 w-full max-w-4xl mx-auto">
        <div
          className="
      flex flex-col sm:flex-row items-center justify-center gap-4 w-full
      sm:bg-white rounded-full py-4 px-4 sm:px-6
      sm:shadow-[0px_8px_16px_0px_#00000014,8px_0px_16px_0px_#00000014]
    "
        >
          {/* Type Select */}
          <Select>
            <SelectTrigger className="rounded-full py-3 px-4 border-0 bg-transparent text-gray-700 focus:ring-0">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="type1">Type 1</SelectItem>
              <SelectItem value="type2">Type 2</SelectItem>
              <SelectItem value="type3">Type 3</SelectItem>
            </SelectContent>
          </Select>

          {/* Location Select */}
          <Select>
            <SelectTrigger className=" rounded-full py-3 px-4 border-0 bg-transparent text-gray-700 focus:ring-0">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="location1">Location 1</SelectItem>
              <SelectItem value="location2">Location 2</SelectItem>
              <SelectItem value="location3">Location 3</SelectItem>
            </SelectContent>
          </Select>

          {/* Search Button */}
          <Button className="w-full sm:w-auto bg-[#FFFF00] hover:bg-[#FFFF00]/90 text-gray-900 border border-[#CACA00] font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
            Search
          </Button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col relative  sm:flex-row justify-center items-center gap-4 lg:mt-12">
        <Button className="w-full sm:w-auto bg-[#FFFF00] hover:bg-[#FFFF00]/90 text-[#1E1E1E] border border-[#CACA00] font-bold py-6 px-10 sm:px-16 rounded-full shadow-xl transition-all duration-300 text-lg">
          Join the Community!
        </Button>
        {/* <Button variant="outline" className="w-full sm:w-auto border-2 border-[#C2C227] text-[#6B6B6B] font-bold py-4 px-10 sm:px-16 rounded-full transition-all duration-300 text-lg bg-transparent">
                    Join Community
                </Button> */}
        {/* <Image src="/star.png" alt="Logo" width={100} height={100} className="w-16 h-16 absolute top-1/1 right-64" /> */}
      </div>

      {/* Info Section
            <div className="mt-10 px-4 sm:px-0">
                <h3 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    Everything You Need to Launch Your Career
                </h3>
                <p className="text-center text-[#5A5A5A] text-base sm:text-lg mb-12 max-w-3xl mx-auto">
                    The Aspiring Legal Network equips you with smart tools to build, prepare, and excel in your career.
                </p>
            </div> */}
    </section>
  )
}

export default Hero
