import React, { useState } from 'react';
import CardCarousel from '../../../../components/CardCarousel';

import './style.scss';

const Card = ({ founderData }) => {
  const [imageHasError, setImageHasError] = useState(false);

  return (
    <div className="FoundingMembersPage__card">
      <div className="FoundingMembersPage__card__main">
        {!imageHasError && founderData?.inducted?.avatar ? (
          <img
            className="FoundingMembersPage__card__main__icon"
            src={founderData?.inducted?.avatar}
            alt="icon of founding member"
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
          <p className="FoundingMembersPage__card__score__title">Total score</p>
          <p className="FoundingMembersPage__card__score__stat">{founderData?.totalScore}</p>
        </div>
        <div className="FoundingMembersPage__card__score">
          <p className="FoundingMembersPage__card__score__title">Tokens allocated</p>
          <p className="FoundingMembersPage__card__score__stat">{founderData?.extraAllocation}</p>
        </div>
      </div>
    </div>
  );
};

const List = ({ className, data, type }) => (
  <div className={`${className} FoundingMembersPage__list-wrapper`}>
    <div className="FoundingMembersPage__list">
      <h2 className="FoundingMembersPage__list__title">
        {type === 'current' ? 'Current' : 'New'} founding members <span>{data?.length}</span>
      </h2>
      {console.log(data)}
      <CardCarousel>
        {data?.map((founderData, index) => (
          <Card founderData={founderData} key={index} />
        ))}
      </CardCarousel>
    </div>
  </div>
);

export default List;
