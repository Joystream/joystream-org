import React, { useState, useEffect } from 'react';
import './style.scss';
import Loader from 'react-loader-spinner';
import { useStaticQuery, graphql } from 'gatsby';
import useWorkingGroups from '../../../utils/pages/onboarding/useWorkingGroups';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import useAirtableData from '../../../utils/pages/landing/useAirtableData';

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

const formatPayoutAmount = (amount) => {
  if(amount === 0)
    return 0;

  if(!amount)
    return "";

  return Math.round(amount);
}

const WorkingGroups = ({ t, title, subtitle, renderChatWithIntegrator, onChatWithIntegrator, noHover }) => {
  const { workers: { isLoading, error, groups } } = useWorkingGroups();
  const { activityAmounts: { StorageWorker, BuildersWorker, ContentDirectoryWorker, ContentDeliveryWorker } } = useAirtableData();

  const data = [
    {
      payout: formatPayoutAmount(StorageWorker?.amountEarned),
      title: t('onboarding.page5.workingGroups.storageProviders.title'),
      text: t('onboarding.page5.workingGroups.storageProviders.text'),
      data: { isLoading, workers: groups.storage },
    },
    {
      payout: formatPayoutAmount(BuildersWorker?.amountEarned),
      title: t('onboarding.page5.workingGroups.operationsGroup.title'),
      text: t('onboarding.page5.workingGroups.operationsGroup.text'),
      data: { isLoading, workers: groups.operations },
    },
    {
      payout: formatPayoutAmount(ContentDirectoryWorker?.amountEarned),
      title: t('onboarding.page5.workingGroups.curators.title'),
      text: t('onboarding.page5.workingGroups.curators.text'),
      data: { isLoading, workers: groups.content },
    },
    {
      payout: formatPayoutAmount(ContentDeliveryWorker?.amountEarned),
      title: t('onboarding.page5.workingGroups.distributors.title'),
      text: t('onboarding.page5.workingGroups.distributors.text'),
      data: { isLoading, workers: groups.distribution },
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
