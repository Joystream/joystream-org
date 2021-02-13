import React, { useState } from 'react';
import Table from '../../../../components/Table';
import { ArrowButton } from '../../index';
import { ReactComponent as Achieved } from '../../../../assets/svg/achieved.svg';
import calculateTokensAllocated from '../../../../utils/calculateTokensAllocated';

import './style.scss';

const MetricsRowData = ({ data, founding, partialTokenAllocation }) => {
  const [imageHasError, setImageHasError] = useState(false);

  return (
    <>
      <div className="FoundingMembersPage__leaderboard__main">
        {!imageHasError && data?.inducted?.avatar ? (
          <>
            <img
              className="FoundingMembersPage__leaderboard__main__placeholder"
              src={data?.inducted?.avatar}
              alt="icon of founding member"
              onError={() => {
                setImageHasError(true);
              }}
            />
            {founding && (
              <div className="FoundingMembersPage__leaderboard__main__checkmark">
                <Achieved />
              </div>
            )}
          </>
        ) : (
          <div className="FoundingMembersPage__leaderboard__main__placeholder"></div>
        )}
        <div className="FoundingMembersPage__leaderboard__main__data">
          <p className="FoundingMembersPage__leaderboard__main__name">@{data?.memberHandle}</p>
        </div>
      </div>
      {founding && (
        <div style={{ justifySelf: 'center' }} className="FoundingMembersPage__leaderboard__score">
          <p>
            {calculateTokensAllocated(data?.extraAllocation, data?.totalScore, partialTokenAllocation)}
          </p>
        </div>
      )}
      <div className="FoundingMembersPage__leaderboard__score">
        <p>{data?.totalScore}</p>
      </div>
    </>
  );
};

const Metrics = ({ foundingMembers, nonFoundingMembers, sizeOfFirstTokenPool, partialTokenAllocation }) => (
  <>
    <div className="FoundingMembersPage__metrics">
      <h2 className="FoundingMembersPage__metrics__title">Key metrics for the program</h2>
      <div className="FoundingMembersPage__metrics__list">
        <div>
          <p className="FoundingMembersPage__metrics__stat">{sizeOfFirstTokenPool && `${sizeOfFirstTokenPool}%`}</p>
          <p className="FoundingMembersPage__metrics__text">size of first token pool</p>
        </div>
        {/* <div>
          <p className="FoundingMembersPage__metrics__stat">71%</p>
          <p className="FoundingMembersPage__metrics__text">size of second token pool</p>
        </div> */}
        <div>
          <p className="FoundingMembersPage__metrics__stat">{foundingMembers?.length}</p>
          <p className="FoundingMembersPage__metrics__text">number of founding members</p>
        </div>
        <div>
          <p className="FoundingMembersPage__metrics__stat">
            {nonFoundingMembers && nonFoundingMembers.filter(member => member.totalDirectScore > 0).length}
          </p>
          <p className="FoundingMembersPage__metrics__text">number of non-founding members points</p>
        </div>
      </div>
    </div>
    <div className="FoundingMembersPage__leaderboards">
      <div className="FoundingMembersPage__leaderboard-left">
        <h3 className="FoundingMembersPage__leaderboards__title">Leaderboards</h3>
        <div className="FoundingMembersPage__leaderboard-wrapper">
          <h4 className="FoundingMembersPage__leaderboard__title">Founding Members</h4>
          <Table className="FoundingMembersPage__leaderboard">
            <Table.Header className="FoundingMembersPage__leaderboard__header FoundingMembersPage__leaderboard__header--founding">
              <Table.HeaderItem></Table.HeaderItem>
              <Table.HeaderItem textAlign="center">Tokens allocated / projected</Table.HeaderItem>
              <Table.HeaderItem textAlign="right">Total score</Table.HeaderItem>
            </Table.Header>
            <Table.Body className="FoundingMembersPage__leaderboard__body">
              {foundingMembers?.map((foundingMember, index) => (
                <Table.Row
                  key={index}
                  className="FoundingMembersPage__leaderboard__row FoundingMembersPage__leaderboard__row--founding"
                >
                  <MetricsRowData
                    key={index}
                    data={foundingMember}
                    partialTokenAllocation={partialTokenAllocation}
                    founding
                  />
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <ArrowButton
            className="FoundingMembersPage__leaderboard__button"
            link="/founding-members/leaderboards"
            text="All Founding Member total scores"
          />
        </div>
      </div>
      <div className="FoundingMembersPage__leaderboard-wrapper">
        <h4 className="FoundingMembersPage__leaderboard__title">Non-Founding Members</h4>
        <Table className="FoundingMembersPage__leaderboard">
          <Table.Header className="FoundingMembersPage__leaderboard__header FoundingMembersPage__leaderboard__header--nonfounding">
            <Table.HeaderItem></Table.HeaderItem>
            <Table.HeaderItem textAlign="right">Total score</Table.HeaderItem>
          </Table.Header>
          <Table.Body className="FoundingMembersPage__leaderboard__body">
            {nonFoundingMembers?.map((foundingMember, index) => (
              <Table.Row
                key={index}
                className="FoundingMembersPage__leaderboard__row FoundingMembersPage__leaderboard__row--nonfounding"
              >
                <MetricsRowData key={index} data={foundingMember} />
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <ArrowButton
          className="FoundingMembersPage__leaderboard__button"
          link="/founding-members/leaderboards"
          text="All Non-Founding Member total scores"
        />
      </div>
      <ArrowButton
        className="FoundingMembersPage__leaderboards__button"
        link="https://github.com/Joystream/founding-member/blob/master/rules.md"
        text="Read the full program rules"
      />
    </div>
  </>
);

export default Metrics;
