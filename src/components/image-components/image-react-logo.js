import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {ReactComponent as CodeSVG} from "./../../images/code.svg"

const ImageReactLogo = (props) => {
  
  const { className } = props;

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "react-logo.png"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const childImageSharp = data.file.childImageSharp;

  return <Img fluid={childImageSharp.fluid} />
}

export default ImageReactLogo
