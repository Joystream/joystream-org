import React, { useState, useEffect } from 'react';
import './style.scss';
import Loader from 'react-loader-spinner';
import { useStaticQuery, graphql } from 'gatsby';
import useWorkingGroups from '../../../utils/pages/onboarding/useWorkingGroups';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

const WorkingGroupItem = ({ workerAvatars, t, item, renderChatWithIntegrator, onChatWithIntegrator, noHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`WorkingGroups__item ${noHover ? '' : 'WorkingGroups__item--hoverable'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="WorkingGroups__item__payout">
        <span className="WorkingGroups__item__payout--amount">${item.payout}</span>
        {t('onboarding.page5.workingGroups.weeklyPayout')}
      </div>
      <div className="WorkingGroups__item__title">{t(item.title)}</div>
      <div className="WorkingGroups__item__subtitle">{t(item.text)}</div>
      <div className="WorkingGroups__item__images">
        {item.data && item.data.isLoading && (
          <Loader
            className="WorkingGroups__item__linechart__loader"
            type="Oval"
            color="#6C6CFF"
            height="100%"
            width="100%"
            timeout={0}
          />
        )}
        {item.data && !item.data.isLoading && item.data.workers && (
          <>
            {workerAvatars(item.data.workers)}
            <div className="WorkingGroups__item__count">+{item.data.workers.length}</div>
          </>
        )}
      </div>
      {renderChatWithIntegrator && !noHover && isHovered && (
        <div role="presentation" className="WorkingGroups__item__link" onClick={onChatWithIntegrator}>
          <p className="WorkingGroups__item__link-text">{t('onboarding.button.chatIntegrator.text')}</p>
          <Arrow className="WorkingGroups__item__link-arrow" />
        </div>
      )}
    </div>
  );
};

const WorkingGroups = ({ t, title, subtitle, renderChatWithIntegrator, onChatWithIntegrator, noHover }) => {
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
  const data = [
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

  const workerAvatars = arr => {
    return arr
      .filter(w => w.avatar && w.avatar !== '')
      .slice(1, 4)
      .map((w, i) => (
        <img key={i} className="WorkingGroups__item__image" src={w.avatar} alt={`Worker #${w.workerId}`} />
      ));
  };

  const { workingGroups } = useStaticQuery(graphql`
    query WorkingGroupsQuery {
      workingGroups: allAirtable(
        filter: { table: { eq: "BountyLabel" } }
        sort: { fields: data___BountyLabelId, order: DESC }
      ) {
        nodes {
          data {
            BountyLabelId
            Name
          }
          recordId
        }
      }
    }
  `);

  useEffect(() => {
    if (workingGroups && workingGroups.nodes) {
      console.log(workingGroups.nodes);
    }
  }, [workingGroups]);

  return (
    <div className="WorkingGroups__wrapper">
      <div className="WorkingGroups__content">
        {title && <h2 className="WorkingGroups__title">{t(title)}</h2>}
        {subtitle && <h2 className="WorkingGroups__subtitle">{t(subtitle)}</h2>}
        {data &&
          data.map((item, index) => (
            <WorkingGroupItem
              key={index}
              t={t}
              item={item}
              workerAvatars={workerAvatars}
              onChatWithIntegrator={onChatWithIntegrator}
              renderChatWithIntegrator={renderChatWithIntegrator}
              noHover={noHover}
            />
          ))}
      </div>
    </div>
  );
};

export default WorkingGroups;
