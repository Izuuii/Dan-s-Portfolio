// About.jsx
const About = () => (
    <div className="text-center min-h-screen w-full bg-[#121212] pt-10 py-30">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">About Me</h2>
        <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-green-100 leading-relaxed mb-6">
                I specialize in React and Tailwind, creating responsive and user-friendly websites 
                that deliver exceptional user experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Frontend</h3>
                    <p className="text-sm text-green-100">React, JavaScript, HTML, CSS</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Styling</h3>
                    <p className="text-sm text-green-100">Tailwind CSS, SCSS, Bootstrap</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Tools</h3>
                    <p className="text-sm text-green-100">Git, Webpack, Vite, Figma</p>
                </div>
            </div>
        </div>
    </div>
);
export default About;