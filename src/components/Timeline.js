import React, { useContext } from 'react';
import PropType from 'prop-types';
import TimelineItem from './TimelineItem';

import { experienceContext } from '../utils/experienceContext';

const Timeline = ({ data }) => {
  const { state } = useContext(experienceContext);

  const experienceList = (state.filterTags.length === 0)
    ? data.allContentfulExperience.nodes
    : data.allContentfulExperience.nodes.filter(
      (experienceBlock) => experienceBlock.skills.some(
        (skill) => state.filterTags.includes(skill),
      ),
    );

  return (
    <ul className="timeline">
      {
        experienceList.map((item) => (
          <TimelineItem
            date={item.date}
            companyName={item.companyName}
            jobTitle={item.jobTitle}
            jobDescription={item.jobDescription.jobDescription}
            skills={item.skills}
            key={`${item.companyName} - ${item.jobTitle}`}
          />
        ))
      }
    </ul>
  );
};

Timeline.propTypes = {
  data: PropType.shape({
    allContentfulExperience: PropType.object.isRequired,
  }).isRequired,
};

export default Timeline;
