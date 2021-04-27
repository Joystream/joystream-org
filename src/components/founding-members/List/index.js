import React, { useState } from 'react';
import formatDate from '../../../utils/formatDate';

import './style.scss';

const Card = ({ founderData, t }) => {
  const [imageHasError, setImageHasError] = useState(false);

  return (
    <div className="FoundingMembersPage__card">
      <div className="FoundingMembersPage__card__main">
        {!imageHasError && founderData?.inducted?.avatar ? (
          <img
            className="FoundingMembersPage__card__main__icon"
            src={founderData?.inducted?.avatar}
            alt={t('foundingMembers.landing.list.iconAlt')}
            onError={() => {
              setImageHasError(true);
            }}
          />
        ) : (
          <div className="FoundingMembersPage__card__main__icon"></div>
        )}
        <div className="FoundingMembersPage__card__main__content">
          <p className="FoundingMembersPage__card__main__name">{founderData?.memberHandle}</p>
        </div>
      </div>
      <div className="FoundingMembersPage__card__scores">
        <div className="FoundingMembersPage__card__score">
          <p className="FoundingMembersPage__card__score__title">{t('foundingMembers.general.totalScore')}</p>
          <p className="FoundingMembersPage__card__score__stat">{founderData?.totalScore}</p>
        </div>
        <div className="FoundingMembersPage__card__score">
          <p className="FoundingMembersPage__card__score__title">{t('foundingMembers.general.inductionDate')}</p>
          <p className="FoundingMembersPage__card__score__stat">
            {founderData?.inducted?.inductedDate ? formatDate(founderData?.inducted?.inductedDate) : '-'}
          </p>
        </div>
      </div>
    </div>
  );
};

const List = ({ className, data, type, t }) => (
  <div className={`${className} FoundingMembersPage__list-wrapper`}>
    <div className="FoundingMembersPage__list">
      <h2 className="FoundingMembersPage__list__title">
        {type === 'current'
          ? t('foundingMembers.landing.list.currentMembers')
          : t('foundingMembers.landing.list.newMembers')}
        <span>{data?.length}</span>
      </h2>
      <div className="FoundingMembersPage__cards">
        {data?.map((founderData, index) => (
          <Card founderData={founderData} key={index} t={t}/>
        ))}
      </div>
    </div>
  </div>
);

export default List;
