// import { FileText, Library, PenTool, Play, Tags } from 'lucide-react';
// import React from 'react';

// const ToolsSection = () => {
//   const tools = [
//     { title: 'AI CV Builder', desc: 'Tailor your profile into management-ready CVs', icon: FileText, button: 'Start planning' },
//     { title: 'Cover Letter Studio', desc: 'Guided walkthrough to editing cohesive portfolio', icon: PenTool, button: 'View my cvs' },
//     { title: 'Mock Interview Simulation', desc: 'Practice applications with resident feedback', icon: Play, button: 'Try a mock' },
//     { title: 'Assessment Centre Lab', desc: 'Prepare with profile-enhanced skills simulator', icon: Tags, button: 'Start test' },
//     { title: 'Law Firm Library', desc: 'Complete virtual library of guides, courses, and more', icon: Library, button: 'Explore drive' },
//   ];

//   return (
//     <section >
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
//         {tools.map((tool, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between text-center hover:shadow-2xl transition"
//           >
//             <div>
//               <div className="bg-[#FFFF00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <tool.icon className="text-black w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
//               <p className="text-sm text-gray-700 mb-6">{tool.desc}</p>
//             </div>
//             <button className="bg-[#FFED00] hover:bg-[#FFED00]/80 text-black font-semibold py-2 px-6 rounded-full transition mx-auto">
//               {tool.button}
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ToolsSection;

import React from 'react'
import { Button } from './ui/button'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

const ToolsSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FFEE35 0%, #FFFABF 100%)"
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-12">
        {/* Features Button - Top Left */}
        <div>

          <Button variant="secondary" size="sm" className="rounded-full bg-white/90 text-[#9135EA] backdrop-blur">
            <Sparkles className="mr-2 h-4 w-4" />
            Features
          </Button>

          <div className="mt-3 grid grid-cols-1 mb-14 lg:grid-cols-3 gap-12 items-center">
            {/* Left Side - Text */}
            <div>
              <h1 className="text-5xl md:text-[40px] font-black text-gray-900 leading-tight">
                Everything You Need to
                <br />
                Launch Your Career
              </h1>
            </div>
            <div>

            </div>
            {/* Right Side - Description + CTA */}
            <div className="text-start space-y-8 max-w-md">
              <p className="text-lg text-gray-800">
                The Aspiring Legal Network equips you with smart tools to build, prepare, and excel in your career.
              </p>

              <Button
                size="lg"
                className="rounded-s bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
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
            <Button
              variant="default"
              className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-6 py-3"
            >
              Application Tracker
            </Button>
            <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
              Law Firm Profiles
            </Button>
            <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
              Mock Interview
            </Button>
            <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
              Assessment Centre
            </Button>
            <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
              Courses
            </Button>
            <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
              Cover Letter Builder
            </Button>
            <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
              CV Builder
            </Button>
            {/* Optional extra pill if needed */}
            {/* <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
              Profile
            </Button> */}
          </div>
        </div>
        <div className="flex overflow-hidden mt-10  items-center  justify-center">
          <Image
            src="/project1.png"
            alt="Community"
            width={900}
            height={900}
            quality={100}
            className="object-contain w-[1440px]  rounded-lg "
          />
        </div>
      </div>
    </div>

  )
}

export default ToolsSection