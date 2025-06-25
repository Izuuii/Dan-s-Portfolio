const Projects = () => (
    <div className="text-center min-h-screen w-full">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">Projects</h2>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="text-green-400 text-2xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold text-white mb-3">React Portfolio</h3>
                    <p className="text-green-100 text-sm mb-4">
                        A modern, responsive portfolio website built with React and Tailwind CSS.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">React</span>
                        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Tailwind</span>
                    </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="text-green-400 text-2xl mb-4">📝</div>
                    <h3 className="text-xl font-bold text-white mb-3">Todo App</h3>
                    <p className="text-green-100 text-sm mb-4">
                        A feature-rich todo application with drag-and-drop functionality.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">React</span>
                        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Context API</span>
                    </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="text-green-400 text-2xl mb-4">📚</div>
                    <h3 className="text-xl font-bold text-white mb-3">Blog Platform</h3>
                    <p className="text-green-100 text-sm mb-4">
                        A full-stack blog platform with user authentication and content management.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">React</span>
                        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Node.js</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Projects;