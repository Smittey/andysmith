import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TestimonialItem from '../components/TestimonialItem';

const TestimonialsPage = ({ data }) => {
  const testimonials = data.allContentfulTestimonials.nodes;
  const defaultProfileImage = data.contentfulAsset;
  const listSize = 6;

  const shuffledNodes = testimonials
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return (
    <Layout>
      <SEO title="Testimonials" />
      <h1>
        <span>People</span>
        <span className="theme-primary-colour bold"> say.</span>
      </h1>

      <div className="testimonials">
        <div className="wrapper">
          {
            shuffledNodes.slice(0, listSize).map((testimonial) => (
              <TestimonialItem
                data={testimonial}
                defaultImage={defaultProfileImage}
                key={testimonial.name}
              />
            ))
          }
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
query TestimonialsQuery {
    allContentfulTestimonials {
      nodes {
        name
        company
        jobTitle
        displayPicture {
          sizes(maxHeight: 200, cropFocus: CENTER) {
            ...GatsbyContentfulSizes
          }
        }
        body {
          body
        }
        linkedInUrl
      }
    }
    contentfulAsset(contentful_id: {eq: "3PuWX6xVy970fMd5zDNahD"}) {
        sizes(maxHeight: 500, cropFocus: CENTER) {
            ...GatsbyContentfulSizes
        }
      
    }
  }
`;

TestimonialsPage.propTypes = {
  data: PropTypes.shape({
    allContentfulTestimonials: PropTypes.object.isRequired,
    contentfulAsset: PropTypes.object.isRequired,
  }).isRequired,
};

export default TestimonialsPage;
