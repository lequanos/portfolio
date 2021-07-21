// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// == Import
import {
  text,
  background,
  skillsCurtain,
  skillCard,
} from 'src/lib/framerVariants';
import skillsData from './skillsData';

import './styles.scss';

// == Composant
const Skills = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}) => {
  const [curtain, setCurtain] = useState(false);
  const skillsControls = useAnimation();
  const curtainControls = useAnimation();
  const skillControls = skillsData.map(() => useAnimation());
  const descriptionControls = skillsData.map(() => useAnimation());
  const {
    showCurtain,
    bringToFrontSkill,
    showDescription,
    hideCurtain,
    bringToBackCurtain,
    bringToBackSkill,
    hideDescription,
  } = skillCard;

  const handleMouseEnter = (index) => {
    curtainControls.start(showCurtain);
    skillControls[index].start(bringToFrontSkill);
    descriptionControls[index].start(showDescription);
  };

  const handleMouseLeave = (index) => {
    curtainControls.start(hideCurtain);
    curtainControls.start(bringToBackCurtain);
    skillControls[index].start(bringToBackSkill);
    descriptionControls[index].start(hideDescription);
  };

  const handleClick = (index) => {
    if (curtain) {
      curtainControls.start(hideCurtain);
      curtainControls.start(bringToBackCurtain);
      skillControls[index].start(bringToBackSkill);
      descriptionControls[index].start(hideDescription);
      setCurtain(false);
    }
    else {
      curtainControls.start(showCurtain);
      skillControls[index].start(bringToFrontSkill);
      descriptionControls[index].start(showDescription);
      setCurtain(true);
    }
  };

  useEffect(() => {
    setControls(skillsControls);
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
    if (pageIndex !== 3) {
      setPageIndex(3);
    }
  }, []);

  return (
    <motion.section className="skillsContainer">
      <motion.div
        className="skills__background"
        initial={['initial']}
        animate={controls}
        variants={background}
      />
      <motion.div
        className="skills__curtain"
        initial={['initial']}
        animate={curtainControls}
        variants={skillsCurtain}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={text}
        className="skills__container"
      >
        <h2 className="text__large">
          Mes compétences
        </h2>
        <motion.div
          className="text__skills"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="text__skill"
              animate={skillControls[index]}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index)}
              variants={skillCard}
            >
              <img className="text__logo" src={skill.url} alt={skill.alt} />
              <div className="description__container">
                <motion.p
                  className="text__description"
                  initial={{
                    overflow: 'hidden',
                    y: '-50px',
                  }}
                  animate={descriptionControls[index]}
                >
                  {skill.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

Skills.propTypes = {
  controls: PropTypes.object,
  setControls: PropTypes.func,
  pageIndex: PropTypes.number,
  setPageIndex: PropTypes.func,
};

Skills.defaultProps = {
  controls: {},
  setControls: () => {},
  pageIndex: 3,
  setPageIndex: () => {},
};

// == Export
export default Skills;
