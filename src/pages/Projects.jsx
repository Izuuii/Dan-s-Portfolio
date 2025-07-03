import { PROJECTS } from "../constant/index";
import ProjectCard from "../components/ProjectCard";

const Projects = () => (
    <div className="relative w-full min-h-screen bg-[#121212] py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 md:px-30">
            <h2 className="text-center text-green-400 text-md font-bold mb-2 tracking-widest">PROJECT</h2>
            <h1 className="text-center text-4xl sm:text-5xl font-bold mb-12 text-white">My Best Work</h1>
            {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
            ))}
        </div>
    </div>
);

export default Projects;