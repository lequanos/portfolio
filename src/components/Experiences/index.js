// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// Import Material UI
import { Slider, Card } from '@material-ui/core';

// == Import
import { text, background } from 'src/lib/framerVariants';
import './styles.scss';

// == Composant
const Experiences = ({
  homeElement,
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}) => {
  const contentRef = useRef(null);
  const sliderRef = useRef(null);
  const [value, setValue] = useState(246);
  const [scrollTop, setScrollTop] = useState(0);
  const experiencesControls = useAnimation();

  useEffect(() => {
    setControls(experiencesControls);
    if (Object.keys(controls).length > 0) {
      controls.start({
        zIndex: -10,
        transition: {
          delay: 0.3,
        },
      });
    }
  }, [controls]);

  const marks = [
    {
      value: 31,
      label: 'Juillet 2003',
    },
    {
      value: 67,
      label: 'Juillet 2006',
    },
    {
      value: 246,
      label: 'Juin 2021',
    },
  ];

  const valuetext = (v) => (
    `${v}°C`
  );

  // eslint-disable-next-line consistent-return
  const handleScroll = (e) => {
    e.preventDefault();
    const { current: contentEl } = contentRef;
    if (e.deltaY === 100) {
      marks.forEach((mark, index) => {
        if (value === mark.value) {
          const nextMarkIndex = index - 1 >= 0 ? index - 1 : index;
          const nextMark = document.querySelector(`[data-index='${nextMarkIndex}']`);
          nextMark.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
          setValue(marks[nextMarkIndex].value);
        }
      });
    }
    else if (e.deltaY === -100) {
      marks.forEach((mark, index) => {
        if (value === mark.value) {
          const nextMarkIndex = index + 1 <= (marks.length - 1) ? index + 1 : (marks.length - 1);
          const nextMark = document.querySelector(`[data-index='${nextMarkIndex}']`);
          nextMark.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
          setValue(marks[nextMarkIndex].value);
        }
      });
    }
    setScrollTop(contentEl.getBoundingClientRect().top);
  };

  useEffect(() => {
    homeElement?.addEventListener('wheel', handleScroll);

    return () => {
      homeElement?.removeEventListener('wheel', handleScroll);
    };
  }, [homeElement, scrollTop, value]);

  useEffect(() => {
    if (pageIndex !== 2) {
      setPageIndex(2);
    }
  }, []);

  return (
    <motion.section className="experiencesContainer">
      <motion.div
        className="experiences__background"
        initial={['initial']}
        animate={controls}
        variants={background}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={text}
        className="experiences__text"
        ref={contentRef}
      >
        <div>
          <h2 className="text__large">
            Expériences
          </h2>
          <div className="timeline">
            <Slider
              min={24}
              max={252}
              orientation="vertical"
              value={value}
              aria-labelledby="vertical-slider"
              getAriaValueText={valuetext}
              track={false}
              step={null}
              marks={marks}
              ref={sliderRef}
            />
            <Card className="card">
              Test
            </Card>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

Experiences.propTypes = {
  homeElement: PropTypes.object,
  controls: PropTypes.object,
  setControls: PropTypes.func,
  pageIndex: PropTypes.number,
  setPageIndex: PropTypes.func,
};

Experiences.defaultProps = {
  homeElement: {},
  controls: {},
  setControls: () => {},
  pageIndex: 1,
  setPageIndex: () => {},
};

// == Export
export default Experiences;
