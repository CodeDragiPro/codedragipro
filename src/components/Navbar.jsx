import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa'; 
import Button from './Button';
import logo from '../assets/logoCodeDragi.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('FR'); 

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === 'FR' ? 'EN' : 'FR'));
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-secondary shadow-md">
      <button className="text-white" onClick={toggleMenu}>
        <FaBars size={25} />
      </button>
      <img src={logo} alt="Logo" className="h-10" />
      <span className="relative inline-block">
        <button onClick={handleLanguageChange} className="flex items-center text-white">
          {language}
        </button>
      </span>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
          <button onClick={closeMenu} className="absolute top-6 left-4 text-white">
            <FaTimes size={25} />
          </button>
          <div className="flex flex-col space-y-4 text-center text-6xl uppercase">
            <a href="#" className="text-white" onClick={closeMenu}>Accueil</a>
            <a href="#" className="text-white" onClick={closeMenu}>Services</a>
            <a href="#" className="text-white" onClick={closeMenu}>Projets</a>
            <a href="#" className="text-white" onClick={closeMenu}>Skills</a>
            <a href="#" className="text-white" onClick={closeMenu}>Contact</a>
          </div>
          <div className="pt-4">
            <Button type="outline" showArrow={true} onClick={() => alert('Button Outline Clicked')}>
              Connexion
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;