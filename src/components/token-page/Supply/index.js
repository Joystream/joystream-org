import React from 'react';
import cn from 'classnames';

import { ReactComponent as MintEventPlus } from '../../../assets/svg/token/mint-event-plus.svg';
import { ReactComponent as MintEventMinus } from '../../../assets/svg/token/mint-event-minus.svg';

import './style.scss';

const ChangeEvent = ({ isEventMint, title, subtitle }) => {
  const icon = isEventMint ? <MintEventPlus className="TokenPage__supply__content-section__change-event__icon" /> : <MintEventMinus className="TokenPage__supply__content-section__change-event__icon" />

  return (
    <div className="TokenPage__supply__content-section__change-event">
      <div className={cn("TokenPage__supply__content-section__change-event__icon-wrapper", {
        "TokenPage__supply__content-section__change-event__icon-wrapper--burned": !isEventMint
      })}>
        {icon}
      </div>
      <div className="TokenPage__supply__content-section__change-event__content">
        <h3 className="TokenPage__supply__content-section__change-event__content__title">
          {title}
        </h3>
        <p className="TokenPage__supply__content-section__change-event__content__subtitle">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const Supply = ({ t }) => {
  return (
    <section className="TokenPage__supply-wrapper">
      <div className="TokenPage__supply">
        <header className="TokenPage__supply__header">
          <span className="TokenPage__supply__header__section-title">{t("token.supply.sectionTitle")}</span>
          <h2 className="TokenPage__supply__header__title">{t("token.supply.title")}</h2>
          <p className="TokenPage__supply__header__subtitle">
            {t("token.supply.subtitle")}
          </p>
        </header>

        <div className="TokenPage__supply__content-section">
          <div className="TokenPage__supply__content-section__explanations">
            <p className='TokenPage__supply__content-section__explanations__text'>{t("token.supply.minted.explanation")}</p>
          </div>
          <div className="TokenPage__supply__content-section__change-events">
            <ChangeEvent isEventMint={true} title={t("token.supply.minted.validatorsReward.title")} subtitle={t("token.supply.minted.validatorsReward.subtitle")} />
            <ChangeEvent isEventMint={true} title={t("token.supply.minted.paidOut.title")} subtitle={t("token.supply.minted.paidOut.subtitle")} />
            <ChangeEvent isEventMint={true} title={t("token.supply.minted.publishContent.title")} subtitle={t("token.supply.minted.publishContent.subtitle")} />
            <ChangeEvent isEventMint={true} title={t("token.supply.minted.apps.title")} subtitle={t("token.supply.minted.apps.subtitle")} />
            <ChangeEvent isEventMint={true} title={t("token.supply.minted.proposalsAndBounties.title")} subtitle={t("token.supply.minted.proposalsAndBounties.subtitle")} />
          </div>
        </div>

        <div className="TokenPage__supply__content-section">
          <div className="TokenPage__supply__content-section__explanations">
            <p className='TokenPage__supply__content-section__explanations__text'>{t("token.supply.burned.explanation")}</p>
          </div>
          <div className="TokenPage__supply__content-section__change-events">
            <ChangeEvent isEventMint={false} title={t("token.supply.burned.creatorTokenSold.title")} subtitle={t("token.supply.burned.creatorTokenSold.subtitle")} />
            <ChangeEvent isEventMint={false} title={t("token.supply.burned.nftSold.title")} subtitle={t("token.supply.burned.nftSold.subtitle")} />
            <ChangeEvent isEventMint={false} title={t("token.supply.burned.appFee.title")} subtitle={t("token.supply.burned.appFee.subtitle")} />
            <ChangeEvent isEventMint={false} title={t("token.supply.burned.contentPublished.title")} subtitle={t("token.supply.burned.contentPublished.subtitle")} />
            <ChangeEvent isEventMint={false} title={t("token.supply.burned.transactionFeeBurning.title")} subtitle={t("token.supply.burned.transactionFeeBurning.subtitle")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supply;
