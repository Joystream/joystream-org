import React from 'react';

import ArrowLink from '../../ArrowLink';

import { ReactComponent as PublishVideosIcon } from '../../../assets/svg/token/publish-videos.svg';
import { ReactComponent as VideoNFTsIcon } from '../../../assets/svg/token/video-nfts.svg';
import { ReactComponent as CreatorTokensIcon } from '../../../assets/svg/token/creator-tokens.svg';
import { ReactComponent as GatewayOperatorIcon } from '../../../assets/svg/token/gateway-operator.svg';
import { ReactComponent as WorkingGroupIcon } from '../../../assets/svg/token/working-group.svg';
import { ReactComponent as ValidateAndStakeIcon } from '../../../assets/svg/token/validate-and-stake.svg';
import { ReactComponent as EngageBountiesIcon } from '../../../assets/svg/token/engage-bounties.svg';

import './style.scss';

const ExplanationSection = ({ Icon, title, subtitle, href = null, to = null, t }) => (
  <div className="TokenPage__earn__explanation">
    <div className="TokenPage__earn__explanation__icon-section">
      <div className="TokenPage__earn__explanation__icon-section__icon-wrapper">
        <Icon className="TokenPage__earn__explanation__icon-section__icon" />
      </div>
    </div>
    <div className="TokenPage__earn__explanation__content">
      <p className="TokenPage__earn__explanation__content__title">{title}</p>
      <p className="TokenPage__earn__explanation__content__subtitle">{subtitle}</p>
      <ArrowLink text={t('token.earn.learnMore')} className="TokenPage__earn__explanation__content__link" href={href} to={to} small />
    </div>
  </div>
);

const Earn = ({ t }) => {
  return (
    <section className="TokenPage__earn-wrapper" id="earn">
      <div className="TokenPage__earn">
        <header className="TokenPage__earn__header">
          <span className="TokenPage__earn__header__section-title">{t('token.earn.sectionTitle')}</span>
          <h2 className="TokenPage__earn__header__title">{t('token.earn.title')}</h2>
          <p className="TokenPage__earn__header__subtitle">
            {t('token.earn.subtitle')}
          </p>
        </header>

        <div className="TokenPage__earn__explanations">
          <div className="TokenPage__earn__explanation-section">
            {/* TODO: Update the links here: */}
            <h3 className="TokenPage__earn__explanation-section__title">{t('token.earn.creator.title')}</h3>
            <ExplanationSection
              Icon={PublishVideosIcon}
              title={t('token.earn.creator.videos.title')}
              subtitle={t('token.earn.creator.videos.subtitle')}
              to="/#creator-payouts"
              t={t}
            />
            <ExplanationSection
              Icon={VideoNFTsIcon}
              title={t('token.earn.creator.nfts.title')}
              subtitle={t('token.earn.creator.nfts.subtitle')}
              to="/#video-nfts"
              t={t}
            />
            <ExplanationSection
              Icon={CreatorTokensIcon}
              title={t('token.earn.creator.creatorTokens.title')}
              subtitle={t('token.earn.creator.creatorTokens.subtitle')}
              to="/#creator-tokens"
              t={t}
            />
            <ArrowLink
              text={t('token.earn.creator.browse')}
              className="TokenPage__earn__explanation-section__link"
              to="/#apps-built-on-joystream"
            />
          </div>
          <div className="TokenPage__earn__explanation-section">
            {/* TODO: Update handbook links: */}
            <h3 className="TokenPage__earn__explanation-section__title">{t('token.earn.daoParticipant.title')}</h3>
            <ExplanationSection
              Icon={GatewayOperatorIcon}
              title={t('token.earn.daoParticipant.gateway.title')}
              subtitle={t('token.earn.daoParticipant.gateway.subtitle')}
              href="https://www.notion.so/joystream/Apps-05bec9dc2a5949aeb063ad510ad3eb92?pvs=4"
              t={t}
            />
            <ExplanationSection
              Icon={WorkingGroupIcon}
              title={t('token.earn.daoParticipant.workingGroup.title')}
              subtitle={t('token.earn.daoParticipant.workingGroup.subtitle')}
              href="https://pioneerapp.xyz/#/working-groups"
              t={t}
            />
            <ExplanationSection
              Icon={ValidateAndStakeIcon}
              title={t('token.earn.daoParticipant.validateAndStake.title')}
              subtitle={t('token.earn.daoParticipant.validateAndStake.subtitle')}
              href="https://polkadot.js.org/apps/?rpc=wss://rpc.joystream.org:9944#/staking"
              t={t}
            />
            {/* <ExplanationSection
              Icon={EngageBountiesIcon}
              title={t("token.earn.daoParticipant.bounties.title")}
              subtitle={t("token.earn.daoParticipant.bounties.subtitle")}
              href="https://handbook.joystream.org/"
              t={t}
            /> */}
            <ArrowLink
              text={t('token.earn.daoParticipant.join')}
              className="TokenPage__earn__explanation-section__link TokenPage__earn__explanation-section__link--alt"
              href="https://pioneerapp.xyz/"
              t={t}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earn;
