

import React from 'react'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

const Features = () => {
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

                    <div className="mt-3 grid grid-cols-1 mb-14 lg:grid-cols-3 lg:gap-12 gap-5 items-center">
                        {/* Left Side - Text */}
                        <div>
                            <h1 className="text-2xl md:text-[40px] font-black text-gray-900 leading-tight">
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
                            Student Tracking
                        </Button>
                        <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
                            Student Profiles
                        </Button>
                        <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
                            Events
                        </Button>
                        <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
                            Student Premium Features
                        </Button>
                        <Button variant="secondary" className="rounded-full bg-[#E7E7E7] backdrop-blur text-gray-900 px-6 py-3">
                            Learning Courses
                        </Button>
                        {/* Optional extra pill if needed */}

                    </div>
                </div>
                <div className="flex overflow-hidden mt-10  items-center  justify-center">
                    <Image
                        src="/schoolProject1.png"
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

export default Features