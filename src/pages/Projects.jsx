// src/pages/Projects.jsx
import { PROJECTS } from "../constant/index";
import ProjectCard from "../components/ProjectCard";
// Remove: import DesignsGlimpse from "../components/DesignsGlimpse";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="relative w-full min-h-screen bg-[#121212] py-16">
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
                {PROJECTS.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: idx * 0.05 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}

                {/* Removed DesignsGlimpse component */}

            </div>
        </div>
    );
};

export default Projects;