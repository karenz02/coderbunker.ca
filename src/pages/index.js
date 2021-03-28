import * as React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";

export default function IndexPage() {
  const {t} = useTranslation();
  return (
    <Layout>
      <SEO title={t('Home')} />
      <Hero />
    </Layout>
  );
};

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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
