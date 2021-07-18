// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';

// == Import
// import InitialTransition from 'src/components/InitialTransition';
import { text, background } from 'src/lib/framerVariants';
import './styles.scss';

// == Composant
const Home = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}) => {
  const homeControls = useAnimation();
  const [techno, setTechno] = useState('React');
  const cn = `texte__large text__large--${techno}`;

  useEffect(() => {
    const id = setTimeout(() => {
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

    return () => {
      clearTimeout(id);
    };
  }, [techno]);

  useEffect(() => {
    setControls(homeControls);
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
    if (pageIndex !== 0) {
      setPageIndex(0);
    }
  }, []);

  return (
    <motion.section>
      {/* <InitialTransition /> */}
      <motion.div
        className="home__background"
        initial={['initial']}
        animate={controls}
        variants={background}
      />
      <motion.div
        initial="initial"
        exit="exit"
        animate="animate"
        variants={text}
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

Home.propTypes = {
  controls: PropTypes.object,
  setControls: PropTypes.func,
  pageIndex: PropTypes.number,
  setPageIndex: PropTypes.func,
};

Home.defaultProps = {
  controls: {},
  setControls: () => {},
  pageIndex: 1,
  setPageIndex: () => {},
};

// == Export
export default Home;
