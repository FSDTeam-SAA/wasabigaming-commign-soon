import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer
      style={{ background: "linear-gradient(180deg, #FFEE35 0%, #FFFABF 100%)" }}
      className=""
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-[108px] h-[64px] object-contain z-50"
              />
             
            </div>
            <p className="text-[#131313] text-base leading-relaxed">
              Aspiring helps you build a professional, job-ready resume in minutes, get insight into law, and share your
              CV with elite supporting Tomorrow&apos;s Legal Talent. Today to take the next step in your career.
            </p>
          </div>

          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-black text-lg">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coming-soon" className="text-gray-800 hover:text-black text-sm transition">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-gray-800 hover:text-black text-sm transition">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-gray-800 hover:text-black text-sm transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal and Accessibility Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-black text-lg">Legal and Accessibility</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coming-soon" className="text-gray-800 hover:text-black text-sm transition">
                  Privacy policies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-800 text-xs">© copyright aspriinglegalnetwok.in 2023. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
