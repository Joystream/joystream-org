import { graphql } from 'gatsby';

export const query = graphql`
  fragment LanguageQueryFields on LocaleConnection {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
`;