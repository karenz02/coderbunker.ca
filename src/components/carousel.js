import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CarouselCard from "./carousel-card";

export default function Carousel() {
  // state to determine the active slide for the carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // query all team pics
  const data = useStaticQuery(graphql`{
  allFile(filter: {absolutePath: {regex: "/portraits/"}}, sort: {fields: base}) {
    edges {
      node {
        base
        childImageSharp {
          gatsbyImageData(
            width: 500,
            placeholder: BLURRED,
            layout: CONSTRAINED
          )
        }
        id
      }
    }
  }
}
`);
  const pics = data.allFile.edges;
  return (
    <>
      {pics.map((pic, index) => {
        return (<CarouselCard pic={pic} key={pic.node.id} index={index} count={pics.length} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>)
      })}
    </>
  )
}
