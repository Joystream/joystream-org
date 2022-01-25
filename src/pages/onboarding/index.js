import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../components/_layouts/Onboarding';
import InfoSection from '../../components/onboarding-page/InfoSection';
import VideoSection from '../../components/onboarding-page/VideoSection';
import FAQ from '../../components/onboarding-page/FAQ';

import './style.scss';

const questions = [
  {
    question: 'onboarding.page1.faq.questions.language.question',
    answer: 'onboarding.page1.faq.questions.language.answer',
  },
  {
    question: 'onboarding.page1.faq.questions.polkadot.question',
    answer: 'onboarding.page1.faq.questions.polkadot.answer',
  },
  {
    question: 'onboarding.page1.faq.questions.framework.question',
    answer: 'onboarding.page1.faq.questions.framework.answer',
  },
];

const videoUrl = 'https://new.xjames.xyz/storage/asset/v0/5DGJcMrKSPUCDjPWXjuHTSHUxs29yAV2NUMdkxNJ6yP496PD';

const Onboarding = () => {
  const { t } = useTranslation();

  return (
    <OnboardingLayout t={t}>
      <VideoSection
        t={t}
        title={t('onboarding.page1.title')}
        subtitle={t('onboarding.page1.subtitle')}
        videoUrl={videoUrl}
        index={1}
      ></VideoSection>
      <InfoSection title={t('onboarding.page1.infoSection.title')} text={t('onboarding.page1.infoSection.text')} />
      <FAQ t={t} title={t('onboarding.page1.faq.title')} questions={questions} />
    </OnboardingLayout>
  );
};

export default Onboarding;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
