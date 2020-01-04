import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
        // marginBottom: "-50%",
      }}


    // imgStyle={{
    //   width: "100%",
    //   objectFit: "contain",
    //   objectPosition: "contain",
    // }}


    // style={{
    //   position: "",
    // }}

      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

// imgStyle={{
//   position: "absolute",
//   left: "",
//   objectFit: "",
//   objectPosition: "",
//   display: "",
//   bottom: "0",
//   top: "",
//   maxWidth: "100%"
// }}

// style={{
//   position: "absolute",
//   maxHeight: "40%",

// }}


export default Image;
