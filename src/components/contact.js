import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import Img from 'gatsby-image';

import SiteBorderStyles from '../styles/SiteBorderStyles';
import Footer from "./footer";

import { AiTwotoneMail, AiTwotonePhone } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi'
import ContactForm from "./contact-form";

export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ContactStyles>
      <SiteBorderStyles>
        {/* section-header */}
        <div className="text-left md:text-center py-4 md:py-12">
          <h2 className="text-3xl lg:text-4xl">
            <span className="highlight-red" style={{ whiteSpace: `nowrap` }}>
              <Trans>Connect</Trans>
            </span>
            <Trans> With Us</Trans>
          </h2>
          <p className="hidden md:block text-xl lg:text-2xl my-4">
            <Trans>Have a Project? Interested in Joining Force?</Trans>
          </p>
        </div>
        <div style={{ maxWidth: `900px`, margin: `0 auto` }}>
          {/* Contact Info */}
          <div className="flex md:pb-12">
            <div className="flex-1 flex md:flex-col items-center md:text-center p-2 md:p-4 text-md md:text-xl">
              <FiMapPin className="text-3xl m-2 md:mb-4" />
              <Trans>2-227 St-Paul, Quebec, QC, Canada G1K 3W3</Trans>
            </div>
            <a href="mailto:info@coderbunker.ca" className="hidden md:flex flex-1 flex-col items-center p-4 text-md md:text-xl">
              <AiTwotoneMail className="text-3xl md:mb-4" />
              ca@coderbunker.com
            </a>
            <div className="hidden md:flex flex-1 flex-col items-center p-4 text-lg md:text-xl">
              <AiTwotonePhone className="text-3xl md:mb-4" />
              +1 438-530-7111
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </SiteBorderStyles>
      <Footer />
      <div className="bg-img-wrapper">
        <Img
          style={{ width: `50vw`, minWidth: `300px` }}
          fluid={data.fileName.childImageSharp.fluid}
          alt="Coderbunker Coders" />
      </div>
    </ContactStyles>
  )
}

const ContactStyles = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p, svg {
    color: var(--darkgrey);
  }
  .bg-img-wrapper {
    position: absolute;
    left: 0;
    bottom: 5vh;
    z-index: -1;
  }
`;