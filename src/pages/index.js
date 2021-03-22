import * as React from "react"
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <SEO title={t('Page two')} />
      <h1>
        <Trans>Hi people</Trans>
      </h1>
      <p>
        <Trans>Welcome to your new Gatsby site.</Trans>
      </p>
      <p>
        <Trans>Now go build something great.</Trans>
      </p>
      <Link to="/page-2/">
        <Trans>Go to page 2</Trans>
      </Link>
    </Layout>
  );
};

export default IndexPage;

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
