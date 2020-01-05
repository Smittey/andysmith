import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import { experienceContext } from '../utils/experienceContext';

const TimelineFilter = ({ data }) => {
  const allSkills = data.allContentfulExperience.nodes.reduce(
    (skillsAcc, experience) => Array.from(
      new Set([...skillsAcc, ...experience.skills]),
    ), [],
  );

  const { dispatch } = useContext(experienceContext);

  const addFilter = (newValue) => {
    dispatch({ type: 'ADD_FILTER', data: newValue });
  };

  const clearFilter = () => {
    dispatch({ type: 'CLEAR_FILTER' });
  };

  return (
    <div>
      <div className="sticky">
        {allSkills.map((skill) => (
          <Button
            label={skill}
            style={{ padding: '2px 5px', margin: '0px 5px 5px 0px' }}
            key={skill}
            onClick={() => addFilter(skill)}
          />
        ))}
        <span role="button" tabIndex={0} className="filterText" onClick={() => clearFilter()} onKeyDown={() => clearFilter()}>Filter (clear)</span>
      </div>
    </div>
  );
};

TimelineFilter.propTypes = {
  data: PropTypes.shape({
    allContentfulExperience: PropTypes.object.isRequired,
  }),
};

export default TimelineFilter;
