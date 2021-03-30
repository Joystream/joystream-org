import React, { useState } from 'react';
import CardCarousel from '../../../../components/CardCarousel';
import calculateTokensAllocated from '../../../../utils/calculateTokensAllocated';

import './style.scss';

const Card = ({ founderData, partialTokenAllocation }) => {
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
          <p className="FoundingMembersPage__card__score__title">Tokens allocated / projected</p>
          <p className="FoundingMembersPage__card__score__stat">
            {calculateTokensAllocated(founderData?.extraAllocation, founderData?.totalScore, partialTokenAllocation)}
          </p>
        </div>
      </div>
    </div>
  );
};

const CARD_WIDTH_WITH_MARGIN = 288 + 20;

const List = ({ className, data, type, partialTokenAllocation }) => (
  <div className={`${className} FoundingMembersPage__list-wrapper`}>
    <div className="FoundingMembersPage__list">
      <h2 className="FoundingMembersPage__list__title">
        {type === 'current' ? 'Current' : 'New'} founding members <span>{data?.length}</span>
      </h2>
      <CardCarousel scrollAmount={CARD_WIDTH_WITH_MARGIN}>
        {data?.map((founderData, index) => (
          <Card founderData={founderData} key={index} partialTokenAllocation={partialTokenAllocation} />
        ))}
      </CardCarousel>
    </div>
  </div>
);

export default List;
