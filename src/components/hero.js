import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import Img from 'gatsby-image';

import LogoGarden from '../components/logo-garden';
import SiteBorderStyles from '../styles/SiteBorderStyles';

const HeroStyles = styled.section`
  position: relative;
  .hero {
    height: calc(80vh - 100px);
    p {
      color: var(--darkgrey);
    }
  }
  .quarter-circle-bottom-left{
    position: absolute;
    bottom: 0;
    left: 0;

    width: 70vw;
    height: 70vw;
    background: var(--peach);
    border-radius: 0 70vw 0 0;
    -moz-border-radius: 0 70vw 0 0;
    -webkit-border-radius: 0 70vw 0 0;
    z-index: -1;
  }
  .stats {
    background: var(--white);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    div:first-child {
      border-right: 1px solid var(--lightgrey);
    }
    small {
      color: var(--darkgrey);
    }
  }
`;

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "coders.png" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeroStyles>
      <SiteBorderStyles>
        <div className="hero flex flex-col md:flex-row items-center">
          {/* Hero text */}
          <div className="flex-1 md:flex flex-col justify-center items-start">
            <h1 className="text-3xl md:text-4xl leading-relaxed md:leading-12 mb-5">
              <span>
                <Trans>Introducing Coderbunker in the </Trans>
              </span>
              <span className="inline highlight-red uppercase">
                <Trans>North</Trans>
              </span>
            </h1>
            <p className="text-2xl">
              <Trans>We empower freelancer community to excel in long term projects.</Trans>
            </p>
            {/* TODO: Insert Team Member Pics */}

            {/* <div className="stats p-2 md:p-4 mb-10 flex">
              <div className="px-12">
                <small className="uppercase">
                  <Trans># coders</Trans>
                </small>
                <h3 className="text-2xl">50+</h3>
              </div>
              <div className="px-12">
                <small className="uppercase">
                  <Trans># bunkers</Trans>
                </small>
                <h3 className="text-2xl">3</h3>
              </div>
            </div> */}
          </div>

          {/* Hero Image*/}
          <div className="flex-1 md:p-16" style={{maxWidth: `60vw`, width: `100%`, overflow: `hidden`}}>
            <Img
              fluid={data.fileName.childImageSharp.fluid}
              alt="Coderbunker Coders" />
          </div>
        </div>

      </SiteBorderStyles>
      {/* logo garden */}
      <LogoGarden />
      <div className="quarter-circle-bottom-left" />
    </HeroStyles>
  )
}
