import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';

const Navbar = ({ isIndex }) => {
  const [menuState, setMenuState] = useState('closed');
  const [backgroundPositionStyle, setBackgroundPositionStyle] = useState('');

  useEffect(() => {
    let style;

    if (isIndex && menuState === 'closed') {
      style = 'left bottom';
    } else if (!isIndex && menuState === 'closed') {
      style = 'center bottom -100px';
    } else if (!isIndex && menuState === 'open') {
      style = 'right';
    } else if (isIndex && menuState === 'open') {
      style = 'right';
    } else {
      style = 'left center';
    }

    setBackgroundPositionStyle(style);
  }, [menuState]);

  const { contentfulAsset } = useStaticQuery(
    graphql`
      query {
        contentfulAsset(contentful_id: {eq: "3Q1Kn2aUi6rUxunGYPZkAI"}) {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                quality: 90
              )
            }
          }
        }
      }
    `,
  );

  const image = getImage(contentfulAsset.localFile);
  const bgImage = convertToBgImage(image);

  const navToggle = () => {
    setMenuState(menuState === 'closed' ? 'open' : 'closed');
  };

  return (
    <nav className="rightNav" style={{ minWidth: isIndex ? '40%' : 'fit-content' }}>

      <span role="button" className="menuIcon" onClick={() => navToggle()} tabIndex="0" onKeyDown={navToggle}>
        <IconContext.Provider value={{ className: (menuState === 'closed') ? 'icon' : 'iconClicked' }}>
          <FaBars />
        </IconContext.Provider>
      </span>

      <div className="menuWrapper" style={{ display: (menuState === 'closed') ? 'none' : 'block' }}>
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
              backgroundPosition: backgroundPositionStyle,
            }}
            {...bgImage}
          >
          </BackgroundImage>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isIndex: PropTypes.bool,
};

export default Navbar;
