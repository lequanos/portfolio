// == Import npm
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

// Import Material UI
import { Slider } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// == Import
import { text, background } from 'src/lib/framerVariants';
import useWindowSize from 'src/lib/useWindowSize';
import projectsData from 'src/data/projectsData';
import Project from './Project';
import './styles.scss';

// == Type
type ProjectsProps = {
  controls: AnimationControls | undefined;
  setControls: (arg: AnimationControls) => void;
  pageIndex: number;
  setPageIndex: (arg: number) => void;
};

// == Composant
const Projects = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}: ProjectsProps) => {
  const projectsControls = useAnimation();
  const pictureControls = projectsData.map(() => useAnimation());
  const picturesControls = useAnimation();
  const titlesControls = projectsData.map(() => useAnimation());
  const { width, height } = useWindowSize();
  const [sliderValue, setSliderValue] = useState(0);
  const [grabbing, setGrabbing] = useState(false);
  const [projectIndex, setProjectIndex] = useState<number | undefined>();
  const [xValue, setXValue] = useState<number | undefined>();
  const [startXValue, setStartXValue] = useState<number | undefined>();
  const [startYValue, setStartYValue] = useState<number | undefined>();
  const [valueToScroll, setValueToScroll] = useState(0);
  const picturesRef = useRef<HTMLDivElement>(null);

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

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0 || e.deltaX > 0) {
      setSliderValue((prevValue) => (prevValue + 4 < projectsData.length * 33
        ? prevValue + 4 : projectsData.length * 33));
    }
    else if (e.deltaY < 0 || e.deltaX < 0) {
      setSliderValue((prevValue) => (prevValue - 4 > 0 ? prevValue - 4 : 0));
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
      setSliderValue((prevValue) => (prevValue + 4 < projectsData.length * 33
        ? prevValue + 4 : projectsData.length * 33));
    }
    else if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
      setSliderValue((prevValue) => (prevValue - 4 > 0 ? prevValue - 4 : 0));
    }
  };

  const handleOnMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setGrabbing(true);
    picturesControls.start({
      cursor: 'grabbing',
    });
  };

  const handleOnTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const xTouchValue = e.touches[0].clientX;
    setXValue(xTouchValue);
    setStartXValue(xTouchValue);
    const yTouchValue = e.touches[0].clientY;
    setStartYValue(yTouchValue);
  };

  const handleOnTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const xTouchValue = e.touches[0].clientX;
    const yTouchValue = e.touches[0].clientY;
    if (!xValue || !startXValue || !startYValue) throw new Error("touchez d'abord!");
    const deltaX = xValue > xTouchValue ? xValue - xTouchValue : xTouchValue - xValue;
    if (xValue > xTouchValue
      && ((startXValue - xTouchValue) ** 2 > (startYValue - yTouchValue) ** 2)) {
      setSliderValue((prevValue) => (prevValue + deltaX < projectsData.length * 33
        ? prevValue + deltaX : projectsData.length * 33));
    }
    else if (xValue < xTouchValue
      && ((startXValue - xTouchValue) ** 2 > (startYValue - yTouchValue) ** 2)) {
      setSliderValue((prevValue) => (prevValue - deltaX > 0 ? prevValue - deltaX : 0));
    }
    setXValue(xTouchValue);
  };

  const handleOnMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setGrabbing(false);
    picturesControls.start({
      cursor: 'grab',
    });
  };

  const handleOnMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
    if (picturesRef.current) {
      const clientHeight = picturesRef.current.clientHeight > 147
        ? picturesRef.current.clientHeight : 147;
      const pictureWidth = (picturesRef.current.clientWidth / projectsData.length) - (2 * remValue);
      const pictureBgPositionValue = clientHeight >= pictureWidth
        ? -(clientHeight * 51.6 / 100) : Math.floor(
          ((1904 * clientHeight / 937) - pictureWidth) / -2,
        );
      const bgPositionTranslateValue = clientHeight >= pictureWidth
        ? sliderValue : 0;
      picturesControls.start({
        translateX: `-${(sliderValue / 133 * 100) * ((valueToScroll + (4 * remValue)) / 100)}px`,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      });
      pictureControls.forEach((picControls) => {
        picControls.start({
          backgroundPosition: `${pictureBgPositionValue - (bgPositionTranslateValue)}px`,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        });
      });
    }
  }, [sliderValue]);

  useEffect(() => {
    const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const marginLeft = width > 768 ? ((width * 20 / 100) + (4 * remValue)) : 2 * remValue;
    if (!picturesRef.current) throw new Error('ref non désigné');
    const offscreenValue = picturesRef.current.clientWidth - (width - marginLeft);
    setValueToScroll(offscreenValue);
  }, [width, height]);

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

// == Export
export default Projects;
