import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import star from "../assets/images/star.png";
import { greetings } from "../constant";    

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

            {/* Marquee Section */}
            <div className="w-screen overflow-hidden mt-2 bg-[#5AFF99] relative text-black">
                <div className="animate-marquee flex whitespace-nowrap py-4 sm:py-7 gap-10 sm:gap-16 md:gap-20 items-center">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center">
                    {greetings.map((text, idx) => (
                        <React.Fragment key={`${i}-${idx}`}>
                        <span className="text-xl sm:text-2xl font-medium mx-3 whitespace-nowrap">
                            {text}
                        </span>
                        {idx !== greetings.length - 1 && (
                            <img
                            src={star}
                            alt="star"
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 mx-2"
                            />
                        )}
                        </React.Fragment>
                    ))}
                    </div>
                ))}
                </div>

                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#5AFF99] to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#5AFF99] to-transparent pointer-events-none" />
            </div>
        </div>
    );
}

export default Home;
