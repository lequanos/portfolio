// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// == Import
import { text, background, contactPicture } from 'src/lib/framerVariants';
import socialData from './socialData';
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

  const handleMouseEnter = (index) => {
    socialControls[index].start({
      color: '#3E3F3F',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    });
    socialTextControls[index].start({
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

  const handleMouseLeave = (index) => {
    socialControls[index].start({
      color: '#e4e0d9',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    });
    socialTextControls[index].start({
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
              <motion.div
                key={social.id}
                className="social__category"
                animate={socialControls[index]}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.Component()}
                </a>
                <div className="social__name">
                  <motion.h3
                    initial={{
                      y: 50,
                    }}
                    animate={socialTextControls[index]}
                  >
                    {social.name}
                  </motion.h3>
                </div>
              </motion.div>
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
