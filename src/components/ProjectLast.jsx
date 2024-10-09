import React from 'react';
import mockup from '../assets/mockup.png';
import Button from './Button';
import Tags from './Tags';

const ProjectLast = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 w-full sm:w-3/4 space-y-4 sm:space-y-0">
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">
            L'innovation web à son meilleur
          </h1>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-end">
          <p className="text-lg md:text-xl text-white mb-4 text-center sm:text-right">
            Vous souhaitez voir tous nos projets ?
          </p>
          <Button
            type="outline"
            showArrow={true}
            onClick={() => alert("Voir le projet")}
          >
            Voir le projet
          </Button>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-lg p-0.5 mb-4 lg:w-3/4 w-full h-auto md:h-[40vh]">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#2783FF] via-[#B345FF] to-[#F549FF]"></div>
        <div className="relative flex flex-col md:flex-row w-full h-full bg-secondary rounded-lg p-4 md:p-8 text-white z-10">
          <div className="flex justify-center items-center w-full md:w-1/2 h-auto mb-4 md:mb-0">
            <img
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain rounded-lg"
              src={mockup}
              alt="Project"
            />
          </div>

          <div className="flex flex-col justify-between w-full md:w-1/2 h-full text-center md:text-left">
            <div>
              <h2 className="md:text-3xl text-2xl font-semibold mb-4">
                Multiservices Couverture Yvetot 76 : Un site sur mesure pour des experts en toiture.
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start space-x-2 mb-4">
                <Tags label="React Js" />
                <Tags label="Tailwind Css" />
                <Tags label="Firebase" />
                <Tags label="2024" />
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Button
                type="full"
                showArrow={true}
                onClick={() => alert("Voir le projet")}
              >
                Voir le projet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLast;