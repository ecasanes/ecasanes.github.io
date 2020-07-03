import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageErnestProfile = (props) => {
  
  const { className } = props;

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "ernest-mobile.jpeg"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img className="img-circle" fluid={data.file.childImageSharp.fluid} />
}

export default ImageErnestProfile
