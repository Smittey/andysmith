import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Timeline from '../components/Timeline';
import TimelineFilter from '../components/TimelineFilter';
import { experienceContext } from '../utils/experienceContext';

const initialState = {
  filterTags: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return {
        filterTags: [...new Set(
          [...state.filterTags, action.data],
        )],
      };
    case 'REMOVE_FILTER':
      return {
        filterTags: state.filterTags.filter((tag) => tag !== action.data),
      };
    case 'CLEAR_FILTER':
      return initialState;
    default:
      return initialState;
  }
};

const ExperiencePage = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout>
      <SEO title="Experience" />
      <h1>
        <span>I&apos;ve</span>
        <span className="theme-primary-colour bold"> worked at.</span>
      </h1>

      <div className="experience">
        <experienceContext.Provider value={{ state, dispatch }}>
          <TimelineFilter data={data} />
          <Timeline data={data} />
        </experienceContext.Provider>
      </div>

    </Layout>
  );
};

export const pageQuery = graphql`
  query ExperienceQuery {
    allContentfulExperience(sort: {order: DESC, fields: startDate}) {
      nodes {
        companyName
        startDate
        jobTitle
        skills
        jobDescription {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

ExperiencePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExperiencePage;
