import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';

import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import { testnetData } from '../../../data/pages';

import './style.scss';

const RoadMain = ({ Image, state, date, name, link, t }) => (
  <div className="IndexPage__road-main">
    <Link to={link}>
      <div className="IndexPage__road-main__image-wrapper">
        {Image && <img alt="testnet visual" src={Image} className="IndexPage__road-main__image" />}
      </div>
    </Link>
    <div className="IndexPage__road-main__content">
      <div className="IndexPage__road-main__info-wrapper">
        <div className="IndexPage__road-main__state">{t(`landing.roadToMainnet.testnetState.${state}`)}</div>
        <p className="IndexPage__road-main__date">
          {t(`landing.roadToMainnet.released.${state}`)} <span>{date}</span>
        </p>
      </div>
      <h3 className="IndexPage__road-main__title">{t(`landing.roadToMainnet.testnets.${name}.title`)}</h3>
      <p className="IndexPage__road-main__text">{t(`landing.roadToMainnet.testnets.${name}.text`)}</p>
      {link ? (
        <Link className="IndexPage__road-main__link-wrapper" to={link}>
          <div className="IndexPage__road-main__link">
            <p>{t(`landing.roadToMainnet.testnets.${name}.explore`)}</p>
            <Arrow className="IndexPage__road-main__link-arrow" />
          </div>
        </Link>
      ) : null}
    </div>
  </div>
);

const RoadOverviewItem = ({
  testnetNumber,
  Image,
  name,
  date,
  state,
  active,
  moveToCard,
  index,
  overviewItemRef,
  t,
}) => {
  return (
    <div
      ref={overviewItemRef}
      role="presentation"
      onClick={() => moveToCard(index)}
      className={cn('IndexPage__road-overview__item', {
        'IndexPage__road-overview__item--active': active,
      })}
    >
      <div className="IndexPage__road-overview__item__image-wrapper">
        <div className="IndexPage__road-overview__item__testnet-number">{testnetNumber}</div>
        <img alt="tesnet visual" src={Image} className="IndexPage__road-overview__item__image" />
      </div>
      <div className="IndexPage__road-overview__item__content">
        <h4
          className={cn('IndexPage__road-overview__item__title', {
            'IndexPage__road-overview__item__title--active': active,
          })}
        >
          {t(`landing.roadToMainnet.testnets.${name}.title`)}
        </h4>
        <p
          className={cn('IndexPage__road-overview__item__date', {
            'IndexPage__road-overview__item__date--active': active,
          })}
        >
          {t(`landing.roadToMainnet.released.${state}`)}
          <span
            className={
              active ? 'IndexPage__road-overview__item__date--active' : 'IndexPage__road-overview__item__date--alt'
            }
          >
            {date}
          </span>
        </p>
        <div
          className={cn('IndexPage__road-overview__item__state', {
            'IndexPage__road-overview__item__state--active': active,
          })}
        >
          {t(`landing.roadToMainnet.testnetState.${state}`)}
        </div>
      </div>
    </div>
  );
};

const CARD_LENGTH_WITH_MARGIN = 422;
const CARD_LENGTH = 392;

const RoadToMainnet = ({ t }) => {
  const overviewRef = useRef();
  const activeOverviewItemRef = useRef();
  const [currentTestnet, setCurrentTestnet] = useState(0);

  const moveRight = () => {
    if (testnetData.length - 1 !== currentTestnet) {
      setCurrentTestnet(prev => prev + 1);
    }
  };

  const moveLeft = () => {
    if (currentTestnet !== 0) {
      setCurrentTestnet(prev => prev - 1);
    }
  };

  useEffect(() => {
    let itemPosition = currentTestnet * CARD_LENGTH_WITH_MARGIN;
    const widthOfContainer = overviewRef?.current?.offsetWidth;
    const containerOffsetLeft = overviewRef?.current?.scrollLeft;

    if (widthOfContainer != null && containerOffsetLeft != null) {
      const offsetRelativeToContainer = itemPosition - containerOffsetLeft;

      overviewRef.current.scrollBy({
        left: offsetRelativeToContainer - (widthOfContainer / 2 - CARD_LENGTH / 2),
        behavior: 'smooth',
      });
    }
  }, [currentTestnet]);

  const moveToCard = cardToMoveTo => setCurrentTestnet(cardToMoveTo);

  return (
    <div className="IndexPage__road-wrapper">
      <div className="IndexPage__road">
        <h2 className="IndexPage__road__title">{t("landing.roadToMainnet.title")}</h2>
        <div className="IndexPage__road-main-wrapper">
          <div onClick={() => moveLeft()} role="presentation" className="IndexPage__road-main__arrow-wrapper">
            <Arrow className="IndexPage__road-main__arrow" />
          </div>
          <RoadMain
            Image={testnetData[currentTestnet].Image}
            state={testnetData[currentTestnet].state}
            date={testnetData[currentTestnet].date}
            name={testnetData[currentTestnet].name}
            overviewText={testnetData[currentTestnet].overviewText}
            link={testnetData[currentTestnet].link}
            t={t}
          />
          <div onClick={() => moveRight()} role="presentation" className="IndexPage__road-main__arrow-wrapper">
            <Arrow className="IndexPage__road-main__arrow IndexPage__road-main__arrow--reverse" />
          </div>
        </div>
        <div ref={overviewRef} className="IndexPage__road-overview">
          {testnetData.map((testnet, index) => (
            <RoadOverviewItem
              key={testnet.name + index}
              testnetNumber={testnet.number}
              Image={testnet.Image}
              name={testnet.name}
              date={testnet.date}
              state={testnet.state}
              active={index === currentTestnet}
              moveToCard={moveToCard}
              index={index}
              overviewItemRef={index === currentTestnet ? activeOverviewItemRef : null}
              t={t}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadToMainnet;
