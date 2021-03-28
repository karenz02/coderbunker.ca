import * as React from "react"
import PropTypes from "prop-types"
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import SiteBorderStyles from '../styles/SiteBorderStyles';

import { FiLinkedin, FiGithub } from 'react-icons/fi';
import ButtonRed from "./button";

export default function Header() {
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
    <header
      style={{
        borderBottom: `1px solid var(--lightgrey)`,
        padding: `1rem 0`,
        position: 'fixed',
        width: `100%`,
        background: `rgba(255, 255, 255, 0.5)`,
        zIndex: 999
      }}
    >
      <SiteBorderStyles>
        <div className="flex justify-between items-center">
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
              alt="Coderbunker Logo" />
          </Link>

          <ul className="flex items-center">
            {/* language switcher */}
            {languages.map((lng) => (
              <li key={lng} className="text-xl mr-5">
                <Link
                  to={originalPath}
                  language={lng}
                >
                  {lng.toUpperCase()}
                </Link>
              </li>
            ))}
            <li>
              <ButtonRed href="/page-2/" />
            </li>
          </ul>
        </div>
      </SiteBorderStyles>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Coderbunker Canada`,
}
