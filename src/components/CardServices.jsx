import React from 'react';

const CardService = ({ title, subtitle, image }) => {
  return (
    <div className="relative inline-flex items-center justify-center overflow-hidden rounded-lg p-0.5 mb-4 w-72"> 
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#2783FF] via-[#B345FF] to-[#F549FF]"></div>
      <div className="relative flex flex-col items-center justify-center bg-secondary rounded-lg p-4 text-center z-10">
        <h3 className="text-2xl font-semibold mb-2 gradient-text">{title}</h3>
        <p className="text-white mb-2">{subtitle}</p> 
        <img className="w-56 h-56 object-cover mt-4" src={image} alt={title} /> 
      </div>
    </div>
  );
};

export default CardService;