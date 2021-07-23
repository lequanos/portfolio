// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

// Import Material UI
import { Timeline } from '@material-ui/lab';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// == Import
import { text, background } from 'src/lib/framerVariants';
import timelineData from 'src/data/timelineData';
import useWindowSize from 'src/lib/useWindowSize';
import TimelineEvent from './TimelineEvent';
import './styles.scss';

// == Composant
const Experiences = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}) => {
  const { width } = useWindowSize();
  const experiencesControls = useAnimation();
  const theme = createTheme({
    overrides: {
      MuiTimelineDot: {
        outlinedGrey: {
          borderColor: '#e4e0d9',
        },
      },
      MuiTimelineConnector: {
        root: {
          backgroundColor: '#e4e0d9',
        },
      },
      MuiTimeline: {
        root: {
          width: '100%',
          fontFamily: "'Roboto', sans serif",
        },
      },
      MuiTimelineContent: {
        root: {
          flex: width > 600 ? 0.5 : 1,
        },
        alignRight: {
          fontFamily: "'Roboto Slab', serif",
          fontWeight: 300,
        },
      },
      MuiTimelineItem: {
        oppositeContent: {
          '&::before': {
            flex: 0,
          },
        },
        missingOppositeContent: {
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
            <Timeline align={width > 600 ? 'right' : 'left'}>
              {timelineData.map((event) => (
                <TimelineEvent
                  key={event.id}
                  {...event}
                  width={width}
                />
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
  pageIndex: 2,
  setPageIndex: () => {},
};

// == Export
export default Experiences;
