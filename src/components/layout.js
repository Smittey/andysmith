/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"
import big from "../images/me-big1.png"

import "../assets/layout.scss"

const Layout = ({ children, navBarWidth }) => {
  return (
    <>
      <div>

        <div className="container">
          
          <div className="content">
            <main>{children}</main>
          </div>
          <div className="rightNav" style={{minWidth: navBarWidth}}>
            <p>Stuck stuff</p>
            <span class="imgContainer">
              <img src={big}></img>
            </span>
            {/* <Image/> */}
          </div>
        </div>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
