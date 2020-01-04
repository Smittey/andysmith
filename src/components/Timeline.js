import React from 'react';
import PropType from 'prop-types';
import TimelineItem from './TimelineItem';

const Timeline = ({ data }) => (
  <ul className="timeline">
    {
        data.allContentfulExperience.nodes.map((item) => (
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

Timeline.propTypes = {
  data: PropType.shape({
    allContentfulExperience: PropType.object.isRequired,
  }).isRequired,
};

export default Timeline;
