import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import ContributeLayout from '../../../components/_layouts/Contribute';
import './style.scss';
import ContributorInfo from '../../../components/onboarding-page/ContributorInfo';
import Bounties from '../../../components/onboarding-page/Bounties';
import AtlasInfo from '../../../components/onboarding-page/AtlasInfo';
import BountiesImage from '../../../assets/svg/bounties-getting-started.svg';

const Onboarding = () => {
  const { t } = useTranslation();

  const data = {
    title: 'onboarding.contributorRoles.videoCreator.title',
    specialities: [
      'onboarding.contributorRoles.videoCreator.specialities.1',
      'onboarding.contributorRoles.videoCreator.specialities.2',
    ],
  };

  const handleButtonAction = () => {
    console.log('Chat with integrator');
    // TODO Handle Chat Integrator Button Action
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
    },
  ];

  return (
    <ContributeLayout t={t}>
      <div className="Onboarding__wrapper"></div>
      <ContributorInfo t={t} title={t(data.title)} specialities={data.specialities} />
      <Bounties t={t} />
      {atlasInfoData.map((item, index) => {
        return <AtlasInfo t={t} key={index} {...item} onButtonClick={handleButtonAction} />;
      })}
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
