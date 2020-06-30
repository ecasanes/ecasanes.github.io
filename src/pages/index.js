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
import ImageCode from "../components/image-components/image-code"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    
    <section id="headline" className="featured">
      <div className="container">

        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <div className="row intro-content ">
              
              <div className="col-xs-12 col-sm-10 xs-center">
                <h2 className="">Software Engineer</h2>
                <p>Provide solutions to the client by designing, building and testing quality software. 
                  Specialized in Frontend Development with experience in Angular, React, NodeJS.</p>
                <a className="btn btn-flat btn-orange uppercase" href="http://github.com/ecasanes">View Github Projects</a>
              </div>
            </div>
            
          </div>

          <div className="col-xs-12 col-sm-4 text-center">
            <div className="row">
              <div className="col-xs-12 text-center">
                <ImageCode />
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
