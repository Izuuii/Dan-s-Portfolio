import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import { techIcons } from "../constant";

function Home() {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-[#121212] to-[#1A2920] overflow-hidden">
            <AnimatedBackground />

            {/* Content Section */}
            <div className="relative z-20 flex items-center justify-center py-55 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-137">
                <div className="text-center max-w-6xl">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[86px] font-extrabold mb-6 text-gray-200 leading-tight tracking-tight">
                        Transforming <span className="text-[#5AFF99]">Ideas</span> into Seamless <span className="text-[#5AFF99]">Digital Experiences.</span>
                    </h1>
                    <p
                        className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Hi, <span className="text-[#5AFF99] font-semibold">I'm Dan</span>, a <span className="text-white">Web Developer/Web Designer</span> who's passionate about
                        creating solutions, delightful user experiences & innovative interfaces.
                    </p>
                </div>
            </div>

            {/* Bottom Animated Element - moved above Marquee */}
            <div
                className="relative z-20 flex justify-center mb-15"  // reduced from mt-10 to mt-4
                style={{
                    width: '80px',
                    height: '80px',
                    pointerEvents: 'none',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                data-framer-background-image-wrapper="true"
            >
                <img
                    decoding="async"
                    src="https://framerusercontent.com/images/693hxMtSVBbRafSesIYYPZERQw.gif"
                    alt="Animated"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '12px',
                    }}
                />
            </div>

            {/* Optional: Marquee Icons */}
            <div className="w-screen overflow-hidden mt-2 px-2 bg-[#5AFF99] relative"> {/* Added bg-[#5AFF99] and relative */}
            <div className="animate-marquee flex whitespace-nowrap py-4 sm:py-7 gap-10 sm:gap-16 md:gap-25 items-center">
                {techIcons.concat(techIcons).map((icon, idx) => (
                <img
                    key={idx}
                    src={icon.imgUrl}
                    alt={`tech-${idx}`}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                />
                ))}
            </div>
            {/* Left Fade Overlay */}
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#5AFF99] to-transparent"></div>
            {/* Right Fade Overlay */}
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#5AFF99] to-transparent"></div>
            </div>
        </div>
    );
}

export default Home;
