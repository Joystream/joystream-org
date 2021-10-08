import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import formatDate from '../../../utils/formatDate';

import './style.scss';

const Card = ({ founderData, t }) => {
  const [image, setImage] = useState();
  const [imageHasError, setImageHasError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (founderData?.inducted?.avatar) {
      setImage(founderData.inducted.avatar);
    }
  }, [founderData]);

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.addEventListener('load', () => {
        setIsImageLoading(false);
      });
      img.addEventListener('error', () => {
        setImageHasError(true);
      });
      img.src = image;
    }
  }, [image]);

  return (
    <div className="FoundingMembersPage__card">
      <div className="FoundingMembersPage__card__main">
        {isImageLoading || imageHasError ? (
          <div
            className={cn('FoundingMembersPage__card__main__icon', {
              'FoundingMembersPage__card__main__icon--loading': isImageLoading && !imageHasError,
            })}
          ></div>
        ) : null}
        {image && !(imageHasError || isImageLoading) ? (
          <img
            className="FoundingMembersPage__card__main__icon"
            src={founderData?.inducted?.avatar}
            alt=""
          />
        ) : null}
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
          <Card founderData={founderData} key={index} t={t} />
        ))}
      </div>
    </div>
  </div>
);

export default List;
