import React, { useState, useRef } from 'react';
import cn from 'classnames';
import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';

import { parseDateToRelativeTime } from '../../../utils/pages/landing/parseDateToRelativeTime';
import useRemoveElementFocusOnKeydown from '../../../utils/useRemoveElementFocusOnKeydown';
import useImageFallback from '../../../utils/useImageFallback';

import PlaceholderIcon from '../../../assets/svg/empty-avatar.svg';
import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';
import { ReactComponent as ClockIcon } from '../../../assets/svg/landing/clock.svg';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus.svg';

import './style.scss';

const CarouselItem = ({
  img,
  joyAmount = undefined,
  priceData,
  channelName,
  setIsCarouselRunning,
  channelUrl,
  followersCount,
  t,
}) => {
  const [imgSrc, onError] = useImageFallback(img, PlaceholderIcon);
  let usdAmount = `$0`;

  if (priceData.price && joyAmount !== undefined) {
    usdAmount = `$${Math.round(priceData.price * joyAmount)}`;
  }

  if (priceData.error) {
    usdAmount = 'Error';
  }

  return (
    <a href={channelUrl} target="_blank" rel="noreferrer">
      <div
        className="IndexPage__creators__item"
        onMouseEnter={() => setIsCarouselRunning(true)}
        onMouseLeave={() => setIsCarouselRunning(false)}
      >
        <div className="IndexPage__creators__item__channel">
          <div className="IndexPage__creators__item__channel__image">
            <img src={imgSrc} onError={e => onError(e)} alt="" />
          </div>
          <div className="IndexPage__creators__item__channel__info">
            <div className="IndexPage__creators__item__channel__info__name">{channelName}</div>
            <div className="IndexPage__creators__item__channel__info__followers">
              {followersCount} {t('landing.creators.followers')}
            </div>
          </div>
        </div>
        <div className="IndexPage__creators__item__earned">{t('landing.creators.earned')}</div>
        <div className="IndexPage__creators__item__price">{usdAmount}</div>
      </div>
    </a>
  );
};

const Carousel = ({ itemsData, priceData, t }) => {
  const [isCarouselRunning, setIsCarouselRunning] = useState(false);

  const items = itemsData.map(({ img, amount, title, channelUrl, followsNum }) => (
    <CarouselItem
      key={`${amount}-${title}`}
      img={img}
      joyAmount={amount}
      priceData={priceData}
      channelName={title}
      setIsCarouselRunning={setIsCarouselRunning}
      channelUrl={channelUrl}
      followersCount={followsNum}
      t={t}
    />
  ));

  return (
    <>
      <div
        className={cn('IndexPage__creators__items', {
          'IndexPage__creators__items--paused': isCarouselRunning,
        })}
      >
        {items}
      </div>
      <div
        className={cn('IndexPage__creators__items', {
          'IndexPage__creators__items--paused': isCarouselRunning,
        })}
        aria-hidden="true"
      >
        {items}
      </div>
    </>
  );
};

const Creators = ({ creators, t, priceData }) => {
  const { language } = useI18next();
  const payoutsCarouselInfoLabelRef = useRef();
  useRemoveElementFocusOnKeydown(payoutsCarouselInfoLabelRef, ['Escape']);

  return (
    <section className="IndexPage__creators-wrapper">
      <div className="IndexPage__creators">
        <div className="IndexPage__creators__title-and-info">
          <h3 className="IndexPage__creators__title-and-info__title">{t('landing.creators.title')}</h3>
          <div className="IndexPage__creators__title-and-info__info">
            <div
              className="IndexPage__creators__title-and-info__info__label"
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
              aria-describedby="IndexPage__creators__title-and-info__info__modal"
              ref={payoutsCarouselInfoLabelRef}
            >
              {t('landing.creators.info.label')}
              <div className="IndexPage__creators__title-and-info__info__icon">
                <InfoIcon />
              </div>
            </div>
            <div
              role="tooltip"
              id="IndexPage__creators__title-and-info__info__modal"
              className="IndexPage__creators__title-and-info__info__modal"
            >
              <Trans i18nKey={'landing.creators.info.text'} components={{ exchanges: <Link to="/token#exchanges" /> } } />
            </div>
          </div>
        </div>
      </div>
      <div className="IndexPage__creators__items-wrapper">
        {creators && creators.length > 0 ? (
          <Carousel
            itemsData={creators?.map(({ imageUrl, ...rest }) => ({
              img: imageUrl,
              // time: parseDateToRelativeTime(createdAt, language),
              ...rest,
            }))}
            priceData={priceData}
            t={t}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Creators;
