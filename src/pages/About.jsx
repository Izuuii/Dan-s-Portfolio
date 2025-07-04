import React from "react";
// import your profile image and tool icons if available
// import profileImg from "../assets/profile.png";
// import figmaIcon from "../assets/icons/figma.png";
// ...other imports

const About = () => (
    <div className="min-h-screen w-full bg-[#121212] py-16">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-8">
            <h3 className="text-green-400 text-center text-sm font-bold mb-2 tracking-widest">ABOUT ME</h3>
            <h2 className="text-center text-4xl sm:text-5xl font-bold mb-10 text-white">Get To Know Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-[auto] gap-4 mb-10">
                {/* Profile Image */}
                <div className="md:col-span-2 md:row-span-2 bg-[#18191A] rounded-xl flex items-center justify-center p-6">
                    <img
                        src="/path/to/your/profile.png"
                        alt="Profile"
                        className="rounded-lg w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover"
                    />
                </div>
                {/* Background */}
                <div className="md:col-span-3 md:row-span-2 bg-[#18191A] rounded-xl p-6 flex flex-col justify-center">
                    <h4 className="text-white font-semibold mb-2">My Background</h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                        Hey there! I'm a UI/UX designer and developer who's been in the game for 2 years, mostly at Reliance Jio. I'm big on learning new stuff on my own, and I love tackling all sorts of design challenges.<br /><br />
                        In my current role, I work closely with everyone from product managers to developers, helping bring ideas to life. I'm good at figuring out how long things will take, sketching out designs, testing them out, and making them look sharp. Plus, I'm always up for researching users, checking out what the competition is doing, and figuring out which features matter most. Basically, I'm all about creating designs that people love to use!
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
                        <img src="/path/to/jio-logo.png" alt="Jio" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="text-white font-bold">UI UX Designer</p>
                            <p className="text-gray-400 text-sm">Reliance Jio • Navi Mumbai</p>
                            <p className="text-gray-400 text-xs">June 2022 – Present</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="/path/to/softanic-logo.png" alt="Softanic" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="text-white font-bold">Graphic Designer Freelancer</p>
                            <p className="text-gray-400 text-sm">Softanic Solutions • Jalgaon</p>
                            <p className="text-gray-400 text-xs">June 2019 – Dec 2021</p>
                        </div>
                    </div>
                </div>
                {/* Tool Stack */}
                <div className="col-span-1 md:col-span-5 row-span-1 md:row-start-5 bg-[#18191A] rounded-xl p-6 flex flex-col">
                    <h4 className="text-white font-semibold mb-4">Tool Stack</h4>
                    <div className="flex flex-wrap gap-6 justify-center">
                        {/* Replace src with your actual icon paths */}
                        <img src="/path/to/figma.png" alt="Figma" className="w-12 h-12" />
                        <img src="/path/to/react.png" alt="React" className="w-12 h-12" />
                        <img src="/path/to/photoshop.png" alt="Photoshop" className="w-12 h-12" />
                        <img src="/path/to/illustrator.png" alt="Illustrator" className="w-12 h-12" />
                        <img src="/path/to/jioworks-logo.png" alt="JioWorks" className="w-12 h-12" />
                        <img src="/path/to/star-icon.png" alt="Star" className="w-12 h-12" />
                        <img src="/path/to/slack.png" alt="Slack" className="w-12 h-12" />
                        <img src="/path/to/notion.png" alt="Notion" className="w-12 h-12" />
                        <img src="/path/to/grammarly.png" alt="Grammarly" className="w-12 h-12" />
                        <img src="/path/to/spotify.png" alt="Spotify" className="w-12 h-12" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;