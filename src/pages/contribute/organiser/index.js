import React, { useRef, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import ContributeLayout from '../../../components/_layouts/Contribute';
import './style.scss';
import ContributorInfo from '../../../components/onboarding-page/ContributorInfo';
import Integrators from '../../../components/onboarding-page/Integrators';
import Bounties from '../../../components/onboarding-page/Bounties';
import WorkingGroups from '../../../components/onboarding-page/WorkingGroups';
import AtlasInfo from '../../../components/onboarding-page/AtlasInfo';
import BountiesImage from '../../../assets/svg/bounties-getting-started.svg';
import ChatIntegrator from '../../../components/onboarding-page/ChatIntegrator';
import Organiser from '../../../assets/svg/contributor-organiser.svg';

const Onboarding = () => {
  const { t } = useTranslation();
  const chatRef = useRef();

  const data = {
    title: 'onboarding.contributorRoles.organiser.title',
    specialities: [
      'onboarding.contributorRoles.organiser.specialities.1',
      'onboarding.contributorRoles.organiser.specialities.2',
      'onboarding.contributorRoles.organiser.specialities.3',
      'onboarding.contributorRoles.organiser.specialities.4',
      'onboarding.contributorRoles.organiser.specialities.5',
      'onboarding.contributorRoles.organiser.specialities.6',
    ],
  };

  const handleButtonAction = () => {
    if (chatRef && chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const atlasInfoData = [
    {
      title: 'onboarding.contributorRoles.bounties.title',
      text: 'onboarding.contributorRoles.bounties.text',
      buttonText: 'onboarding.button.chatIntegrator.text',
      isButtonAction: true,
      image: BountiesImage,
      isImageRight: false,
      isBackroundBlack: false,
      noTopPadding: true,
    },
  ];

  return (
    <ContributeLayout t={t} onChatWithIntegrator={handleButtonAction}>
      <div className="Onboarding__wrapper"></div>
      <ContributorInfo t={t} title={t(data.title)} specialities={data.specialities} image={Organiser} />
      <Integrators t={t} onChatWithIntegrator={handleButtonAction} />
      <Bounties t={t} onChatWithIntegrator={handleButtonAction} renderChatWithIntegrator={true} />
      {atlasInfoData.map((item, index) => {
        return <AtlasInfo t={t} key={index} {...item} onButtonClick={handleButtonAction} />;
      })}
      <WorkingGroups
        t={t}
        title={t('onboarding.contributorRoles.workingGroups.title')}
        subtitle={t('onboarding.contributorRoles.workingGroups.subtitle')}
        onChatWithIntegrator={handleButtonAction}
        renderChatWithIntegrator={true}
      />
      <div ref={chatRef}></div>
      <ChatIntegrator t={t} />
    </ContributeLayout>
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
