import React from 'react';
import Button from "./Button";

const TimelineItem = ({
    date,
    companyName,
    skills,
    jobDescription,
    jobTitle,
    itemKey,
}) => {
    return (
        <li key={itemKey}>
            <time className="time" dateTime="2013-04-10 18:30">
                <span>{date}</span>
            </time>
            <div className="icon"></div>
            <div className="label">
                <h2>{companyName}</h2>
                <h4>{jobTitle}</h4>
                <p>{jobDescription}</p>
                {
                    skills.map((skill, i) =>
                        <span key={i}>
                            <Button 
                                label={skill}
                                style={{padding: "2px 5px", margin: "0px 5px 5px 0px"}}
                            />
                        </span>
                    )
                }
            </div>
        </li>
    )
}

export default TimelineItem;