import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageFire = (props) => {
  
  
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "projects/fire-2.png"}) {
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

export default ImageFire
