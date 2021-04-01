import * as React from "react"
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';

import SiteBorderStyles from '../styles/SiteBorderStyles';
import BackgroundImage from "./bg-image";
import Carousel from "./carousel";

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
        {/* Carousel */}
        <Carousel />
      </SiteBorderStyles>
      <div className="bg-img-wrapper">
        <BackgroundImage />
      </div>
    </TeamStyles>
  )
}

const TeamStyles = styled.section`
  position: relative;
  .bg-img-wrapper {
    position: absolute;
    bottom: 20px;
    right: -50vw;
    width: 100%;
    z-index: -1;
  }
  p {
    color: var(--darkgrey);
  }
`;
