// == Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Import Material UI
import { Slider } from '@material-ui/core';

// == Import
import './styles.scss';

// == Composant
const Experiences = ({ homeElement }) => {
  const timelineRef = useRef(null);

  const marks = [
    {
      value: 16,
      label: '2016',
    },
    {
      value: 20,
      label: 'Septembre 2020',
    },
    {
      value: 252,
      label: 'mai 2021',
    },
  ];

  const valuetext = (value) => (
    `${value}°C`
  );

  const handleScroll = () => {
    const lastScrollTop = timelineRef.current.getBoundingClientRect().top;
    console.log(lastScrollTop);
  };

  useEffect(() => {
    homeElement?.addEventListener('scroll', handleScroll);

    return () => {
      homeElement?.removeEventListener('scroll', handleScroll);
    };
  }, [homeElement, timelineRef]);

  return (
    <>
      <aside className="experiences__picture" />
      <div className="experiences__text">
        <div>
          <h2 className="text__large">
            Expériences
          </h2>
          <div className="timeline" ref={timelineRef}>
            <Slider
              min={0}
              max={252}
              orientation="vertical"
              defaultValue={252}
              aria-labelledby="vertical-slider"
              getAriaValueText={valuetext}
              marks={marks}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Experiences.propTypes = {
  homeElement: PropTypes.object,
};

Experiences.defaultProps = {
  homeElement: {},
};

// == Export
export default Experiences;
