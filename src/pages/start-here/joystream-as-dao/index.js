import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import PioneerInfo from '../../../components/onboarding-page/PioneerInfo';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import FAQ from '../../../components/onboarding-page/FAQ';
import useAtlasData from '../../../utils/pages/onboarding/useAtlasData';
import usePioneerData from '../../../utils/pages/onboarding/usePioneerData';
import Statistics from '../../../components/onboarding-page/Statistics';
import Structure from '../../../components/onboarding-page/Structure';
import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);
  const [shouldShowGetStarted, setShouldShowGetStarted] = useState(false);
  const [shouldReloadRole, setShouldReloadRole] = useState(false);
  const lessonIndex = 2;
  const { videos, channels } = useAtlasData();
  const {
    proposals,
    posts,
    storageCount,
    distributorsCount,
    curatorsCount,
    operationsAlphaCount,
    operationsBetaCount,
    operationsGammaCount,
    curatorsOpenings,
    storageOpenings,
    distributorsOpenings,
    operationsAlphaOpenings,
    operationsBetaOpenings,
    operationsGammaOpenings,
  } = usePioneerData();

  const [channelsCount, setChannelsCount] = useState({ isLoading: true, count: 0 });
  const [videosCount, setVideosCount] = useState({ isLoading: true, count: 0 });
  const [postsData, setPostsData] = useState({ isLoading: true, count: 0 });
  const [proposalsData, setProposalsData] = useState({ isLoading: true, count: 0 });
  const [workersData, setWorkersData] = useState({ isLoading: true, count: 0 });
  const [openingsData, setOpeningsData] = useState({ isLoading: true, count: 0 });

  useEffect(() => {
    if (channels) {
      setChannelsCount(channels);
    }
  }, [channels]);

  useEffect(() => {
    if (videos) {
      setVideosCount(videos);
    }
  }, [videos]);

  useEffect(() => {
    if (posts) {
      setPostsData(posts);
    }
  }, [posts]);

  useEffect(() => {
    if (proposals) {
      setProposalsData(proposals);
    }
  }, [proposals]);

  useEffect(() => {
    if (
      storageCount &&
      distributorsCount &&
      curatorsCount &&
      operationsAlphaCount &&
      operationsBetaCount &&
      operationsGammaCount
    ) {
      setWorkersData({
        count:
          storageCount.count +
          distributorsCount.count +
          curatorsCount.count +
          operationsAlphaCount.count +
          operationsBetaCount.count +
          operationsGammaCount.count,
        isLoading:
          storageCount.isLoading ||
          distributorsCount.isLoading ||
          curatorsCount.isLoading ||
          operationsAlphaCount.isLoading ||
          operationsBetaCount.isLoading ||
          operationsGammaCount.isLoading,
      });
    }
  }, [storageCount, distributorsCount, curatorsCount, operationsAlphaCount, operationsBetaCount, operationsGammaCount]);

  useEffect(() => {
    if (
      curatorsOpenings &&
      storageOpenings &&
      distributorsOpenings &&
      operationsAlphaOpenings &&
      operationsBetaOpenings &&
      operationsGammaOpenings
    ) {
      setOpeningsData(prev => {
        return {
          isLoading:
            curatorsOpenings.isLoading ||
            storageOpenings.isLoading ||
            distributorsOpenings.isLoading ||
            operationsAlphaOpenings.isLoading ||
            operationsBetaOpenings.isLoading ||
            operationsGammaOpenings.isLoading,
          count:
            curatorsOpenings.count +
            storageOpenings.count +
            distributorsOpenings.count +
            operationsAlphaOpenings.count +
            operationsBetaOpenings.count +
            operationsGammaOpenings.count,
        };
      });
    }
  }, [
    curatorsOpenings,
    storageOpenings,
    distributorsOpenings,
    operationsAlphaOpenings,
    operationsBetaOpenings,
    operationsGammaOpenings,
  ]);

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
      data: postsData,
    },
    {
      title: 'onboarding.page2.statistics.proposals',
      data: proposalsData,
    },
    {
      title: 'onboarding.page2.statistics.videos',
      data: videosCount,
    },
    {
      title: 'onboarding.page2.statistics.channels',
      data: channelsCount,
    },
    {
      title: 'onboarding.page2.statistics.currentWorkers',
      data: workersData,
    },
    {
      title: 'onboarding.page2.statistics.jobOpenings',
      data: openingsData,
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
