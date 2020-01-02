import React from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo";
import TestimonialItem from "../components/TestimonialItem";

const TestimonialsPage = ({data}) => {

    const testimonials = data.allContentfulTestimonials.nodes;
    const defaultProfileImage = data.contentfulAsset;
    // debugger;

    console.log('testimonials', testimonials);
    return (
        <Layout>
            <SEO title="Testimonials" />

            <h1>People <span className="theme-primary-colour bold">say.</span></h1>

            <div className="testimonials">
                <div className="wrapper">
                    {
                        testimonials.map(item => 
                            <TestimonialItem 
                                data={item}
                                image={defaultProfileImage} 
                            />    
                        )
                    }
                </div>
            </div>
           
    </Layout>
  )
}

export default TestimonialsPage

export const pageQuery = graphql`
query TestimonialsQuery {
    allContentfulTestimonials {
      nodes {
        name
        company
        jobTitle
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
`
 