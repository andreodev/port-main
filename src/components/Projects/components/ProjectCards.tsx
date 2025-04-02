import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  repoLink,
  siteLink,
  imageLink,
  image,
}) {
  const isRepoLinkDisabled = repoLink === "#";
  const isSiteLinkDisabled = siteLink === "#";
  const isImageLinkDisabled = imageLink === "#";

  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="flex flex-col text-white items-center  md:w-4/5 mx-auto p-4 bg-opacity-custom rounded-lg shadow-lg mt-4">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        <div className="relative  flex-1 shadow-2xl">
          {!isImageLinkDisabled ? (
            <a href={imageLink} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={title}
                onLoad={handleImageLoad}
                style={{ opacity: isLoaded ? 1 : 0 }}
                className="rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-2xl "
              />
              <h1 className="absolute inset-0 flex justify-center items-center text-2xl font-bold bg-opacity-custom   p-4 rounded-lg">
                {title}
              </h1>
            </a>
          ) : (
            <div>
              <img
                src={image}
                alt={title}
                onLoad={handleImageLoad}
                style={{ opacity: isLoaded ? 1 : 0 }}
                className=" rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-2xl"
              />
              <h1 className="absolute inset-0 flex justify-center items-center text-2xl font-bold  p-4 rounded-lg">
                {title}
              </h1>
            </div>
          )}
        </div>
        <div className="flex-1">
          <p>{description}</p>
          <div className="flex space-x-4 mt-4">
            {!isRepoLinkDisabled ? (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-600"
              >
                <FaGithub className="mr-2" /> Repositório
              </a>
            ) : (
              <span className="flex items-center text-gray-400 cursor-not-allowed">
                <FaGithub className="mr-2" /> Repositório
              </span>
            )}
            {!isSiteLinkDisabled ? (
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-600"
              >
                <FaExternalLinkAlt className="mr-2" /> Site
              </a>
            ) : (
              <span className="flex items-center text-gray-400 cursor-not-allowed">
                <FaExternalLinkAlt className="mr-2" /> Site
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
