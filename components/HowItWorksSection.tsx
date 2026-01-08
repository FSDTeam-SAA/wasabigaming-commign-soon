import React from 'react'

const HowItWorksSection = () => {
  const steps = [
    { step: 1, text: 'Create your profile' },
    { step: 2, text: 'Build mock applications' },
    { step: 3, text: 'Prepare for interviews' },
    { step: 4, text: 'Connect to your career' },
  ]

  return (
    <section className=" px-4">
      <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">
        How ALN Works
      </h3>

      {/* Desktop Timeline - Hidden on mobile */}
      <div className="hidden md:block relative max-w-5xl mx-auto">
        {/* Horizontal Line - starts after first circle, ends before last */}
        <div className="absolute top-[50px] left-32 right-32 h-0.5 bg-[#D1D5DC] transform -translate-y-1/2 z-0" />

        <div className="flex justify-between relative">
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col  items-center">
              {/* Circle */}
              <div className="bg-[#F7E83D] w-24 border-[#000000] border h-24 rounded-full flex items-center justify-center shadow-md z-10">
                <span className="text-4xl font-bold text-black">{item.step}</span>
              </div>
              {/* Text */}
              <h3 className="mt-8 text-xl font-medium text-[#0A0A0A]  w-48 text-center">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version - Stacked without line */}
      <div className="md:hidden grid grid-cols-1 gap-12 max-w-md mx-auto">
        {steps.map((item) => (
          <div key={item.step} className="flex flex-col items-center text-center">
            <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center shadow-md">
              <span className="text-3xl font-bold text-black">{item.step}</span>
            </div>
            <p className="mt-6 text-lg font-medium text-gray-800">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorksSection