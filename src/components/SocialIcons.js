import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
            contentfulAsset(contentful_id: {eq: "lb7CFYVbXd8BZOHXjvwMP"}) {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    quality: 90
                  )
                }
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
            <GatsbyImage
              className="social"
              imgStyle={{
                width: '50px',
                height: '50px',
              }}
              image={
                getImage(item.image)
              }
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
        <GatsbyImage
          className="social"
          style={{
            display: 'inline-block',
            width: '50px',
            height: '50px',
          }}
          image={
            getImage(contentfulAsset.localFile)
          }
          alt="Personal blog icon link"
        />
      </OutboundLink>
    </div>
  );
};

export default SocialIcons;
