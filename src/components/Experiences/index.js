// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// Import Material UI
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@material-ui/lab';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// == Import
import { text, background } from 'src/lib/framerVariants';
import timelineData from './timelineData.json';
import './styles.scss';

// == Composant
const Experiences = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}) => {
  const experiencesControls = useAnimation();
  const theme = createTheme({
    overrides: {
      MuiPaper: {
        root: {
          padding: '1rem',
          backgroundColor: '#e4e0d9',
        },
      },
      MuiTimeline: {
        root: {
          width: '100%',
          fontFamily: 'Roboto',
        },
      },
      MuiTimelineContent: {
        root: {
          flex: 0.5,
        },
      },
      MuiTimelineItem: {
        oppositeContent: {
          '&::before': {
            flex: 0,
          },
        },
      },
    },
  });

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
      >
        <h2 className="text__large">
          Expériences & Formations
        </h2>
        <ThemeProvider theme={theme}>
          <div className="timeline">
            <Timeline align="right">
              {timelineData.map((element) => (
                <TimelineItem>
                  <TimelineOppositeContent>
                    <h6 className="card__title">
                      {element.title}
                    </h6>
                    <h7 className="card__subtitle">
                      {element.subtitle}
                      {element.link
                        && (
                          <> | <a href={element.link} target="_blank" rel="noreferrer">{element.link}</a></>
                        )}
                    </h7>
                    <br />
                    <br />
                    <ul className="card__content">
                      {element.tasks.map((task) => (
                        <li>
                          {task}
                        </li>
                      ))}
                    </ul>
                    <br />
                    <br />
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{element.date}</TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </ThemeProvider>
      </motion.div>
    </motion.section>
  );
};

Experiences.propTypes = {
  controls: PropTypes.object,
  setControls: PropTypes.func,
  pageIndex: PropTypes.number,
  setPageIndex: PropTypes.func,
};

Experiences.defaultProps = {
  controls: {},
  setControls: () => {},
  pageIndex: 1,
  setPageIndex: () => {},
};

// == Export
export default Experiences;

// const contentRef = useRef(null);
// const sliderRef = useRef(null);
// const [value, setValue] = useState(246);
// const [scrollTop, setScrollTop] = useState(0);

// const marks = [
//   {
//     value: 31,
//     label: 'Juillet 2003',
//   },
//   {
//     value: 67,
//     label: 'Juillet 2006',
//   },
//   {
//     value: 246,
//     label: 'Juin 2021',
//   },
// ];

// const valuetext = (v) => (
//   `${v}°C`
// );

// // eslint-disable-next-line consistent-return
// const handleScroll = (e) => {
//   e.preventDefault();
//   const { current: contentEl } = contentRef;
//   if (e.deltaY === 100) {
//     marks.forEach((mark, index) => {
//       if (value === mark.value) {
//         const nextMarkIndex = index - 1 >= 0 ? index - 1 : index;
//         const nextMark = document.querySelector(`[data-index='${nextMarkIndex}']`);
//         nextMark.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
//         setValue(marks[nextMarkIndex].value);
//       }
//     });
//   }
//   else if (e.deltaY === -100) {
//     marks.forEach((mark, index) => {
//       if (value === mark.value) {
//         const nextMarkIndex = index + 1 <= (marks.length - 1) ? index + 1 : (marks.length - 1);
//         const nextMark = document.querySelector(`[data-index='${nextMarkIndex}']`);
//         nextMark.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
//         setValue(marks[nextMarkIndex].value);
//       }
//     });
//   }
//   setScrollTop(contentEl.getBoundingClientRect().top);
// };

// useEffect(() => {
//   homeElement?.addEventListener('wheel', handleScroll);

//   return () => {
//     homeElement?.removeEventListener('wheel', handleScroll);
//   };
// }, [homeElement, scrollTop, value]);
