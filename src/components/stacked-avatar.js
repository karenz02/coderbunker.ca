import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function StackedAvatar() {
  // query all team pics
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { absolutePath: { regex: "/team/" } }
        sort: { fields: base }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);
  const pics = data.allFile.edges;
  return (
    <div className="py-8">
      {pics.map((pic, i) => {
        const zIndex = pics.length - i;
        const translateX = i * -30;
        return (
          <Img
            className="inline-block rounded-full"
            fixed={pic.node.childImageSharp.fixed}
            style={{width: `75px`, height: `75px`, zIndex: `${zIndex}`, border: `1px solid var(--white)`, transform: `translateX(${translateX}%)`}}
            imgStyle={{objectPosition: `top center`}}
          />
        )
      })}
    </div>
  )
}
