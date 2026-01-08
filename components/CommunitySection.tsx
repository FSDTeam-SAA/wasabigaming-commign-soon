import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

const CommunitySection = () => {
    return (
        <section className="py-20 gap-11  flex items-center px-4">
            <div className='max-w-2xl'>
                <h3 className="text-4xl font-bold mb-4">Everything You Need To Lunch Your Career</h3>
                <h3 className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
                    ALN brings interactive, tools, and supportive community on that, so you can plan for your future.
                </h3>
                <div>
                    <Button className='py-3 px-10 rounded-full bg-[#FFED00] text-[#0A0A0A] font-bold'>Join the Whatsapp Community!</Button>
                </div>
            </div>
            <div className="flex flex-col border md:flex-row justify-center items-center gap-8">
                <Image
                    src="/about.jpg"
                    alt="Community Image 2"
                    width={900}
                    height={900}
                    className="rounded-lg shadow-lg"
                />
            </div>

        </section>
    );
}

export default CommunitySection