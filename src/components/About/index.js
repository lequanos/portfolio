// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// == Import
import { content, background } from 'src/lib/framerVariants';
import './styles.scss';

// == Composant
const About = ({ controls, setControls }) => {
  const aboutControls = useAnimation();

  useEffect(() => {
    setControls(aboutControls);
    if (Object.keys(controls).length > 0) {
      controls.start({
        zIndex: -10,
        transition: {
          delay: 0.3,
        },
      });
    }
  }, [controls]);

  return (
    <motion.section className="aboutContainer">
      <motion.div
        className="about__background"
        initial={['initial']}
        animate={controls}
        variants={background}
      />
      <motion.aside
        initial="initial"
        animate="animate"
        exit="exit"
        variants={content}
        className="about__picture"
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={content}
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
    </motion.section>
  );
};

About.propTypes = {
  controls: PropTypes.object,
  setControls: PropTypes.func,
};

About.defaultProps = {
  controls: {},
  setControls: () => {},
};

// == Export
export default About;
