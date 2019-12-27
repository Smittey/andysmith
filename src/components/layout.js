/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/navbar";
import "../assets/layout.scss"

const Layout = ({ children, navBarWidth }) => {
  return (
    <>
      <div>

        <div className="container">
          
          <div className="content">
            <main>{children}</main>
          </div>
          <Navbar width={navBarWidth}/>
        </div>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
