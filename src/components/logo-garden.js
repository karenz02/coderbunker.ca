import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import SiteBorderStyles from '../styles/SiteBorderStyles';
import styled from "styled-components";
import { Trans } from 'gatsby-plugin-react-i18next';

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
    height: 15vh;
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

export default function LogoGarden() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {absolutePath: {regex: "/logos/"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 500, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const logos = data.allFile.edges;

  return (
    <LogoGardenStyles>
      <SiteBorderStyles>
        <p className="text-center">
          <Trans>Trusted by these partners and clients</Trans>
        </p>
        <div className="logos">
          {logos.map(({ node }) => (
            <Img
              imgStyle={{ width: `auto`, height: `auto`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}
              className="m-4"
              fluid={node.childImageSharp.fluid}
              key={node.base}
              alt={node.base.split('.')[0]}
            />
          ))}
        </div>
      </SiteBorderStyles>
    </LogoGardenStyles>
  );
}
