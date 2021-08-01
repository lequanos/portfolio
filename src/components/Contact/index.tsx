// == Import npm
import * as React from 'react';
import { useEffect } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

// == Import
import { text, background, contactPicture } from 'src/lib/framerVariants';
import useWindowSize from 'src/lib/useWindowSize';
import socialData from 'src/data/socialData';
import SocialCard from './SocialCard';
import './styles.scss';

// == Type
type ContactProps = {
  controls: AnimationControls | undefined;
  setControls: (arg: AnimationControls) => void;
  pageIndex: number;
  setPageIndex: (arg: number) => void;
}

// == Composant
const Contact = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}: ContactProps) => {
  const contactControls = useAnimation();
  const { width } = useWindowSize();
  const socialControls = socialData.map(() => useAnimation());
  const socialTextControls = socialData.map(() => useAnimation());

  useEffect(() => {
    setControls(contactControls);
    if (controls && Object.keys(controls).length > 0) {
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
        exit={width > 768 ? 'exit' : 'exitMobile'}
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

// == Export
export default Contact;
