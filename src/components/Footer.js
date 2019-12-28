import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { FaHeart } from 'react-icons/fa';
import { IconContext } from "react-icons";

function getYear() {
    const d = new Date();
    return d.getFullYear();
}

const Footer = () => {
    const dataLocation = useStaticQuery(graphql`
    query SiteLocationQuery {
      site {
        siteMetadata {
          location,
        }
      }
    }
  `)

  return (
      <footer>
          <div className="footerText">
              <IconContext.Provider value={{ className: "icon" }}>
                  Designed and made with <FaHeart /> in {dataLocation.site.siteMetadata.location}, {getYear()}
              </IconContext.Provider>
          </div>
      </footer>
  )
}

export default Footer;