import React from 'react';
import CardService from './CardServices';
import webdesignlogo from '../assets/webdesignicon.png';
import codeicon from '../assets/codeicon.png';
import hebergementicon from '../assets/hebergementicon.png';
import seoicon from '../assets/seoicon.png';

const servicesData = [
  {
    id: 1,
    title: 'Web Design',
    subtitle: 'Création dune expérience utilisateur unique et un design moderne sur mesure pour votre Marque.',
    image: webdesignlogo, 
  },
  {
    id: 2,
    title: 'Développement',
    subtitle: 'Code de qualité , robuste et optimisé pour donner vie à votre site web sur toutes les plateformes.',
    image: codeicon,
  },
  {
    id: 3,
    title: 'Hebergement',
    subtitle: 'Profitez dun hebergement sécurisé et dune maintenance continue pour assurer la performance de votre site.',
    image: hebergementicon,
  },
  {
    id: 4,
    title: 'S.E.O',
    subtitle: 'Ameliorer votre visibilité sur les moteurs de recherche avec des stratégies SEO (référencement) avancées.',
    image: seoicon,
  },
];

const Services = () => {
  return (
    <section className="py-10">
      <div className="flex flex-wrap justify-center gap-4">
        {servicesData.map((service) => (
          <CardService key={service.id} title={service.title} subtitle={service.subtitle} image={service.image} />
        ))}
      </div>
    </section>
  );
};

export default Services;