// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// == Import
import { text, background } from 'src/lib/framerVariants';
import './styles.scss';

// == Composant
const Contact = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}) => {
  const contactControls = useAnimation();

  useEffect(() => {
    setControls(contactControls);
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
    if (pageIndex !== 5) {
      setPageIndex(5);
    }
  }, []);

  return (
    <motion.section className="contactContainer">
      <motion.div
        className="contact__background"
        initial={['initial']}
        animate={controls}
        variants={background}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={text}
        className="contact__container"
      >
        <h2 className="text__large">
          Me Contacter
        </h2>
        <div className="contact__content">
          a
        </div>
      </motion.div>
    </motion.section>
  );
};

Contact.propTypes = {
  controls: PropTypes.object,
  setControls: PropTypes.func,
  pageIndex: PropTypes.number,
  setPageIndex: PropTypes.func,
};

Contact.defaultProps = {
  controls: {},
  setControls: () => {},
  pageIndex: 5,
  setPageIndex: () => {},
};

// == Export
export default Contact;
