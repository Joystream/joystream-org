import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import BuilderSection from '../../../components/onboarding-page/BuilderSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import FAQ from '../../../components/onboarding-page/FAQ';
import WorkingGroups from '../../../components/onboarding-page/WorkingGroups';
import './style.scss';

const Onboarding = () => {
  const { t } = useTranslation();
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);
  const [shouldReloadRole, setShouldReloadRole] = useState(false);
  const [shouldShowGetStarted, setShouldShowGetStarted] = useState(false);
  const lessonIndex = 5;
  const questions = [
    {
      title: t('onboarding.page5.faq.questions.question1.question'),
      text: t('onboarding.page5.faq.questions.question1.answer'),
    },
  ];
  const handleGetStarted = () => setShouldShowGetStarted(true);

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
          title={t('onboarding.page5.title')}
          subtitle={t('onboarding.page5.subtitle')}
          index={lessonIndex}
          shouldReloadRole={shouldReloadRole}
          onRoleReloaded={() => setShouldReloadRole(false)}
          showLessonList={() => setShouldShowLessonList(true)}
          onShowGetStarted={handleGetStarted}
        ></VideoSection>
      </div>
      <InfoSection
        title={t('onboarding.page5.infoSection.title')}
        text={t('onboarding.page5.infoSection.text')}
        isCentered
      />
      <WorkingGroups t={t} noHover={true} />
      <FAQ title={t('onboarding.page1.faq.title')} tokenQuestions={questions} />
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
