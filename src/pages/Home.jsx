import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Home() {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-[#121212] to-[#1A2920] overflow-hidden font-roboto">
        <AnimatedBackground />

        <div className="relative z-20 flex items-center justify-center min-h-screen p-6 px-150">
            <div className="text-center max-w-6xl">
            <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 text-gray-300 leading-tight">
                Transforming <span className="text-[#5AFF99]">Ideas</span> into Seamless <span className="text-[#5AFF99]">Digital Experiences.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-350 max-w-2xl mx-auto leading-relaxed">
                Hi, <span className="text-[#5AFF99]">I'm Dan</span>, a <span className="text-white font-medium">Web Developer/Web Designer</span> who's passionate about
                creating solutions, delightful user experiences & innovative interfaces.
            </p>
            </div>
        </div>

        <div className="absolute bottom-4 left-1/2 z-20" style={{ transform: 'translateX(-50%)', width: '120px', height: '120px', pointerEvents: 'none' }} data-framer-background-image-wrapper="true">
            <img
            decoding="async"
            src="https://framerusercontent.com/images/693hxMtSVBbRafSesIYYPZERQw.gif"
            alt="Animated"
            style={{
                width: '60%',
                height: '60%',
                objectFit: 'cover',
                borderRadius: '12px'
            }}
            />
        </div>
        </div>
    );
}

export default Home;
