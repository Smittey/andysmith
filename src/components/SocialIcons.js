import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const SocialIcons = () => {
  const { allContentfulSocialMediaIcons, contentfulAsset, site } = useStaticQuery(
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
            contentfulAsset(contentful_id: {eq: "lb7CFYVbXd8BZOHXjvwMP"}) {
              sizes(maxHeight: 200) {
                ...GatsbyContentfulSizes
              }            
            }
            site {
              siteMetadata {
                blogSiteUrl
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
      <OutboundLink
        href={site.siteMetadata.blogSiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="imgBox"
      >
        <Img
          className="social"
          style={{
            display: 'inline-block',
            width: '50px',
            height: '50px',
          }}
          sizes={contentfulAsset.sizes}
          alt="Personal blog icon link"
        />
      </OutboundLink>
    </div>
  );
};

export default SocialIcons;
