import React from "react";

const Info = () => {
    return (
        <div className="relative w-full bg-gradient-to-b from-[#0A1D16] to-[#121212] overflow-hidden py-30">
            {/* Text Content */}
            <div className="flex flex-col items-center justify-center h-full px-6 text-center pt-20">
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-3xl leading-relaxed">
                    I'm all about keeping things <span className="text-[#5AFF99]">easy</span> and <span className="text-[#5AFF99]">user-friendly</span>! 
                    I'm always <span className="text-[#5AFF99]">learning and growing</span>, and I use that knowledge to turn tough problems into 
                    <span className="text-[#5AFF99]"> smooth, lovable solutions</span>.
                </p>
            </div>
        </div>
    );
};

export default Info;
