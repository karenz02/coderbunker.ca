import React, { useEffect } from "react"
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
  useEffect(() => {
    // initialize Animation on Scroll
    AOS.init();
  });

  const {t} = useTranslation();
  return (
    <Layout>
      <Seo title={t('Home')} />
      <Hero />
      <Service />
      <Team />
      <Steps />
      <Join />
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["index", "team"]}, language: {eq: $language}}) {
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
