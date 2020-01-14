import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <h1>
      <span>Let's</span>
      <span className="theme-primary-colour bold"> talk.</span>
    </h1>

    <div className="contact">
        Contact
    </div>

  </Layout>
);

export default ContactPage;
