import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { ReactComponent as Arrow } from '../../../../assets/svg/arrow-down-small.svg';
import CardCarousel from '../../../../components/CardCarousel';
import useAxios from '../../../../utils/useAxios';
import { bountiesLink } from '../../../../data/pages/get-started';
import convertToCamelCase from '../../../../utils/convertToCamelCase';
import parseDate from '../../../../utils/parseDate';

import './style.scss';

const BountiesCard = ({ title, amount, categories, date, id, link, description, t }) => {
  return (
    <a className="GetStarted__bounties-carousel__card-wrapper-link" target="_blank" href={link ? link : '#'}>
      <div className="GetStarted__bounties-carousel__card">
        <div className="GetStarted__bounties-carousel__top">
          <p className="GetStarted__bounties-carousel__amount">${amount}</p>
          <p className="GetStarted__bounties-carousel__date">{parseDate(date)}</p>
          <div className="GetStarted__bounties-carousel__bounty-id">{id ? id : null}</div>
        </div>
        <div className="GetStarted__bounties-carousel__title">
          {title.length > 50 ? title.substring(0, 50) + '...' : title}
        </div>
        <div className="GetStarted__bounties-carousel__text">{description}</div>
        <div className="GetStarted__bounties-carousel__bottom">
          <div className="GetStarted__bounties-carousel__card-filters">
            {categories?.map(category => (
              <div
                key={title + category}
                className={`
                  GetStarted__bounties-carousel__card-filter
                  GetStarted__bounties-carousel__card-filter--${category.toLowerCase()}
                `}
              >
                {t(`getStarted.opportunities.bountiesCarousel.${convertToCamelCase(category)}`)}
              </div>
            ))}
          </div>
          <Arrow className="GetStarted__bounties-carousel__arrow" />
        </div>
      </div>
    </a>
  );
};

const CARD_SIZE_WITH_MARGIN = 405;

const BountiesCarousel = ({ t }) => {
  const [data, loading, error] = useAxios(bountiesLink);

  const [filterState, setFilterState] = useState('All');
  const [categoryValues, setCategoryValues] = useState({
    All: 0,
    Coding: 0,
    Design: 0,
    Marketing: 0,
    Research: 0,
    Content: 0,
    Translation: 0,
  });
  const [bounties, setBounties] = useState();

  useEffect(() => {
    if (data && !loading) {
      const tempCategoryValues = {
        All: 0,
        Coding: 0,
        Design: 0,
        Marketing: 0,
        Research: 0,
        Content: 0,
        Translation: 0,
      };

      data.activeBounties.forEach(bounty => {
        bounty.tags.forEach(category => {
          tempCategoryValues[category]++;
        });
        tempCategoryValues['All']++;
      });

      setCategoryValues(tempCategoryValues);
      setBounties(data?.activeBounties);
    }
  }, [data]);

  return (
    <div className="GetStarted__bounties-carousel-wrapper">
      <div className="GetStarted__bounties-carousel__filters">
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'All',
          })}
          onClick={() => setFilterState('All')}
        >
          {t('getStarted.opportunities.bountiesCarousel.all')} ({categoryValues.All})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Coding',
          })}
          onClick={() => setFilterState('Coding')}
        >
          <div className="GetStarted__bounties-carousel__filter-circle GetStarted__bounties-carousel__filter-circle--coding"></div>
          {t('getStarted.opportunities.bountiesCarousel.coding')} ({categoryValues.Coding})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Design',
          })}
          onClick={() => setFilterState('Design')}
        >
          <div className="GetStarted__bounties-carousel__filter-circle GetStarted__bounties-carousel__filter-circle--design"></div>
          {t('getStarted.opportunities.bountiesCarousel.design')} ({categoryValues.Design})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Marketing',
          })}
          onClick={() => setFilterState('Marketing')}
        >
          <div className="GetStarted__bounties-carousel__filter-circle GetStarted__bounties-carousel__filter-circle--marketing"></div>
          {t('getStarted.opportunities.bountiesCarousel.marketing')} ({categoryValues.Marketing})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Research',
          })}
          onClick={() => setFilterState('Research')}
        >
          <div className="GetStarted__bounties-carousel__filter-circle GetStarted__bounties-carousel__filter-circle--research"></div>
          {t('getStarted.opportunities.bountiesCarousel.research')} ({categoryValues.Research})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Content',
          })}
          onClick={() => setFilterState('Content')}
        >
          <div className="GetStarted__bounties-carousel__filter-circle GetStarted__bounties-carousel__filter-circle--content"></div>
          {t('getStarted.opportunities.bountiesCarousel.contentCreation')} ({categoryValues.Content})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Translation',
          })}
          onClick={() => setFilterState('Translation')}
        >
          <div className="GetStarted__bounties-carousel__filter-circle GetStarted__bounties-carousel__filter-circle--translation"></div>
          {t('getStarted.opportunities.bountiesCarousel.translation')} ({categoryValues.Translation})
        </button>
      </div>
      <CardCarousel scrollAmount={CARD_SIZE_WITH_MARGIN}>
        <div className="GetStarted__bounties-carousel">
          {bounties
            ?.sort((a, b) => new Date(b.openedDate) - new Date(a.openedDate))
            .map((bounty, idx) => {
              if (filterState === 'All') {
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
                    t={t}
                  />
                );
              } else {
                const categories = bounty?.tags;

                if (categories && categories.includes(filterState)) {
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
                      t={t}
                    />
                  );
                }

                return null;
              }
            })}
        </div>
      </CardCarousel>
    </div>
  );
};

export default BountiesCarousel;
