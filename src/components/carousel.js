import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CarouselCard from "./carousel-card";

export default function Carousel({ teamIndex, setTeamIndex }) {
  // query all team pics
  const data = useStaticQuery(graphql`{
    allFile(filter: {absolutePath: {regex: "/portraits/"}}, sort: {fields: base}) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              width: 500,
              placeholder: BLURRED,
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }`);

  const pics = data.allFile.edges;

  return (
    <>
      {pics.map((pic, index) => {
        return (
          <CarouselCard
            pic={pic}
            key={pic.node.id}
            index={index}
            count={pics.length}
            teamIndex={teamIndex}
            setTeamIndex={setTeamIndex}
          />
        )
      })}
    </>
  )
}
