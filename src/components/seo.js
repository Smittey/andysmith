/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description, lang, meta, title,
}) {
  const { site, contentfulAsset } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            author
            siteUrl
            title
          }
        }
       
      }
    `,
  );

  const {
    description: metadataDescription,
    author,
    siteUrl,
    title: metadataTitle,
  } = site.siteMetadata;

  const metaImage = '';//contentfulAsset.fixed.src;
  const metaImageurl = `https:${metaImage}`;
  const url = [siteUrl, title].join('/').toLowerCase();

  const metaDescription = description || metadataDescription;
  const fullPageTitle = (title ? `${metadataTitle} | ${title}` : `${metadataTitle} | Home`);
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={fullPageTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:title',
          content: fullPageTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: metaImageurl,
        },
        {
          property: 'og:image:secure_url',
          content: metaImageurl,
        },
        {
          property: 'og:locale',
          content: 'en_GB',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: fullPageTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:site',
          content: author,
        },
        {
          name: 'twitter:image',
          content: metaImageurl,
        },
        {
          name: 'twitter:image:alt',
          content: 'Title image for the personal website of Andy Smith',
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
