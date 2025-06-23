import React from "react";  
import { techIcons, greetings } from "../constant";


const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col pt-10 font-mono overflow-x-hidden ">
            {/* Dots in upper-left */}
            <div className="flex space-x-2 pl-10 md:pl-13">
            <span
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full dot-pulse dot-delay-1"
                style={{ backgroundColor: "#66CC8A" }}
            ></span>
            <span
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full dot-pulse dot-delay-2"
                style={{ backgroundColor: "#377CFB" }}
            ></span>
            <span
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full dot-pulse dot-delay-3"
                style={{ backgroundColor: "#F68067" }}
            ></span>
            </div>
            {/* Text Content */}
            <div className="w-full max-w-3xl mx-auto text-left pt-12 sm:pt-20 md:pt-30  px-10">
                <h1 className="text-4xl md:text-5xl border-l-4 text-[#333C4D] pl-4 mb-2">
                    Hello, I am
                </h1>
                <h2 className="text-4xl md:text-6xl text-[#66CC8A] pl-4 mb-4">
                    Dan Denver De Leon
                </h2>
                <h3 className="text-xl md:text-3xl pl-4 mb-4 text-[#333C4D]">
                    A Frontend{" "}
                    <span
                    className="relative text-[#333C4D] px-1"
                    style={{
                        background: "linear-gradient(to top, #377CFB 50%, transparent 50%)"
                    }}
                    >
                    Developer
                    </span>
                </h3>
                <p className="text-base md:text-lg max-w-2xl pl-4 mb-6 text-[#333C4D]">
                    Proficient in creating visually appealing and functional user
                    interfaces that adapt smoothly across devices. I follow best
                    practices in responsive design and frontend architecture.
                </p>
                <div className="pl-4 space-y-2">
                    <a
                        href="/path-to-your-cv.pdf"
                        download
                        className="block text-base md:text-lg max-w-2xl text-[#333C4D] underline hover:text-gray-900 transition"
                    >
                        &gt; Download CV
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-base md:text-lg max-w-2xl text-[#333C4D] underline hover:text-gray-900 transition"
                    >
                        &gt; GitHub
                    </a>
                    <a
                        href="/path-to-certificates.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-base md:text-lg max-w-2xl text-[#333C4D] underline hover:text-gray-900 transition"
                    >
                        &gt; Certificates
                    </a>
                </div>
            </div>

            {/* Marquee Animation */}
            <div className="w-screen bg-[#F68067] overflow-hidden mt-5 sm:mt-10 md:mt-5 lg:mt-40">
                <div className="animate-marquee-reverse flex whitespace-nowrap py-3 sm:py-4 md:py-5 text-white">
                    {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex">
                        {greetings.map((text, idx) => (
                        <span
                            key={`${i}-${idx}`}
                            className="inline-block mx-3 sm:mx-4 md:mx-6 underline ibm-plex-mono-regular text-sm sm:text-base md:text-lg"
                        >
                            {text}
                        </span>
                        ))}
                    </div>
                    ))}
                </div>
            </div>

            {/* Marquee Icons Animation */}
            <div className="w-screen bg-[#333C4D] overflow-hidden mt-4 sm:mt-5">
                <div className="animate-marquee flex whitespace-nowrap py-3 sm:py-4 md:py-5 gap-10 sm:gap-16 md:gap-20 items-center">
                    {techIcons.concat(techIcons).map((icon, idx) => (
                    <img
                        key={idx}
                        src={icon.imgUrl}
                        alt={`tech-${idx}`}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                    />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
