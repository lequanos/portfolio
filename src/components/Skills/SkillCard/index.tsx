// == Import npm
import * as React from 'react';
import { motion, AnimationControls, Variants } from 'framer-motion';

// == Type
type SocialCardProps = {
  url: string;
  alt: string;
  description: string;
  index: number;
  skillCard: Variants;
  curtainControls: AnimationControls;
  skillControls: AnimationControls[];
  descriptionControls: AnimationControls[];
  curtain: boolean;
  setCurtain: (arg: boolean) => void;
}

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
}: SocialCardProps) => {
  const {
    showCurtain,
    bringToFrontSkill,
    showDescription,
    hideCurtain,
    bringToBackCurtain,
    bringToBackSkill,
    hideDescription,
  } = skillCard;

  const handleMouseEnter = (ind: number) => {
    curtainControls.start(showCurtain);
    skillControls[ind].start(bringToFrontSkill);
    descriptionControls[ind].start(showDescription);
  };

  const handleMouseLeave = (idx: number) => {
    curtainControls.start(hideCurtain);
    curtainControls.start(bringToBackCurtain);
    skillControls[idx].start(bringToBackSkill);
    descriptionControls[idx].start(hideDescription);
  };

  const handleClick = (indx: number) => {
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

// == Export
export default SocialCard;
