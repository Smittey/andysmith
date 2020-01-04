import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const ArticleItem = ({
  data,
  index,
}) => {
  const {
    title,
    description,
    previewText,
    heroImage,
  } = data;

  return (
    (index % 2)
      ? (
        <>
          <div className="box">
            <h2>{title}</h2>
            <h4>{description.description}</h4>
            <p>{previewText.previewText}</p>
          </div>
          <div className="box">
            <Img sizes={heroImage.sizes} />
          </div>
        </>
      ) : (
        <>
          <div className="box">
            <Img sizes={heroImage.sizes} />
          </div>
          <div className="box">
            <h2>{title}</h2>
            <h4>{description.description}</h4>
            <p>{previewText.previewText}</p>
          </div>
        </>
      )
  );
};

export default ArticleItem;

ArticleItem.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.object,
    previewText: PropTypes.object.isRequired,
    heroImage: PropTypes.object.isRequired,
  }),
};
