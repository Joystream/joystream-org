import React, { useState } from 'react';
import BaseLayout from '../../../components/_layouts/Base';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import cn from 'classnames';
import Table from '../../../components/Table';
import useAxios from '../../../utils/useAxios';
import { ReactComponent as Achieved } from '../../../assets/svg/achieved.svg';

import './style.scss';

const PeriodHighlightFounding = ({ userData }) => {
  const {
    inducted,
    extraAllocation,
    memberHandle,
    memberId,
    totalDirectScore,
    totalReferralScore,
    totalScore,
  } = userData;

  const [imageHasError, setImageHasError] = useState(false);
  const userDate = new Date(inducted.inductedDate);
  const formattedDate = `${userDate.getDate()}/${userDate.getMonth() + 1}`

  return (
    <>
      <div className="FoundingMembersLeaderboards__table__main">
        {!imageHasError && inducted.avatar ? (
          <>
            <img
              className="FoundingMembersLeaderboards__table__main__placeholder"
              src={inducted.avatar}
              alt="icon of founding member"
              onError={e => {
                setImageHasError(true);
              }}
            />
            <div className="FoundingMembersLeaderboards__table__main__checkmark">
              <Achieved className="" />
            </div>
          </>
        ) : (
          <div className="FoundingMembersLeaderboards__table__main__placeholder"></div>
        )}
        <div className="FoundingMembersLeaderboards__table__main__data">
          <p className="FoundingMembersLeaderboards__table__main__name">@{memberHandle}</p>
          <p className="FoundingMembersLeaderboards__table__main__handle">Member: #{memberId}</p>
        </div>
      </div>
      <div className="FoundingMembersLeaderboards__table__score">
        <p>{totalDirectScore}</p>
      </div>
      <div className="FoundingMembersLeaderboards__table__score">
        <p>{totalReferralScore}</p>
      </div>
      <div className="FoundingMembersLeaderboards__table__score">
        <p>{totalScore}</p>
      </div>
      <div className="FoundingMembersLeaderboards__table__score">
        <p>{extraAllocation}</p>
      </div>
      <div className="FoundingMembersLeaderboards__table__score">
        <p>{formattedDate}</p>
      </div>
    </>
  );
};

const PeriodHighlightNonFounding = ({ userData }) => {
  const { inducted, memberHandle, memberId, totalDirectScore, totalReferralScore, totalScore } = userData;

  const [imageHasError, setImageHasError] = useState(false);

  return (
    <>
      <div className="FoundingMembersLeaderboards__table__main">
        {!imageHasError && inducted.avatar ? (
          <img
            className="FoundingMembersLeaderboards__table__main__placeholder"
            src={inducted.avatar}
            alt="icon of founding member"
            onError={e => {
              setImageHasError(true);
            }}
          />
        ) : (
          <div className="FoundingMembersLeaderboards__table__main__placeholder"></div>
        )}
        <div className="FoundingMembersLeaderboards__table__main__data">
          <p className="FoundingMembersLeaderboards__table__main__name">@{memberHandle}</p>
          <p className="FoundingMembersLeaderboards__table__main__handle">Member: #{memberId}</p>
        </div>
      </div>
      <div className="FoundingMembersLeaderboards__table__score">
        <p>{totalDirectScore}</p>
      </div>
      <div className="FoundingMembersLeaderboards__table__score">
        <p>{totalReferralScore}</p>
      </div>
      <div className="FoundingMembersLeaderboards__table__score">
        <p>{totalScore}</p>
      </div>
    </>
  );
};

const Leaderboards = () => {
  const [isFounding, setIsFounding] = useState(true);
  const [response, loading, error] = useAxios(
    'https://raw.githubusercontent.com/bwhm/founding-members/test-schema/data/scoring-example.json'
  );

  const renderBody = () => {
    if (isFounding) {
      return response?.currentFoundingMembers?.map((foundingMember, index) => (
        <Table.Row
          key={index}
          className="FoundingMembersLeaderboards__table__row FoundingMembersLeaderboards__table__row--founding"
        >
          <PeriodHighlightFounding key={index} userData={foundingMember} />
        </Table.Row>
      ));
    } else {
      return response?.totalScoresFull?.totalScores?.map((foundingMember, index) => (
        <Table.Row
          key={index}
          className="FoundingMembersLeaderboards__table__row FoundingMembersLeaderboards__table__row--nonfounding"
        >
          <PeriodHighlightNonFounding key={index} userData={foundingMember} />
        </Table.Row>
      ));
    }
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
                role="presentation"
                className={cn('FoundingMembersLeaderboards__score-toggle__item', {
                  'FoundingMembersLeaderboards__score-toggle__item--active': isFounding,
                })}
                onClick={() => setIsFounding(true)}
              >
                <p className="FoundingMembersLeaderboards__score-toggle__item__text">Founding Members</p>
              </div>
              <div
                role="presentation"
                className={cn('FoundingMembersLeaderboards__score-toggle__item', {
                  'FoundingMembersLeaderboards__score-toggle__item--active': !isFounding,
                })}
                onClick={() => setIsFounding(false)}
              >
                <p className="FoundingMembersLeaderboards__score-toggle__item__text">Non-Founding Members</p>
              </div>
            </div>
          </div>
        </div>

        <Table className="FoundingMembersLeaderboards__table">
          <Table.Header
            className={cn('FoundingMembersLeaderboards__table__header', {
              'FoundingMembersLeaderboards__table__header--founding': isFounding,
              'FoundingMembersLeaderboards__table__header--nonfounding': !isFounding,
            })}
          >
            <p className="FoundingMembersLeaderboards__table__header__item"></p>
            <p className="FoundingMembersLeaderboards__table__header__item">Direct Score</p>
            <p className="FoundingMembersLeaderboards__table__header__item">Referral Score</p>
            <p className="FoundingMembersLeaderboards__table__header__item">Total Score</p>
            {isFounding && (
              <>
                <p className="FoundingMembersLeaderboards__table__header__item">Tokens Allocated</p>
                <p className="FoundingMembersLeaderboards__table__header__item">Inducted</p>
              </>
            )}
          </Table.Header>
          <Table.Body className="FoundingMembersLeaderboards__table__body">{renderBody()}</Table.Body>
        </Table>
      </div>
    </BaseLayout>
  );
};

export default Leaderboards;
