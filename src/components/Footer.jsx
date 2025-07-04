import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => (
    <footer className="bg-[#121212] border-t border-neutral-800 py-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social icons */}
            <div className="flex space-x-3">
                <a
                    href="https://github.com/Izuuii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#18191A] hover:bg-[#232323] transition"
                >
                    <FaGithub className="text-gray-300 text-lg" />
                </a>
                <a
                    href="https://www.linkedin.com/in/dan-denver-de-leon-1887ab272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#18191A] hover:bg-[#232323] transition"
                >
                    <FaLinkedinIn className="text-gray-300 text-lg" />
                </a>
                <a
                    href="https://www.instagram.com/dandnvr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#18191A] hover:bg-[#232323] transition"
                >
                    <FaInstagram className="text-gray-300 text-lg" />
                </a>
                <a
                    href="mailto:denverdeleon21@gmail.com"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#18191A] hover:bg-[#232323] transition"
                    title="Email"
                >
                    <FaEnvelope className="text-gray-300 text-lg" />
                </a>
            </div>

            {/* Footer text */}
            <p className="text-gray-400 text-sm flex items-center">
                &copy; {new Date().getFullYear()} Dan Denver. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;