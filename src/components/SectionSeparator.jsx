import React from 'react';

const SectionSeparator = ({ text }) => {
  return (
    <div className="flex items-center my-8">
      <div className="flex-1 border-t border-gray-300"></div>
      <span className="mx-4 text-white font-medium uppercase md:text-2xl text-medium">{text}</span>
      <div className="flex-1 border-t border-gray-300"></div>
    </div>
  );
};

export default SectionSeparator;