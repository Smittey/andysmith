import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const TimelineItem = ({
  date,
  companyName,
  skills,
  jobDescription,
  jobTitle,
}) => (
  <li>
    <time className="time" dateTime="2013-04-10 18:30">
      <span>{date}</span>
    </time>
    <div className="icon" />
    <div className="label">
      <h2>{companyName}</h2>
      <h4>{jobTitle}</h4>
      <p>{jobDescription}</p>
      {
          skills.map((skill) => (
            <Button
              label={skill}
              style={{ padding: '2px 5px', margin: '0px 5px 5px 0px' }}
              key={skill}
            />
          ))
        }
    </div>
  </li>
);

export default TimelineItem;

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  jobDescription: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
};
