import React from 'react';
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

import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  const nextVideoUrl = '/start-here/what-are-working-groups';

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

  // TODO Fetch from API
  const statisticsData = [
    {
      title: 'onboarding.page4.statistics.councilMembers',
      count: 21,
    },
    {
      title: 'onboarding.page4.statistics.nextElection',
      count: 12,
    },
    {
      title: 'onboarding.page4.statistics.councilPeriod',
      count: 14,
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

  return (
    <OnboardingLayout t={t} nextVideoText={t('onboarding.page4.footer.subtitle')} nextVideoUrl={nextVideoUrl}>
      <div className="Onboarding__wrapper">
        <VideoSection
          t={t}
          title={t('onboarding.page4.title')}
          subtitle={t('onboarding.page4.subtitle')}
          nextVideoUrl={nextVideoUrl}
          index={4}
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
