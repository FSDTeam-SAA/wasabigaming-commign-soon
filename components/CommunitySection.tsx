import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const CommunitySection = () => {
    return (
        <section className="py-16 px-4">
            <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="max-w-xl text-center lg:text-left">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                        Everything You Need To Launch Your Career
                    </h3>

                    <p className="text-gray-700 text-base sm:text-lg mb-8">
                        ALN brings interactive tools and a supportive community so you can
                        plan for your future.
                    </p>

                    <Button className="py-3 px-8 rounded-full bg-[#FFED00] text-[#0A0A0A] font-bold">
                        Join the WhatsApp Community!
                    </Button>
                </div>

                {/* Image */}
                <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                    <Image
                        src="/about.jpg"
                        alt="Community"
                        width={900}
                        height={900}
                        className="w-full h-auto rounded-xl shadow-lg"
                        priority
                    />
                </div>

            </div>
        </section>
    )
}

export default CommunitySection
