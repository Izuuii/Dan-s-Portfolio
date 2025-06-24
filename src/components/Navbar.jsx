import React, { useState, useEffect } from "react";

const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

const Navbar = ({ active, onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Set scrolled state for backdrop blur effect
            setIsScrolled(currentScrollY > 20);
            
            // Auto-hide logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and past 100px - hide navbar
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
                // Scrolling up or at top of page - show navbar
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleNavClick = (sectionId) => {
        onNavigate(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${
            isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
            isScrolled 
                ? "bg-gray-200/10 backdrop-blur-lg shadow-xl py-3" 
                : "bg-transparent py-6"
        }`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    
                    {/* Brand/Logo */}
                    <button
                        onClick={() => handleNavClick("home")}
                        className="text-2xl font-roboto font-bold text-white hover:text-green-400 transition-colors duration-300 " style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        <span className="font-roboto text-white">
                            Dan.
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`relative text-medium transition-all duration-300 group ${
                                    active === link.id
                                        ? "text-[#5AFF99]"
                                        : "text-gray-300 hover:text-[#5AFF99]"
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        
                        {/* Resume Button */}
                        <button
                        onClick={() => window.open('#', '_blank')}
                        className="bg-[#1D1F1E] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-[#5AFF99]"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                        Resume
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white hover:text-[green-400 ]focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
                                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
                                isMobileMenuOpen ? "opacity-0" : "opacity-100"
                            }`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
                                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                    <div className={`md:hidden transition-all duration-300 ${
                        isMobileMenuOpen 
                            ? "max-h-screen opacity-100 mt-6" 
                            : "max-h-0 opacity-0 mt-0"
                    } overflow-hidden overflow-y-auto`}>
                    <div className="bg-gray-200/10 backdrop-blur-sm rounded-lg p-4 space-y-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`block w-full text-left py-3 px-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                                    active === link.id
                                        ? "text-[#5AFF99] bg-green-500/20"
                                        : "text-white hover:text-green-400 hover:bg-white/10"
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        
                        {/* Mobile Resume Button */}
                        <button
                            onClick={() => window.open('#', '_blank')}
                            className="block w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-3 px-4 rounded-lg text-lg font-semibold transition-all duration-200 text-center"
                        >
                            Resume
                        </button>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-20"></div>
        </nav>
    );
};

export default Navbar;