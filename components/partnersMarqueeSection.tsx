import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import company1 from '@/public/partners1.png' // Example placeholder
import company2 from '@/public/partners2.png' // Example placeholder
import company3 from '@/public/partners3.png' // Example placeholder
import company4 from '@/public/partners4.png' // Example placeholder
import company5 from '@/public/partners5.png' // Example placeholder
import company6 from '@/public/partners6.png' // Example placeholder

const logos = [
  { src: company1, alt: 'HAYS', width: 187, height: 60 },
  { src: company2, alt: 'Randstad', width: 60, height: 60 },
  { src: company3, alt: 'Indeed', width: 148, height: 60 },
  { src: company4, alt: 'Sthree', width: 60, height: 60 },
  { src: company5, alt: 'University 1', width: 60, height: 60 },
  { src: company6, alt: 'University 2', width: 120, height: 60 },
]

const PartnersMarquee = () => {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <Marquee gradient={false} speed={50} pauseOnHover={true} loop={0}>
        <div className="flex items-center gap-8 md:gap-20 lg:gap-48">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              style={{ width: logo.width, height: logo.height }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  )
}

export default PartnersMarquee
