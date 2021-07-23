// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// == Import
import '../styles.scss';

// == Composant
const SocialCard = ({
  url,
  name,
  Component,
  index,
  socialControls,
  socialTextControls,
}) => {
  const handleMouseEnter = (idx) => {
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

  const handleMouseLeave = (ind) => {
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
        {Component()}
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

SocialCard.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  Component: PropTypes.func,
  index: PropTypes.number,
  socialControls: PropTypes.array,
  socialTextControls: PropTypes.array,
};

SocialCard.defaultProps = {
  url: '',
  name: '',
  Component: () => {},
  index: 0,
  socialControls: [],
  socialTextControls: [],
};

// == Export
export default SocialCard;
