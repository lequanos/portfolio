// == Import npm
import * as React from 'react';
import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

// == Import
import xMark from 'src/assets/projects/x-mark.svg';
import plus from 'src/assets/projects/plus.svg';
import usePrevious from 'src/lib/usePrevious';
import '../styles.scss';

// == Type
type ProjectType = {
  url: any;
  title: string;
  subtitle: string;
  context: string;
  link: string;
  tasks: string[];
};

type ProjectProps = {
  url: string;
  title: string;
  subtitle: string;
  context: string;
  link: string;
  tasks: string[];
  index: number;
  projectsData: ProjectType[];
  pictureControls: AnimationControls[];
  titlesControls: AnimationControls[];
  projectIndex: number | undefined;
  setProjectIndex: (arg: number | undefined) => void;
};

// == Composant
const Project = ({
  url,
  title,
  subtitle,
  context,
  link,
  tasks,
  index,
  projectsData,
  pictureControls,
  titlesControls,
  projectIndex,
  setProjectIndex,
}: ProjectProps) => {
  const overprintsControls = projectsData.map(() => useAnimation());
  const [prevProjectIndex, setPrevProjectIndex] = useState<number | undefined>(
    usePrevious(projectIndex),
  );

  const handleButtonClick = (ind: number) => {
    if (!projectIndex) {
      setProjectIndex(ind);
    }
  };

  const handleCloseButtonClick = () => {
    setProjectIndex(undefined);
  };

  useEffect(() => {
    if (typeof projectIndex === 'number') {
      setPrevProjectIndex(projectIndex);
      overprintsControls[projectIndex]?.start({
        y: 0,
        transition: {
          duration: 0.7,
          ease: 'easeOut',
        },
      });
      const otherTitlesControls = titlesControls.filter((control, indx) => indx !== projectIndex);
      otherTitlesControls.forEach((titleControl) => {
        titleControl.start({
          opacity: 0.3,
          transition: {
            duration: 0.3,
            ease: 'easeInOut',
          },
        });
      });
    }
    else if (typeof projectIndex === 'undefined') {
      if (typeof prevProjectIndex === 'number') {
        overprintsControls[prevProjectIndex]?.start({
          y: 1200,
          transition: {
            duration: 0.7,
            ease: 'easeIn',
          },
        });
      }
      const otherTitlesControls = titlesControls.filter(
        (control, indx) => indx !== prevProjectIndex,
      );
      otherTitlesControls.forEach((titleControl) => {
        titleControl.start({
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: 'easeInOut',
          },
        });
      });
    }
  }, [projectIndex]);

  return (
    <motion.div
      className="content__picture"
      style={{ backgroundImage: `url(${url})` }}
      initial={{
        backgroundPositionX: '-280px',
      }}
      animate={pictureControls[index]}
    >
      <div className="content__picture--curtain" />
      <motion.div
        className="content__title"
        animate={titlesControls[index]}
        initial={{
          opacity: 1,
        }}
      >
        <h5 className="text__medium">{title}</h5>
        <img
          src={plus}
          alt="Open button"
          className="content__button"
          onClick={() => handleButtonClick(index)}
        />
      </motion.div>
      <motion.div
        className="content__picture--overprint"
        animate={overprintsControls[index]}
        initial={{
          y: 1200,
        }}
      >
        <div className="content__description">
          <h6 className="content__subtitle">
            {subtitle}
          </h6>
          <h6 className="content__context">
            {context}
            {link
              && (
                <a href={link} className="content__link" target="_blank" rel="noreferrer">{link}</a>
              )}
          </h6>
          <br />
          <ul className="content__text">
            {tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
        <img
          src={xMark}
          alt="Close button"
          className="content__button content__button--close"
          onClick={() => handleCloseButtonClick()}
        />
      </motion.div>
    </motion.div>
  );
};

// == Export
export default Project;
