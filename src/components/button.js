import * as React from "react";
import styled from 'styled-components';
import { Link, Trans } from 'gatsby-plugin-react-i18next';

const ButtonStyle = styled.div`
  transform: skew(-16deg);
  a {
    display: block;
    padding: 8px 24px;
    background-color: var(--red);
    color: var(--white);
    transition: rotate 0.3s ease;
    letter-spacing: 1px;
    &:hover {
      cursor: pointer;
      transform: rotate(-8deg);
    }
  }
`

export default function ButtonRed({href}) {
  return (
    <ButtonStyle>
      <Link to={href} className="text-lg md:text-xl">
        <Trans>Retain Us</Trans>
      </Link>
    </ButtonStyle>
  )
}