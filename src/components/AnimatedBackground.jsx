import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const particlesJsRef = useRef(null);
  const shootingStarsCanvasRef = useRef(null);

  useEffect(() => {
    // Initialize particlesJS
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 75, density: { enable: true, value_area: 789.15 } },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.49,
            random: false,
            anim: { enable: true, speed: 0.25, opacity_min: 0, sync: false }
          },
          size: {
            value: 2,
            random: true,
            anim: { enable: true, speed: 0.333, size_min: 0, sync: false }
          },
          line_linked: { enable: false },
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
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "push" },
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
      console.warn("particlesJS is not defined.");
    }

    const canvas = shootingStarsCanvasRef.current;
    if (!canvas) return;
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
      const x = random(-canvas.width * 0.2, canvas.width);      // appear across full width
      const y = random(0, canvas.height * 0.8);                 // appear across more height
      const length = random(40, 80);                            // shorter length
      const speed = random(2, 5);                               // slower speed
      const angle = Math.PI / 4;                                // 45 degrees
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
      ctx.lineWidth = 1; // thinner trail
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

    // LESS frequent creation
    if (Math.random() < 0.01) {
        createStar();
    }

    requestAnimationFrame(animateStars);
    };


    animateStars();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <div id="particles-js" ref={particlesJsRef} className="absolute inset-0 z-0"></div>
      <canvas id="shooting-stars" ref={shootingStarsCanvasRef} className="absolute inset-0 z-10"></canvas>
    </>
  );
};

export default AnimatedBackground;
