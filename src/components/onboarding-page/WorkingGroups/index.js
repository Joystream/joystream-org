import React, { useState } from 'react';
import './style.scss';
import Loader from 'react-loader-spinner';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

const WorkingGroupItem = ({ workerAvatars, t, item, renderChatWithIntegrator, onChatWithIntegrator }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="WorkingGroups__item"
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
      {renderChatWithIntegrator && isHovered && (
        <div role="presentation" className="WorkingGroups__item__link" onClick={onChatWithIntegrator}>
          <p className="WorkingGroups__item__link-text">{t('onboarding.button.chatIntegrator.text')}</p>
          <Arrow className="WorkingGroups__item__link-arrow" />
        </div>
      )}
    </div>
  );
};

const WorkingGroups = ({ t, title, subtitle, data, renderChatWithIntegrator, onChatWithIntegrator }) => {
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
            />
          ))}
      </div>
    </div>
  );
};

export default WorkingGroups;
