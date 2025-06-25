import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Home() {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-[#121212] to-[#1A2920] overflow-hidden">
            <AnimatedBackground />

        {/* Responsive Content Section */}
        <div className="relative z-20 flex items-center justify-center min-h-screen px-10 sm:px-20 md:px-30">
            <div className="text-left sm:text-center max-w-6xl">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[86px] font-extrabold mb-6 text-gray-200 leading-tight tracking-tight">
                Transforming <span className="text-[#5AFF99]">Ideas</span>
                <span className="inline sm:block"> into Seamless </span>
                <span className="text-[#5AFF99]">Digital Experiences.</span>
                </h1>
                <p
                className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-0 sm:mx-auto leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                Hi, <span className="text-[#5AFF99] font-semibold">I'm Dan</span>, a <span className="text-white">Web Developer/Web Designer</span> who's passionate about
                creating solutions, delightful user experiences & innovative interfaces.
                </p>
            </div>
        </div>


            {/* Bottom Animated Element */}
            <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
                <img
                    decoding="async"
                    src="https://framerusercontent.com/images/693hxMtSVBbRafSesIYYPZERQw.gif"
                    alt="Animated"
                    className="w-20 h-20 object-cover rounded-xl"
                />
            </div>
        </div>
    );
}

export default Home;
