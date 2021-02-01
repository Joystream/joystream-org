import React from 'react';
import CardCarousel from '../../../../components/CardCarousel';

import './style.scss';

const Card = ({ founderData: { main, referrer, score, referralScore } }) => (
  <div className="FoundingMembersPage__card">
    <div className="FoundingMembersPage__card__main">
      {main.icon ? (
        <img className="FoundingMembersPage__card__main__icon" src={main.icon} alt='icon of founding member'/>
      ) : (
        <div className="FoundingMembersPage__card__main__icon"></div>
      )}
      <div className="FoundingMembersPage__card__main__content">
        <p className="FoundingMembersPage__card__main__name">{main.name}</p>
        <p className="FoundingMembersPage__card__main__handle">{main.handle}</p>
      </div>
    </div>
    <div className="FoundingMembersPage__card__scores">
      <div className="FoundingMembersPage__card__score">
        <p className="FoundingMembersPage__card__score__title">Direct score</p>
        <p className="FoundingMembersPage__card__score__stat">{score}</p>
      </div>
      <div className="FoundingMembersPage__card__score">
        <p className="FoundingMembersPage__card__score__title">Referral score</p>
        <p className="FoundingMembersPage__card__score__stat">{referralScore}</p>
      </div>
    </div>
    <p className="FoundingMembersPage__card__referrer__title">Referrer</p>
    <div className="FoundingMembersPage__card__referrer">
      {referrer.icon ? (
        <img className="FoundingMembersPage__card__referrer__icon" src={referrer.icon}  alt='icon of founding member'/>
      ) : (
        <div className="FoundingMembersPage__card__referrer__icon"></div>
      )}
      <div className="FoundingMembersPage__card__referrer__content">
        <p className="FoundingMembersPage__card__referrer__name">{referrer.name}</p>
        <p className="FoundingMembersPage__card__referrer__handle">{referrer.handle}</p>
      </div>
    </div>
  </div>
);

const List = ({ data }) => (
  <div className="FoundingMembersPage__list-wrapper">
    <div className="FoundingMembersPage__list">
      <h2 className="FoundingMembersPage__list__title">
        Current founding members <span>{data?.length}</span>
      </h2>
      <CardCarousel>
        {data?.map((founderData, index) => (
          <Card founderData={founderData} key={index} />
        ))}
      </CardCarousel>
    </div>
  </div>
);

export default List;
