import React from 'react';

const Tags = ({ label }) => {
  return (
    <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 mb-2">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2783FF] via-[#B345FF] to-[#F549FF]"></div>
      
      <div className="relative px-4 py-1 bg-secondary rounded-full text-white text-sm font-medium z-10 whitespace-nowrap max-w-full truncate">
        {label}
      </div>
    </div>
  );
};

export default Tags;