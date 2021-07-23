// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// == Import
import { text, background, contactPicture } from 'src/lib/framerVariants';
import socialData from 'src/data/socialData';
import SocialCard from './SocialCard';
import './styles.scss';

// == Composant
const Contact = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}) => {
  const contactControls = useAnimation();
  const socialControls = socialData.map(() => useAnimation());
  const socialTextControls = socialData.map(() => useAnimation());

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
          <section className="contact__social">
            {socialData.map((social, index) => (
              <SocialCard
                key={social.id}
                {...social}
                index={index}
                socialControls={socialControls}
                socialTextControls={socialTextControls}
              />
            ))}
          </section>
          <motion.section
            initial="initial"
            animate="animate"
            exit="exit"
            variants={contactPicture}
            className="contact__picture"
          />
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
