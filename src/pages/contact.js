import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Maps from '../components/Maps';
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <h1>
      <span>Let&apos;s</span>
      <span className="theme-primary-colour bold"> talk.</span>
    </h1>

    <div className="contact">
      <div className="wrapper">
        <div className="box">
          <ContactForm />
        </div>
        <div className="box">
          <Maps isMarkerShown />
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
