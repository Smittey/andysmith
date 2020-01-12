import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

const ArticleItem = ({
  data,
  index,
}) => {
  const {
    title,
    description,
    previewText,
    heroImage,
    slug,
  } = data;

  return (
    (index % 2)
      ? (
        <>
          <div className="box">
            <a href={`http://smittey.co.uk/${slug}`}>
              <h2>{title}</h2>
              <h4>{description.description}</h4>
            </a>
            <p className="previewText">{previewText.previewText}</p>
          </div>
          <a className="imgBox" href={`http://smittey.co.uk/${slug}`}>
            <BackgroundImage
              Tag="section"
              id="media-test"
              className="heroImageGatsby"
              fluid={heroImage.sizes}
            >
              <div className="box" />
            </BackgroundImage>
          </a>
        </>
      ) : (
        <>
          <a href={`http://smittey.co.uk/${slug}`}>
            <BackgroundImage
              Tag="section"
              id="media-test"
              className="heroImageGatsby"
              fluid={heroImage.sizes}
            >
              <div className="box" />
            </BackgroundImage>
          </a>
          <div className="box">
            <a href={`http://smittey.co.uk/${slug}`}>
              <h2>{title}</h2>
              <h4>{description.description}</h4>
            </a>
            <p className="previewText">{previewText.previewText}</p>
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
    slug: PropTypes.string,
    description: PropTypes.object,
    previewText: PropTypes.object.isRequired,
    heroImage: PropTypes.object.isRequired,
  }),
};
