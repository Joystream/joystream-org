import React, { useState } from 'react';
import cn from 'classnames';
import Loader from 'react-loader-spinner';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import PlaceholderIcon from '../../../assets/svg/empty-avatar.svg';
import { ReactComponent as PlaceForYouIcon } from '../../../assets/svg/available-activities-icons/place-for-you.svg';

import { WORKER_ACTIVITIES } from '../../../data/pages';

import './style.scss';

const ActivityListAmount = ({ mobile, amount, priceData, isWeekly, t }) => {
  let amountToRender = 0;
  let amountInDollars = 0;
  if (amount) {
    amountToRender = Math.round(amount);
    amountInDollars = `${Math.round(priceData.price * amount)}`;
  }

  if (priceData.error) {
    amountInDollars = '';
  }

  return (
    <div
      className={cn('IndexPage__available-activities__list-item__amount', {
        'IndexPage__available-activities__list-item__amount--mobile': mobile,
      })}
    >
      <div className="IndexPage__available-activities__list-item__amount__value">
        {amountToRender} JOY
        <span>(${amountInDollars})</span>
      </div>
      {isWeekly && (
        <div className="IndexPage__available-activities__list-item__amount__weekly">
          {t('landing.availableActivities.weekly')}
        </div>
      )}
    </div>
  );
};

const ActivityArrowCTA = ({ mobile, t }) => {
  return (
    <div
      className={cn('IndexPage__available-activities__list-item__cta', {
        'IndexPage__available-activities__list-item__cta--mobile': mobile,
      })}
    >
      <span>{t('landing.availableActivities.chatWithIntegrator')}</span>
      <ArrowIcon className="IndexPage__available-activities__list-item__cta-icon" />
    </div>
  );
};

const ActivityIcons = ({ isLoading, icons, numberOfWorkers }) => {
  if (isLoading) {
    return (
      <Loader
        className="IndexPage__available-activities__list-item__loader"
        type="Oval"
        color="#302ABF"
        height="100%"
        width="100%"
        timeout={0}
      />
    );
  }

  if (numberOfWorkers === 0) return null;

  const iconsToRender = icons?.slice(0, 3) ?? [];
  const placeholdersToRender = Array(3 - iconsToRender.length).fill(PlaceholderIcon);
  const others = numberOfWorkers - (iconsToRender.length + placeholdersToRender.length);

  return (
    <>
      {iconsToRender?.map((iconString, index) => (
        <div key={iconString + index} className="IndexPage__available-activities__list-item__member-icon">
          <img
            src={iconString}
            onError={e => {
              e.target.src = PlaceholderIcon;
            }}
            alt=""
          />
        </div>
      ))}
      {placeholdersToRender.map((Icon, index) => (
        <div key={'placeholder' + index} className="IndexPage__available-activities__list-item__member-icon">
          <img src={Icon} alt="" />
        </div>
      ))}
      {numberOfWorkers > 3 && others !== 0 ? (
        <div className="IndexPage__available-activities__list-item__number-icon">+{others}</div>
      ) : null}
    </>
  );
};

const Activity = ({ Icon, title, amount, priceData, isWeekly, icons, isLoading, t, numberOfWorkers }) => {
  const itemContent = (
    <div className="IndexPage__available-activities__list-item">
      <div className="IndexPage__available-activities__list-item__top">
        <div className="IndexPage__available-activities__list-item__icon-wrapper">
          <Icon className="IndexPage__available-activities__list-item__icon" />
        </div>
        <p className="IndexPage__available-activities__list-item__title">{title}</p>
        <ActivityListAmount amount={amount} priceData={priceData} isWeekly={isWeekly} t={t} />
        <ActivityArrowCTA mobile={true} t={t} />
      </div>
      <div className="IndexPage__available-activities__list-item__bottom">
        <div className="IndexPage__available-activities__list-item__member-icons">
          <ActivityIcons isLoading={isLoading} icons={icons} numberOfWorkers={numberOfWorkers} />
        </div>
        {numberOfWorkers === 0 && !isLoading ? (
          <div className="IndexPage__available-activities__list-item__place-for-you">
            <div className="IndexPage__available-activities__list-item__place-for-you__icon">
              <PlaceForYouIcon />
            </div>
            {t('landing.availableActivities.placeForYou')}
          </div>
        ) : null}
        <ActivityListAmount mobile={true} amount={amount} priceData={priceData} isWeekly={isWeekly} t={t} />
        <ActivityArrowCTA t={t} />
      </div>
    </div>
  );

  return (
    <a href="https://discord.gg/jq5VtcSuqj" target="_blank">
      {itemContent}
    </a>
  );
};

const AvailableActivities = ({ budgets, loading, priceData, t }) => {
  const [numberOfRenderedActivities, setNumberOfRenderedActivities] = useState(WORKER_ACTIVITIES.length);

  return (
    <section className="IndexPage__available-activities-wrapper">
      <div className="IndexPage__available-activities">
        <header className="IndexPage__available-activities__header">
          <h2 className="IndexPage__available-activities__header__title">{t('landing.availableActivities.title')}</h2>
        </header>
        <p className="IndexPage__available-activities__subtitle">{t('landing.availableActivities.subtitle')}</p>
        <div className="IndexPage__available-activities__list">
          {Object.keys(WORKER_ACTIVITIES)
            .slice(0, numberOfRenderedActivities)
            .map(activityKey => (
              <Activity
                key={activityKey}
                Icon={WORKER_ACTIVITIES[activityKey].icon}
                title={t(WORKER_ACTIVITIES[activityKey].title)}
                amount={budgets?.[activityKey]?.weeklyEarnings}
                priceData={priceData}
                isWeekly={true}
                icons={budgets?.[activityKey]?.icons}
                numberOfWorkers={budgets?.[activityKey]?.numberOfWorkers}
                isLoading={loading}
                t={t}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableActivities;
