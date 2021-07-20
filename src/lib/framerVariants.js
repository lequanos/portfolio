export const text = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
  },
};

export const picture = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.5,
    zIndex: -10,
    transition: {
      delay: 1,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
  },
};

export const background = {
  initial: {
    rotate: -45,
  },
  animate: {
    zIndex: -10,
    transition: {
      delay: 0.3,
    },
  },
  exit: {
    x: -2000,
    y: -2000,
    transition: {
      type: 'spring',
      duration: 1,
      ease: 'easeIn',
    },
  },
};

export const skillsCurtain = {
  initial: {
    zIndex: -5,
  },
};

export const skillCard = {
  initial: {},
  showCurtain: {
    zIndex: 1,
    opacity: 0.9,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  bringToFrontSkill: {
    zIndex: 2,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  showDescription: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  hideCurtain: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  bringToBackCurtain: {
    zIndex: -5,
    transition: {
      delay: 0.3,
    },
  },
  bringToBackSkill: {
    zIndex: 0,
    transition: {
      delay: 0.3,
    },
  },
  hideDescription: {
    y: '-50px',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};
