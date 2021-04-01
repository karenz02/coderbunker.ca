import * as React from "react"
import styled from 'styled-components';
import SiteBorderStyles from '../styles/SiteBorderStyles';

const FooterStyle = styled.footer`
  background: var(--black);
  color: var(--white);
  padding: 1rem 0;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <SiteBorderStyles>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} Coderbunker, inc.
        </p>
      </SiteBorderStyles>
    </FooterStyle>
  )
}
