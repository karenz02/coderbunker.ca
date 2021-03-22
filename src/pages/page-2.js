import * as React from "react"
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <SEO title={t('Page two')}/>
      <h1>
        <Trans>
          Hi from the second page
        </Trans>
      </h1>
      <p>
        <Trans>
          Welcome to page 2
        </Trans>
      </p>
      <Link to="/">
        <Trans>
          Go back to the homepage
        </Trans>
      </Link>
    </Layout>
  )
}

export default SecondPage

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