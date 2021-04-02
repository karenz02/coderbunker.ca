import * as React from "react"
import styled from 'styled-components';
import SiteBorderStyles from '../styles/SiteBorderStyles';
import { FiGithub, FiLinkedin } from "react-icons/fi";

const FooterStyle = styled.footer`
  background: var(--black);
  padding: 1rem 0;
  color: var(--lightgrey);
`;

export default function Footer() {
  return (
    <FooterStyle>
      <SiteBorderStyles>
        {/* social links*/}
        <div className="flex my-1 md:my-2 items-center justify-center">
          <a className="inline-block md:hidden px-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/coderbunker/">
            <FiLinkedin className="text-xl" style={{ color: `var(--lightgrey)` }}/>
          </a>
          <a className="inline-block md:hidden px-2 mr-4" target="_blank" rel="noreferrer" href="https://github.com/coderbunker">
            <FiGithub className="text-xl" style={{ color: `var(--lightgrey)` }}/>
          </a>
          <p className="md:text-xl" style={{ color: `var(--lightgrey)` }}>
            © {new Date().getFullYear()} Coderbunker, inc.
          </p>
        </div>
      </SiteBorderStyles>
    </FooterStyle>
  )
}
