// == Import npm
import React from 'react';
import { motion } from 'framer-motion';

// == Import
import './styles.scss';

// == Composant
const About = () => {
  const textContainer = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const backgroundContainer = {
    initial: {
      rotate: -45,
    },
    animate: {
      zIndex: -10,
      transition: {
        delay: 0.3,
      },
    },
    exit: {
      x: -2000,
      y: -2000,
      transition: {
        type: 'spring',
        duration: 1,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div>
      <motion.div
        className="about__background"
        initial={['initial']}
        animate={['animate']}
        exit={['exit']}
        variants={backgroundContainer}
      />
      {/* <aside className="about__picture" /> */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={textContainer}
        className="about__text"
      >
        <div>
          <h2 className="text__large">
            A propos
          </h2>
          <p className="text__small">
            Après avoir travaillé pendant près de 15 ans dans le domaine de la restauration,
            dont les 8 dernières en tant que directeur de restaurant,
            j'ai profité comme tant d'autres personnes du confinement pour changer d'air
            et me lancer dans le développement web, et je ne regrette pas du tout !
            <br />
            <br />
            Ainsi, j'ai commencé la formation fullstack JS avec <a href="https://oclock.io" target="_blank" rel="noreferrer">l'école O'Clock </a>
            qui a débuté en novembre 2020, et s'est terminée en mai 2021.
            Cela m'a permis d'acquérir de solides compétences en Javascript,
            avec notamment ReactJS en Front-End et
            NodeJs en Back-End avec le framework Express.
            <br />
            <br />
            Au-delà de tout ça, je suis également le très heureux papa d'un petit garçon,
            qui me rend fier tous les jours !
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// == Export
export default About;
