// == Import npm
import * as React from 'react';
import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

// == Import
import {
  text,
  background,
  skillsCurtain,
  skillCard,
} from 'src/lib/framerVariants';
import useWindowSize from 'src/lib/useWindowSize';
import skillsData from 'src/data/skillsData';
import SkillCard from './SkillCard';
import './styles.scss';

// == Type
type SkillsProps = {
  controls: AnimationControls | undefined;
  setControls: (arg: AnimationControls) => void;
  pageIndex: number;
  setPageIndex: (arg: number) => void;
};

// == Composant
const Skills = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}: SkillsProps) => {
  const [curtain, setCurtain] = useState(false);
  const skillsControls = useAnimation();
  const curtainControls = useAnimation();
  const skillControls = skillsData.map(() => useAnimation());
  const descriptionControls = skillsData.map(() => useAnimation());
  const { width } = useWindowSize();

  useEffect(() => {
    setControls(skillsControls);
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
        exit={width > 768 ? 'exit' : 'exitMobile'}
        variants={text}
        className="skills__container"
      >
        <h2 className="text__large">
          Mes Compétences
        </h2>
        <motion.div
          className="text__skills"
        >
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.id}
              {...skill}
              index={index}
              skillCard={skillCard}
              curtainControls={curtainControls}
              skillControls={skillControls}
              descriptionControls={descriptionControls}
              curtain={curtain}
              setCurtain={setCurtain}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// == Export
export default Skills;
