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
    techStack, 
    buttonDisabled,
}) => (
    <div className="flex flex-col lg:flex-row bg-[#18191A] rounded-3xl px-4 py-4 md:px-4 md:py-4 gap-6 md:gap-10 lg:gap-12 items-center mb-12 max-w-6xl mx-auto min-h-[400px]">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mb-2 lg:mb-0 order-1 lg:order-2 h-[320px] lg:h-[440px]">
            {image && (
                <img
                    src={image}
                    alt={imageAlt || "Project"}
                    className="rounded-2xl w-full h-full object-cover shadow-lg"
                />
            )}
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center order-2 lg:order-1 h-full">
            {/* Logo and text beside it, only on lg+ */}
            {logo && (
                <div className="flex items-center mb-4 hidden lg:flex">
                    <img
                        src={logo}
                        alt={logoAlt || "Logo"}
                        className="w-10 h-10 object-contain"
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
            {/* Tech Stack */}
            {techStack && techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="bg-[#232323] text-white text-xs px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            {buttonText && (
            <a
                href={buttonDisabled ? undefined : buttonLink}
                target={buttonDisabled ? undefined : "_blank"}
                rel={buttonDisabled ? undefined : "noopener noreferrer"}
                className={`font-semibold px-6 py-2 rounded-full transition shadow
                ${buttonDisabled
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-[#232323] text-white hover:bg-[#333]"}
                `}
                style={buttonDisabled ? { pointerEvents: "none" } : {}}
                tabIndex={buttonDisabled ? -1 : 0}
                aria-disabled={buttonDisabled ? "true" : "false"}
            >
                {buttonText}
            </a>
            )}
        </div>
    </div>
);

export default ProjectCard;