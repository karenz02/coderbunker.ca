import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
// import Img from 'gatsby-image';

import SiteBorderStyles from '../styles/SiteBorderStyles';
import Footer from "./footer";

const ContactStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "montreal.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ContactStyles>
      <SiteBorderStyles className="flex flex-col">
        {/* section-header */}
        <div className="text-left md:text-center py-4 md:py-16 lg:py-24">
          <h2 className="text-3xl lg:text-4xl">
            <span className="highlight-red">
              <Trans>Contact</Trans>
            </span>
            <Trans> Us</Trans>
          </h2>
        </div>
        {/* TODO: Wire Contact Font */}
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Interested in? <select name="role[]" multiple>
              <option value="Retain Us">Retain Us</option>
              <option value="Join Us">Join Us</option>
            </select></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </SiteBorderStyles>
      <Footer />
    </ContactStyles>
  )
}
