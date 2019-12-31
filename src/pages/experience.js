import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Timeline from "../components/Timeline"
import Button from "../components/Button";

const ExperiencePage = ({data}) => {


  
  const allSkills = data.allContentfulExperience.nodes.reduce((skillsAcc, experience) => {
    return Array.from(new Set([...skillsAcc, ...experience.skills]))
  }, [])
  

  return (
    <Layout>
      <SEO title="Experience" />

      <h1>I've <span className="theme-primary-colour bold">worked at.</span></h1>
             
      <div className="experience">
        <div>
          <div className="sticky">

            {allSkills.map(skill => <Button label={skill} style={{padding: "2px 5px", margin: "0px 5px 5px 0px"}}/>)}

            <span className="filterText">Filter <a href="javascript:void(0)" onclick="clearFilters()">(clear)</a></span>
        
          </div>
        </div>


        <Timeline data={data} />
      </div>

    </Layout>
  )
}

export default ExperiencePage

export const pageQuery = graphql`
  query ExperienceQuery {
    allContentfulExperience(sort: {order: ASC, fields: createdAt}) {
      nodes {
        companyName
        date
        jobTitle
        skills
        jobDescription {
          jobDescription
        }
      }
    }
  }
`
