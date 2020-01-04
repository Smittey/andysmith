import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const TimelineFilter = ({ data }) => {
  const allSkills = data.allContentfulExperience.nodes.reduce(
    (skillsAcc, experience) => Array.from(
      new Set([...skillsAcc, ...experience.skills]),
    ), [],
  );

  return (
    <div>
      <div className="sticky">
        {allSkills.map((skill) => (
          <Button
            label={skill}
            style={{ padding: '2px 5px', margin: '0px 5px 5px 0px' }}
            key={skill}
          />
        ))}
        <span className="filterText">Filter (clear)</span>
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
