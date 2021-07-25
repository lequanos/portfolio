// == Import npm
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// Import Material UI
import { Slider } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// == Import
import { text, background } from 'src/lib/framerVariants';
import useWindowSize from 'src/lib/useWindowSize';
import projectsData from 'src/data/projectsData';
import Project from './Project';
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
  const titlesControls = projectsData.map(() => useAnimation());
  const { width } = useWindowSize();
  const [sliderValue, setSliderValue] = useState(0);
  const [grabbing, setGrabbing] = useState(false);
  const [projectIndex, setProjectIndex] = useState(null);
  const [xValue, setXValue] = useState();
  const [yValue, setYValue] = useState();
  const [valueToScroll, setValueToScroll] = useState(0);
  const picturesRef = useRef();

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
        if (prevValue < projectsData.length * 33) {
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
        if (prevValue < projectsData.length * 33) {
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

  const handleOnTouchStart = (e) => {
    const xTouchValue = e.touches[0].clientX;
    setXValue(xTouchValue);
    const yTouchValue = e.touches[0].clientY;
    setYValue(yTouchValue);
  };

  const handleOnTouchMove = (e) => {
    const xTouchValue = e.touches[0].clientX;
    const yTouchValue = e.touches[0].clientY;
    if (xValue > xTouchValue
      && ((xValue - xTouchValue) ** 2 > (yValue - yTouchValue) ** 2)) {
      setSliderValue((prevValue) => {
        if (prevValue < projectsData.length * 33) {
          return prevValue + 5;
        }
        return prevValue;
      });
    }
    else if (xValue < xTouchValue
      && ((xValue - xTouchValue) ** 2 > (yValue - yTouchValue) ** 2)) {
      setSliderValue((prevValue) => {
        if (prevValue > 0) {
          return prevValue - 5;
        }
        return prevValue;
      });
    }
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
          if (prevValue < projectsData.length * 33) {
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
    const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize);
    picturesControls.start({
      translateX: `-${(sliderValue / 133 * 100) * ((valueToScroll + (4 * remValue)) / 100)}px`,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    });
    pictureControls.forEach((picControls) => {
      picControls.start({
        backgroundPosition: `${-(picturesRef.current.clientHeight * 51.6 / 100) - (sliderValue)}px`,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      });
    });
  }, [sliderValue]);

  useEffect(() => {
    const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const marginLeft = width > 768 ? ((width * 20 / 100) + (4 * remValue)) : 2 * remValue;
    const offscreenValue = picturesRef.current.clientWidth - (width - marginLeft);
    setValueToScroll(offscreenValue);
  }, [width]);

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
        exit={width > 768 ? 'exit' : 'exitMobile'}
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
            onTouchStart={handleOnTouchStart}
            onTouchMove={handleOnTouchMove}
            ref={picturesRef}
          >
            {projectsData.map((project, index) => (
              <Project
                key={project.id}
                {...project}
                index={index}
                projectsData={projectsData}
                pictureControls={pictureControls}
                titlesControls={titlesControls}
                projectIndex={projectIndex}
                setProjectIndex={setProjectIndex}
              />
            ))}
          </motion.div>
          <ThemeProvider theme={theme}>
            <div className="content__slider">
              <Slider value={sliderValue} max={projectsData.length * 33} />
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
