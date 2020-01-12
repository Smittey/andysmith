import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import big from '../assets/images/me-big1.png';

const Navbar = ({ isIndex }) => {
  const { contentfulAsset, allContentfulSocialMediaIcons } = useStaticQuery(
    graphql`
      query {
        contentfulAsset(contentful_id: {eq: "3Q1Kn2aUi6rUxunGYPZkAI"}) {
          sizes(maxHeight: 2000) {
              ...GatsbyContentfulSizes
          }
        }
        allContentfulSocialMediaIcons {
          nodes {
            name
            link
            altText
            image {
              sizes(maxHeight: 300) {
                  ...GatsbyContentfulSizes
              }
            }
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
    <nav
      className="rightNav"
      style={{
        minWidth: isIndex ? '40%' : 'fit-content',
      }}
    >

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


        <ul>
          <li>
            <Link to="/" activeClassName="activeMenuLink" className="menuLink">
                      Profile.
            </Link>
          </li>
          <li>
            <Link to="/interests" activeClassName="activeMenuLink" className="menuLink">
                      Interests.
            </Link>
          </li>
          <li>
            <Link to="/experience" activeClassName="activeMenuLink" className="menuLink">
                      Experience.
            </Link>
          </li>
          <li>
            <Link to="/articles" activeClassName="activeMenuLink" className="menuLink">
                      Articles.
            </Link>
          </li>
          <li>
            <Link to="/testimonials" activeClassName="activeMenuLink" className="menuLink">
                      Testimonials.
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="activeMenuLink" className="menuLink">
                      Contact.
            </Link>
          </li>
        </ul>
        <div className="imgWrappers" style={{ marginLeft: isIndex && '-100px' }}>
          <div className="icons">
            {
              allContentfulSocialMediaIcons.nodes.map((item) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.name}>
                  <Img
                    className="social"

                    imgStyle={{
                      width: '50px',
                      height: '50px',
                    }}
                    sizes={item.image.sizes}
                    alt={item.altText}
                  />
                </a>
              ))
            }
          </div>

          {isIndex
            ? <img className="bigImg" src={big} alt="Andy Smith" />
            : (
              <Img
                className="navImg"
                imgStyle={{
                  objectFit: 'contain',
                  display: 'block',
                  maxHeight: '100%',
                }}
                sizes={contentfulAsset.sizes}
              />
            )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isIndex: PropTypes.bool,
};

export default Navbar;
