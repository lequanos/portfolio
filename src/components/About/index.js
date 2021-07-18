// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// == Import
import { text, picture, background } from 'src/lib/framerVariants';
import './styles.scss';

// == Composant
const About = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}) => {
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

  useEffect(() => {
    if (pageIndex !== 1) {
      setPageIndex(1);
    }
  }, []);

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
        variants={picture}
        className="about__picture"
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={text}
        className="about__text"
      >
        <div>
          <h2 className="text__medium">
            À propos de moi
          </h2>
          <p className="text__small">
            Fier papa d'un petit garçon, j'ai officié pendant près de 15 ans dans le domaine
            de la restauration, dont les 8 dernières en tant que directeur de restaurant.
            <br />
            <br />
            Suite à la crise de la Covid, j'ai suivi une formation avec <a href="https://oclock.io" target="_blank" rel="noreferrer">l'école O'Clock </a>
            afin d'opérer une reconversion professionnelle dans un domaine qui
            m'a toujours tenu à coeur, le développement web.
            <br />
            <br />
            Cette formation m'a notamment permis d'acquérir de solides compétences en Javascript,
            avec entre autres ReactJS en Front-End et NodeJS en Back-End avec le framework Express.
            Mais elle m'a surtout permis d'avoir les clés pour apprendre en
            autonomie de nouveaux outils.
            <br />
            <br />
            Au-delà de tout ça, je suis également un passionné de café sous toute ses formes,
            de boulangerie et toujours aussi de cuisine !
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

About.propTypes = {
  controls: PropTypes.object,
  setControls: PropTypes.func,
  pageIndex: PropTypes.number,
  setPageIndex: PropTypes.func,
};

About.defaultProps = {
  controls: {},
  setControls: () => {},
  pageIndex: 1,
  setPageIndex: () => {},
};

// == Export
export default About;
