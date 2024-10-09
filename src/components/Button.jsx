import React from 'react';

const Button = ({ type = 'outline', children, showArrow = false, onClick }) => {
  const buttonClass = type === 'full' 
    ? 'bg-custom-gradient text-white hover:text-primary' // Design de ButtonFull
    : 'border-2 border-tertiary text-white  hover:text-white hover:text-tertiary'; // Design de BuutonOutline

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded-full transition-all duration-200 ${buttonClass}`}
    >
      {children} 
      {showArrow && (
        <span className="ml-2">&#8594;</span> // Flèche vers la droite
      )}
    </button>
  );
};

// exemple d'utilisation 
{/* <Button type="outline" showArrow={false} onClick={() => alert('Button Outline Clicked')}>
Outline Button
</Button> */}
export default Button;