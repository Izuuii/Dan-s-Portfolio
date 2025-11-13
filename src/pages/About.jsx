import React from "react";
import certicode from "../assets/AboutImage/CerticodeLogo.png";
import profile from '../assets/AboutImage/profile.jpg';
import { techIcons } from "../constant";
import { motion } from 'framer-motion'; // Import motion
import { useInView } from 'react-intersection-observer'; // Import useInView

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen w-full bg-[#121212] py-16">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10 py-4 sm:py-5 md:py-8" ref={ref}>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-green-400 text-center text-md font-bold mb-2 tracking-widest"
                >
                    ABOUT ME
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-4xl sm:text-5xl font-bold mb-10 text-white"
                >
                    Get To Know Me
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-[auto] gap-4 mb-10">
                    {/* Profile Image */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 md:row-span-2 bg-[#18191A] rounded-xl flex items-center justify-center p-4"
                    >
                        <img
                            src={profile}
                            alt="Profile"
                            className="rounded-lg w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover"
                        />
                    </motion.div>
                    {/* Background */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.6 }}
                        className="md:col-span-3 md:row-span-2 bg-[#18191A] rounded-xl p-6 flex flex-col justify-center"
                    >
                        <h4 className="text-white font-semibold mb-2">My Background</h4>
                        <p className="text-gray-300 text-base leading-relaxed text-justify">
                        I am Dan Denver De Leon, a Full Stack Developer with a strong passion for building modern, responsive, and user-centered web applications. I specialize in both front-end and back-end development, using technologies such as React, Next.js, Node.js, and MongoDB to create efficient and scalable solutions. I take pride in writing clean, maintainable code and designing intuitive interfaces that enhance user experience. As a detail-oriented and continuously learning developer, I’m always eager to explore new tools, collaborate with teams, and contribute to innovative projects that make a real impact.
                        </p>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.8 }}
                        className="md:col-span-3 md:row-span-2 md:row-start-3 bg-[#18191A] rounded-xl p-6"
                    >
                        <h4 className="text-white font-semibold mb-4">Education</h4>
                        <div className="flex items-center">
                            <img src="" alt="N/A" className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <p className="text-white font-bold">N/A</p>
                                <p className="text-gray-400 text-sm">N/A</p>
                                <p className="text-gray-400 text-xs">N/A</p>
                            </div>
                        </div>
                    </motion.div>
                    {/* Experience */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 1.0 }}
                        className="md:col-span-2 md:row-span-2 md:row-start-3 bg-[#18191A] rounded-xl p-6"
                    >
                        <h4 className="text-white font-semibold mb-4">Experience</h4>
                        <div className="flex items-center mb-4">
                            <img src={certicode} alt="Jio" className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <p className="text-white font-bold">Frontend Dev, UI/UX TL</p>
                                <p className="text-gray-400 text-sm">Felix Ave, Cainta, Rizal • Certicode</p>
                                <p className="text-gray-400 text-xs">March 2025 – June 2025</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img src="" alt="N/A" className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <p className="text-white font-bold">MK International Trading Inc</p>
                                <p className="text-gray-400 text-sm">Alabang, Muntinlupa City</p>
                                <p className="text-gray-400 text-xs">July 2025 - October 2025</p>
                            </div>
                        </div>
                    </motion.div>
                    {/* Tool Stack */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 1.2 }}
                        className="col-span-1 md:col-span-5 row-span-1 md:row-start-5 bg-[#18191A] rounded-xl p-6 flex flex-col"
                    >
                        <h4 className="text-white font-semibold mb-4">Tool Stack</h4>
                        <div className="overflow-x-hidden w-full">
                            <div className="flex gap-6 animate-marquee">
                                {techIcons.concat(techIcons).map((icon, idx) => (
                                    <img
                                        key={idx}
                                        src={icon.imgUrl}
                                        alt={icon.alt}
                                        className="w-12 h-12"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;