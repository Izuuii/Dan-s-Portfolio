// src/pages/Projects.jsx
import { PROJECTS } from "../constant/index";
import ProjectCard from "../components/ProjectCard";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    // This ref monitors when the entire Projects section comes into view
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.05,    // Adjusted threshold to 5% visibility for better mobile loading
    });

    return (
        <div className="relative w-full min-h-screen bg-[#121212] py-16">
            {/* Attach the ref to the main content container to detect when it's in view */}
            <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10" ref={ref}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0 }}
                    className="text-center text-green-400 text-md font-bold mb-2 tracking-widest"
                >
                    PROJECT
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-center text-4xl sm:text-5xl font-bold mb-20 text-white"
                >
                    My Best Work
                </motion.h1>

                {/* Map through projects and render ProjectCard for each */}
                {PROJECTS.map((project, idx) => (
                    // ProjectCard component now handles its own animation based on an animationDelay prop
                    <ProjectCard
                        key={idx} // Unique key for list rendering
                        {...project} // Pass all project properties
                        animationDelay={idx * 0.05} // Pass a staggered delay to each card
                    />
                ))}

                {/* DesignsGlimpse is now a separate page/section */}

            </div>
        </div>
    );
};

export default Projects;
