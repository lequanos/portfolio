// == Import npm
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';

// == Import
// import InitialTransition from 'src/components/InitialTransition';
import './styles.scss';

// == Composant
const Home = () => {
  const [techno, setTechno] = useState('React');

  useEffect(() => {
    setTimeout(() => {
      switch (techno) {
        case 'React':
          setTechno('NextJS');
          break;
        case 'NextJS':
          setTechno('NodeJS');
          break;
        default:
          setTechno('React');
      }
    }, 3000);
  }, [techno]);

  const cn = `texte__large text__large--${techno}`;

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
    <motion.section>
      {/* <InitialTransition /> */}
      <motion.div
        className="home__background"
        initial={['initial']}
        animate={['animate']}
        exit={['exit']}
        variants={backgroundContainer}
      />
      <motion.div
        initial="initial"
        exit="exit"
        animate="animate"
        variants={textContainer}
        className="home__text"
      >
        <div>
          <h1 className="text__small">
            Quân Tran Van Ba
          </h1>
          <h2 className="text__large">
            Développeur
          </h2>
          {techno === 'React'
              && (
                <h2 className={cn}>
                  {techno}
                </h2>
              )}
          {techno === 'NextJS'
              && (
                <h2 className={cn}>
                  {techno}
                </h2>
              )}
          {techno === 'NodeJS'
              && (
                <h2 className={cn}>
                  {techno}
                </h2>
              )}
        </div>
        <div className="social">
          <a href="https://github.com/lequanos" target="_blank" rel="noreferrer">
            <SiGithub className="text__icon" size={40} />
          </a>
          <a href="https://www.linkedin.com/in/quan-tranvanba/" target="_blank" rel="noreferrer">
            <SiLinkedin className="text__icon" size={40} />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

// == Export
export default Home;
