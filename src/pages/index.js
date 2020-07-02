import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSourthernLighting from "../components/image-components/image-southern-lighting"
import ImageInventorySystem from "../components/image-components/image-inventory-system"
import ImageCode from "../components/image-components/image-code"

import ImageReactLogo from "../components/image-components/image-react-logo"
import ImageAngularLogo from "../components/image-components/image-angular-logo"
import ImageNodeLogo from "../components/image-components/image-node-logo"
import ImageSassLogo from "../components/image-components/image-sass-logo"
import ImageBoxdice from "../components/image-components/image-boxdice";
import ImageFire from "../components/image-components/image-fire";
import ImageIlo from "../components/image-components/image-ilo";

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
                <a className="btn btn-flat btn-bg-darker txt-grey uppercase" href="http://github.com/ecasanes">View Github Projects</a>
              </div>
            </div>
            
          </div>

          <div className="col-xs-12 col-sm-4 text-center">
            <div className="row">
              <div className="col-xs-12 text-center">
                <ImageCode />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <section id="technologies-showcase" className="showcase" style={{backgroundColor: '#f7f7f7', padding: '30px 0 70px 0', marginTop:'60px'}}>
      <div className="container">
        <div className="col-xs-12">
          <h2 style={{textAlign: 'center', marginBottom: '50px'}}>Featured Technology Stack</h2>
        </div>
      </div>
      <div className="container">
        <div className="col-xs-6 col-sm-2">
          <ImageReactLogo/>
        </div>
        <div className="col-xs-6 col-sm-2 col-sm-offset-1">
          <ImageAngularLogo/>
        </div>
        <div className="col-xs-6 col-sm-2 col-sm-offset-1">
          <ImageNodeLogo/>
        </div>
        <div className="col-xs-6 col-sm-2 col-sm-offset-1">
          <ImageSassLogo/>
        </div>
      </div>
      
    </section>

    <section id="project-showcase" className="showcase" style={{padding: '30px 0 70px 0'}}>
      <div className="container">
        <div className="col-xs-12">
          <h2 style={{textAlign: 'center', marginBottom: '50px'}}>Featured Projects</h2>
        </div>
      </div>
      <div className="container">
        <div className="col-xs-12 col-sm-4">
          <ImageBoxdice/>
        </div>
        <div className="col-xs-12 col-sm-4">
          <ImageFire/>
        </div>
        <div className="col-xs-12 col-sm-4">
          <ImageIlo/>
        </div>
      </div>
      
    </section>

    
  </Layout>
)

export default IndexPage
