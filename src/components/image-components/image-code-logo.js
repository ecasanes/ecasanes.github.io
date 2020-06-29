import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ImageCodeLogo = (props) => {

  console.log('the image props: ', props);
  
  const { className } = props;

  // query {
  //   placeholderImage: file(relativePath: { eq: "code-01.png" }) {
  //     childImageSharp {
  //       fluid(maxWidth: 40) {
  //         ...GatsbyImageSharpFluid_tracedSVG
  //       }
  //     }
  //   }
  // }

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "code-01.png"}) {
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

export default ImageCodeLogo
