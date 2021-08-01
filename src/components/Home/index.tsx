// == Import npm
import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';

// == Import
// import InitialTransition from 'src/components/InitialTransition';
import useWindowSize from 'src/lib/useWindowSize';
import { text, background } from 'src/lib/framerVariants';
import './styles.scss';

// == Type
type HomeProps = {
  controls: AnimationControls | undefined;
  setControls: (arg: AnimationControls) => void;
  pageIndex: number;
  setPageIndex: (arg: number) => void;
}

// == Composant
const Home = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}: HomeProps) => {
  const homeControls = useAnimation();
  const { width } = useWindowSize();
  const [techno, setTechno] = useState('ReactJS');
  const cn = `texte__large text__large--${techno}`;

  useEffect(() => {
    const id = setTimeout(() => {
      switch (techno) {
        case 'ReactJS':
          setTechno('NextJS');
          break;
        case 'NextJS':
          setTechno('NodeJS');
          break;
        default:
          setTechno('ReactJS');
      }
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [techno]);

  useEffect(() => {
    setControls(homeControls);
    if (controls && Object.keys(controls).length > 0) {
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
    <motion.section className="homeContainer">
      {/* <InitialTransition /> */}
      <motion.div
        className="home__background"
        initial={['initial']}
        animate={controls}
        variants={background}
      />
      <motion.div
        initial="initial"
        exit={width > 768 ? 'exit' : 'exitMobile'}
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
          {techno === 'ReactJS'
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
