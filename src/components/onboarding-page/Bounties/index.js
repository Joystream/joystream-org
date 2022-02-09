import React, { useState, useEffect } from 'react';
import useAxios from '../../../utils/useAxios';
import { bountiesLink } from '../../../data/pages/get-started';
import convertToCamelCase from '../../../utils/convertToCamelCase';
import parseDate from '../../../utils/parseDate';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import './style.scss';

const Bounties = ({ t, renderChatWithIntegrator, onChatWithIntegrator }) => {
  const [data, loading, error] = useAxios(bountiesLink);

  const [bounties, setBounties] = useState();
  const showMoreLimit = 4;
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (data && !loading) {
      setBounties(data?.activeBounties);
    }
  }, [data, loading]);

  const getBounties = () => {
    if (showMore) {
      return bounties.sort((a, b) => new Date(b.openedDate) - new Date(a.openedDate));
    }
    return bounties.sort((a, b) => new Date(b.openedDate) - new Date(a.openedDate)).slice(0, showMoreLimit);
  };

  return (
    <div className="Bounties__wrapper">
      <div className="Bounties__content">
        <h2 className="Bounties__title">{t('onboarding.page6.bounties.title')}</h2>
        <h4 className="Bounties__subtitle">{t('onboarding.page6.bounties.text')}</h4>

        <div className="Bounties__bounties-carousel">
          {bounties &&
            getBounties().map((bounty, idx) => {
              return (
                <BountiesCard
                  key={bounty?.title + idx}
                  title={bounty?.title}
                  amount={bounty?.reward}
                  categories={bounty?.tags}
                  date={bounty?.openedDate}
                  id={bounty?.id}
                  link={bounty?.links[0]}
                  description={bounty?.description}
                  onChatWithIntegrator={onChatWithIntegrator}
                  renderChatWithIntegrator={renderChatWithIntegrator}
                  t={t}
                />
              );
            })}
        </div>
        <div role="presentation" className="Bounties__showMore" onClick={() => setShowMore(prev => !prev)}>
          {t(showMore ? 'onboarding.page6.bounties.showLess' : 'onboarding.page6.bounties.showMore')}
        </div>
      </div>
    </div>
  );
};

const BountiesCard = ({
  title,
  amount,
  categories,
  date,
  id,
  link,
  description,
  t,
  renderChatWithIntegrator,
  onChatWithIntegrator,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const BountyCardContent = (
    <div className="Bounties__bounties-carousel__card">
      <div className="Bounties__bounties-carousel__top">
        <p className="Bounties__bounties-carousel__amount">
          <span className="Bounties__bounties-carousel__amount--amount">${amount}</span>
          {t('onboarding.page6.bounties.payoutCurrency')}
        </p>
      </div>
      <div className="Bounties__bounties-carousel__title">
        {title.length > 50 ? title.substring(0, 50) + '...' : title}
      </div>
      <div className="Bounties__bounties-carousel__text">{description}</div>
      <div className="Bounties__bounties-carousel__bottom">
        <div className="Bounties__bounties-carousel__card-filters">
          {categories?.map(category => (
            <div key={title + category} className="Bounties__bounties-carousel__card-filter">
              {t(`getStarted.opportunities.bountiesCarousel.${convertToCamelCase(category)}`)}
            </div>
          ))}
        </div>
        <p className="Bounties__bounties-carousel__date">{parseDate(date)}</p>
        <div className="Bounties__bounties-carousel__bounty-id">{id ? id : null}</div>
      </div>
      {renderChatWithIntegrator && isHovered && (
        <div role="presentation" className="Bounties__bounties-carousel__link" onClick={onChatWithIntegrator}>
          <p className="Bounties__bounties-carousel__link-text">{t('onboarding.button.chatIntegrator.text')}</p>
          <Arrow className="Bounties__bounties-carousel__link-arrow" />
        </div>
      )}
    </div>
  );
  if (renderChatWithIntegrator) {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="Bounties__bounties-carousel__card-wrapper-link"
      >
        {BountyCardContent}
      </div>
    );
  }

  return (
    <a
      className="Bounties__bounties-carousel__card-wrapper-link"
      rel="noreferrer"
      target="_blank"
      href={link ? link : '#'}
    >
      {BountyCardContent}
    </a>
  );
};

export default Bounties;
