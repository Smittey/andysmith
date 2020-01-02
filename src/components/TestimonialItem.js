import React from 'react';
import Img from "gatsby-image";

const TestimonialItem = ({
    data,
    image,
    itemKey,
}) => {

    const {
        company,
        jobTitle,
        body,
        name
    } = data;

    return (
        
        <div className="box" key={itemKey}>
            <div className="avatar">
                <Img sizes={image.sizes} />
            </div>
            <div className="details">
                <p className="company bold">{company}</p>
                <h2>{name}</h2>
                <h5 className="title">{jobTitle}</h5>
                <p className="body">{body.body}</p>
            </div>
        </div>
    )
}

export default TestimonialItem;
