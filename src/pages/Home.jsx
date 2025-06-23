import React from "react";

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col pt-10 font-mono overflow-x-hidden ">
            {/* Dots in upper-left */}
            <div className="flex space-x-2 pl-10 md:pl-13">
                <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: "#66CC8A" }}></span>
                <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: "#377CFB" }}></span>
                <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: "#F68067" }}></span>
            </div>
            {/* Text Content */}
            <div className="w-full max-w-3xl mx-auto text-left pt-30 px-10">
                <h1 className="text-4xl md:text-5xl font-semibold border-l-4 text-[#333C4D] pl-4 mb-2">
                    Hello, I am
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-[#66CC8A] italic pl-4 mb-4">
                    Dan Denver De Leon
                </h2>
                <h3 className="text-xl md:text-2xl pl-4 mb-4 text-[#333C4D]">
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
                <p className="text-base md:text-lg max-w-xl pl-4 mb-6 text-[#333C4D]">
                    Proficient in creating visually appealing and functional user
                    interfaces that adapt smoothly across devices. I follow best
                    practices in responsive design and frontend architecture.
                </p>
                <a
                    href="/path-to-your-cv.pdf"
                    download
                    className="pl-4 text-gray-700 underline hover:text-gray-900 transition"
                >
                    &gt; Download CV
                </a>
            </div>

            {/* Marquee Animation */}
            <div className="w-screen bg-[#F68067] overflow-hidden mt-50">
                <div className="animate-marquee flex whitespace-nowrap py-5 text-white">
                    {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex ">
                        {[
                        "Hello!",
                        "Annyeonghaseyo!",
                        "Konnichi wa!",
                        "Ni hao!",
                        "Bonjour!",
                        "Hola!",
                        "Hello!",
                        "Annyeonghaseyo!",
                        "Konnichi wa!",
                        "Ni hao!",
                        "Bonjour!",
                        "Hola!",
                        ].map((text, idx) => (
                        <span
                            key={`${i}-${idx}`}
                            className="inline-block mx-6 underline ibm-plex-mono-regular"
                        >
                            {text}
                        </span>
                        ))}
                    </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Home;
