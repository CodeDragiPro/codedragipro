import React from 'react';

const Button = ({ type = 'outline', children, showArrow = false, onClick }) => {
  const buttonClass =
    type === 'full'
      ? 'bg-gradient-to-br from-[#2783FF] via-[#B345FF] to-[#F549FF] text-white' 
      : 'relative inline-flex items-center justify-center p-0.5 bg-gradient-to-br from-[#2783FF] via-[#B345FF] to-[#F549FF]'; 

  const innerClass =
    type === 'full'
      ? 'px-4 py-2 bg-transparent text-white font-semibold rounded-full'
      : 'px-4 py-2 bg-secondary text-white font-semibold rounded-full';

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full transition-all duration-200 ${buttonClass}`}
    >
      <div className={`relative z-10 ${innerClass}`}>
        {children}
        {showArrow && <span className="ml-2">&#8594;</span>} 
      </div>
    </button>
  );
};

export default Button;