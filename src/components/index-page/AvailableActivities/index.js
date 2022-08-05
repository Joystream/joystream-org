import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import Loader from 'react-loader-spinner';
import { Trans } from 'gatsby-plugin-react-i18next';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import PlaceholderIcon from '../../../assets/svg/non-FM-leaderboard-placeholder.svg';
import { ReactComponent as PlaceForYouIcon } from '../../../assets/svg/available-activities-icons/place-for-you.svg';

import useWindowDimensions from '../../../utils/useWindowDimensions';
import useAirtableData, { REFERRAL_ACTIVITY, WORKER_ACTIVITIES } from '../../../utils/pages/landing/useAirtableData';

import './style.scss';

const Activity = ({ Icon, title, amount, isWeekly, memberIcons, isLoading, isMobile, t }) => {
  const icons = memberIcons?.reduce((acc, curr) => {
    if(curr == undefined) {
      acc.others++;
      return acc;
    }

    if(acc.toRender.length < 3) {
      acc.toRender.push(curr);
      return acc;
    }

    acc.others++;
    return acc;
  }, { others: 0, toRender: [] }) ?? { others: 0, toRender: [] };

  const handleImageError = (e) => {
    e.target.src = PlaceholderIcon;
  }

  const listAmount = (
    <div className="IndexPage__available-activities__list-item__amount">
      <span className="IndexPage__available-activities__list-item__amount__dollar-sign">$</span>
      {amount ? Math.floor(amount) : 0}
      {isWeekly && (
        <span className="IndexPage__available-activities__list-item__amount__weekly">
          {t('landing.availableActivities.weekly')}
        </span>
      )}
    </div>
  );

  const renderIcons = () => {
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

    return (
      <>
        {icons?.toRender?.map((iconString, index) => (
          <div key={iconString + index} className="IndexPage__available-activities__list-item__member-icon">
            <img src={iconString} onError={handleImageError} alt="" />
          </div>
        ))}
        {icons?.toRender?.length === 3 && icons?.others !== 0 ? (
          <div className="IndexPage__available-activities__list-item__number-icon">+{icons.others}</div>
        ) : null}
      </>
    );
  };

  const arrowCta = (
    <div className="IndexPage__available-activities__list-item__cta">
      {isMobile ? null : t('landing.availableActivities.chatWithIntegrator')}
      <ArrowIcon className="IndexPage__available-activities__list-item__cta-icon" />
    </div>
  );

  const itemContent = (
    <div className={cn("IndexPage__available-activities__list-item", {
      "IndexPage__available-activities__list-item--mobile": isMobile
    })}>
      <div className="IndexPage__available-activities__list-item__top">
        <div className="IndexPage__available-activities__list-item__icon-wrapper" >
          <Icon className="IndexPage__available-activities__list-item__icon" />
        </div>
        <p className="IndexPage__available-activities__list-item__title">{title}</p>
        {isMobile ? arrowCta : listAmount}
      </div>
      <div className="IndexPage__available-activities__list-item__bottom">
        <div className='IndexPage__available-activities__list-item__member-icons'>
          {renderIcons()}
        </div>
        {icons?.toRender?.length === 0 && !isLoading ? (
          <div className='IndexPage__available-activities__list-item__place-for-you'>
            <div className='IndexPage__available-activities__list-item__place-for-you__icon'>
              <PlaceForYouIcon />  
            </div>
            {t("landing.availableActivities.placeForYou")}
          </div>
        ) : null}
        {isMobile ? listAmount : arrowCta}
      </div>
    </div>
  );

  if(!isLoading && icons?.toRender?.length === 0 && icons?.others === 0) {
    return null;
  }

  return (
    <a href="https://discord.gg/jq5VtcSuqj" target="_blank">
      {itemContent}
    </a>
  );
}

const AvailableActivities = ({ t }) => {
  const { activityAmounts, referralAmount, activityIcons, referralIcons } = useAirtableData();
  const [numberOfRenderedActivities, setNumberOfRenderedActivities] = useState(WORKER_ACTIVITIES.length);
  const { width } = useWindowDimensions();
  const isMobile = width && width <= 650;

  useEffect(() => {
    if(width) {
      setNumberOfRenderedActivities(width < 1400 ? 3 : WORKER_ACTIVITIES.length); 
    }
  }, [width]);

  return (
    <div className="IndexPage__available-activities-wrapper">
      <div className="IndexPage__available-activities">
        <h2 className="IndexPage__available-activities__title">
          <Trans i18nKey="landing.availableActivities.title" components={{ br: <br/> }} />
        </h2>
        <p className="IndexPage__available-activities__subtitle">{t("landing.availableActivities.subtitle")}</p>
        <div className="IndexPage__available-activities__list">
          <Activity
            Icon={REFERRAL_ACTIVITY.icon}
            title={t(REFERRAL_ACTIVITY.title)}
            amount={referralAmount}
            memberIcons={referralIcons.data}
            isLoading={referralIcons.isLoading}
            isMobile={isMobile}
            t={t}
          />
          {Object.keys(WORKER_ACTIVITIES)
            .slice(0, numberOfRenderedActivities)
            .map(activityKey => (
              <Activity
                key={activityKey}
                Icon={WORKER_ACTIVITIES[activityKey].icon}
                title={t(WORKER_ACTIVITIES[activityKey].title)}
                amount={activityAmounts?.[activityKey]?.amountEarned}
                isWeekly={true}
                memberIcons={activityIcons.data?.[activityKey]?.memberAvatars}
                isLoading={activityIcons.isLoading}
                isMobile={isMobile}
                t={t}
              />
            ))}
        </div>
        {width < 1400 && numberOfRenderedActivities < Object.keys(WORKER_ACTIVITIES).length ? (
          <div
            className="IndexPage__available-activities__show-more"
            onClick={() => setNumberOfRenderedActivities(prev => prev + 1)}
            role="presentation"
          >
            {t("landing.availableActivities.showMore")} <ArrowIcon className="IndexPage__available-activities__show-more__arrow-icon" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AvailableActivities;
