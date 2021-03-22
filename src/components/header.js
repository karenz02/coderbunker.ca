import * as React from "react"
import PropTypes from "prop-types"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';

const Header = ({siteTitle}) => {
  const {languages, originalPath} = useI18next();
  return (
    <header
      style={{
        background: `black`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: `center`
        }}
      >
        <h1 style={{margin: 0}}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}>
            {siteTitle}
          </Link>
        </h1>

        <ul style={{margin: 0}}>
          {languages.map((lng) => (
            <li key={lng}>
              <Link
                to={originalPath}
                language={lng}
                style={{
                  color: `white`,
                  textDecoration: `none`
                }}
              >
                {lng}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
