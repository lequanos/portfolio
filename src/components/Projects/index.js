// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// Import Material UI
import { Slider } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// == Import
import { text, background } from 'src/lib/framerVariants';
import Project from './Project';
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
  const pictureControls = projectsData.map(() => useAnimation());
  const picturesControls = useAnimation();
  const [sliderValue, setSliderValue] = useState(0);
  const [grabbing, setGrabbing] = useState(false);

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
          transition: 'all 0.3s ease-in-out',
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

  const handleOnMouseDown = (e) => {
    e.preventDefault();
    setGrabbing(true);
    picturesControls.start({
      cursor: 'grabbing',
    });
  };

  const handleOnMouseUp = (e) => {
    e.preventDefault();
    setGrabbing(false);
    picturesControls.start({
      cursor: 'grab',
    });
  };

  const handleOnMouseMove = (e) => {
    e.preventDefault();
    if (grabbing) {
      if (e.movementX < 0) {
        setSliderValue((prevValue) => {
          if (prevValue < 100) {
            return prevValue + 4;
          }
          return prevValue;
        });
      }
      else if (e.movementX > 0) {
        setSliderValue((prevValue) => {
          if (prevValue > 0) {
            return prevValue - 4;
          }
          return prevValue;
        });
      }
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
        ease: 'easeOut',
      },
    });
    pictureControls.forEach((picControls) => {
      picControls.start({
        backgroundPosition: `${-400 - (sliderValue)}px`,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
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
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            onMouseMove={handleOnMouseMove}
          >
            {projectsData.map((project, index) => (
              <Project
                key={project.id}
                {...project}
                index={index}
                projectsData={projectsData}
                pictureControls={pictureControls}
              />
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
