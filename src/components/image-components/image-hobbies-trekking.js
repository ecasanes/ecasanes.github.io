import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageHobbyTrekking = (props) => {
  
 
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "image-hobby-trekking-2.jpeg"}) {
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

export default ImageHobbyTrekking
