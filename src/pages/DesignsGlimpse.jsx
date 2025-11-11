import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CerticodeUi from '../assets/DesignsImage/CerticodeUI.png';
import OnlyPans from '../assets/DesignsImage/OnlyPans.png';
import LegacyGlobal from '../assets/DesignsImage/legacyglobal.mp4';

const DesignsGlimpse = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } }, // Delay for the main container
    };

    return (
        <div className="relative w-full min-h-screen bg-[#121212] py-16">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10" ref={ref}>
                <motion.h2
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.1 }}
                    className="text-center text-green-400 text-md font-bold mb-2 tracking-widest"
                >
                    Designs
                </motion.h2>
                <motion.h1
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.3 }}
                    className="text-center text-4xl sm:text-5xl font-bold mb-10 text-white"
                >
                    Glimpse of Designs
                </motion.h1>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className=""
                >

                    <div className="w-full flex items-center justify-center">
                        <img
                            src={CerticodeUi}
                            alt="Desktop Design Mockup"
                            className="rounded-xl w-full h-auto object-contain shadow-lg mb-5"
                        />
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className=""
                >
                    <div className="w-full flex items-center justify-center">
                        <img
                            src={OnlyPans}
                            alt="Desktop Design Mockup"
                            className="rounded-xl w-full h-auto object-contain shadow-lg mb-5"
                        />
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className=""
                >
                    <div className="w-full flex items-center justify-center">
                        <video
                            src={LegacyGlobal}
                            controls
                            className="rounded-xl w-full h-auto object-contain shadow-lg mb-5"
                            playsInline
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 1.0 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-400 text-lg italic">
                        Under Construction
                    </p>
                </motion.div>
                
            </div>
        </div>
    );
};

export default DesignsGlimpse;
