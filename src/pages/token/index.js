import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import useAxios from '../../utils/useAxios';

import SiteMetadata from '../../components/SiteMetadata';
import BaseLayout from '../../components/_layouts/Base';
import Hero from '../../components/token-page/Hero';
import Wallets from '../../components/token-page/Wallets';
import Exchanges from '../../components/token-page/Exchanges';
import Earn from '../../components/token-page/Earn';
import Utility from '../../components/token-page/Utility';
import Supply from '../../components/token-page/Supply';
import InstantSwap from '../../components/token-page/InstantSwap';

import './style.scss';

const TokensPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const [data, loading, error] = useAxios('https://status.joystream.org/landing-page-data');

  const updatedPriceData = {
    price: data?.price ?? 0,
    error: error,
  };

  return (
    <BaseLayout className="TokensPage" t={t}>
      <SiteMetadata
        lang={language}
        title={t('token.siteMetadata.title')}
        description={t('token.siteMetadata.description')}
      />

      <Hero t={t} tokenomicsData={data} priceData={updatedPriceData} />

      <Wallets t={t} />

      <Exchanges t={t} />

      <InstantSwap t={t} />

      <Earn t={t} />

      <Utility t={t} />

      <Supply t={t} />
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
