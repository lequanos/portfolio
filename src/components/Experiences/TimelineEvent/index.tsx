// == Import npm
import * as React from 'react';

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

// == Type
type TimelineEventProps = {
  title: string;
  subtitle: string;
  link: string;
  tasks: string[];
  date: string;
  width: number;
}

// == Composant
const TimelineEvent = ({
  title,
  subtitle,
  link,
  tasks,
  date,
  width,
}: TimelineEventProps) => (
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

// == Export
export default TimelineEvent;
