import React, { useState } from 'react';
import { fullData } from '../../../data/pages/founding-members';
import BaseLayout from '../../../components/_layouts/Base';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import cn from 'classnames';
import Table from '../../../components/Table';

import './style.scss';

const PeriodHighlight = ({ userData, scoreType }) => {
  const { main, referrer, score, referralScore } = userData;

  const renderScore = () => {
    let finalScore = null;

    if (scoreType === 'referral' && referralScore) {
      finalScore = referralScore;
    } else {
      finalScore = score;
    }

    return (
      <div className="FoundingMembersLeaderboards__table__score">
        <p>{finalScore}</p>
      </div>
    );
  };

  return (
    <>
      {main && (
        <div className="FoundingMembersLeaderboards__table__main">
          {main.icon ? (
            <img
              className="FoundingMembersLeaderboards__table__main__placeholder"
              src={main.icon}
              alt="icon of founding member"
            />
          ) : (
            <div className="FoundingMembersLeaderboards__table__main__placeholder"></div>
          )}
          <div className="FoundingMembersLeaderboards__table__main__data">
            <p className="FoundingMembersLeaderboards__table__main__name">{main.name}</p>
            <p className="FoundingMembersLeaderboards__table__main__handle">{main.handle}</p>
          </div>
        </div>
      )}
      {referrer && (
        <div className="FoundingMembersLeaderboards__table__referrer">
          {referrer.icon ? (
            <img
              className="FoundingMembersLeaderboards__table__referrer__placeholder"
              src={referrer.icon}
              alt="icon of founding member"
            />
          ) : (
            <div className="FoundingMembersLeaderboards__table__referrer__placeholder"></div>
          )}
          <div className="FoundingMembersLeaderboards__table__referrer__data">
            <p className="FoundingMembersLeaderboards__table__referrer__name">{referrer.name}</p>
            <p className="FoundingMembersLeaderboards__table__referrer__handle">{referrer.handle}</p>
          </div>
        </div>
      )}
      {renderScore()}
    </>
  );
};

const Leaderboards = () => {
  const [scoreType, setScoreType] = useState('direct');

  const sortMembers = data => {
    if (scoreType === 'direct') {
      return data.sort((a, b) => (a.score < b.score || a.score === b.score ? 1 : -1));
    }

    if (scoreType === 'referral') {
      return data.sort((a, b) => (a.referralScore < b.referralScore || a.referralScore === b.referralScore ? 1 : -1));
    }

    return null;
  };

  return (
    <BaseLayout>
      <div className="FoundingMembersLeaderboards">
        <div className="FoundingMembersLeaderboards__header-wrapper">
          <div className="FoundingMembersLeaderboards__back">
            <Arrow className="FoundingMembersLeaderboards__back__arrow" />
            <a href="/founding-members" className="FoundingMembersLeaderboards__back__text">
              Back to Program page
            </a>
          </div>
          <div className="FoundingMembersLeaderboards__header">
            <h1 className="FoundingMembersLeaderboards__header__title">Leaderboard</h1>
            <div className="FoundingMembersLeaderboards__score-toggle">
              <div
                role='presentation'
                className={cn('FoundingMembersLeaderboards__score-toggle__item', {
                  'FoundingMembersLeaderboards__score-toggle__item--active': scoreType === 'direct',
                })}
                onClick={() => setScoreType('direct')}
              >
                <p className="FoundingMembersLeaderboards__score-toggle__item__text">Direct Score</p>
              </div>
              <div
                role='presentation'
                className={cn('FoundingMembersLeaderboards__score-toggle__item', {
                  'FoundingMembersLeaderboards__score-toggle__item--active': scoreType === 'referral',
                })}
                onClick={() => setScoreType('referral')}
              >
                <p className="FoundingMembersLeaderboards__score-toggle__item__text">Referral Score</p>
              </div>
            </div>
          </div>
        </div>

        <Table className="FoundingMembersLeaderboards__table">
          <Table.Header className="FoundingMembersLeaderboards__table__header">
            <p className="FoundingMembersLeaderboards__table__header__item">Last period highlights</p>
            <p className="FoundingMembersLeaderboards__table__header__item">Referrer</p>
            <p className="FoundingMembersLeaderboards__table__header__item" style={{ textAlign: 'right' }}>
              Score
            </p>
          </Table.Header>
          <Table.Body className="FoundingMembersLeaderboards__table__body">
            {sortMembers([...fullData, ...fullData, ...fullData])?.map((foundingMember, index) => (
              <Table.Row key={index} className="FoundingMembersLeaderboards__table__row">
                <PeriodHighlight key={index} userData={foundingMember} scoreType={scoreType} />
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </BaseLayout>
  );
};

export default Leaderboards;
