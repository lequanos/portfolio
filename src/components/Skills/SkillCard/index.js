// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// == Import
import '../styles.scss';

// == Composant
const SocialCard = ({
  url,
  alt,
  description,
  index,
  skillCard,
  curtainControls,
  skillControls,
  descriptionControls,
  curtain,
  setCurtain,
}) => {
  const {
    showCurtain,
    bringToFrontSkill,
    showDescription,
    hideCurtain,
    bringToBackCurtain,
    bringToBackSkill,
    hideDescription,
  } = skillCard;

  const handleMouseEnter = (ind) => {
    curtainControls.start(showCurtain);
    skillControls[ind].start(bringToFrontSkill);
    descriptionControls[ind].start(showDescription);
  };

  const handleMouseLeave = (idx) => {
    curtainControls.start(hideCurtain);
    curtainControls.start(bringToBackCurtain);
    skillControls[idx].start(bringToBackSkill);
    descriptionControls[idx].start(hideDescription);
  };

  const handleClick = (indx) => {
    if (curtain) {
      curtainControls.start(hideCurtain);
      curtainControls.start(bringToBackCurtain);
      skillControls[indx].start(bringToBackSkill);
      descriptionControls[indx].start(hideDescription);
      setCurtain(false);
    }
    else {
      curtainControls.start(showCurtain);
      skillControls[indx].start(bringToFrontSkill);
      descriptionControls[indx].start(showDescription);
      setCurtain(true);
    }
  };

  return (
    <motion.div
      className="text__skill"
      animate={skillControls[index]}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
      onClick={() => handleClick(index)}
      variants={skillCard}
    >
      <img className="text__logo" src={url} alt={alt} />
      <div className="description__container">
        <motion.p
          className="text__description"
          initial={{
            overflow: 'hidden',
            y: '-50px',
          }}
          animate={descriptionControls[index]}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

SocialCard.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.number,
  skillCard: PropTypes.object,
  curtainControls: PropTypes.object,
  skillControls: PropTypes.array,
  descriptionControls: PropTypes.array,
  curtain: PropTypes.bool,
  setCurtain: PropTypes.func,
};

SocialCard.defaultProps = {
  url: '',
  alt: '',
  description: '',
  index: 0,
  skillCard: {},
  curtainControls: [],
  skillControls: [],
  descriptionControls: [],
  curtain: false,
  setCurtain: () => {},
};

// == Export
export default SocialCard;
