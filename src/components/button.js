import * as React from "react";
import styled from 'styled-components';
import { Trans } from 'gatsby-plugin-react-i18next';
import PDF from '../assets/pdfs/placeholder.pdf';

export default function CallToAction() {
  return (
    <ButtonStyle>
      <a href={PDF} target="_blank" rel="noreferrer" className="px-4 md:px-6 py-2 text-lg md:text-xl">
        <Trans>Retain Us</Trans>
      </a>
    </ButtonStyle>
  )
}
const ButtonStyle = styled.div`
  transform: skew(-16deg);
  a {
    white-space: nowrap;
    display: block;
    background-color: var(--red);
    color: var(--white);
    transition: rotate 0.3s ease;
    letter-spacing: 1px;
    &:hover {
      cursor: pointer;
      transform: rotate(-8deg);
      color: var(--white) !important;
    }
  }
`