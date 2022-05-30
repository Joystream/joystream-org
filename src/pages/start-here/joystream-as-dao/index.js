import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import PioneerInfo from '../../../components/onboarding-page/PioneerInfo';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import FAQ from '../../../components/onboarding-page/FAQ';
import useQueryNodeData from '../../../utils/pages/onboarding/useQueryNodeData';
import Statistics from '../../../components/onboarding-page/Statistics';
import Structure from '../../../components/onboarding-page/Structure';
import SiteMetadata from '../../../components/SiteMetadata';
import OGImage from '../../../assets/images/Joystream_Thumbnail_2.jpeg';
import useLivesessionIdentifyOnboardingRole from '../../../utils/pages/onboarding/useLivesessionIdentifyOnboardingRole';
import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  useLivesessionIdentifyOnboardingRole();
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);
  const [shouldShowGetStarted, setShouldShowGetStarted] = useState(false);
  const [shouldReloadRole, setShouldReloadRole] = useState(false);
  const lessonIndex = 2;
  const { data, isLoading } = useQueryNodeData();

  const { language } = useI18next();

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

  const statisticsData = [
    {
      title: 'onboarding.page2.statistics.forumPosts',
      data: { count: data.channels, isLoading },
    },
    {
      title: 'onboarding.page2.statistics.proposals',
      data: { count: data.proposals, isLoading },
    },
    {
      title: 'onboarding.page2.statistics.videos',
      data: { count: data.videos, isLoading },
    },
    {
      title: 'onboarding.page2.statistics.channels',
      data: { count: data.channels, isLoading },
    },
    {
      title: 'onboarding.page2.statistics.currentWorkers',
      data: { count: data.currentWorkers, isLoading },
    },
    {
      title: 'onboarding.page2.statistics.jobOpenings',
      data: { count: data.jobOpenings, isLoading },
    },
  ];

  return (
    <OnboardingLayout
      t={t}
      showLessonList={shouldShowLessonList}
      lessonIndex={lessonIndex}
      shouldShowGetStarted={shouldShowGetStarted}
      onGetStartedClose={() => setShouldShowGetStarted(false)}
      onLessonListClose={() => setShouldShowLessonList(false)}
      onRoleUpdated={() => setShouldReloadRole(true)}
    >
      <SiteMetadata
        lang={language}
        title={t('onboarding.page2.siteTitle')}
        description={t('onboarding.page2.subtitle')}
        image={OGImage}
      />
      <div className="Onboarding__wrapper">
        <VideoSection
          t={t}
          title={t('onboarding.page2.title')}
          subtitle={t('onboarding.page2.subtitle')}
          index={lessonIndex}
          shouldReloadRole={shouldReloadRole}
          onShowGetStarted={() => setShouldShowGetStarted(true)}
          onRoleReloaded={() => setShouldReloadRole(false)}
          showLessonList={() => setShouldShowLessonList(true)}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page2.infoSection.title')} text={t('onboarding.page2.infoSection.text')} />
      <Statistics t={t} data={statisticsData} />
      <InfoSection title={t('onboarding.page2.infoSection2.title')} text={t('onboarding.page2.infoSection2.text')} />
      <Structure t={t} />
      <PioneerInfo t={t} />
      <FAQ title={t('onboarding.page1.faq.title')} tokenQuestions={questions} />
    </OnboardingLayout>
  );
};

export default Onboarding;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
