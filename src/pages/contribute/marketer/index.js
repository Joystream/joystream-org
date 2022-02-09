import React, { useRef, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import ContributeLayout from '../../../components/_layouts/Contribute';
import './style.scss';
import ContributorInfo from '../../../components/onboarding-page/ContributorInfo';
import Bounties from '../../../components/onboarding-page/Bounties';
import WorkingGroups from '../../../components/onboarding-page/WorkingGroups';
import useWorkingGroups from '../../../utils/pages/onboarding/useWorkingGroups';
import AtlasInfo from '../../../components/onboarding-page/AtlasInfo';
import BountiesImage from '../../../assets/svg/bounties-getting-started.svg';
import ChatIntegrator from '../../../components/onboarding-page/ChatIntegrator';

const Onboarding = () => {
  const { t } = useTranslation();

  const [storageWorkersData, setStorageWorkersData] = useState({ isLoading: true, workers: [] });
  const [curatorsWorkersData, setCuratorsWorkersData] = useState({ isLoading: true, workers: [] });
  const [distributorsWorkersData, setDistributorsWorkersData] = useState({ isLoading: true, workers: [] });
  const [operationsWorkersData, setOperationsWorkersData] = useState({ isLoading: true, workers: [] });
  const chatRef = useRef();

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

  const data = {
    title: 'onboarding.contributorRoles.marketer.title',
    specialities: [
      'onboarding.contributorRoles.marketer.specialities.1',
      'onboarding.contributorRoles.marketer.specialities.2',
      'onboarding.contributorRoles.marketer.specialities.3',
    ],
  };

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
    },
  ];

  return (
    <ContributeLayout t={t} onChatWithIntegrator={handleButtonAction}>
      <div className="Onboarding__wrapper"></div>
      <ContributorInfo t={t} title={t(data.title)} specialities={data.specialities} />
      <Bounties t={t} onChatWithIntegrator={handleButtonAction} renderChatWithIntegrator={true} />
      {atlasInfoData.map((item, index) => {
        return <AtlasInfo t={t} key={index} {...item} onButtonClick={handleButtonAction} />;
      })}
      <WorkingGroups
        t={t}
        data={workingGroupsData}
        title={t('onboarding.contributorRoles.workingGroups.title')}
        subtitle={t('onboarding.contributorRoles.workingGroups.subtitle')}
        onChatWithIntegrator={handleButtonAction}
        renderChatWithIntegrator={true}
      />
      <ChatIntegrator t={t} />
      <div ref={chatRef}></div>
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
