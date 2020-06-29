import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageSouthernLighting = (props) => {

  console.log('the image props: ', props);
  
  const { className } = props;

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "southern-lightning-co-uk.png"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  console.log('image data: ', data);

  return <Img fluid={data.file.childImageSharp.fluid} />
}

export default ImageSouthernLighting
