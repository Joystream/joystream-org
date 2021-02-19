import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { ReactComponent as Arrow } from '../../../../assets/svg/arrow-down-small.svg';
import List from '../../../../components/CardCarousel';
import useAxios from '../../../../utils/useAxios';
import { bountiesLink } from '../../../../data/pages/get-started';

import './style.scss';

const parseDate = dateString => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);
  const parsedDate = `${date.toLocaleString('default', { month: 'short' })}. ${date.getDate()} ${date.getFullYear()}`;

  return parsedDate;
};

const BountiesCard = ({ title, amount, categories, date, id, link, description }) => {
  const parsedDate = date ? new Date(date) : null;

  return (
    <a target="_blank" href={link ? link : '#'}>
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
              <div key={title + category} className="GetStarted__bounties-carousel__card-filter">
                {category}
              </div>
            ))}
          </div>
          <Arrow className="GetStarted__bounties-carousel__arrow" />
        </div>
      </div>
    </a>
  );
};

const BountiesCarousel = () => {
  const [data, loading, error] = useAxios(bountiesLink);

  const [filterState, setFilterState] = useState('All');
  const [categoryValues, setCategoryValues] = useState({
    All: 0,
    Coding: 0,
    Design: 0,
    Marketing: 0,
    Research: 0,
    Content: 0,
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
          All ({categoryValues.All})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Coding',
          })}
          onClick={() => setFilterState('Coding')}
        >
          Coding ({categoryValues.Coding})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Design',
          })}
          onClick={() => setFilterState('Design')}
        >
          Design ({categoryValues.Design})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Marketing',
          })}
          onClick={() => setFilterState('Marketing')}
        >
          Marketing ({categoryValues.Marketing})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Research',
          })}
          onClick={() => setFilterState('Research')}
        >
          Research ({categoryValues.Research})
        </button>
        <button
          className={cn('GetStarted__bounties-carousel__filter', {
            'GetStarted__bounties-carousel__filter--active': filterState === 'Content',
          })}
          onClick={() => setFilterState('Content')}
        >
          Content creation ({categoryValues.Content})
        </button>
      </div>
      <List>
        <div className="GetStarted__bounties-carousel">
          {bounties?.map((bounty, idx) => {
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
                  />
                );
              }

              return null;
            }
          })}
        </div>
      </List>
    </div>
  );
};

export default BountiesCarousel;
