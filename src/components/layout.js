/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar";
import "../assets/style/main.scss"
import Footer from "../components/Footer"

const Layout = ({ children, isIndex }) => {
  return (
    <>
      <div>

        <div className="container">
          <div className="content" style={{marginRight: isIndex ? "15%" : "10%"}}>
            <main>{children}</main>
            <Footer />
          </div>
          <Navbar isIndex={isIndex}/>
        </div>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
