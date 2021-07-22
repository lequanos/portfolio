// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// == Import
import xMark from 'src/assets/projects/x-mark.svg';
import plus from 'src/assets/projects/plus.svg';
import './styles.scss';

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
}) => {
  const overprintControls = projectsData.map(() => useAnimation());

  const handleButtonClick = (ind) => {
    overprintControls[ind].start({
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    });
  };

  const handleCloseButtonClick = (ind) => {
    overprintControls[ind].start({
      y: 1000,
      transition: {
        duration: 0.7,
        ease: 'easeIn',
      },
    });
  };

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
      <h5 className="text__medium">{title}</h5>
      <img
        src={plus}
        alt="Open button"
        className="content__button"
        onClick={() => handleButtonClick(index)}
      />
      <motion.div
        className="content__picture--overprint"
        animate={overprintControls[index]}
        initial={{
          y: 1000,
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
          onClick={() => handleCloseButtonClick(index)}
        />
      </motion.div>
    </motion.div>
  );
};

Project.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  context: PropTypes.string,
  link: PropTypes.string,
  tasks: PropTypes.array,
  index: PropTypes.number,
  projectsData: PropTypes.arrayOf(
    PropTypes.object,
  ),
  pictureControls: PropTypes.array,
};

Project.defaultProps = {
  url: '',
  title: '',
  subtitle: '',
  context: '',
  link: '',
  tasks: [],
  index: 0,
  projectsData: [],
  pictureControls: [],
};

// == Export
export default Project;
