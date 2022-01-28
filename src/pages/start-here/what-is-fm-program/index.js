import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import ReferallsInfo from '../../../components/onboarding-page/ReferallsInfo';
import TasksInfo from '../../../components/onboarding-page/TasksInfo';
import BuilderSection from '../../../components/onboarding-page/BuilderSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import BecomeFM from '../../../components/onboarding-page/BecomeFM';
import TokenInformation from '../../../components/token-page/TokenInformation';

import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  const nextVideoUrl = '/start-here/what-is-joystream';

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

  return (
    <OnboardingLayout t={t} nextVideoText={t('onboarding.page3.footer.subtitle')} nextVideoUrl={nextVideoUrl}>
      <div className="Onboarding__wrapper">
        <VideoSection
          t={t}
          title={t('onboarding.page3.title')}
          subtitle={t('onboarding.page3.subtitle')}
          nextVideoUrl={nextVideoUrl}
          index={3}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page3.infoSection.title')} text={t('onboarding.page3.infoSection.text')} />
      <TasksInfo t={t} />
      <BecomeFM t={t} />
      <InfoSection title={t('onboarding.page3.infoSection2.title')} text={t('onboarding.page3.infoSection2.text')} />
      <ReferallsInfo t={t} />
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
