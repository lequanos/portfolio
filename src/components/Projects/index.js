// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// == Import
import { text, background } from 'src/lib/framerVariants';
import './styles.scss';

// == Composant
const Projects = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}) => {
  const projectsControls = useAnimation();

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
  }, []);

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
        className="projects__text"
      >
        <h2 className="text__large">
          Mes Projets
        </h2>
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
  pageIndex: 1,
  setPageIndex: () => {},
};

// == Export
export default Projects;
