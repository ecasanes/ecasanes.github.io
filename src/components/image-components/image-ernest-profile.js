import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageErnestProfile = (props) => {

  console.log('the image props: ', props);
  
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

  console.log('image data: ', data);

  return <Img className="img-circle" fluid={data.file.childImageSharp.fluid} />
}

export default ImageErnestProfile
