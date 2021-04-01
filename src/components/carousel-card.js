import * as React from "react";
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import { FiLinkedin, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Img from 'gatsby-image';
import people from '../assets/content/team';



export default function CarouselCard({pic, index, count, activeIndex, setActiveIndex}) {
  // handle carousel navigation
  const handlePrev = () => {
    setActiveIndex(activeIndex - 1)
  }
  const handleNext = () => {
    setActiveIndex(activeIndex + 1)
  }

  // set the person based on the image
  const person = people.filter(p => {
    return p.image === pic.node.base;
  })[0]

  return (
    <CarouselCardStyles className={`${activeIndex === index ? "active" : ""}`}>
      <div className="flex md:flex-row-reverse overflow-hidden bg-peach md:bg-white">
        <Img
          className="w-1/3-vw h-1/3-vw md:w-1/3 md:h-auto"
          imgStyle={{objectPosition: `top center`}}
          fluid={pic.node.childImageSharp.fluid}
          alt={pic.node.base.split('.')[0]} />

        <div className="p-4 md:p-8 w-2/3">
          <div className="flex flex-col md:flex-row justify-between h-full md:h-auto">
            <div>
              <h3 className="sm:text-2xl sm:mb-2">{person.name}</h3>
              <p className="sm:text-xl">
                <Trans>{person.title}</Trans>
              </p>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl flex">
              <a href={person.linkedin} aria-label="social media icon Linkedin" target="_blank" rel="noreferrer"><FiLinkedin className="mr-3"/></a>
              <a href={person.github} aria-label="social media icon Github" target="_blank" rel="noreferrer"><FiGithub className="md:ml-3"/></a>
            </div>
          </div>

          <ul className="py-4 hidden md:block">
            {person.highlights.map(hl => {
              return (
                <li>
                  <Trans>{hl}</Trans>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <ul className="py-4 block md:hidden">
        {person.highlights.map(hl => {
          return (
            <li>
              <Trans>{hl}</Trans>
            </li>
          )
        })}
      </ul>
      {/* Button */}
      <div className="carousel-btns">
        <button onClick={handlePrev} className="text-2xl p-4" disabled={index === 0}>
          <FiChevronLeft />
        </button>
        <button onClick={handleNext} className="text-2xl p-4" disabled={index === count - 1}>
          <FiChevronRight />
        </button>
      </div>
    </CarouselCardStyles>
  )
}

const CarouselCardStyles = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: none;
  overflow: hidden;
  &.active {
    display: block;
  }
  ul {
    list-style-type: "→";
    padding-left: 2rem;
    padding-bottom: 8rem;
    li {
      padding-left: 0.5rem;
    }
  }
  p, svg {
    color: var(--darkgrey);
  }
  a svg:hover {
      color: var(--red);
  }
  .carousel-btns {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
  }
  button {
    background-color: var(--red);
    transform: skew(-16deg);
    svg {
      color: var(--white);
    }
  }
  
  button:disabled {
    background-color: var(--lightred)
  }
`;
