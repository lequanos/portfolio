// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import Material UI
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@material-ui/lab';

// == Import
import '../styles.scss';

// == Composant
const TimelineEvent = ({
  title,
  subtitle,
  link,
  tasks,
  date,
  width,
}) => (
  <TimelineItem>
    {width > 600
      && (
        <TimelineOppositeContent className="card">
          <div className="card__header">
            <h5 className="card__title">
              {title}
            </h5>
            <h6 className="card__subtitle">
              {subtitle}
              {link
                && (
                  <> | <a href={link} target="_blank" rel="noreferrer">{link}</a></>
                )}
            </h6>
          </div>
          <br />
          <ul className="card__content">
            {tasks.map((task) => (
              <li key={task}>
                {task}
              </li>
            ))}
          </ul>
          <br />
          <br />
        </TimelineOppositeContent>
      )}
    <TimelineSeparator>
      <TimelineDot variant="outlined" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      {width > 600
        ? date
        : (
          <div className="card">
            {date}
            <br />
            <br />
            <div className="card__header">
              <h5 className="card__title">
                {title}
              </h5>
              <h6 className="card__subtitle">
                {subtitle}
                {link
                  && (
                    <> | <a href={link} target="_blank" rel="noreferrer">{link}</a></>
                  )}
              </h6>
            </div>
            <br />
            <ul className="card__content">
              {tasks.map((task) => (
                <li key={task}>
                  {task}
                </li>
              ))}
            </ul>
            <br />
            <br />
          </div>
        )}
    </TimelineContent>
  </TimelineItem>
);

TimelineEvent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  tasks: PropTypes.array,
  date: PropTypes.string,
  width: PropTypes.number.isRequired,
};

TimelineEvent.defaultProps = {
  title: '',
  subtitle: '',
  link: '',
  tasks: [],
  date: '',
};

// == Export
export default TimelineEvent;
