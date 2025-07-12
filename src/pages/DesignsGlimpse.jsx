// src/pages/DesignsGlimpse.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DesignsGlimpse = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div ref={ref} className="relative w-full min-h-screen bg-[#121212] py-16">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10">
                <motion.h2
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.2 }}
                    className="text-center text-green-400 text-md font-bold mb-2 tracking-widest"
                >
                    Designs
                </motion.h2>
                <motion.h1
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.2 }}
                    className="text-center text-4xl sm:text-5xl font-bold mb-6 text-white"
                >
                    Glimpse of Designs
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-400 text-lg mb-20"
                >
                    🚧 This page is under construction. Stay tuned for updates!
                </motion.p>
            </div>
        </div>
    );
};

export default DesignsGlimpse;