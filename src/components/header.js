import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';


import SiteBorderStyles from '../styles/SiteBorderStyles';
import { CallToAction } from "./button";
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiAircanada } from 'react-icons/si'
export default function Header() {
  const [isOn, setSwitcher] = useState(false);
  const toggleSwitcher = () => {
    setSwitcher(!isOn);
  }

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "coderbunker-logo-black.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { languages, originalPath } = useI18next();
  return (
    <HeaderStyles>
      <SiteBorderStyles>
        <div className="header-content items-center">
          {/* social links*/}
          <div className="hidden md:block flex flex-row">
            <a className="inline-block mr-5" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/coderbunker/">
              <FiLinkedin className="text-2xl" />
            </a>
            <a className="inline-block" target="_blank" rel="noreferrer" href="https://github.com/coderbunker">
              <FiGithub className="text-2xl" />
            </a>
          </div>

          {/* logo */}
          {/* TODO: center logo */}
          <Link to="/">
            <Img
              fixed={data.file.childImageSharp.fixed}
              style={{zIndex: `1`}}
              alt="Coderbunker Logo" />
          </Link>


          <ul className="flex items-center">
            {/* Language Switcher */}
            <li className={`flex items-center pr-2 md:px-4 ${isOn ? "switched-on" : "switched-off"}`}>
              <button onClick={toggleSwitcher} aria-label="Language Switcher" className="p-2 relative">
                <SiAircanada className="text-2xl md:text-3xl"/>
              </button>
              {languages.map((lng) => (
                <div key={lng} className={`text-lg md:text-xl px-1 py-2 sm:p-2 ${isOn ? "block" : "hidden"}`}>
                  <Link to={originalPath} language={lng}>
                    {lng.toUpperCase()}
                  </Link>
                </div>
              ))}
            </li>

            <li>
              <CallToAction />
            </li>
          </ul>
        </div>
      </SiteBorderStyles>
    </HeaderStyles>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Coderbunker Canada`,
}

const HeaderStyles = styled.header`
  color: var(--darkgrey);
  border-bottom: 1px solid var(--lightgrey);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 999;
  .header-content {
    display: grid;
    grid-template-columns: auto 1fr;

    ul {
      margin-left: auto;
    }
  }
  a:hover, button:hover {
    color: var(--black);
  }
  .switched-on {
    background-color: var(--peach);
    color: black;
    transform: skew(-16deg);
  }
  @media (min-width: 768px) {
    .header-content {
      grid-template-columns: 1fr auto 1fr;
    }
  }
`;
