// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Import Material UI
import { Slider, Card } from '@material-ui/core';

// == Import
import './styles.scss';

// == Composant
const Experiences = ({ homeElement }) => {
  const contentRef = useRef(null);
  const sliderRef = useRef(null);
  const [value, setValue] = useState(246);
  const [scrollTop, setScrollTop] = useState(0);

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

  return (
    <>
      <aside className="experiences__picture" />
      <div className="experiences__text" ref={contentRef}>
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
