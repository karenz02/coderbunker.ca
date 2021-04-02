import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import Img from 'gatsby-image';

import SiteBorderStyles from '../styles/SiteBorderStyles';
import Footer from "./footer";

import { AiTwotoneMail, AiOutlineMail, AiTwotonePhone } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import { ButtonRed } from "./button";

export default function Contact() {
  const handleFocus = (ev) => {
    const input = ev.currentTarget;
    const group = input.parentElement;
    const label = group.firstChild;
    label.classList.add("activated");
    group.classList.add("focused");
    input.addEventListener('blur', () => {
      if (input.value === "") {
        label.classList.remove("activated");
      }
      group.classList.remove("focused");
    });
  }

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
            <span className="highlight-red">
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
            <a href="https://goo.gl/maps/Jx8ShmSyBMQUtPko8" className="flex-1 flex md:flex-col items-center md:text-center p-4 text-md md:text-xl">
              <FiMapPin className="text-3xl m-2 md:mb-4" />
              <Trans>123 Sherbrooke Street, Quebec City, Quebec, Canada</Trans>
            </a>
            <a href="mailto:info@coderbunker.ca" className="hidden md:flex flex-1 flex-col items-center p-4 text-md md:text-xl">
              <AiTwotoneMail className="text-3xl md:mb-4" />
              info@coderbunker.ca
            </a>
            <div href="#" className="hidden md:flex flex-1 flex-col items-center p-4 text-lg md:text-xl">
              <AiTwotonePhone className="text-3xl md:mb-4" />
              +1 (418) 000-0000
            </div>
          </div>

          {/* Contact Form */}
          <form name="contact" method="POST" data-netlify="true" className="text-lg p-4 sm:p-8">
            <div className="md:flex">
              <div className="flex-1 form-group mb-2 md:mb-4 md:mr-4">
                <label htmlFor="name">
                  <Trans>Name</Trans>
                </label>
                <div className="icon-wrapper">
                  <BsFillPersonFill />
                </div>
                <input type="text" name="name" onFocus={handleFocus}/>
              </div>
              <div className="flex-1 form-group mb-2 md:mb-4">
                <label htmlFor="email">
                  <Trans>Email</Trans>
                </label>
                <div className="icon-wrapper">
                  <AiOutlineMail />
                </div>
                <input type="text" name="email" onFocus={handleFocus}/>
              </div>
            </div>
            <textarea name="message" rows="3" placeholder="Message" className="mb-2 md:mb-4"/>
            <ButtonRed type="submit" text="Send" style={{float: `right`}}/>
              {/* <button type="submit">Send</button> */}
          </form>
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
  form {
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.5);
  }
  .form-group {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid var(--lightgrey);
    label {
      background: var(--white);
      position: absolute;
      left: 3rem;
      color: var(--darkgrey);
      transition: all 0.5s ease;
    }
    &.focused {
      box-shadow: 0 0 10px rgba(255, 0 , 0 , 0.2);
    }
    label.activated {
      transform: translate(-2rem, -1.5rem) scale(0.8);
      color: var(--black);
    }
    .icon-wrapper {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-content: center center;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      &:focus {
        outline: none;
      }
    }
  }
  textarea {
    padding: 1rem;
    border: 1px solid var(--lightgrey);
    width: 100%;

  }
  textarea:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255, 0 , 0 , 0.2);
  }
`;