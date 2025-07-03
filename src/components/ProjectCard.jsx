import React from "react";

const ProjectCard = ({
    logo,
    logoAlt,
    logoText,
    title,
    description,
    image,
    imageAlt,
    buttonText,
    buttonLink,
    }) => (
    <div className="flex flex-col lg:flex-row bg-[#18191A] rounded-3xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 gap-6 md:gap-10 lg:gap-12 items-center mb-12 max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mb-6 lg:mb-0 order-1 lg:order-2">
        {image && (
            <div className="w-full lg:w-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full rounded-2xl">
            <img
                src={image}
                alt={imageAlt || "Project"}
                className="rounded-2xl w-full h-auto object-cover"
            />
            </div>
        )}
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center order-2 lg:order-1">
        {/* Logo and text beside it, only on lg+ */}
        {logo && (
            <div className="flex items-center mb-4 hidden lg:flex">
            <img
                src={logo}
                alt={logoAlt || "Logo"}
                className="w-10 h-10 rounded-full object-contain"
            />
            {logoText && (
                <span className="ml-4 text-white text-lg font-semibold">
                {logoText}
                </span>
            )}
            </div>
        )}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
            {title}
        </h2>
        <p className="text-gray-400 text-base sm:text-md mb-6">{description}</p>
        {buttonText && buttonLink && (
            <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#232323] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#333] transition"
            >
            {buttonText}
            </a>
        )}
        </div>
    </div>
);

export default ProjectCard;
