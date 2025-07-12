import { motion } from 'framer-motion'; // Import motion
import { useInView } from 'react-intersection-observer'; // Import useInView

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className="text-center min-h-screen w-full"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-8 text-white">Contact Me</motion.h2>
            <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
                <p className="text-lg sm:text-xl text-green-100 mb-8">
                    Let's connect and discuss your next project!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <motion.a
                        variants={itemVariants}
                        href="mailto:you@example.com"
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                    >
                        <div className="text-green-400 text-3xl mb-3 group-hover:scale-110 transition-transform">📧</div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                        <p className="text-green-100">you@example.com</p>
                    </motion.a>

                    <motion.a
                        variants={itemVariants}
                        href="https://github.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                    >
                        <div className="text-green-400 text-3xl mb-3 group-hover:scale-110 transition-transform">🐙</div>
                        <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                        <p className="text-green-100">github.com/yourprofile</p>
                    </motion.a>
                </div>

                <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Let's Work Together</h3>
                    <p className="text-green-100 mb-6">
                        I'm always open to discussing new opportunities and interesting projects.
                    </p>
                    <a
                        href="mailto:you@example.com"
                        className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
export default Contact;