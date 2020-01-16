import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const SocialIcons = () => {
  const { allContentfulSocialMediaIcons } = useStaticQuery(
    graphql`
          query {
            allContentfulSocialMediaIcons {
              nodes {
                name
                link
                altText
                image {
                  sizes(maxHeight: 300) {
                      ...GatsbyContentfulSizes
                  }
                }
              }
            }
          }
        `,
  );
  return (
    <div className="icons">
      {
        allContentfulSocialMediaIcons.nodes.map((item) => (
          <OutboundLink
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="imgBox"
            key={item.name}
          >
            <Img
              className="social"
              imgStyle={{
                width: '50px',
                height: '50px',
              }}
              sizes={item.image.sizes}
              alt={item.altText}
            />
          </OutboundLink>
        ))
      }
    </div>
  );
};

export default SocialIcons;
