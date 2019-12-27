import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { useStaticQuery, graphql, Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Button from '../components/Button';

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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

    <Layout navBarWidth='40%'>
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

        <Button label="Resume"/>
      </div>

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      {/* <Link to="/page-2/">Go to page 2</Link> */}

      
    </Layout>
  )
}

export default IndexPage
