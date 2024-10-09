import React from "react";
import heroImage from "../assets/heroimage.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto overflow-hidden">
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-[40vh] object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Transformez vos idées en solution digitales
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Nous créons des sites web sur mesure pour faire croître votre
          entreprise.
        </p>
        <div className="flex space-x-4">
          <Button
            type="full"
            showArrow={true}
            onClick={() => alert("Button Outline Clicked")}
          >
            Contacter
          </Button>
          <Button
            type="outline"
            showArrow={false}
            onClick={() => alert("Button Outline Clicked")}
          >
            Voir les projets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
