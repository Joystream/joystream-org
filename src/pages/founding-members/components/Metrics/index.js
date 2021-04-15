import React, { useState, useEffect } from 'react';
import Table from '../../../../components/Table';
import { ArrowButton } from '../../index';
import { ReactComponent as Achieved } from '../../../../assets/svg/achieved.svg';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { types } from '@joystream/types';
import { JoystreamWSProvider } from '../../../../data/pages/founding-members';

import './style.scss';

const MetricsRowFoundingData = ({ data }) => {
  const [imageHasError, setImageHasError] = useState(false);

  return (
    <>
      <div className="FoundingMembersPage__leaderboard__main">
        {!imageHasError && data?.inducted?.avatar ? (
          <>
            <img
              className="FoundingMembersPage__leaderboard__main__placeholder"
              src={data?.inducted?.avatar}
              alt=""
              onError={() => {
                setImageHasError(true);
              }}
            />
            <div className="FoundingMembersPage__leaderboard__main__checkmark">
              <Achieved />
            </div>
          </>
        ) : (
          <div className="FoundingMembersPage__leaderboard__main__placeholder"></div>
        )}
        <div className="FoundingMembersPage__leaderboard__main__data">
          <p className="FoundingMembersPage__leaderboard__main__name">@{data?.memberHandle}</p>
        </div>
      </div>
      <div className="FoundingMembersPage__leaderboard__score">
        <p>{data?.totalScore}</p>
      </div>
    </>
  );
};

const MetricsRowNonFoundingData = ({ data, Api }) => {
  const [image, setImage] = useState();
  const [imageIsReady, setImageIsReady] = useState(false);

  useEffect(() => {
    async function getImage() {
      if (data?.memberId && Api) {
        setImage((await Api.query.members.membershipById(data?.memberId)).avatar_uri);
      }
    }
    getImage();
  }, [Api]);

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.addEventListener('load', () => {
        setImageIsReady(true);
      });
      img.src = image;
    }
  }, [image]);

  return (
    <>
      <div className="FoundingMembersPage__leaderboard__main">
        {imageIsReady ? (
          <>
            <img className="FoundingMembersPage__leaderboard__main__placeholder" src={image} alt="" />
          </>
        ) : (
          <div className="FoundingMembersPage__leaderboard__main__placeholder"></div>
        )}
        <div className="FoundingMembersPage__leaderboard__main__data">
          <p className="FoundingMembersPage__leaderboard__main__name">@{data?.memberHandle}</p>
        </div>
      </div>
      <div className="FoundingMembersPage__leaderboard__score">
        <p>{data?.totalScore}</p>
      </div>
    </>
  );
};

const Metrics = ({ foundingMembers, nonFoundingMembers, sizeOfFirstTokenPool, partialTokenAllocation }) => {
  const [Api, setApi] = useState();

  useEffect(() => {
    async function setUpApi() {
      const provider = new WsProvider(JoystreamWSProvider);
      const api = await ApiPromise.create({ provider, types });
      await api.isReady;
      setApi(api);
    }
    setUpApi();
  }, []);

  return (
    <>
      <div className="FoundingMembersPage__metrics">
        <h2 className="FoundingMembersPage__metrics__title">Key metrics for the program</h2>
        <div className="FoundingMembersPage__metrics__list">
          <div>
            <p className="FoundingMembersPage__metrics__stat">{sizeOfFirstTokenPool && `${sizeOfFirstTokenPool}%`}</p>
            <p className="FoundingMembersPage__metrics__text">size of initial token pool</p>
          </div>
          <div>
            <p className="FoundingMembersPage__metrics__stat">{foundingMembers?.length}</p>
            <p className="FoundingMembersPage__metrics__text">number of founding members</p>
          </div>
          <div>
            <p className="FoundingMembersPage__metrics__stat">
              {nonFoundingMembers && nonFoundingMembers.filter(member => member.totalDirectScore > 0).length}
            </p>
            <p className="FoundingMembersPage__metrics__text">number of founding member candidates</p>
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
                <Table.HeaderItem textAlign="right">Total score</Table.HeaderItem>
              </Table.Header>
              <Table.Body className="FoundingMembersPage__leaderboard__body">
                {foundingMembers
                  ?.sort((prev, next) => next.totalScore - prev.totalScore)
                  ?.map((foundingMember, index) => (
                    <Table.Row
                      key={index}
                      className="FoundingMembersPage__leaderboard__row FoundingMembersPage__leaderboard__row--founding"
                    >
                      <MetricsRowFoundingData key={index} data={foundingMember} />
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
            <ArrowButton
              className="FoundingMembersPage__leaderboard__button"
              link="/founding-members/leaderboards"
              text="All Founding Member Scores"
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
              {nonFoundingMembers?.map((nonFoundingMember, index) => (
                <Table.Row
                  key={index}
                  className="FoundingMembersPage__leaderboard__row FoundingMembersPage__leaderboard__row--nonfounding"
                >
                  <MetricsRowNonFoundingData key={index} data={nonFoundingMember} Api={Api} />
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <ArrowButton
            className="FoundingMembersPage__leaderboard__button"
            to="/founding-members/leaderboards"
            text="All Regular Member Scores"
            state={{ isFoundingMember: false }}
          />
        </div>
        <ArrowButton
          className="FoundingMembersPage__leaderboards__button"
          link="https://github.com/Joystream/founding-members/blob/main/RULES.md"
          text="Read the full program rules"
        />
      </div>
    </>
  );
};

export default Metrics;
