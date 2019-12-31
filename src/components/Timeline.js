import React from 'react';
import TimelineItem from "./TimelineItem";

const Timeline = ({data}) => {
    console.log('timeline', data.allContentfulExperience);

    return (
        <ul className="timeline">
            {
                data.allContentfulExperience.nodes.map(item => 
                    <TimelineItem 
                        date={item.date}
                        companyName={item.companyName}
                        jobTitle={item.jobTitle}
                        jobDescription={item.jobDescription.jobDescription}
                        skills={item.skills}
                    />
                )
            }
        </ul>
    )
}

export default Timeline;