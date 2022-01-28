import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import BuilderSection from '../../../components/onboarding-page/BuilderSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import TokenInformation from '../../../components/token-page/TokenInformation';
import WorkingGroups from '../../../components/onboarding-page/WorkingGroups';

import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  const nextVideoUrl = '/start-here/what-is-joystream';

  const questions = [
    {
      title: t('onboarding.page5.faq.questions.question1.question'),
      text: t('onboarding.page5.faq.questions.question1.answer'),
    },
  ];

  // TODO fetch salsry from api?
  const workingGroupsData = [
    {
      payout: 500,
      title: t('onboarding.page5.workingGroups.storageProviders.title'),
      text: t('onboarding.page5.workingGroups.storageProviders.text'),
    },
    {
      payout: 500,
      title: t('onboarding.page5.workingGroups.operationsGroup.title'),
      text: t('onboarding.page5.workingGroups.operationsGroup.text'),
    },
  ];

  return (
    <OnboardingLayout t={t} nextVideoText={t('onboarding.page5.footer.subtitle')} nextVideoUrl={nextVideoUrl}>
      <div className="Onboarding__wrapper">
        <VideoSection
          t={t}
          title={t('onboarding.page5.title')}
          subtitle={t('onboarding.page5.subtitle')}
          nextVideoUrl={nextVideoUrl}
          index={5}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page5.infoSection.title')} text={t('onboarding.page5.infoSection.text')} />
      <WorkingGroups t={t} data={workingGroupsData} />
      <TokenInformation title={t('onboarding.page1.faq.title')} tokenQuestions={questions} />
      <BuilderSection t={t} />
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
