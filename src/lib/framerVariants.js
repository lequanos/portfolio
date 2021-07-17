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
    opacity: 0.6,
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
