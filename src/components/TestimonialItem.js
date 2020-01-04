import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const TestimonialItem = ({
  data,
  image,
}) => {
  const {
    company,
    jobTitle,
    body,
    name,
  } = data;

  return (

    <div className="box" key={name}>
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
  );
};

export default TestimonialItem;

TestimonialItem.propTypes = {
  image: PropTypes.object.isRequired,
  data: PropTypes.shape({
    company: PropTypes.string,
    jobTitle: PropTypes.string,
    body: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
