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

const CarouselItem = ({
  img,
  joyAmount = undefined,
  priceData,
  channelName,
  setIsCarouselRunning,
  channelUrl,
  followersCount,
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
            <div className="IndexPage__creators__item__channel__info__followers">{followersCount} followers</div>
          </div>
        </div>
        <div className="IndexPage__creators__item__earned">Earned:</div>
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

// TODO: To remove data
const CREATORS_PLACEHOLDER_DATA = [
  {
    followsNum: 10,
    amount: '115909',
    imageUrl: [
      'https://dist1.joyutils.org/distributor/api/v1/assets/50769',
      'https://distributor.adovrn.xyz/distributor/api/v1/assets/50769',
      'https://tokyo.0x2bc.com/distributor/api/v1/assets/50769',
      'https://sieemmanodes.com/distributor/api/v1/assets/50769',
      'https://dwg.joystream.name/distributor/api/v1/assets/50769',
      'https://distributor-node.mms.team/distributor/api/v1/assets/50769',
      'https://nodelefrog.store/distributor/api/v1/assets/50769',
    ],
    channelUrl: 'https://gleev.xyz/channel/26499',
    title: 'Trigs',
  },
  {
    followsNum: 2,
    amount: '72727',
    imageUrl: [
      'https://dist1.joyutils.org/distributor/api/v1/assets/63633',
      'https://jstrm.numisma.cc/distributor/api/v1/assets/63633',
      'https://distributor.adovrn.xyz/distributor/api/v1/assets/63633',
      'https://tokyo.0x2bc.com/distributor/api/v1/assets/63633',
      'https://sieemmanodes.com/distributor/api/v1/assets/63633',
      'https://dwg.joystream.name/distributor/api/v1/assets/63633',
      'https://distributor-node.mms.team/distributor/api/v1/assets/63633',
      'https://nodelefrog.store/distributor/api/v1/assets/63633',
    ],
    channelUrl: 'https://gleev.xyz/channel/26510',
    title: 'Cryptoinvestor Max',
  },
  {
    followsNum: 2,
    amount: '71900',
    imageUrl: [
      'https://distributor.adovrn.xyz/distributor/api/v1/assets/4544',
      'https://tokyo.0x2bc.com/distributor/api/v1/assets/4544',
      'https://sieemmanodes.com/distributor/api/v1/assets/4544',
      'https://nodelefrog.store/distributor/api/v1/assets/4544',
      'https://dwg.joystream.name/distributor/api/v1/assets/4544',
    ],
    channelUrl: 'https://gleev.xyz/channel/25773',
    title: 'Crypto Clarity',
  },
  {
    followsNum: 5,
    amount: '68181',
    imageUrl: [
      'https://jstrm.numisma.cc/distributor/api/v1/assets/48402',
      'https://distributor.adovrn.xyz/distributor/api/v1/assets/48402',
      'https://tokyo.0x2bc.com/distributor/api/v1/assets/48402',
      'https://sieemmanodes.com/distributor/api/v1/assets/48402',
      'https://dwg.joystream.name/distributor/api/v1/assets/48402',
      'https://distributor-node.mms.team/distributor/api/v1/assets/48402',
      'https://nodelefrog.store/distributor/api/v1/assets/48402',
    ],
    channelUrl: 'https://gleev.xyz/channel/26486',
    title: 'Crypto Fanat',
  },
  {
    followsNum: 2,
    amount: '52272',
    imageUrl: [
      'https://dist1.joyutils.org/distributor/api/v1/assets/48311',
      'https://jstrm.numisma.cc/distributor/api/v1/assets/48311',
      'https://distributor.adovrn.xyz/distributor/api/v1/assets/48311',
      'https://tokyo.0x2bc.com/distributor/api/v1/assets/48311',
      'https://sieemmanodes.com/distributor/api/v1/assets/48311',
      'https://dwg.joystream.name/distributor/api/v1/assets/48311',
      'https://distributor-node.mms.team/distributor/api/v1/assets/48311',
      'https://nodelefrog.store/distributor/api/v1/assets/48311',
    ],
    channelUrl: 'https://gleev.xyz/channel/26485',
    title: 'Crypto Lee',
  },
  {
    followsNum: 1,
    amount: '52272',
    imageUrl: [
      'https://dist1.joyutils.org/distributor/api/v1/assets/63727',
      'https://jstrm.numisma.cc/distributor/api/v1/assets/63727',
      'https://distributor.adovrn.xyz/distributor/api/v1/assets/63727',
      'https://tokyo.0x2bc.com/distributor/api/v1/assets/63727',
      'https://sieemmanodes.com/distributor/api/v1/assets/63727',
      'https://dwg.joystream.name/distributor/api/v1/assets/63727',
      'https://distributor-node.mms.team/distributor/api/v1/assets/63727',
      'https://nodelefrog.store/distributor/api/v1/assets/63727',
    ],
    channelUrl: 'https://gleev.xyz/channel/26512',
    title: 'CRYPTOLORE',
  },
  {
    followsNum: 1,
    amount: '45454',
    imageUrl: [
      'https://jstrm.numisma.cc/distributor/api/v1/assets/62810',
      'https://distributor.adovrn.xyz/distributor/api/v1/assets/62810',
      'https://tokyo.0x2bc.com/distributor/api/v1/assets/62810',
      'https://sieemmanodes.com/distributor/api/v1/assets/62810',
      'https://dwg.joystream.name/distributor/api/v1/assets/62810',
      'https://distributor-node.mms.team/distributor/api/v1/assets/62810',
      'https://nodelefrog.store/distributor/api/v1/assets/62810',
    ],
    channelUrl: 'https://gleev.xyz/channel/26491',
    title: 'Flash Verse',
  },
  {
    followsNum: 0,
    amount: '45454',
    imageUrl: [
      'https://dist1.joyutils.org/distributor/api/v1/assets/61014',
      'https://jstrm.numisma.cc/distributor/api/v1/assets/61014',
      'https://tokyo.0x2bc.com/distributor/api/v1/assets/61014',
      'https://sieemmanodes.com/distributor/api/v1/assets/61014',
      'https://dwg.joystream.name/distributor/api/v1/assets/61014',
      'https://distributor-node.mms.team/distributor/api/v1/assets/61014',
      'https://nodelefrog.store/distributor/api/v1/assets/61014',
    ],
    channelUrl: 'https://gleev.xyz/channel/26503',
    title: 'Crypto House',
  },
  {
    followsNum: 1,
    amount: '40700',
    imageUrl: [
      'https://dist1.joyutils.org/distributor/api/v1/assets/16209',
      'https://tokyo.0x2bc.com/distributor/api/v1/assets/16209',
      'https://sieemmanodes.com/distributor/api/v1/assets/16209',
      'https://distributor-node.mms.team/distributor/api/v1/assets/16209',
      'https://nodelefrog.store/distributor/api/v1/assets/16209',
    ],
    channelUrl: 'https://gleev.xyz/channel/23788',
    title: 'ЮРАШ CRYPTO NFT',
  },
  {
    followsNum: 6,
    amount: '37700',
    imageUrl: [
      'https://distributor.adovrn.xyz/distributor/api/v1/assets/4191',
      'https://tokyo.0x2bc.com/distributor/api/v1/assets/4191',
      'https://sieemmanodes.com/distributor/api/v1/assets/4191',
      'https://nodelefrog.store/distributor/api/v1/assets/4191',
      'https://dwg.joystream.name/distributor/api/v1/assets/4191',
    ],
    channelUrl: 'https://gleev.xyz/channel/25763',
    title: 'Лунный инвестор',
  },
];

const Creators = ({ creators, t, priceData }) => {
  const { language } = useI18next();
  const payoutsCarouselInfoLabelRef = useRef();
  useRemoveElementFocusOnKeydown(payoutsCarouselInfoLabelRef, ['Escape']);

  // TODO: Remove placeholder data and revert these changes:
  creators = CREATORS_PLACEHOLDER_DATA;
  priceData = {
    price: 0.05,
    error: null,
  };

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
