// == Import npm
import * as React from 'react';
import { motion, AnimationControls } from 'framer-motion';
import { SiGithub } from 'react-icons/si';

// == Import
import '../styles.scss';

// == Type
type SocialCardProps = {
  url: string;
  name: string;
  Component: typeof SiGithub;
  index: number;
  socialControls: AnimationControls[];
  socialTextControls: AnimationControls[];
};

// == Composant
const SocialCard = ({
  url,
  name,
  Component,
  index,
  socialControls,
  socialTextControls,
}: SocialCardProps) => {
  const handleMouseEnter = (idx: number) => {
    socialControls[idx].start({
      color: '#3E3F3F',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    });
    socialTextControls[idx].start({
      y: 0,
      color: '#3E3F3F',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    });
    const otherSocialControls = socialControls.filter((_, indx) => index !== indx);
    otherSocialControls.forEach((socialControl) => {
      socialControl.start({
        opacity: 0.3,
        transition: {
          duration: 0.3,
          ease: 'easeIn',
        },
      });
    });
  };

  const handleMouseLeave = (ind: number) => {
    socialControls[ind].start({
      color: '#e4e0d9',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    });
    socialTextControls[ind].start({
      y: 50,
      color: '#e4e0d9',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    });
    const otherSocialControls = socialControls.filter((_, indx) => index !== indx);
    otherSocialControls.forEach((socialControl) => {
      socialControl.start({
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: 'easeIn',
        },
      });
    });
  };

  return (
    <motion.div
      className="social__category"
      animate={socialControls[index]}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <Component className="text__icon" size="clamp(45px, 5vw, 90px)" />
      </a>
      <div className="social__name">
        <motion.h3
          initial={{
            y: 50,
          }}
          animate={socialTextControls[index]}
        >
          {name}
        </motion.h3>
      </div>
    </motion.div>
  );
};

// == Export
export default SocialCard;
