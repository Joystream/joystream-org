import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import SiteMetadata from '../../components/SiteMetadata';
import BaseLayout from '../../components/_layouts/Base';
import Hero from '../../components/token-page/Hero';
import TokenInformation from '../../components/token-page/TokenInformation';
import PendingCashouts from '../../components/token-page/PendingCashouts';
import ArrowLink from '../../components/ArrowLink';

import { sharedData } from '../../data/pages';
import tokenQuestions from '../../data/pages/token';

import useAxios from '../../utils/useAxios';

import './style.scss';

const TokensPage = () => {
  const [statusServerData, loading, error] = useAxios();
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout className="TokensPage" t={t}>
      <SiteMetadata
        lang={language}
        title={t('token.siteMetadata.title')}
        description={t('token.siteMetadata.description')}
      />

      <Hero statusServerData={statusServerData} />

      <TokenInformation
        title={t('token.faq.title')}
        tokenQuestions={tokenQuestions.map(({ title, text }) => ({
          title: t(title),
          text: text?.isModular ? <Trans i18nKey={text?.key} components={text?.components} /> : t(text),
        }))}
      />

      <PendingCashouts cashouts={statusServerData?.exchanges} />

      <div className="TokensPage__cta-wrapper">
        <div className="TokensPage__cta">
          <h2 className="TokensPage__cta__title">{t('token.cta.title')}</h2>
          <ArrowLink className="TokensPage__cta__link" text={t('button.openDiscord')} href={sharedData.social.discordLink} dark />
        </div>
      </div>
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
