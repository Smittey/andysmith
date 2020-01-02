import React from 'react';
import TimelineItem from "./TimelineItem";

const Timeline = ({data}) => {
    return (
        <ul className="timeline">
            {
                data.allContentfulExperience.nodes.map((item, i) => 
                    <TimelineItem
                        date={item.date}
                        companyName={item.companyName}
                        jobTitle={item.jobTitle}
                        jobDescription={item.jobDescription.jobDescription}
                        skills={item.skills}
                        key={i}
                    />
                )
            }
        </ul>
    )
}

export default Timeline;