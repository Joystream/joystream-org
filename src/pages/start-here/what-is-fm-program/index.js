import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import ReferallsInfo from '../../../components/onboarding-page/ReferallsInfo';
import TasksInfo from '../../../components/onboarding-page/TasksInfo';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import BecomeFM from '../../../components/onboarding-page/BecomeFM';
import FMInterviews from '../../../components/onboarding-page/FMInterviews';
import FAQ from '../../../components/onboarding-page/FAQ';
import { ReactComponent as Council } from '../../../assets/svg/council.svg';
import { ReactComponent as WorkingGroup } from '../../../assets/svg/working-group.svg';
import { ReactComponent as Bounty } from '../../../assets/svg/bounty.svg';
import { ReactComponent as MakeBounty } from '../../../assets/svg/create-bounty.svg';
import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);
  const [shouldReloadRole, setShouldReloadRole] = useState(false);
  const [shouldShowGetStarted, setShouldShowGetStarted] = useState(false);
  const lessonIndex = 3;

  const questions = [
    {
      title: t('onboarding.page3.faq.questions.question1.question'),
      text: t('onboarding.page3.faq.questions.question1.answer'),
    },
    {
      title: t('onboarding.page3.faq.questions.question2.question'),
      text: t('onboarding.page3.faq.questions.question2.answer'),
    },
    {
      title: t('onboarding.page3.faq.questions.question3.question'),
      text: t('onboarding.page3.faq.questions.question3.answer'),
    },
  ];

  const tasksData = [
    {
      title: 'onboarding.page3.tasksInfo.task1.title',
      text: 'onboarding.page3.tasksInfo.task1.text',
      image: <Council className="TasksInfo__item__image" />,
    },
    {
      title: 'onboarding.page3.tasksInfo.task2.title',
      text: 'onboarding.page3.tasksInfo.task2.text',
      image: <WorkingGroup className="TasksInfo__item__image" />,
    },
    {
      title: 'onboarding.page3.tasksInfo.task3.title',
      text: 'onboarding.page3.tasksInfo.task3.text',
      image: <Bounty className="TasksInfo__item__image" />,
    },
    {
      title: 'onboarding.page3.tasksInfo.task4.title',
      text: 'onboarding.page3.tasksInfo.task4.text',
      image: <MakeBounty className="TasksInfo__item__image" />,
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
      onIsLastPage={() => {}}
    >
      <div className="Onboarding__wrapper">
        <VideoSection
          t={t}
          title={t('onboarding.page3.title')}
          subtitle={t('onboarding.page3.subtitle')}
          index={lessonIndex}
          onShowGetStarted={() => setShouldShowGetStarted(true)}
          shouldReloadRole={shouldReloadRole}
          onRoleReloaded={() => setShouldReloadRole(false)}
          showLessonList={() => setShouldShowLessonList(true)}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page3.infoSection.title')} text={t('onboarding.page3.infoSection.text')} />
      <TasksInfo t={t} title={'onboarding.page3.tasksInfo.title'} data={tasksData} />
      <BecomeFM t={t} />
      <InfoSection title={t('onboarding.page3.infoSection2.title')} text={t('onboarding.page3.infoSection2.text')} />
      <ReferallsInfo t={t} />
      <FMInterviews t={t} />
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
