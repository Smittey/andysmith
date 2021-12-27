import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { experienceContext } from '../utils/experienceContext';

const moment = require('moment');

const TimelineItem = ({
  startDate,
  companyName,
  skills,
  jobDescription,
  jobTitle,
}) => {
  const { state, dispatch } = useContext(experienceContext);

  const changeFilter = (newValue) => {
    if (state.filterTags.includes(newValue)) {
      dispatch({ type: 'REMOVE_FILTER', data: newValue });
    } else {
      dispatch({ type: 'ADD_FILTER', data: newValue });
    }
  };

  const formattedStartDate = moment(startDate).format('MMM [\']YY');

  return (
    <li>
      <time className="time" dateTime="2013-04-10 18:30">
        <span>{formattedStartDate}</span>
      </time>
      <div className="icon" />
      <div className="label">
        <h2>{companyName}</h2>
        <h4>{jobTitle}</h4>
        <div
          dangerouslySetInnerHTML={
            {
              __html: jobDescription.childMarkdownRemark.html,
            }
          }
        />
        {
          skills.map((skill) => (
            <Button
              label={skill}
              style={{ padding: '4px 10px', margin: '0px 5px 5px 0px' }}
              key={skill}
              type="button"
              category="Timeline Section"
              action="Tag Filter"
              onClick={() => changeFilter(skill)}
              classNameProp={(state.filterTags.includes(skill)) ? 'selected' : 'deselected'}
            />
          ))
        }
      </div>
    </li>
  );
};

TimelineItem.propTypes = {
  startDate: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  jobDescription: PropTypes.object.isRequired,
  jobTitle: PropTypes.string.isRequired,
};

export default TimelineItem;
