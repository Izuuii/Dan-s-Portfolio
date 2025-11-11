import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Projects from "./pages/Projects";
import Commissions from "./pages/Commissions";
import About from "./pages/About";
import DesignsGlimpse from "./pages/DesignsGlimpse"; // Import the new page component
import Footer from "./components/Footer";
// import Contact from "./pages/Contact";

const sectionsData = [
  { id: "home", label: "Home", content: <Home /> },
  { id: "info", label: "Info", content: <Info /> },
  { id: "projects", label: "Projects", content: <Projects /> },
  { id: "commissions", label: "Commissions", content: <Commissions /> },
  { id: "designs", label: "Designs", content: <DesignsGlimpse /> }, 
  { id: "about", label: "About", content: <About /> },
  // { id: "contact", label: "Contact", content: <Contact /> },
];

function App() {
  const [active, setActive] = useState("home");
  const sectionRefs = useRef({});

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

  const handleNavClick = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const ref = sectionRefs.current[id];
      if (ref) {
        ref.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <Navbar active={active} onNavigate={handleNavClick} />
      <div>
        {sectionsData.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="w-full"
          >
            {section.content}
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;