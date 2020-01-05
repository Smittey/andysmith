import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import { experienceContext } from '../utils/experienceContext';

const TimelineItem = ({
  date,
  companyName,
  skills,
  jobDescription,
  jobTitle,
}) => {
  const { state, dispatch } = useContext(experienceContext);

  const addFilter = (newValue) => {
    dispatch({ type: 'ADD_FILTER', data: newValue });
  };

  return (
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
                onClick={() => addFilter(skill)}
                classNameProp={(state.filterTags.includes(skill)) ? 'selected' : 'deselected'}
              />
            ))
          }
      </div>
    </li>
  );
};

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  jobDescription: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
};

export default TimelineItem;
