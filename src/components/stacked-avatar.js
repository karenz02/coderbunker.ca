import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

export default function StackedAvatar({ sectionRefs, setTeamIndex, pausedRef }) {
  // query all team name and image
  const { content } = useStaticQuery(graphql`{
    content: allContentJson {
      nodes {
        en {
          name
          image {
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
    }
  }`);

  const handleClick = (ev) => {
    // Pause Observer
    pausedRef.current = true
    // Update Team Index
    const updatedTeamIndex = parseInt(ev.currentTarget.dataset.team)
    setTeamIndex(updatedTeamIndex)
    // Find Team Section Top
    const top = sectionRefs.current[2].offsetTop
    // Navigate to the Team Section
    window.scrollTo({ top, behavior: 'smooth' })
    setTimeout(() => {
      pausedRef.current = false
    }, 1000);
  }

  const members = content.nodes.map(member => member.en)

  return (
    <div className="py-8">
      {members.map((member, i) => {
        const { name, image } = member
        const zIndex = members.length - i;
        const translateX = i * - 30;
        return (
          <button data-team={i} onClick={handleClick} key={`avatar-${name}`}>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              className="inline-block rounded-full"
              style={{width: `75px`, height: `75px`, zIndex: `${zIndex}`, border: `1px solid var(--white)`, transform: `translateX(${translateX}%)`}}
              imgStyle={{objectPosition: `top center`}}
              alt={name} />
          </button>
        );
      }).slice(0, 7)}
      {/* TODO: handle representation for members with count above 7 */}
    </div>
  );
}
