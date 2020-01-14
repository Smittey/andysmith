import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import BackgroundImage from 'gatsby-background-image';
import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';

const Navbar = ({ isIndex }) => {
  const { contentfulAsset } = useStaticQuery(
    graphql`
      query {
        contentfulAsset(contentful_id: {eq: "3Q1Kn2aUi6rUxunGYPZkAI"}) {
          sizes(maxHeight: 2000) {
              ...GatsbyContentfulSizes
          }
        }
      }
    `,
  );

  const [menuState, setMenuState] = useState('closed');

  const navToggle = () => {
    setMenuState(menuState === 'closed' ? 'open' : 'closed');
  };

  return (
    <nav className="rightNav" style={{ minWidth: isIndex ? '40%' : 'fit-content' }}>

      <button type="button" className="menuIcon" onClick={navToggle} tabIndex="0" onKeyDown={navToggle}>
        <IconContext.Provider value={{ className: (menuState === 'closed') ? 'icon' : 'iconClicked' }}>
          <FaBars />
        </IconContext.Provider>
      </button>


      <div
        className="menuWrapper"
        style={{
          display: (menuState === 'closed') ? 'none' : 'block',
        }}
      >

        <NavLinks />

        <div className={isIndex ? 'imgWrappers indexImgWrapper' : 'imgWrappers nonIndexImgWrapper'}>

          <SocialIcons />

          <BackgroundImage
            Tag="section"
            id="media-test"
            className={isIndex ? 'indexImg' : 'nonIndexImg'}
            style={{
              height: '100%',
              backgroundSize: 'contain',
              backgroundPosition: isIndex ? 'left bottom' : 'center bottom -100px',
            }}
            fluid={contentfulAsset.sizes}
          />

        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isIndex: PropTypes.bool,
};

export default Navbar;
