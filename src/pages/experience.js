import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Timeline from '../components/Timeline';
import TimelineFilter from '../components/TimelineFilter';

const ExperiencePage = ({ data }) => (
  <Layout>
    <SEO title="Experience" />

    <h1>
      <span>I&apos;ve</span>
      <span className="theme-primary-colour bold"> worked at.</span>
    </h1>

    <div className="experience">
      <TimelineFilter data={data} />
      <Timeline data={data} />
    </div>

  </Layout>
);

export default ExperiencePage;

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
`;

ExperiencePage.propTypes = {
  data: PropTypes.object.isRequired,
};
