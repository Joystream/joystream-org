import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import SiteMetadata from '../../components/SiteMetadata';
import BaseLayout from '../../components/_layouts/Base';
import Hero from '../../components/token-page/Hero';
import Wallets from '../../components/token-page/Wallets';
import Faucets from '../../components/token-page/Faucets';
import Exchanges from '../../components/token-page/Exchanges';
import Earn from '../../components/token-page/Earn';
import Utility from '../../components/token-page/Utility';
import Supply from '../../components/token-page/Supply';
import TokenInformation from '../../components/token-page/TokenInformation';

import ArrowLink from '../../components/ArrowLink';

import { sharedData } from '../../data/pages';
import tokenQuestions from '../../data/pages/token';

import './style.scss';

const TokensPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout className="TokensPage" t={t}>
      <SiteMetadata
        lang={language}
        title={t('token.siteMetadata.title')}
        description={t('token.siteMetadata.description')}
      />

      <Hero t={t} />

      <Wallets t={t} />

      <Faucets t={t} />

      <Exchanges  t={t}/>

      <Earn t={t} />

      <Utility t={t} />

      <Supply t={t} />

      <TokenInformation
        tokenQuestions={tokenQuestions.map(({ title, text }) => ({
          title: t(title),
          text: text?.isModular ? <Trans i18nKey={text?.key} components={text?.components} /> : t(text),
        }))}
        t={t}
      />
    </BaseLayout>
  );
};

export { TokensPage };
export default TokensPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
