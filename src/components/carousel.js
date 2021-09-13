import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CarouselCard from "./carousel-card";

export default function Carousel({ teamIndex, setTeamIndex, locale }) {
  // Query all team member info
  const { content } = useStaticQuery(graphql`{
    content: allContentJson {
      group(field: parent___children) {
        nodes {
          en {
            name
            title
            linkedin
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 500,
                  placeholder: BLURRED,
                  layout: CONSTRAINED
                )
              }
            }
            highlights
            github
          }
          fr {
            name
            title
            linkedin
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 500,
                  placeholder: BLURRED,
                  layout: CONSTRAINED
                )
              }
            }
            highlights
            github
          }
        }
      }
    }
  }`);

  const members = content.group[0].nodes
  const membersLocalized = members.map(member => member[locale])

  return (
    <>
      {membersLocalized.map((member, index) => {
        return(
          <CarouselCard
            member={member}
            key={member.github}
            // pic={pic}
            // key={pic.node.id}
            index={index}
            count={members.length}
            teamIndex={teamIndex}
            setTeamIndex={setTeamIndex}
          />
        )
      })}
    </>
  )
}
