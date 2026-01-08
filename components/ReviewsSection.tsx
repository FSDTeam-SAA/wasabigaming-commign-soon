import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import company1 from '@/public/company1.png'; // Example placeholder
import company2 from '@/public/company2.png'; // Example placeholder
import company3 from '@/public/company3.png'; // Example placeholder
import company4 from '@/public/company4.png'; // Example placeholder
import company5 from '@/public/company5.png'; // Example placeholder
import company6 from '@/public/company6.png'; // Example placeholder

const logos = [
  { src: company1, alt: 'HAYS', height: 60 },
  { src: company2, alt: 'Randstad', height: 60 },
  { src: company3, alt: 'Indeed', height: 40 },
  { src: company4, alt: 'Sthree', height: 50 },
  { src: company5, alt: 'University 1', height: 60 },
  { src: company6, alt: 'University 2', height: 50 },

];

const PartnersMarquee = () => {
  return (
    <section className="py-16  overflow-hidden">
      <Marquee
        gradient={false}       
        speed={50}              
        pauseOnHover={true}     
        loop={0}               
      >
        <div className="flex items-center gap-24">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                width={logo.height * 2} // maintain a reasonable aspect ratio
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default PartnersMarquee;
