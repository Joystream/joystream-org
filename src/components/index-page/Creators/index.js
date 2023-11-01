import React, { useState, useRef } from 'react';
import cn from 'classnames';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

import { parseDateToRelativeTime } from '../../../utils/pages/landing/parseDateToRelativeTime';
import useRemoveElementFocusOnKeydown from '../../../utils/useRemoveElementFocusOnKeydown';
import useImageFallback from '../../../utils/useImageFallback';

import PlaceholderIcon from '../../../assets/svg/empty-avatar.svg';
import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';
import { ReactComponent as ClockIcon } from '../../../assets/svg/landing/clock.svg';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus.svg';

import './style.scss';

const CarouselItem = ({ img, joyAmount, priceData, channelName, time, setIsCarouselRunning, channelUrl }) => {
  const [imgSrc, onError] = useImageFallback(img, PlaceholderIcon);
  let usdAmount = `$${(priceData.price * joyAmount).toFixed(2)}`;

  if (priceData.error) {
    usdAmount = 'Error';
  }

  return (
    <a href={channelUrl} target="_blank" rel="noreferrer">
      <div
        className="IndexPage__payouts-carousel__item"
        onMouseEnter={() => setIsCarouselRunning(true)}
        onMouseLeave={() => setIsCarouselRunning(false)}
      >
        <div className="IndexPage__payouts-carousel__item__image">
          <img src={imgSrc} onError={e => onError(e)} alt="" />
        </div>
        <div className="IndexPage__payouts-carousel__item__channel">
          <Trans i18nKey="landing.payouts.carousel.item.channel" components={{ span: <span />, channelName }} />
        </div>
        <div className="IndexPage__payouts-carousel__item__price">
          <PlusIcon className="IndexPage__payouts-carousel__item__price__icon" />
          <div className="IndexPage__payouts-carousel__item__price__text">
            <Trans i18nKey="landing.payouts.carousel.item.price" components={{ span: <span />, joyAmount }} />
          </div>
        </div>
        <p className="IndexPage__payouts-carousel__item__price-usd">{usdAmount}</p>
        <div className="IndexPage__payouts-carousel__item__time">
          <ClockIcon className="IndexPage__payouts-carousel__item__time__icon" /> {time}
        </div>
      </div>
    </a>
  );
};

const Carousel = ({ itemsData, priceData, t }) => {
  const [isCarouselRunning, setIsCarouselRunning] = useState(false);

  const items = itemsData.map(({ img, joyAmount, channelName, time, channelUrl }) => (
    <CarouselItem
      key={`${joyAmount}-${channelName}-${time}`}
      img={img}
      joyAmount={joyAmount}
      priceData={priceData}
      channelName={channelName}
      time={time}
      setIsCarouselRunning={setIsCarouselRunning}
      channelUrl={channelUrl}
      t={t}
    />
  ));

  return (
    <>
      <div
        className={cn('IndexPage__payouts-carousel__items', {
          'IndexPage__payouts-carousel__items--paused': isCarouselRunning,
        })}
      >
        {items}
      </div>
      <div
        className={cn('IndexPage__payouts-carousel__items', {
          'IndexPage__payouts-carousel__items--paused': isCarouselRunning,
        })}
        aria-hidden="true"
      >
        {items}
      </div>
    </>
  );
};

const Creators = ({ payouts, t, priceData }) => {
  const { language } = useI18next();
  const payoutsCarouselInfoLabelRef = useRef();
  useRemoveElementFocusOnKeydown(payoutsCarouselInfoLabelRef, ['Escape']);

  return (
    <section className="IndexPage__creators-wrapper">
      <div className="IndexPage__creators">
        <div className="IndexPage__creators__title-and-info">
          <h3 className="IndexPage__creators__title-and-info__title">Joystream Creators</h3>
          <div className="IndexPage__creators__title-and-info__info">
            <div
              className="IndexPage__creators__title-and-info__info__label"
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
              aria-describedby="IndexPage__creators__title-and-info__info__modal"
              ref={payoutsCarouselInfoLabelRef}
            >
              {t('landing.payouts.carousel.info.label')}
              <div className="IndexPage__creators__title-and-info__info__icon">
                <InfoIcon />
              </div>
            </div>
            <div
              role="tooltip"
              id="IndexPage__creators__title-and-info__info__modal"
              className="IndexPage__creators__title-and-info__info__modal"
            >
              {t('landing.payouts.carousel.info.text')}
            </div>
          </div>
        </div>
        <div className="IndexPage__creators__items-wrapper">
          {payouts && payouts.length > 0 ? (
            <Carousel
              itemsData={payouts?.map(({ createdAt, imageUrl, ...rest }) => ({
                img: imageUrl,
                time: parseDateToRelativeTime(createdAt, language),
                ...rest,
              }))}
              priceData={priceData}
              t={t}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Creators;
