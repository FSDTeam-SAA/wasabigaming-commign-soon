import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Sparkles } from 'lucide-react'

const CommunitySection = () => {
    return (
        <section className="py-16 px-4">
            <div className="mx-auto container flex flex-col-reverse lg:flex-row items-center gap-28">
                {/* Image */}
                <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                    <Image
                        src="/project2.png"
                        alt="Community"
                        width={900}
                        height={900}
                        className="w-full h-auto rounded-xl shadow-lg"
                        priority
                    />
                </div>


                {/* Text Content */}
                <div className="max-w-xl text-center lg:text-left">

                    <Button variant="secondary" size="sm" className="rounded-full border mb-5 border-[#EBEBEB] text-[#2B6BA1] bg-[#EBEBEB] backdrop-blur">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Career Insight Tools
                    </Button>
                    <h3 className="text-3xl sm:text-4xl text-[#E4E403] font-bold mb-4">
                        Psychometric Test
                    </h3>

                    <h3 className="text-[#1E1E1E] font-bold text-[52px]  text-base leading-[60px]  mb-8">
                        Discover your strengths, <br /> interests, and career fit
                    </h3>

                    <p className='text-[#5A5A5A]'>Discover how your skills, interests, and working style align with different career paths, helping you make more confident choices about your next steps.</p>

                    <Button className="py-3 px-8 mt-6 rounded-full  bg-[#FFFF00] text-[#0A0A0A] font-bold">
                        Start Assessment
                    </Button>
                </div>


            </div>
        </section>
    )
}

export default CommunitySection
