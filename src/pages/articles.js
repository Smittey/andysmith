import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticleItem from '../components/ArticleItem';

const ArticlesPage = ({ data }) => {
  const articles = data.allContentfulBlogPost.nodes;

  return (
    <Layout>
      <SEO title="Articles" />

      <h1>
        <span>I&apos;ve</span>
        <span className="theme-primary-colour bold"> written.</span>
      </h1>

      <div className="articles">
        {
          articles.map((item, i) => (
            <div className="itemWrapper" key={item.title}>
              <ArticleItem index={i} data={item} />
            </div>
          ))
        }
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ArticlesQuery {
      allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
          nodes {
              title
              description {
                  description
              }
              previewText {
                  previewText
              }
              slug
              publishDate
              heroImage {
                description
                gatsbyImageData(
                  placeholder: BLURRED
                  cropFocus: CENTER
                  height: 500 
                )
              }
          }
      }
  }
`;

ArticlesPage.propTypes = {
  data: PropTypes.shape({
    allContentfulBlogPost: PropTypes.object.isRequired,
  }).isRequired,
};

export default ArticlesPage;
