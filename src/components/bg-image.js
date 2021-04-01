import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function BackgroundImage({style, imgStyle}) {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "bunker.png" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Img fluid={data.fileName.childImageSharp.fluid}
           style={style}
           imgStyle={imgStyle}
           alt="Coderbunker background image"/>
    </>
  )
}
