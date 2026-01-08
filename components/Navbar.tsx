"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            {/* Top Strip */}
            <div className="bg-yellow-400 text-black text-sm py-1 px-4">
                <div className="container mx-auto py-3 flex justify-start space-x-2">
                    <Link href="/coming-soon" className="hover:underline">
                        <h3>  Students</h3>
                    </Link>
                    <span>|</span>
                    <Link href="/coming-soon" className="hover:underline">
                        <h3>School</h3>
                    </Link>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-[linear-gradient(90deg,#FEF26D_0%,#FEF9C2_100%)] py-4 px-8 mt-0">
                <div className="flex items-center justify-between container mx-auto">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="ALN Logo"
                                width={100}
                                height={50}
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center bg-[#FFFFFF66] space-x-8 border border-[#E6E6E6] rounded-full text-black font-medium">
                        <li className="py-5 px-8">
                            <Link href="/coming-soon" className="hover:text-gray-800 cursor-pointer">
                                Application Tracker
                            </Link>
                        </li>
                        <li className="py-5 px-8">
                            <Link href="/coming-soon" className="hover:text-gray-800 cursor-pointer">
                                Law Firm Profiles
                            </Link>
                        </li>
                        <li className="py-5 px-8">
                            <Link href="/coming-soon" className="hover:text-gray-800 cursor-pointer">
                                Event
                            </Link>
                        </li>
                        <li className="py-5 px-8">
                            <Link href="/coming-soon" className="hover:text-gray-800 cursor-pointer">
                                Courses
                            </Link>
                        </li>
                        <li className="py-5 px-8">
                            <Link href="/coming-soon" className="hover:text-gray-800 cursor-pointer">
                                Mock Interviews
                            </Link>
                        </li>
                        <li className="py-5 px-8 relative group">
                            <Link href="/coming-soon" className="hover:text-gray-800 cursor-pointer">
                                More
                            </Link>
                        </li>
                    </ul>

                    {/* Right Buttons - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/coming-soon">
                            <button className="bg-[#FFFF00] hover:bg-[#FFFF00]/80 text-[#1E1E1E] border border-[#E5E500] font-semibold py-2 px-6 rounded-full shadow-md transition">
                                CV Builder ▼
                            </button>
                        </Link>
                        <Link href="/coming-soon">
                            <button className="border-[#E5E500] border text-[#A6A600] font-bold py-2 px-6 rounded-full shadow-md transition">
                                Login
                            </button>
                        </Link>
                        <Link href="/coming-soon">
                            <button className="bg-[#FFFF00] hover:bg-[#FFFF00]/80 text-[#1E1E1E] border border-[#E5E500] font-semibold py-2 px-6 rounded-full shadow-md transition">
                                Sign Up
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none"
                        >
                            {/* Hamburger Icon */}
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white/90 backdrop-blur-md mt-2 rounded-lg shadow-lg">
                        <ul className="flex flex-col space-y-2 p-4 text-black font-medium">
                            <li className="hover:text-gray-800 cursor-pointer py-2 px-4">Application Tracker</li>
                            <li className="hover:text-gray-800 cursor-pointer py-2 px-4">Law Firm Profiles</li>
                            <li className="hover:text-gray-800 cursor-pointer py-2 px-4">Event</li>
                            <li className="hover:text-gray-800 cursor-pointer py-2 px-4">Courses</li>
                            <li className="hover:text-gray-800 cursor-pointer py-2 px-4">Mock Interviews</li>
                            <li className="hover:text-gray-800 cursor-pointer py-2 px-4">More</li>

                            <div className="flex flex-col space-y-2 mt-4">
                                <button className="bg-[#FFFF00] hover:bg-[#FFFF00]/80 text-[#1E1E1E] border border-[#E5E500] font-semibold py-2 px-4 rounded-full shadow-md transition">
                                    CV Builder ▼
                                </button>
                                <button className="border-[#E5E500] border text-[#A6A600] font-bold py-2 px-4 rounded-full shadow-md transition">
                                    Login
                                </button>
                                <button className="bg-[#FFFF00] hover:bg-[#FFFF00]/80 text-black font-bold py-2 px-4 rounded-full shadow-md transition">
                                    Sign up
                                </button>
                            </div>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
