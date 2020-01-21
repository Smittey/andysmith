import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import '../assets/style/main.scss';

const Layout = ({ children, isIndex }) => (
  <div>
    <div className="container">
      <div
        className="content"
        style={{
          marginRight: isIndex ? '15%' : '10%',
          marginLeft: isIndex ? '15%' : '10%',
        }}
      >
        <main>{children}</main>
      </div>
      <Navbar isIndex={isIndex} />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool,
};

export default Layout;
