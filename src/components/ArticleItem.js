import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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
            <OutboundLink
              href={`http://smittey.co.uk/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{title}</h2>
              <h4>{description.description}</h4>
            </OutboundLink>
            <p className="previewText">{previewText.previewText}</p>
          </div>

          <OutboundLink
            href={`http://smittey.co.uk/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="imgBox"
          >
            <BackgroundImage
              Tag="section"
              id="media-test"
              className="heroImageGatsby"
              fluid={heroImage.sizes}
            >
              <div className="box" />
            </BackgroundImage>
          </OutboundLink>
        </>
      ) : (
        <>
          <OutboundLink
            href={`http://smittey.co.uk/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="imgBox"
          >
            <BackgroundImage
              Tag="section"
              id="media-test"
              className="heroImageGatsby"
              fluid={heroImage.sizes}
            >
              <div className="box" />
            </BackgroundImage>
          </OutboundLink>

          <div className="box">
            <OutboundLink
              href={`http://smittey.co.uk/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{title}</h2>
              <h4>{description.description}</h4>
            </OutboundLink>
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
