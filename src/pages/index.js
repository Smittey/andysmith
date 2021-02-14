import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Highlighter from 'react-highlight-words';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/Button';

const IndexPage = ({ data }) => {
  const {
    name,
    specialism,
    hobby,
    location,
    bio,
    highlightWords,
  } = data.contentfulProfileHeader;

  return (

    <Layout isIndex>
      <SEO />

      <div className="bioBox">
        <h1>
          <span>I&apos;m </span>
          <span className="theme-primary-colour">
            {name}
            .
          </span>
        </h1>
        <h2 className="bold">
          {specialism}
          <span className="theme-primary-colour"> and </span>
          {hobby}
          <br />
          <span>living in </span>
          {location}
        </h2>

        <p>
          <Highlighter
            highlightClassName="highlightedWord bold"
            searchWords={highlightWords}
            autoEscape
            textToHighlight={bio.bio}
          />
        </p>

        <div className="resumeButtonDiv">

          <Button
            href="https://docs.google.com/document/d/1bWrA-LyPgv2Q9XFgJeQ_BWOxwn3L3bRpdO0YLFuT6rA/edit?usp=sharing"
            label="Résumé"
            type="button"
            classNameProp="buttonBig"
          >
            Résumé
          </Button>
        </div>
      </div>

    </Layout>
  );
};

export const pageQuery = graphql`
  query HomeQuery {  
    contentfulProfileHeader {
      specialism
      name
      location
      hobby
      bio {
        bio
      }
      highlightWords
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulProfileHeader: PropTypes.object.isRequired,
  }),
};

export default IndexPage;
