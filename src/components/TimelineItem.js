import React from 'react';
import Button from "./Button";

const TimelineItem = ({
    date,
    companyName,
    skills,
    jobDescription,
    jobTitle
}) => {
    return (
        <li>
            <time className="time" datetime="2013-04-10 18:30">
                <span>{date}</span>
            </time>
            <div className="icon"></div>
            <div className="label">
                <h2>{companyName}</h2>
                <h4>{jobTitle}</h4>
                <p>{jobDescription}</p>
                {skills.map(skill => <Button label={skill} style={{padding: "2px 5px", marginRight: "5px"}}/>)}
            </div>
        </li>
    )
}

export default TimelineItem;