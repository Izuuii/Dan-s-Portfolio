import React from "react";

const NAVS = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
];

const Navbar = ({ active, onNavigate }) => {
    return (
        <nav className="sticky top-0 z-50 flex items-start pt-8 border-b-2 border-gray-300 bg-white backdrop-blur">
            <div className="flex w-full justify-start">
                {NAVS.map((nav, idx) => (
                    <button
                        key={nav.id}
                        onClick={() => onNavigate(nav.id)}
                        className={
                            "ibm-plex-mono-regular min-w-[60px] sm:min-w-[100px] md:min-w-[140px] text-center text-base sm:text-lg md:text-2xl pt-1 pb-1 " +
                            "transition-all duration-300 ease-in-out " +
                            (
                                active === nav.id
                                    ? (
                                        nav.id === "home"
                                            ? "text-gray-900 bg-white border-x-2 border-t-2 border-gray-300 shadow-none z-10 relative rounded-tr-2xl rounded-tl-none"
                                            : "text-gray-900 bg-white border-x-2 border-t-2 border-gray-300 shadow-none z-10 relative rounded-t-2xl"
                                    )
                                    : "text-slate-300 border-0 rounded-t-2xl"
                            )
                        }
                        style={
                            active === nav.id
                                ? { marginTop: "-24px", marginBottom: "-2px" }
                                : { marginTop: "0px" }
                        }
                    >
                        {nav.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;