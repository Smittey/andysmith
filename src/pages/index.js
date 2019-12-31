import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Highlighter from "react-highlight-words";
import Button from "../components/Button";

const IndexPage = ({data}) => {
  const { name, specialism, hobby, location, bio, highlightWords } = data.contentfulProfileHeader;

  return (

    <Layout isIndex="true">
      <SEO title="Home" />
      
      <div className="bioBox">
        <h1>I'm <span className="theme-primary-colour bold">{name}</span></h1>
        <h2 className="bold">
          {specialism} <span className="theme-primary-colour">and</span> {hobby}<br/>
          living in {location}
        </h2>

        <p>
          <Highlighter
            highlightClassName="highlightedWord bold"
            searchWords={highlightWords}
            autoEscape={true}
            textToHighlight={bio.bio}
          />,
        </p>

        <Button 
          href="https://docs.google.com/document/d/1bWrA-LyPgv2Q9XFgJeQ_BWOxwn3L3bRpdO0YLFuT6rA/edit?usp=sharing"
          label="Resume"
        />
      </div>

    </Layout>
  )
}

export default IndexPage

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
`
