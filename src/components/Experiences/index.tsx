// == Import npm
import * as React from 'react';
import { useEffect } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

// Import Material UI
import { Timeline } from '@material-ui/lab';
import { ThemeProvider, createTheme, ThemeOptions } from '@material-ui/core/styles';

// == Import
import { text, background } from 'src/lib/framerVariants';
import timelineData from 'src/data/timelineData';
import useWindowSize from 'src/lib/useWindowSize';
import TimelineEvent from './TimelineEvent';
import './styles.scss';

// == Type
type ExperiencesProps = {
  controls: AnimationControls | undefined;
  setControls: (arg: AnimationControls) => void;
  pageIndex: number;
  setPageIndex: (arg: number) => void;
};

// == Composant
const Experiences = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}: ExperiencesProps) => {
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
  } as ThemeOptions);

  useEffect(() => {
    setControls(experiencesControls);
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
        exit={width > 768 ? 'exit' : 'exitMobile'}
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

// == Export
export default Experiences;
