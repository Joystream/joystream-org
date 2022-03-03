import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import BaseLayout from '../../components/_layouts/Base';

import PolicyWrapper from '../../components/PolicyWrapper';
import ColumnsLayout from '../../components/ColumnsLayout';
import PolicyItem from '../../components/PolicyItem';
import LayoutWrapper from '../../components/LayoutWrapper';
import Link from '../../components/Link';
import Hero from '../../components/Hero';
import SiteMetadata from '../../components/SiteMetadata';

import { privacyPolicyItems, cookiePolicyItems } from '../../data/pages/privacy-policy';

import './style.scss';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('privacyPolicy.siteMetadata.description')}
      />

      <Hero title={t('privacyPolicy.hero.title')}>
        <Trans
          i18nKey="privacyPolicy.hero.text"
          components={[
            <p className="PrivacyPolicyPage__hero-paragraph">
              <strong />
              <br />{' '}
              <Link href="https://github.com/JoyStream" highlighted>
                Joystream
              </Link>
              . These products (collectively "Software") include, but are not limited to, all pages under the{' '}
              <Link href="https://www.joystream.org/" highlighted>
                joystream.org
              </Link>{' '}
              domain ("Website"), the{' '}
              <Link href="https://github.com/Joystream/substrate-node-joystream" highlighted>
                Joyful node
              </Link>{' '}
              ("Full Node"), the{' '}
              <Link href="https://github.com/Joystream/storage-node-joystream" highlighted>
                Colossus Storage Node
              </Link>{' '}
              ("Storage node"), and the Pioneer User Interface, either{' '}
              <Link href="https://github.com/Joystream/apps" highlighted>
                self hosted
              </Link>{' '}
              or{' '}
              <Link href="http://testnet.joystream.org/" highlighted>
                hosted by Us
              </Link>{' '}
              ("App").
            </p>,
          ]}
        />
      </Hero>
      <LayoutWrapper>
        <PolicyWrapper title={t('privacyPolicy.terms.title')} left>
          <ul>
            <li className="PrivacyPolicyPage__list-item">
              <Trans i18nKey="privacyPolicy.terms.blockchain" components={[<strong />]} />
            </li>
            <li className="PrivacyPolicyPage__list-item">
              <Trans i18nKey="privacyPolicy.terms.content" components={[<strong />]} />
            </li>
            <li className="PrivacyPolicyPage__list-item">
              <Trans i18nKey="privacyPolicy.terms.keys" components={[<strong />]} />
            </li>
            <li className="PrivacyPolicyPage__list-item">
              <Trans i18nKey="privacyPolicy.terms.membership" components={[<strong />]} />
            </li>
            <li className="PrivacyPolicyPage__list-item">
              <Trans i18nKey="privacyPolicy.terms.memo" components={[<strong />]} />
            </li>
          </ul>
        </PolicyWrapper>

        <PolicyWrapper
          title={t('privacyPolicy.privacyPolicyItems.title')}
          subtitle={t('privacyPolicy.privacyPolicyItems.subtitle')}
          left
        >
          <ColumnsLayout columnsCount={2} largeSpacing>
            {privacyPolicyItems.map((item, i) => (
              <PolicyItem key={`${item.title}${i}`} title={t(`${item.title}`)}>
                <Trans i18nKey={item?.content?.key ?? item.content} components={item?.content?.components} />
              </PolicyItem>
            ))}
          </ColumnsLayout>
        </PolicyWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <PolicyWrapper
          title={t('privacyPolicy.cookiePolicyItems.title')}
          subtitle={t('privacyPolicy.cookiePolicyItems.subtitle')}
          left
        >
          <ColumnsLayout columnsCount={2} largeSpacing>
            {cookiePolicyItems.map(item => (
              <PolicyItem key={item.title} title={t(`${item.title}`)}>
                <Trans i18nKey={item?.content?.key ?? item.content} components={item?.content?.components} />
              </PolicyItem>
            ))}
          </ColumnsLayout>
        </PolicyWrapper>

        <div className="PrivacyPolicyPage__links">
          <Link href="http://www.allaboutcookies.org/">AllAboutCookies</Link>
          <Link href="http://www.networkadvertising.org/">Network Advertising Initiative</Link>
        </div>
      </LayoutWrapper>
    </BaseLayout>
  );
};

export default PrivacyPolicyPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
