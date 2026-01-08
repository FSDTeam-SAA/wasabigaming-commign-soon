import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

const Hero = () => {
    return (
        <section className="relative text-center py-20 px-4 bg-gradient-to-r  overflow-hidden">
            {/* Decorative Stars */}
            <div className="absolute top-8 left-4 text-yellow-600 text-3xl animate-pulse">✦</div>
            <div className="absolute top-12 right-4 text-yellow-500 text-4xl opacity-80">★</div>
            <div className="absolute bottom-24 left-8 text-yellow-700 text-2xl">✨</div>
            <div className="absolute bottom-16 right-8 text-yellow-600 text-3xl opacity-70 animate-pulse">✦</div>
            <div className="absolute top-32 left-1/3 text-yellow-500 text-xl">★</div>
            <div className="absolute bottom-32 right-1/4 text-yellow-700 text-2xl opacity-60">✨</div>
            <div className="absolute top-1/4 right-1/3 text-yellow-600 text-lg animate-pulse">✦</div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                PURSUE YOUR LEGAL DREAMS<br />
                WITH CONFIDENCE
            </h1>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                Access tools, events, and insight created for aspiring solicitors, apprentices
            </p>

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 w-full max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:bg-white rounded-full sm:shadow-2xl py-4 px-4 sm:px-6">

                    {/* Type Select */}
                    <Select >
                        <SelectTrigger className="w-full sm:w-64 rounded-full py-3 px-4 border-0 bg-transparent text-gray-700 focus:ring-0">
                            <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="type1">Type 1</SelectItem>
                            <SelectItem value="type2">Type 2</SelectItem>
                            <SelectItem value="type3">Type 3</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Location Select */}
                    <Select >
                        <SelectTrigger className="w-full sm:w-64 rounded-full py-3 px-4 border-0 bg-transparent text-gray-700 focus:ring-0">
                            <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="location1">Location 1</SelectItem>
                            <SelectItem value="location2">Location 2</SelectItem>
                            <SelectItem value="location3">Location 3</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Search Button */}
                    <Button className="w-full sm:w-auto bg-[#FFFF00] hover:bg-[#FFFF00]/90 text-gray-900 border border-[#CACA00] font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
                        Search
                    </Button>

                </div>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                <Button className="w-full sm:w-auto bg-[#FFFF00] hover:bg-[#FFFF00]/90 text-[#1E1E1E] border border-[#CACA00] font-bold py-4 px-10 sm:px-16 rounded-full shadow-xl transition-all duration-300 text-lg">
                    Start now
                </Button>
                <Button variant="outline" className="w-full sm:w-auto border-2 border-[#C2C227] text-[#6B6B6B] font-bold py-4 px-10 sm:px-16 rounded-full transition-all duration-300 text-lg bg-transparent">
                    Join Community
                </Button>
            </div>

            {/* Info Section */}
            <div className="mt-10 px-4 sm:px-0">
                <h3 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    Everything You Need to Launch Your Career
                </h3>
                <p className="text-center text-[#5A5A5A] text-base sm:text-lg mb-12 max-w-3xl mx-auto">
                    The Aspiring Legal Network equips you with smart tools to build, prepare, and excel in your career.
                </p>
            </div>
        </section>
    );
};

export default Hero;
