import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import SiteBorderStyles from '../styles/SiteBorderStyles';

export default function BackgroundImage() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "bunkers.png" }) {
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
           alt="Coderbunker Bunkers"/>
    </>
  )
}
