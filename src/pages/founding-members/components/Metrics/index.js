import React from 'react';
import Table from '../../../../components/Table';
import Button from '../../../../components/Button';
import { ArrowButton } from '../../index';

import './style.scss';

const MetricsRowData = ({ data }) => {
  const { main, referrer, score } = data;

  return (
    <>
      {main && (
        <div className="FoundingMembersPage__leaderboard__main">
          {main.icon ? (
            <img className="FoundingMembersPage__leaderboard__main__placeholder" src={main.icon} alt='icon of founding member' />
          ) : (
            <div className="FoundingMembersPage__leaderboard__main__placeholder"></div>
          )}
          <div className="FoundingMembersPage__leaderboard__main__data">
            <p className="FoundingMembersPage__leaderboard__main__name">{main.name}</p>
            <p className="FoundingMembersPage__leaderboard__main__handle">{main.handle}</p>
          </div>
        </div>
      )}
      {referrer && <p className="FoundingMembersPage__leaderboard__referrer-name">{referrer.name}</p>}
      {referrer && (
        <div className="FoundingMembersPage__leaderboard__referrer">
          {referrer.icon ? (
            <img className="FoundingMembersPage__leaderboard__referrer__placeholder" src={referrer.icon} alt='icon of founding member'/>
          ) : (
            <div className="FoundingMembersPage__leaderboard__referrer__placeholder"></div>
          )}
          <div className="FoundingMembersPage__leaderboard__referrer__data">
            <p className="FoundingMembersPage__leaderboard__referrer__name">{referrer.name}</p>
            <p className="FoundingMembersPage__leaderboard__referrer__handle">{referrer.handle}</p>
          </div>
        </div>
      )}
      {score && (
        <div className="FoundingMembersPage__leaderboard__score">
          <p>{score}</p>
        </div>
      )}
    </>
  );
};
const Metrics = ({ tableOneData, tableTwoData }) => (
  <>
    <div className="FoundingMembersPage__metrics">
      <h2 className="FoundingMembersPage__metrics__title">Key metrics for the program</h2>
      <div className="FoundingMembersPage__metrics__list">
        <div>
          <p className="FoundingMembersPage__metrics__stat">64%</p>
          <p className="FoundingMembersPage__metrics__text">size of first token pool</p>
        </div>
        <div>
          <p className="FoundingMembersPage__metrics__stat">71%</p>
          <p className="FoundingMembersPage__metrics__text">size of second token pool</p>
        </div>
        <div>
          <p className="FoundingMembersPage__metrics__stat">6</p>
          <p className="FoundingMembersPage__metrics__text">number of founding members</p>
        </div>
        <div>
          <p className="FoundingMembersPage__metrics__stat">12</p>
          <p className="FoundingMembersPage__metrics__text">number of non-founding members with 0&gt; direct score</p>
        </div>
      </div>
    </div>
    <div className="FoundingMembersPage__leaderboards">
      <div className="FoundingMembersPage__leaderboard-left">
        <h3 className="FoundingMembersPage__leaderboards__title">Leaderboards</h3>
        <div className="FoundingMembersPage__leaderboard-wrapper">
          <h4 className="FoundingMembersPage__leaderboard__title">Overall direct score</h4>
          <Table className="FoundingMembersPage__leaderboard" gridLayout="1.5fr 1fr 1fr">
            <Table.Header className="FoundingMembersPage__leaderboard__header">
              <Table.HeaderItem>Name</Table.HeaderItem>
              <Table.HeaderItem textAlign="center">Referrer</Table.HeaderItem>
              <Table.HeaderItem textAlign="right">Direct score</Table.HeaderItem>
            </Table.Header>
            <Table.Body className="FoundingMembersPage__leaderboard__body">
              {tableOneData?.map((foundingMember, index) => (
                <Table.Row key={index} className="FoundingMembersPage__leaderboard__row">
                  <MetricsRowData key={index} data={foundingMember} />
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <ArrowButton
            className="FoundingMembersPage__leaderboard__button"
            link="https://www.google.com"
            text="Show all direct score rankings"
          />
        </div>
      </div>
      <div className="FoundingMembersPage__leaderboard-wrapper">
        <h4 className="FoundingMembersPage__leaderboard__title">Overall referral score</h4>
        <Table className="FoundingMembersPage__leaderboard" gridLayout="1.5fr 1fr 1fr">
          <Table.Header className="FoundingMembersPage__leaderboard__header">
            <Table.HeaderItem>Name</Table.HeaderItem>
            <Table.HeaderItem textAlign="center">Referrer</Table.HeaderItem>
            <Table.HeaderItem textAlign="right">Direct score</Table.HeaderItem>
          </Table.Header>
          <Table.Body className="FoundingMembersPage__leaderboard__body">
            {tableOneData?.map((foundingMember, index) => (
              <Table.Row key={index} className="FoundingMembersPage__leaderboard__row">
                <MetricsRowData key={index} data={foundingMember} />
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <ArrowButton
          className="FoundingMembersPage__leaderboard__button"
          link="https://www.google.com"
          text="Show all referral score rankings"
        />
      </div>
      <ArrowButton
        className="FoundingMembersPage__leaderboards__button"
        link="https://www.google.com"
        text="Learn more about the rules"
      />
    </div>
  </>
);

export default Metrics;
