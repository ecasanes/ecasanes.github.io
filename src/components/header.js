//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import ImageLogo from "./image-components/image-ec-logo";

const Header = ({ siteTitle }) => {

  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [initialMenuClick, setInitialMenuClick] = useState(false);

  function displayMobileMenu() {
    setActiveMobileMenu(!activeMobileMenu);
  }

  function clickMenu() {
    setInitialMenuClick(true);
  }

  return (
    // < !--Fixed navbar -->
    <>
      <nav id="header-nav" className={`bg minimalist-black navbar-default navbar-fixed-top ${activeMobileMenu ? 'mobile-menu-active' : ''}`} role="navigation">
        <div className="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button type="button" className={`navbar-toggle`} data-toggle="collapse" data-target="#mainnav" onClick={() => {
              displayMobileMenu();
              clickMenu();
            }}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" style={{ padding: '15px 0' }} id="branding" href="http://ecasanes.github.io/">
              <div class="logo-container">
                <ImageLogo />
              </div>
              <p class="heading">Ernest Oliver Casanes</p>
      </a>
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className={`navbar-collapse ${initialMenuClick ? '' : 'not-clicked'} ${activeMobileMenu === true && initialMenuClick === true ? 'navbar-active' : 'navbar-inactive'}`} id="mainnav">

            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="http://ecasanes.github.io/">Home</a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://ph.linkedin.com/pub/ernest-oliver-casanes/35/794/258/">LinkedIn</a>
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
  );

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
