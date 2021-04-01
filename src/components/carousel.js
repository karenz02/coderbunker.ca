import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CarouselCard from "./carousel-card";

export default function Carousel() {
  // state to determine the active slide for the carousel
  const [activeIndex, setActiveIndex] = useState(0);

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
              fluid(maxWidth: 1024, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const pics = data.allFile.edges;
  return (
    <>
      {pics.map((pic, index) => {
        return (<CarouselCard pic={pic} key={pic.node.base} index={index} count={pics.length} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>)
      })}

    </>
  )
}
