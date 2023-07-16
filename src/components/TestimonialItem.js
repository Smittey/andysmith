import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const TestimonialItem = ({
  data,
  defaultImage,
}) => {
  const {
    company,
    jobTitle,
    body,
    name,
    displayPicture,
  } = data;

  const image = displayPicture || defaultImage.localFile;
  return (
    <div className="box" key={name}>
      <div className="avatar">
        <GatsbyImage
          image={getImage(image)}
        />
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

TestimonialItem.propTypes = {
  defaultImage: PropTypes.object.isRequired,
  data: PropTypes.shape({
    company: PropTypes.string,
    jobTitle: PropTypes.string,
    body: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    displayPicture: PropTypes.object,
  }).isRequired,
};

export default TestimonialItem;
