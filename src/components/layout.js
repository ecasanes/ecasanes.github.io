/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="bg black">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <p>Upgraded to Gatsby.js</p>
              <p>ecasanes.github.io &copy; {currentYear}</p>
				    </div>
          </div>
        </div>
	    </footer>
    </>
  )
}

Layout.propTypes = {
        children: PropTypes.node.isRequired,
}

export default Layout




