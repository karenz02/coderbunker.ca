import * as React from "react"
// import { graphql, useStaticQuery } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
// import Img from 'gatsby-image';

import SiteBorderStyles from '../styles/SiteBorderStyles';
import BackgroundImage from "./bg-image";

const TeamStyles = styled.section`
  position: relative;
  .bg-img-wrapper {
    position: absolute;
    bottom: 20px;
    right: -50vw;
    width: 100%;
    z-index: -1;
    
  }
  .card {
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.5);
  }
  svg, p {
    color: var(--darkgrey);
  }
  ul {
    list-style-type: "→";
    padding-left: 2rem;
    li {
      padding-left: 0.5rem;
    }
  }
`;

export default function Team() {
  return (
    <TeamStyles>
      <SiteBorderStyles className="flex flex-col">
        {/* section-header */}
        <div className="text-left md:text-center py-4 md:py-16 lg:py-24">
          <h2 className="text-3xl lg:text-4xl">
            <span className="highlight-red">
              <Trans>Consult</Trans>
            </span>
            <Trans> Your Tech Lead</Trans>
          </h2>
          <p className="hidden md:block text-xl lg:text-2xl my-4">
            <Trans>We strive to raise the bar of technical expertise.</Trans>
          </p>
        </div>  
        <div className="card">
          {/* TODO: Carousel */}
        </div>
      </SiteBorderStyles>
      <div className="bg-img-wrapper">
        <BackgroundImage />
      </div>
    </TeamStyles>
  )
}
