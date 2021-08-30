import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import SiteBorderStyles from '../styles/SiteBorderStyles';
import styled from "styled-components";
import { Trans } from 'gatsby-plugin-react-i18next';

export default function LogoGarden() {
  // query all partnerlogos
  const data = useStaticQuery(graphql`{
    allFile(filter: {absolutePath: {regex: "/logos/"}}) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(
              width: 150,
              placeholder: BLURRED,
              layout: CONSTRAINED
            )
            id
          }
        }
      }
    }
  }`);
  const logos = data.allFile.edges;
  return (
    <LogoGardenStyles>
      <SiteBorderStyles>
        <p className="text-center">
          <Trans>Trusted by these partners and clients</Trans>
        </p>
        <div className="logos">
          {logos.map(({node}) => (
            <GatsbyImage
              width={150}
              image={node.childImageSharp.gatsbyImageData}
              imgStyle={{ width: `auto`, height: `auto`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}
              className="m-4"
              key={node.childImageSharp.id}
              alt={node.base.split('.')[0]} />
          ))}
        </div>
      </SiteBorderStyles>
    </LogoGardenStyles>
  );
}

const LogoGardenStyles = styled.div`
  background-color: var(--lightgrey);
  height: 20vh;
  padding: 20px 0;
  p {
    color: var(--darkgrey);
  }
  .logos {
    scroll-snap-type: x mandatory;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 5px;
    height: 13vh;
    place-items: center center;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    overflow-y: hidden;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    & > * {
      scroll-snap-align: start;
      min-width: 150px;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
