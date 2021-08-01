// == Import npm
import * as React from 'react';
import { motion } from 'framer-motion';

// == Import
import './styles.scss';

// == Composant
const InitialTransition = () => {
  const blackbox = {
    initial: {
      height: '100vh',
      top: 0,
    },
    animate: {
      height: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <div className="initialScreen">
      <motion.div
        className="box"
        initial="initial"
        animate="animate"
        variants={blackbox}
      />
    </div>
  );
};

// == Export
export default InitialTransition;
