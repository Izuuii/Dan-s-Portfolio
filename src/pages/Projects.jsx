import { PROJECTS } from "../constant/index";
import ProjectCard from "../components/ProjectCard";
import { motion } from 'framer-motion'; // Import motion
import { useInView } from 'react-intersection-observer'; // Import useInView

const Projects = () => {
    const [ref, inView] = useInView({ // Hook to detect if component is in view
        triggerOnce: true, // Only trigger animation once
        threshold: 0.2,    // Trigger when 20% of the component is visible
    });

    return (
        <div className="relative w-full min-h-screen bg-[#121212] pt-10 pb-16">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10" ref={ref}> {/* Attach ref to the main div */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-green-400 text-md font-bold mb-2 tracking-widest"
                >
                    PROJECT
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-4xl sm:text-5xl font-bold mb-20 text-white"
                >
                    My Best Work
                </motion.h1>
                {PROJECTS.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: idx * 0.5 }} // Stagger animation for each card
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: PROJECTS.length * 0.1 + 0.5 }} // Delay after project cards
                    className="text-center text-green-400 text-md font-bold mb-2 mt-20 tracking-widest"
                >
                    Designs
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: PROJECTS.length * 0.1 + 0.7 }}
                    className="text-center text-4xl sm:text-5xl font-bold mb-6 text-white"
                >
                    Glimpse of Designs
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: PROJECTS.length * 0.1 + 0.9 }}
                    className="text-center text-gray-400 text-lg mb-20"
                >
                    🚧 This page is under construction. Stay tuned for updates!
                </motion.p>
            </div>
        </div>
    );
};

export default Projects;