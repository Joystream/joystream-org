import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import TokenInformation from '../../../components/token-page/TokenInformation';

import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  const nextVideoUrl = '/start-here/what-is-joystream';

  const questions = [
    {
      title: t('onboarding.page2.faq.questions.council.question'),
      text: t('onboarding.page2.faq.questions.council.answer'),
    },
    {
      title: t('onboarding.page2.faq.questions.workingGroups.question'),
      text: t('onboarding.page2.faq.questions.workingGroups.answer'),
    },
  ];

  return (
    <OnboardingLayout t={t} nextVideoText={t('onboarding.page2.footer.subtitle')} nextVideoUrl={nextVideoUrl}>
      <div className="Onboarding__wrapper">
        <VideoSection
          t={t}
          title={t('onboarding.page2.title')}
          subtitle={t('onboarding.page2.subtitle')}
          nextVideoUrl={nextVideoUrl}
          index={2}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page2.infoSection.title')} text={t('onboarding.page2.infoSection.text')} />
      <TokenInformation title={t('onboarding.page1.faq.title')} tokenQuestions={questions} />
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
