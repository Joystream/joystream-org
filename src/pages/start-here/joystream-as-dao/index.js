import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import PioneerInfo from '../../../components/onboarding-page/PioneerInfo';
import BuilderSection from '../../../components/onboarding-page/BuilderSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import TokenInformation from '../../../components/token-page/TokenInformation';

import './style.scss';
import Statistics from '../../../components/onboarding-page/Statistics';
import Structure from '../../../components/onboarding-page/Structure';

const Onboarding = () => {
  const { t } = useTranslation();
  const nextVideoUrl = '/start-here/what-is-fm-program';

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

  // TODO Fetch from API
  const statisticsData = [
    {
      title: 'onboarding.page2.statistics.forumPosts',
      count: 2154,
    },
    {
      title: 'onboarding.page2.statistics.proposals',
      count: 943,
    },
    {
      title: 'onboarding.page2.statistics.videos',
      count: 3561,
    },
    {
      title: 'onboarding.page2.statistics.channels',
      count: 485,
    },
    {
      title: 'onboarding.page2.statistics.currentWorkers',
      count: 193,
    },
    {
      title: 'onboarding.page2.statistics.jobOpenings',
      count: 320,
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
      <Statistics t={t} data={statisticsData} />
      <InfoSection title={t('onboarding.page2.infoSection2.title')} text={t('onboarding.page2.infoSection2.text')} />
      <Structure t={t} />
      <PioneerInfo t={t} />
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
