import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageCodeLogo from "../components/image-components/image-code-logo"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import ImageLifeLogo from "../components/image-components/image-life-logo"
import ImageGameLogo from "../components/image-components/image-game-logo"
import ImageSourthernLighting from "../components/image-components/image-southern-lighting"
import ImageInventorySystem from "../components/image-components/image-inventory-system"
import ImageErnestProfile from "../components/image-components/image-ernest-profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <section id="headline" className="featured bg echeresque">
      <div className="container">

        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <div className="row intro-content ">
              <div className="col-xs-12 col-sm-2 text-center">
                {/* <img className="title-img" src="../images/code-01.png" /> */}
                <ImageCodeLogo />
              </div>
              <div className="col-xs-12 col-sm-10 xs-center">
                <h2 className="">Web Developer</h2>
                <p>I create web pages and web-based systems based on the client.</p>
                <a className="btn btn-flat btn-orange uppercase" href="http://github.com/ecasanes">View Github Projects</a>
              </div>
            </div>
            <div className="row intro-content ">
              <div className="col-xs-12 col-sm-2 text-center">
                {/* <img className="title-img" src="../images/life-01.png" /> */}
                <ImageLifeLogo />
              </div>
              <div className="col-xs-12 col-sm-10 xs-center">
                <h2 className="">Tech-Geek / life-hacker</h2>
                <p>I've always wanted to learn and discover new things everyday.</p>
                <a className="btn btn-flat btn-green uppercase" href="http://lifehacker.com" target="_blank">Visit my favorite blog</a>
              </div>
            </div>
            <div className="row intro-content">
              <div className="col-xs-12 col-sm-2 text-center">
                {/* <img className="title-img" src="../images/game-01.png" /> */}
                <ImageGameLogo />
              </div>
              <div className="col-xs-12 col-sm-10 xs-center">
                <h2 className="">Gamer</h2>
                <p>Gaming is one of the key factor I am interested in technology.</p>
                <a className="btn btn-flat btn-black uppercase" href="http://steamcommunity.com/id/ecasanes" target="_blank">Add me on Steam</a>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4 text-center">
            <div className="row">
              <div className="col-xs-12 text-center">
                {/* <!--<img id="my-big-image" className="hidden-xs img-responsive" src="../images/ecasanes-aside.png" />--> */}
                {/* <img id="my-small-image" className=" img-responsive img-circle" src="../images/ernest-mobile.jpeg" /> */}
                <ImageErnestProfile />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 text-center">
                <a className="btn btn-flat btn-blue btn-lg uppercase" href="http://ph.linkedin.com/pub/ernest-oliver-casanes/35/794/258/" target="_blank">View LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="content-group bg cool-black">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>Featured Project</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                {/* <img className="img-responsive" src="../images/southern-lightning-co-uk.png" /> */}
                <ImageSourthernLighting />
              </div>
              <div className="description col-sm-6 col-xs-12">
                <h3>Southern Lightning Engineers Ltd</h3>
                <p>Type: Landing Page</p>
                <p>This project is a simple landing page built based from a Photoshop design. I am incharge of slicing the individual photos and converted it into a fully functional landing page using HTML, CSS, and 960gs framework.</p>
                <div className="row">
                  <div className="description-link col-sm-6 text-center">
                    <a className="btn btn-flat btn-orange btn-lg btn-block uppercase" href="http://southern-lightning.co.uk/" target="_blank">View this Project</a>
                  </div>
                  <div className="description-link col-sm-6 text-center hidden">
                    <a className="btn btn-flat btn-orange btn-lg btn-block uppercase">View Portfolio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="content-group bg cool-black">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>Open Project</h2>
              </div>
            </div>
            <div className="row">

              <div className="description col-sm-6 col-xs-12">
                <h3>Inventory System</h3>
                <p>Type: Codeigniter Application</p>
                <p>Web-based inventory system is I think the most requested software by small and medium business. I addressed the issue by building an application based on Codeigniter that has the four major functions of an inventory system: product management, purchase order, user management, and login system.</p>
                <div className="row">
                  <div className="description-link col-sm-6 text-center">
                    <a className="hidden-xs btn btn-flat btn-orange btn-lg btn-block uppercase" href="https://github.com/ecasanes/inventory-system" target="_blank">View this Project</a>
                  </div>
                  <div className="description-link col-sm-6 text-center hidden">
                    <a className="btn btn-flat btn-orange btn-lg btn-block uppercase">View Portfolio</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                {/* <img className="img-responsive" src="../images/inventory-system-codeigniter.png" /> */}
                <ImageInventorySystem />
              </div>

            </div>
            <div className="row visible-xs hidden-sm">
              <div className="col-xs-12">
                <a className="btn btn-flat btn-orange btn-lg btn-block uppercase" href="https://github.com/ecasanes/inventory-system" target="_blank">View this Project</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
