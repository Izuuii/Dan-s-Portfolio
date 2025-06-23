import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const sectionsData = [
    { id: "home", label: "Home", content: <p>Welcome to my portfolio!</p> },
    { id: "about", label: "About", content: <p>This is the about section.</p> },
    { id: "projects", label: "Projects", content: <p>Here are my projects.</p> },
    { id: "contact", label: "Contact", content: <p>Contact me here.</p> },
    ];

    const HomePage = () => {
    const [active, setActive] = useState("home");
    const sectionRefs = useRef({});

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let current = "home";
        for (const section of sectionsData) {
            const ref = sectionRefs.current[section.id];
            if (ref) {
            const { offsetTop } = ref;
            if (scrollPosition >= offsetTop) {
                current = section.id;
            }
            }
        }
        setActive(current);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to section when navbar is clicked
    const handleNavClick = (id) => {
        const ref = sectionRefs.current[id];
        if (ref) {
        ref.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div>
        <Navbar active={active} onNavigate={handleNavClick} />
        <div>
            {sectionsData.map((section) => (
            <section
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="p-8 text-center min-h-screen flex flex-col justify-center"
            >
                <h1 className="text-4xl font-bold mb-4">{section.label}</h1>
                {section.content}
            </section>
            ))}
        </div>
        </div>
    );
};

export default HomePage;