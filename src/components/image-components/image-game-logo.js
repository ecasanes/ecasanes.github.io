import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageGameLogo = (props) => {

  console.log('the image props: ', props);
  
  const { className } = props;

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "game-01.png"}) {
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

export default ImageGameLogo
