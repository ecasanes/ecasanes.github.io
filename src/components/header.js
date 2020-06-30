import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  // < !--Fixed navbar -->
  <>
    <nav id="header-nav" className="bg minimalist-black navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainnav">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" id="branding" href="http://ecasanes.github.io/">
            ecasanes.github.io
				</a>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse" id="mainnav">

          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="http://ecasanes.github.io/">Home</a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://ph.linkedin.com/pub/ernest-oliver-casanes/35/794/258/">Resume</a>
            </li>
            <li>
              <a href="https://github.com/ecasanes">Github</a>
            </li>
            <li>
              <a href="mailto:ecasanes@gmail.com">Email Me</a>
            </li>

            {/* <li>
              <div id="header-social">
                <a href="https://twitter.com/ecasanes" className="twitter-follow-button" data-show-count="false" data-size="large" data-dnt="true">Follow @ecasanes</a>
              </div>
            </li> */}
            {/* <!--<div id="header-social" className='share-button share-button-left'></div>--> */}
          </ul>
        </div>
        {/* <!-- /.navbar-collapse --> */}
      </div>
    </nav>

  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
