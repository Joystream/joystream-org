import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import TasksInfo from '../../../components/onboarding-page/TasksInfo';
import Statistics from '../../../components/onboarding-page/Statistics';
import BuilderSection from '../../../components/onboarding-page/BuilderSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import CouncilResponsibilities from '../../../components/onboarding-page/CouncilResponsibilities';
import { ReactComponent as Knowledge } from '../../../assets/svg/knowledge.svg';
import { ReactComponent as Diplomacy } from '../../../assets/svg/diplomacy.svg';
import { ReactComponent as Activity } from '../../../assets/svg/activity.svg';
import { ReactComponent as Perspectives } from '../../../assets/svg/perspectives.svg';
import { ReactComponent as ProposalsVoting } from '../../../assets/svg/proposalVoting.svg';
import { ReactComponent as ManageWG } from '../../../assets/svg/manageWG.svg';
import TokenInformation from '../../../components/token-page/TokenInformation';
import useCouncilData from '../../../utils/pages/onboarding/useCouncilData';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';
import './style.scss';

const Onboarding = () => {
  const { councilSize, councilEndDays, councilPeriodDays } = useCouncilData();

  const [councilCount, setCouncilCount] = useState({ isLoading: true, count: 0 });
  const [councilDaysLeft, setCouncilDaysLeft] = useState({ isLoading: true, count: 0 });
  const [councilDaysCount, setCouncilDaysCount] = useState({ isLoading: true, count: 0 });
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);
  const [shouldReloadRole, setShouldReloadRole] = useState(false);
  const [shouldShowGetStarted, setShouldShowGetStarted] = useState(false);
  const lessonIndex = 4;
  const { getNextVideoUrl } = useLessonList();

  useEffect(() => {
    if (councilSize) {
      setCouncilCount(councilSize);
    }
  }, [councilSize]);

  useEffect(() => {
    if (councilEndDays) {
      setCouncilDaysLeft(councilEndDays);
    }
  }, [councilEndDays]);

  useEffect(() => {
    if (councilPeriodDays) {
      setCouncilDaysCount(councilPeriodDays);
    }
  }, [councilPeriodDays]);

  const { t } = useTranslation();

  const questions = [
    {
      title: t('onboarding.page4.faq.questions.question1.question'),
      text: t('onboarding.page4.faq.questions.question1.answer'),
    },
    {
      title: t('onboarding.page4.faq.questions.question2.question'),
      text: t('onboarding.page4.faq.questions.question2.answer'),
    },
    {
      title: t('onboarding.page4.faq.questions.question3.question'),
      text: t('onboarding.page4.faq.questions.question3.answer'),
    },
  ];

  const statisticsData = [
    {
      title: 'onboarding.page4.statistics.councilMembers',
      data: councilCount,
    },
    {
      title: 'onboarding.page4.statistics.nextElection',
      data: councilDaysLeft,
    },
    {
      title: 'onboarding.page4.statistics.councilPeriod',
      data: councilDaysCount,
    },
  ];

  const tasksData = [
    {
      title: 'onboarding.page4.councilCharacteristics.task1.title',
      text: 'onboarding.page4.councilCharacteristics.task1.text',
      image: <Knowledge className="TasksInfo__item__image" />,
    },
    {
      title: 'onboarding.page4.councilCharacteristics.task2.title',
      text: 'onboarding.page4.councilCharacteristics.task2.text',
      image: <Diplomacy className="TasksInfo__item__image" />,
    },
    {
      title: 'onboarding.page4.councilCharacteristics.task3.title',
      text: 'onboarding.page4.councilCharacteristics.task3.text',
      image: <Activity className="TasksInfo__item__image" />,
    },
    {
      title: 'onboarding.page4.councilCharacteristics.task4.title',
      text: 'onboarding.page4.councilCharacteristics.task4.text',
      image: <Perspectives className="TasksInfo__item__image" />,
    },
  ];

  const councilResponsibilitiesData = [
    {
      title: 'onboarding.page4.councilResponsibilities.proposalVoting',
      image: <ProposalsVoting className="CouncilResponsibilities__item__image" />,
    },
    {
      title: 'onboarding.page4.councilResponsibilities.manageWG',
      image: <ManageWG className="CouncilResponsibilities__item__image" />,
    },
  ];

  const handleGetStarted = () => setShouldShowGetStarted(true);

  return (
    <OnboardingLayout
      t={t}
      nextVideoText={t('onboarding.page4.footer.subtitle')}
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
          title={t('onboarding.page4.title')}
          subtitle={t('onboarding.page4.subtitle')}
          nextVideoUrl={getNextVideoUrl(lessonIndex)}
          index={lessonIndex}
          shouldReloadRole={shouldReloadRole}
          showLessonList={() => setShouldShowLessonList(true)}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page4.infoSection.title')} text={t('onboarding.page4.infoSection.text')} />
      <Statistics t={t} data={statisticsData} />
      <CouncilResponsibilities
        t={t}
        title={'onboarding.page4.councilResponsibilities.title'}
        data={councilResponsibilitiesData}
      />
      <InfoSection title={t('onboarding.page4.infoSection2.title')} text={t('onboarding.page4.infoSection2.text')} />
      <TasksInfo t={t} data={tasksData} />
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
