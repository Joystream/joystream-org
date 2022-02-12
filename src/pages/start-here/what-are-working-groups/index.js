import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import BuilderSection from '../../../components/onboarding-page/BuilderSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import TokenInformation from '../../../components/token-page/TokenInformation';
import WorkingGroups from '../../../components/onboarding-page/WorkingGroups';
import useWorkingGroups from '../../../utils/pages/onboarding/useWorkingGroups';
// import Airtable from 'airtable';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';
import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);
  const [shouldReloadRole, setShouldReloadRole] = useState(false);
  const [shouldShowGetStarted, setShouldShowGetStarted] = useState(false);
  const lessonIndex = 5;
  const { getNextVideoUrl } = useLessonList();
  const questions = [
    {
      title: t('onboarding.page5.faq.questions.question1.question'),
      text: t('onboarding.page5.faq.questions.question1.answer'),
    },
  ];

  // TODO Use airtable
  // Airtable.configure({
  //   endpointUrl: 'https://api.airtable.com',
  //   apiKey: 'API_KEY',
  // });
  // const base = Airtable.base('appNF9hNyOvfP5lvG');

  const [storageWorkersData, setStorageWorkersData] = useState({ isLoading: true, workers: [] });
  const [curatorsWorkersData, setCuratorsWorkersData] = useState({ isLoading: true, workers: [] });
  const [distributorsWorkersData, setDistributorsWorkersData] = useState({ isLoading: true, workers: [] });
  const [operationsWorkersData, setOperationsWorkersData] = useState({ isLoading: true, workers: [] });

  const {
    storageWorkers,
    curatorsWorkers,
    distributionWorkers,
    operationsAlphaWorkers,
    operationsBetaWorkers,
    operationsGammaWorkers,
  } = useWorkingGroups();

  useEffect(() => {
    if (storageWorkers) {
      setStorageWorkersData({
        isLoading: storageWorkers.isLoading,
        workers: storageWorkers.workers,
      });
    }
  }, [storageWorkers]);

  useEffect(() => {
    if (curatorsWorkers) {
      setCuratorsWorkersData({
        isLoading: curatorsWorkers.isLoading,
        workers: curatorsWorkers.workers,
      });
    }
  }, [curatorsWorkers]);

  useEffect(() => {
    if (distributionWorkers) {
      setDistributorsWorkersData({
        isLoading: distributionWorkers.isLoading,
        workers: distributionWorkers.workers,
      });
    }
  }, [distributionWorkers]);

  useEffect(() => {
    if (operationsAlphaWorkers && operationsBetaWorkers && operationsGammaWorkers) {
      setOperationsWorkersData({
        isLoading:
          operationsAlphaWorkers.isLoading && operationsBetaWorkers.isLoading && operationsGammaWorkers.isLoading,
        workers: [
          ...operationsAlphaWorkers.workers,
          ...operationsBetaWorkers.workers,
          ...operationsGammaWorkers.workers,
        ],
      });
    }
  }, [operationsAlphaWorkers, operationsBetaWorkers, operationsGammaWorkers]);

  // TODO fetch salary from api?
  const workingGroupsData = [
    {
      payout: 500,
      title: t('onboarding.page5.workingGroups.storageProviders.title'),
      text: t('onboarding.page5.workingGroups.storageProviders.text'),
      data: storageWorkersData,
    },
    {
      payout: 500,
      title: t('onboarding.page5.workingGroups.operationsGroup.title'),
      text: t('onboarding.page5.workingGroups.operationsGroup.text'),
      data: operationsWorkersData,
    },
    {
      payout: 500,
      title: t('onboarding.page5.workingGroups.curators.title'),
      text: t('onboarding.page5.workingGroups.curators.text'),
      data: curatorsWorkersData,
    },
    {
      payout: 500,
      title: t('onboarding.page5.workingGroups.distributors.title'),
      text: t('onboarding.page5.workingGroups.distributors.text'),
      data: distributorsWorkersData,
    },
  ];

  const handleGetStarted = () => setShouldShowGetStarted(true);

  return (
    <OnboardingLayout
      t={t}
      nextVideoText={t('onboarding.page5.footer.subtitle')}
      nextVideoUrl={getNextVideoUrl(lessonIndex)}
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
          title={t('onboarding.page5.title')}
          subtitle={t('onboarding.page5.subtitle')}
          nextVideoUrl={getNextVideoUrl(lessonIndex)}
          index={lessonIndex}
          onShowGetStarted={handleGetStarted}
          showLessonList={() => setShouldShowLessonList(true)}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page5.infoSection.title')} text={t('onboarding.page5.infoSection.text')} />
      <WorkingGroups t={t} data={workingGroupsData} />
      <TokenInformation title={t('onboarding.page1.faq.title')} tokenQuestions={questions} />
      <BuilderSection
        shouldReloadRole={shouldReloadRole}
        t={t}
        onShowGetStarted={handleGetStarted}
        onRoleReloaded={() => setShouldReloadRole(false)}
      />
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
