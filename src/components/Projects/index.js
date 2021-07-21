// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// Import Material UI
import { Slider } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// == Import
import { text, background } from 'src/lib/framerVariants';
import projectsData from './projectsData';
import './styles.scss';

// == Composant
const Projects = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}) => {
  const projectsControls = useAnimation();
  const picturesControls = useAnimation();
  const pictureControls = projectsData.map(() => useAnimation());
  const [sliderValue, setSliderValue] = useState(0);

  const theme = createTheme({
    overrides: {
      MuiSlider: {
        thumb: {
          display: 'none',
        },
        root: {
          cursor: 'auto',
          color: '#000',
          height: '1px',
        },
        rail: {
          height: '1px',
          opacity: 0.1,
        },
        track: {
          height: '1px',
          transition: 'all 0.5s ease-in-out',
        },
      },
    },
  });

  const handleWheel = (e) => {
    if (e.deltaY > 0 || e.deltaX > 0) {
      setSliderValue((prevValue) => {
        if (prevValue < 100) {
          return prevValue + 4;
        }
        return prevValue;
      });
    }
    else if (e.deltaY < 0 || e.deltaX < 0) {
      setSliderValue((prevValue) => {
        if (prevValue > 0) {
          return prevValue - 4;
        }
        return prevValue;
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
      setSliderValue((prevValue) => {
        if (prevValue < 100) {
          return prevValue + 4;
        }
        return prevValue;
      });
    }
    else if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
      setSliderValue((prevValue) => {
        if (prevValue > 0) {
          return prevValue - 4;
        }
        return prevValue;
      });
    }
  };

  useEffect(() => {
    setControls(projectsControls);
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
    if (pageIndex !== 4) {
      setPageIndex(4);
    }

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    picturesControls.start({
      translateX: `-${sliderValue * 5}px`,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    });
    pictureControls.forEach((picControls) => {
      picControls.start({
        backgroundPosition: `${35 + (sliderValue / 6)}%`,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      });
    });
  }, [sliderValue]);

  return (
    <motion.section className="projectsContainer">
      <motion.div
        className="projects__background"
        initial={['initial']}
        animate={controls}
        variants={background}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={text}
        className="projects__container"
      >
        <h2 className="text__large">
          Mes Projets
        </h2>
        <div className="projects__content">
          <motion.div
            className="content__pictures"
            animate={picturesControls}
          >
            {projectsData.map((project, index) => (
              <motion.div
                className="content__picture"
                style={{ backgroundImage: `url(${project.url})` }}
                initial={{
                  backgroundPositionX: '25%',
                }}
                animate={pictureControls[index]}
              >
                <h5>{project.title}</h5>
                <p>
                  {project.subtitle}
                  {project.context}
                  {project.link}
                </p>
                <ul>
                  {project.tasks.map((task) => (
                    <li>{task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          <ThemeProvider theme={theme}>
            <div className="content__slider">
              <Slider value={sliderValue} />
            </div>
          </ThemeProvider>
        </div>
      </motion.div>
    </motion.section>
  );
};

Projects.propTypes = {
  controls: PropTypes.object,
  setControls: PropTypes.func,
  pageIndex: PropTypes.number,
  setPageIndex: PropTypes.func,
};

Projects.defaultProps = {
  controls: {},
  setControls: () => {},
  pageIndex: 4,
  setPageIndex: () => {},
};

// == Export
export default Projects;
