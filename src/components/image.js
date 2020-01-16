import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me-big.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img

      imgStyle={{
        position: '',
        left: '',
        objectFit: 'contain',
        objectPosition: 'contain',
        bottom: '',
        top: '',
        width: '100%',
        display: 'block',
        marginBottom: '-50%',

      }}

      style={{
        position: 'absolute',
        bottom: '0',
      }}

      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

export default Image;
