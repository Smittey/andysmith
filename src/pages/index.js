import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteBioQuery {
      site {
        siteMetadata {
          name,
          title_job,
          title_fun,
          location,
          professional_tagline1,
          professional_tagline_word,
          professional_tagline2
        }
      }
    }
  `)

  return (

    <Layout isIndex="true">
      <SEO title="Home" />
      
      <div className="bioBox">
        <h1>I'm <span className="theme-primary-colour bold">{data.site.siteMetadata.name}</span></h1>
        <h2 className="bold">
          {data.site.siteMetadata.title_job} <span className="theme-primary-colour">and</span> {data.site.siteMetadata.title_fun}<br/>
          living in {data.site.siteMetadata.location}
        </h2>

        <p>
          {data.site.siteMetadata.professional_tagline1} 
          <span className="theme-primary-colour bold">{data.site.siteMetadata.professional_tagline_word}</span>
          {data.site.siteMetadata.professional_tagline2}
        </p>

        <a href="https://docs.google.com/document/d/1bWrA-LyPgv2Q9XFgJeQ_BWOxwn3L3bRpdO0YLFuT6rA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <div className="resumeButton">
            Resume
          </div>
        </a>
      </div>

    </Layout>
  )
}

export default IndexPage
