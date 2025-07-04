import React from "react";
import certicode from "../assets/AboutImage/CerticodeLogo.png"; 
import profile from '../assets/AboutImage/profile.jpg';
import { techIcons } from "../constant";


const About = () => (
    <div className="min-h-screen w-full bg-[#121212] py-16">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-8">
            <h3 className="text-green-400 text-center text-md font-bold mb-2 tracking-widest">ABOUT ME</h3>
            <h2 className="text-center text-4xl sm:text-5xl font-bold mb-10 text-white">Get To Know Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-[auto] gap-4 mb-10">
                {/* Profile Image */}
                <div className="md:col-span-2 md:row-span-2 bg-[#18191A] rounded-xl flex items-center justify-center p-4">
                    <img
                        src={profile}
                        alt="Profile"
                        className="rounded-lg w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover"
                    />
                </div>
                {/* Background */}
                <div className="md:col-span-3 md:row-span-2 bg-[#18191A] rounded-xl p-6 flex flex-col justify-center">
                    <h4 className="text-white font-semibold mb-2">My Background</h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                        Hi! I’m Dan Denver, a passionate front-end developer and UI/UX enthusiast. As a fresh graduate, I’ve already gained hands-on experience through my internship at Supsoft Tech and our capstone project, BeeMo.

                        <p className="py-5">I enjoy creating clean, responsive, and user-friendly interfaces with React, Tailwind CSS, and Figma. From building layouts to improving design systems, I love making ideas come to life.</p>

                        I’m always eager to learn new tools and frameworks, solve problems, and collaborate with others to deliver great digital experiences.
                    </p>
                </div>
                {/* Education */}
                <div className="md:col-span-3 md:row-span-2 md:row-start-3 bg-[#18191A] rounded-xl p-6">
                    <h4 className="text-white font-semibold mb-4">Education</h4>
                    <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <p className="text-white font-bold">UI/UX Bootcamp</p>
                            <p className="text-gray-400 text-sm">Designboat UI UX School • Bangalore</p>
                        </div>
                        <span className="text-gray-400 text-xs sm:ml-4">Aug 2021 – Feb 2022</span>
                    </div>
                    <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <p className="text-white font-bold">MCA</p>
                            <p className="text-gray-400 text-sm">Chandigarh University • Distance Education</p>
                        </div>
                        <span className="text-gray-400 text-xs sm:ml-4">June 2022 – June 2024</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <p className="text-white font-bold">B.Sc Computer Science</p>
                            <p className="text-gray-400 text-sm">North Maharashtra University • Jalgaon</p>
                        </div>
                        <span className="text-gray-400 text-xs sm:ml-4">June 2018 – Apr 2021</span>
                    </div>
                </div>
                {/* Experience */}
                <div className="md:col-span-2 md:row-span-2 md:row-start-3 bg-[#18191A] rounded-xl p-6">
                    <h4 className="text-white font-semibold mb-4">Experience</h4>
                    <div className="flex items-center mb-4">
                        <img src={certicode} alt="Jio" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="text-white font-bold">Frontend Dev, UI/UX TL</p>
                            <p className="text-gray-400 text-sm">Felix Ave, Cainta, Rizal • Certicode</p>
                            <p className="text-gray-400 text-xs">March 11, 2025 – June 20, 2025</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="" alt="N/A" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="text-white font-bold">N/A</p>
                            <p className="text-gray-400 text-sm">N/A</p>
                            <p className="text-gray-400 text-xs">N/A</p>
                        </div>
                    </div>
                </div>
                {/* Tool Stack */}
                <div className="col-span-1 md:col-span-5 row-span-1 md:row-start-5 bg-[#18191A] rounded-xl p-6 flex flex-col">
                    <h4 className="text-white font-semibold mb-4">Tool Stack</h4>
                    <div className="overflow-x-hidden w-full">
                        <div className="flex gap-6 animate-marquee">
                            {techIcons.concat(techIcons).map((icon, idx) => (
                                <img
                                    key={idx}
                                    src={icon.imgUrl}
                                    alt={icon.alt}
                                    className="w-12 h-12"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;