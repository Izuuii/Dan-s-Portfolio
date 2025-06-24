import React, { useEffect, useRef } from 'react';

// IMPORTANT: particles.js is expected to be loaded as a global script via a <script> tag
// in your public/index.html, exposing `particlesJS` on the window object.
// Therefore, we do not import it directly here.

function Home() {
    const particlesJsRef = useRef(null);
    const shootingStarsCanvasRef = useRef(null);

    useEffect(() => {
        // Initialize particlesJS if it's available on the window object
        if (window.particlesJS) {
        window.particlesJS("particles-js", {
            particles: {
            number: {
                value: 75,
                density: {
                enable: true,
                value_area: 789.15
                }
            },
            color: { value: "#ffffff" },
            shape: {
                type: "circle", // Original type
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                // If you intend to use an image for particles, ensure the 'src' is correct and accessible.
                // For now, it's commented out to rely on 'circle' shape.
                // image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
                value: 0.49,
                random: false,
                anim: {
                enable: true,
                speed: 0.25,
                opacity_min: 0,
                sync: false
                }
            },
            size: {
                value: 2,
                random: true,
                anim: {
                enable: true,
                speed: 0.333,
                size_min: 0,
                sync: false
                }
            },
            line_linked: {
                enable: false, // Set to false as per original config
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
            },
            interactivity: {
            detect_on: "canvas", // Detect interactivity on the particles.js canvas itself
            events: {
                onhover: { enable: true, mode: "bubble" }, // Enable bubble effect on hover
                onclick: { enable: true, mode: "push" },   // Enable push effect on click
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                distance: 83.9,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3
                },
                repulse: { distance: 200, duration: 0.3 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
            },
            retina_detect: true
        });
        } else {
        console.warn("particlesJS is not defined. Make sure particles.js script is loaded in public/index.html.");
        }

        // Setup canvas for shooting stars
        const canvas = shootingStarsCanvasRef.current;
        if (!canvas) return; // Exit if canvas ref is not available
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const stars = [];

        const random = (min, max) => Math.random() * (max - min) + min;

        const createStar = () => {
        const x = random(-canvas.width * 0.2, 0); // Start slightly off-screen to the left
        const y = random(0, canvas.height * 0.4); // Start from top half
        const length = random(80, 150);
        const speed = random(5, 10);
        const angle = Math.PI / 4;
        stars.push({ x, y, length, speed, angle });
        };

        const drawStar = (star) => {
        const xEnd = star.x + Math.cos(star.angle) * star.length;
        const yEnd = star.y + Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(star.x, star.y, xEnd, yEnd);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
        };

        const animateStars = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = stars.length - 1; i >= 0; i--) {
            const star = stars[i];
            star.x += star.speed;
            star.y += star.speed;
            drawStar(star);

            if (star.x > canvas.width + star.length || star.y > canvas.height + star.length) {
            stars.splice(i, 1);
            }
        }

        if (Math.random() < 0.02) {
            createStar();
        }
        requestAnimationFrame(animateStars);
        };

        animateStars(); // Start the shooting stars animation

        // Cleanup function for event listeners
        return () => {
        window.removeEventListener("resize", resizeCanvas);
        // Note: particles.js does not have a public 'destroy' method directly
        // If you need to stop it, you might need to manually clear its canvas or stop its animation loop
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        // Fixed the typo: 'min-h-screenbg-gradient-to-b' changed to 'min-h-screen bg-gradient-to-b'
        <div className="relative w-full min-h-screen bg-gradient-to-b from-[#121212] to-[#1A2920] overflow-hidden font-roboto">
        {/* Particle Background - z-index 0 */}
        {/* This element is where particles.js draws its canvas. Ensure it covers the full area */}
        <div id="particles-js" ref={particlesJsRef} className="absolute inset-0 z-0"></div>

        {/* Shooting Stars Canvas - z-index 10 (on top of particles.js but below content) */}
        <canvas id="shooting-stars" ref={shootingStarsCanvasRef} className="absolute inset-0 z-10"></canvas>

        {/* Content - z-index 20 (on top of both backgrounds) */}
        <div className="relative z-20 flex items-center justify-center min-h-screen p-6 px-120">
            <div className="text-center max-w-6xl">
            <h1 className="text-6xl sm:text-8xl font-extrabold mb-6 text-gray-300 leading-tight">
                Transforming{" "}
                <span className="text-[#5AFF99]">
                Ideas
                </span>{" "}
                into Seamless{" "}
                <span className="text-[#5AFF99]">
                Digital Experiences.
                </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-350 max-w-2xl mx-auto leading-relaxed">
                Hi, <span className="text-[#5AFF99]"> I'm Dan</span>, a <span className="text-white font-medium">Web Developer</span> who's passionate about
                creating solutions, delightful user experiences & innovative interfaces.
            </p>
            </div>
        </div>

        <div
        className="absolute bottom-4 left-1/2 z-20"
        style={{
            transform: 'translateX(-50%)',
            width: '120px',
            height: '120px',
            pointerEvents: 'none'
        }}
        data-framer-background-image-wrapper="true"
        >
        <img
            decoding="async"
            src="https://framerusercontent.com/images/693hxMtSVBbRafSesIYYPZERQw.gif"
            alt="Animated"
            style={{
            width: '60%',
            height: '60%',
            objectFit: 'cover',
            borderRadius: '12px'
            }}
        />
        </div>

        </div>
    );
}

export default Home;
