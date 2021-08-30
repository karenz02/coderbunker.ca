import React, { useEffect, useRef } from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero";
import Service from "../components/service";
import Team from "../components/team";
import Steps from "../components/steps";
import Join from "../components/join";
import Contact from "../components/contact";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function IndexPage() {
  // you can access the elements with itemsRef.current[n]
  const sectionRefs = useRef([]);

  // Compile all the refs
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  // const [step, setStep] = useState(0)
  useEffect(() => {
    // initialize Animation on Scroll
    AOS.init({ offset: 50 });

    // Set up observer
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const refIndex = parseInt(entry.target.dataset.step)
        const top = sectionRefs.current[refIndex].offsetTop
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, { threshold: 0.01 })

    const refs = sectionRefs.current
    // Observer to observe each ref
    refs.forEach(ref => {
      if (ref) {
        observer.observe(ref)
      }
    })

    // Clean up Observer to unobserve each ref
    return () => {
      refs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [sectionRefs])

  const {t} = useTranslation();
  return (
    <Layout>
      <Seo title={t('Home')} />
      <div ref={addToRefs} data-step="0"><Hero /></div>
      <div ref={addToRefs} data-step="1"><Service /></div>
      <div ref={addToRefs} data-step="2"><Team /></div>
      <div ref={addToRefs} data-step="3"><Steps /></div>
      <div ref={addToRefs} data-step="4"><Join /></div>
      <div ref={addToRefs} data-step="5"><Contact /></div>
    </Layout>
  );
};

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: {eq: $language}, ns: {in: ["index", "team.fr"]} }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
