import React from "react";
import star from "../assets/images/star.png";
import { greetings } from "../constant";
import { motion } from 'framer-motion'; // Import motion
import { useInView } from 'react-intersection-observer'; // Import useInView

const Info = () => {
    const [ref, inView] = useInView({ // Hook to detect if component is in view
        triggerOnce: true, // Only trigger animation once
        threshold: 0.4,    
    });

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative w-full bg-gradient-to-b from-[#0A1D16] to-[#121212] overflow-hidden pt-24">

            {/* ⬆ Absolute Marquee at Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden bg-[#5AFF99] text-black z-10">
                <div className="animate-marquee flex whitespace-nowrap py-4 sm:py-6 gap-10 sm:gap-16 md:gap-20 items-center">
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
                                            className="w-15 h-15 mx-2 object-contain"
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Optional Gradient Overlays */}
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#5AFF99] to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#5AFF99] to-transparent pointer-events-none" />
            </div>

            {/* ⬇ Text Content with animation */}
            <div className="flex flex-col items-center px-6 text-center" ref={ref}> {/* Attach ref to trigger animation */}
                <motion.p
                    variants={textVariants} // Apply variants
                    initial="hidden"       // Set initial state
                    animate={inView ? "visible" : "hidden"} // Animate when in view
                    className="text-2xl sm:text-3xl md:text-4xl text-gray-400 max-w-3xl leading-relaxed py-20 md:py-50"
                >
                    I'm all about keeping things <span className="text-[#5AFF99]">easy</span> and <span className="text-[#5AFF99]">user-friendly</span>!
                    I'm always <span className="text-[#5AFF99]">learning and growing</span>, and I use that knowledge to turn tough problems into
                    <span className="text-[#5AFF99]"> smooth, lovable solutions</span>.
                </motion.p>
            </div>
        </div>
    );
};

export default Info;