import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OnboardingLayout from '../../../components/_layouts/Onboarding';
import InfoSection from '../../../components/onboarding-page/InfoSection';
import BuilderSection from '../../../components/onboarding-page/BuilderSection';
import VideoSection from '../../../components/onboarding-page/VideoSection';
import TokenInformation from '../../../components/token-page/TokenInformation';
import YoutubeSync from '../../../assets/svg/youtube-sync.svg';
import SocialTokens from '../../../assets/svg/social-tokens.svg';
import NFTVisual from '../../../assets/images/nft-visual.png';
import AtlasVisual from '../../../assets/images/atlas-visual.png';
import AtlasInfo from '../../../components/onboarding-page/AtlasInfo';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';
import './style.scss';

const Onboarding = () => {
  const [shouldShowLessonList, setShouldShowLessonList] = useState(false);
  const [shouldReloadRole, setShouldReloadRole] = useState(false);
  const [shouldShowGetStarted, setShouldShowGetStarted] = useState(false);
  const lessonIndex = 7;
  const { lessonLinks, getNextVideoUrl } = useLessonList();
  const { t } = useTranslation();

  const questions = [
    {
      title: t('onboarding.page7.faq.questions.question1.question'),
      text: t('onboarding.page7.faq.questions.question1.answer'),
    },
    {
      title: t('onboarding.page7.faq.questions.question2.question'),
      text: t('onboarding.page7.faq.questions.question2.answer'),
    },
  ];

  const atlasInfoData = [
    {
      title: 'onboarding.page7.atlasInfo1.title',
      text: 'onboarding.page7.atlasInfo1.text',
      image: YoutubeSync,
      isImageRight: true,
      isBackroundBlack: false,
    },
    {
      title: 'onboarding.page7.atlasInfo2.title',
      text: 'onboarding.page7.atlasInfo2.text',
      image: SocialTokens,
      isImageRight: false,
      isBackroundBlack: false,
    },
    {
      title: 'onboarding.page7.atlasInfo3.title',
      text: 'onboarding.page7.atlasInfo3.text',
      image: NFTVisual,
      isImageRight: true,
      isBackroundBlack: true,
    },
    {
      title: 'onboarding.page7.atlasInfo4.title',
      text: 'onboarding.page7.atlasInfo4.text',
      buttonText: 'onboarding.page7.atlasInfo4.buttonText',
      image: AtlasVisual,
      isImageRight: false,
      isBackroundBlack: true,
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
          title={t('onboarding.page7.title')}
          subtitle={t('onboarding.page7.subtitle')}
          index={lessonIndex}
          lesson={lessonLinks[lessonIndex]}
          nextVideoUrl={getNextVideoUrl(lessonIndex)}
          showLessonList={() => setShouldShowLessonList(true)}
          shouldReloadRole={shouldReloadRole}
          onShowGetStarted={handleGetStarted}
        ></VideoSection>
      </div>
      <InfoSection title={t('onboarding.page7.infoSection.title')} text={t('onboarding.page7.infoSection.text')} />
      {atlasInfoData.map((item, index) => {
        return <AtlasInfo t={t} key={index} {...item} />;
      })}
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
