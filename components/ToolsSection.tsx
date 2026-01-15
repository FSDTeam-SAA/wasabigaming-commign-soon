// 'use client'

// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Sparkles } from 'lucide-react'
// import Image from 'next/image'

// const ToolsSection = () => {
//   // 👉 image state
//   const [activeImage, setActiveImage] = useState('/project1.png')

//   return (
//     <div
//       style={{
//         background: 'linear-gradient(180deg, #FFEE35 0%, #FFFABF 100%)',
//       }}
//     >
//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-6 pt-12">
//         <div>
//           <Button
//             variant="secondary"
//             size="sm"
//             className="rounded-full bg-white/90 text-[#9135EA] backdrop-blur"
//           >
//             <Sparkles className="mr-2 h-4 w-4" />
//             Features
//           </Button>

//           <div className="mt-3 grid grid-cols-1 mb-14 lg:grid-cols-3 gap-4 lg:gap-12 items-center">
//             {/* Left Side */}
//             <div>
//               <h1 className="text-3xl md:text-[40px] font-black text-gray-900 leading-tight">
//                 Everything You Need to
//                 <br />
//                 Launch Your Career
//               </h1>
//             </div>

//             <div></div>

//             {/* Right Side */}
//             <div className="text-start space-y-8 max-w-md">
//               <p className="text-lg text-gray-800">
//                 The Aspiring Legal Network equips you with smart tools to build,
//                 prepare, and excel in your career.
//               </p>

//               <Button
//                 size="lg"
//                 className="rounded-s bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
//               >
//                 <Sparkles className="mr-2 h-5 w-5" />
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Navigation Pills */}
//       <div className="relative z-10 pb-12 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-wrap justify-center gap-3">
//             <Button
//               className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-6 py-3"
//               onMouseEnter={() => setActiveImage('/project1.png')}
//             >
//               Application Tracker
//             </Button>

//             <Button
//               variant="secondary"
//               className="rounded-full bg-[#E7E7E7] text-gray-900 px-6 py-3"
//               onMouseEnter={() => setActiveImage('/law-firm-profiles.png')}
//             >
//               Law Firm Profiles
//             </Button>

//             <Button
//               variant="secondary"
//               className="rounded-full bg-[#E7E7E7] text-gray-900 px-6 py-3"
//               onMouseEnter={() => setActiveImage('/Mock-Interview.png')}
//             >
//               Mock Interview
//             </Button>

//             <Button
//               variant="secondary"
//               className="rounded-full bg-[#E7E7E7] text-gray-900 px-6 py-3"
//               onMouseEnter={() => setActiveImage('/assessment-centre.png')}
//             >
//               Assessment Centre
//             </Button>

//             <Button
//               variant="secondary"
//               className="rounded-full bg-[#E7E7E7] text-gray-900 px-6 py-3"
//               onMouseEnter={() => setActiveImage('/courses.png')}
//             >
//               Courses
//             </Button>

//             <Button
//               variant="secondary"
//               className="rounded-full bg-[#E7E7E7] text-gray-900 px-6 py-3"
//               onMouseEnter={() => setActiveImage('/cover-letter-builder.png')}
//             >
//               Cover Letter Builder
//             </Button>

//             <Button
//               variant="secondary"
//               className="rounded-full bg-[#E7E7E7] text-gray-900 px-6 py-3"
//               onMouseEnter={() => setActiveImage('/cv-builder.png')}
//             >
//               CV Builder
//             </Button>
//           </div>
//         </div>

//         {/* Image Section (NO STYLE CHANGE) */}
//         <div className="flex overflow-hidden mt-10 items-center justify-center">
//           <Image
//             src={activeImage}
//             alt="Tool Preview"
//             width={900}
//             height={900}
//             quality={100}
//             className="object-contain w-[1440px] rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ToolsSection



'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

const ToolsSection = () => {
  // 👉 image state
  const [activeImage, setActiveImage] = useState('/project1.png')
  // 👉 active button state
  const [activeButton, setActiveButton] = useState('Application Tracker')

  // Buttons data
  const buttons = [
    { name: 'Application Tracker', image: '/project1.png' },
    { name: 'Law Firm Profiles', image: '/law-firm-profiles.png' },
    { name: 'Mock Interview', image: '/Mock-Interview.png' },
    { name: 'Assessment Centre', image: '/assessment-centre.png' },
    { name: 'Courses', image: '/courses.png' },
    { name: 'Cover Letter Builder', image: '/cover-letter-builder.png' },
    { name: 'CV Builder', image: '/cv-builder.png' },
  ]

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #FFEE35 0%, #FFFABF 100%)',
      }}
    >
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-12">
        <div>
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full bg-white/90 text-[#9135EA] backdrop-blur"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Features
          </Button>

          <div className="mt-3 grid grid-cols-1 mb-14 lg:grid-cols-3 gap-4 lg:gap-12 items-center">
            {/* Left Side */}
            <div>
              <h1 className="text-3xl md:text-[40px] font-black text-gray-900 leading-tight">
                Everything You Need to
                <br />
                Launch Your Career
              </h1>
            </div>

            <div></div>

            {/* Right Side */}
            <div className="text-start space-y-8 max-w-md">
              <p className="text-lg text-gray-800">
                The Aspiring Legal Network equips you with smart tools to build,
                prepare, and excel in your career.
              </p>

              <Button
                size="lg"
                className="rounded-s bg-white text-gray-900 hover:bg-gray-100 shadow-lg transition-colors"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Pills */}
      <div className="relative z-10 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {buttons.map((btn) => (
              <Button
                key={btn.name}
                variant="secondary"
                className={`rounded-full px-6 py-3 transition-colors ${activeButton === btn.name
                    ? 'bg-gray-900 text-white hover:bg-gray-900'
                    : 'bg-[#E7E7E7] text-gray-900 hover:bg-[#dcdcdc]'
                  }`}
                onMouseEnter={() => {
                  setActiveImage(btn.image)
                  setActiveButton(btn.name)
                }}
              >
                {btn.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex overflow-hidden mt-10 items-center justify-center">
          <Image
            src={activeImage}
            alt="Tool Preview"
            width={900}
            height={900}
            quality={100}
            className="object-contain w-[1440px] rounded-lg transition-all duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default ToolsSection
