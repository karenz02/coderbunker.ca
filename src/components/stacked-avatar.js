import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

export default function StackedAvatar() {
  // query all team pics
  const data = useStaticQuery(graphql`{
    allFile(filter: {absolutePath: {regex: "/team/"}}, sort: {fields: base}) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(width: 75, layout: FIXED)
            id
          }
        }
      }
    }
  }`);

  const pics = data.allFile.edges;
  return (
    <div className="py-8">
      {pics.map((pic, i) => {
        const zIndex = pics.length - i;
        const translateX = i * -30;
        return (
          <GatsbyImage
            image={pic.node.childImageSharp.gatsbyImageData}
            className="inline-block rounded-full"
            style={{width: `75px`, height: `75px`, zIndex: `${zIndex}`, border: `1px solid var(--white)`, transform: `translateX(${translateX}%)`}}
            imgStyle={{objectPosition: `top center`}}
            key={pic.node.childImageSharp.id}
            alt="pic.node.base.split('.')[0]" />
        );
      }).slice(0, 7)}
      {/* TODO: handle representation for members with count above 7 */}
    </div>
  );
}
