import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { graphql } from 'gatsby';
import { types } from '@joystream/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

import Table from '../../../components/Table';
import SiteMetadata from '../../../components/SiteMetadata';
import BaseLayout from '../../../components/_layouts/Base';

import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { ReactComponent as Achieved } from '../../../assets/svg/achieved.svg';
import NonFMAvatarPlaceholder from '../../../assets/svg/non-FM-leaderboard-placeholder.svg';

import { JoystreamWSProvider } from '../../../data/pages/founding-members';
import { foundingMembersJson } from '../../../data/pages/founding-members';

import useAxios from '../../../utils/useAxios';
import './style.scss';

const PeriodHighlightFounding = ({ userData, t }) => {
  const { inducted, memberHandle, memberId, totalDirectScore, totalReferralScore, totalScore } = userData;

  const [imageHasError, setImageHasError] = useState(false);
  const userDate = new Date(inducted.inductedDate);
  const formattedDate = `${userDate.getDate()}.${userDate.getMonth() + 1}.${userDate
    .getFullYear()
    .toString()
    .substr(-2)}`;

  return (
    <>
      <div className="FoundingMembersLeaderboards__table__main">
        {!imageHasError && inducted?.avatar ? (
          <>
            <img
              className="FoundingMembersLeaderboards__table__main__placeholder"
              src={inducted?.avatar}
              alt=""
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
          <p className="FoundingMembersLeaderboards__table__main__handle">
            {t('foundingMembers.general.member')}: #{memberId}
          </p>
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
        <p>{formattedDate}</p>
      </div>
    </>
  );
};

const PeriodHighlightNonFounding = ({ userData, Api, t }) => {
  const { memberHandle, memberId, totalDirectScore, totalReferralScore, totalScore } = userData;
  const [imageIsReady, setImageIsReady] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    async function getImage() {
      if (memberId && Api) {
        setImage((await Api.query.members.membershipById(memberId)).avatar_uri);
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
      <div className="FoundingMembersLeaderboards__table__main">
        {imageIsReady ? (
          <img className="FoundingMembersLeaderboards__table__main__placeholder" src={image} alt="" />
        ) : (
          <img className="FoundingMembersLeaderboards__table__main__placeholder" src={NonFMAvatarPlaceholder} alt="" />
        )}
        <div className="FoundingMembersLeaderboards__table__main__data">
          <p className="FoundingMembersLeaderboards__table__main__name">@{memberHandle}</p>
          <p className="FoundingMembersLeaderboards__table__main__handle">
            {t('foundingMembers.general.member')}: #{memberId}
          </p>
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

const Leaderboards = ({ location }) => {
  const [isFounding, setIsFounding] = useState(location?.state?.isFoundingMember !== false);
  const [response, loading, error] = useAxios(foundingMembersJson);
  const [Api, setApi] = useState();
  const { t } = useTranslation();
  const { language } = useI18next();

  useEffect(() => {
    async function setUpApi() {
      const provider = new WsProvider(JoystreamWSProvider);
      const api = await ApiPromise.create({ provider, types });
      await api.isReady;
      setApi(api);
    }
    setUpApi();
  }, []);

  const renderBody = () => {
    if (isFounding) {
      return response?.currentFoundingMembers
        ?.sort((prev, next) => next.totalScore - prev.totalScore)
        ?.map((foundingMember, index) => (
          <Table.Row
            key={index}
            className="FoundingMembersLeaderboards__table__row FoundingMembersLeaderboards__table__row--founding"
          >
            <PeriodHighlightFounding key={index} userData={foundingMember} t={t} />
          </Table.Row>
        ));
    } else {
      return response?.scores?.totalScores
        ?.filter(({ inducted }) => !inducted)
        ?.map((foundingMember, index) => (
          <Table.Row
            key={index}
            className="FoundingMembersLeaderboards__table__row FoundingMembersLeaderboards__table__row--nonfounding"
          >
            <PeriodHighlightNonFounding key={index} userData={foundingMember} Api={Api} t={t} />
          </Table.Row>
        ));
    }
  };

  return (
    <BaseLayout t={t}>
      <SiteMetadata lang={language} title={t('foundingMembers.leaderboards.siteMetadata.title')} />
      <div className="FoundingMembersLeaderboards">
        <div className="FoundingMembersLeaderboards__header-wrapper">
          <div className="FoundingMembersLeaderboards__back">
            <Arrow className="FoundingMembersLeaderboards__back__arrow" />
            <a href="/founding-members" className="FoundingMembersLeaderboards__back__text">
              {t('foundingMembers.general.backButton')}
            </a>
          </div>
          <div className="FoundingMembersLeaderboards__header">
            <h1 className="FoundingMembersLeaderboards__header__title">{t('foundingMembers.leaderboards.title')}</h1>
            <div className="FoundingMembersLeaderboards__score-toggle">
              <div
                role="presentation"
                className={cn('FoundingMembersLeaderboards__score-toggle__item', {
                  'FoundingMembersLeaderboards__score-toggle__item--active': isFounding,
                })}
                onClick={() => setIsFounding(true)}
              >
                <p className="FoundingMembersLeaderboards__score-toggle__item__text">
                  {t('foundingMembers.general.foundingMembers')}
                </p>
              </div>
              <div
                role="presentation"
                className={cn('FoundingMembersLeaderboards__score-toggle__item', {
                  'FoundingMembersLeaderboards__score-toggle__item--active': !isFounding,
                })}
                onClick={() => setIsFounding(false)}
              >
                <p className="FoundingMembersLeaderboards__score-toggle__item__text">
                  {t('foundingMembers.general.nonFoundingMembers')}
                </p>
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
            <p className="FoundingMembersLeaderboards__table__header__item">
              {t('foundingMembers.general.directScore')}
            </p>
            <p className="FoundingMembersLeaderboards__table__header__item">
              {t('foundingMembers.general.referralScore')}
            </p>
            <p className="FoundingMembersLeaderboards__table__header__item">
              {t('foundingMembers.general.totalScore')}
            </p>
            {isFounding && (
              <>
                <p className="FoundingMembersLeaderboards__table__header__item">
                  {t('foundingMembers.general.inducted')}
                </p>
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

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
