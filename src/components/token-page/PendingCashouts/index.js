import React, { useState, useEffect } from 'react';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import CardCarousel from '../../../components/CardCarousel';

import useWindowDimensions from '../../../utils/useWindowDimensions';
import parseBalance from '../../../utils/parseBalance';
import formatDate from '../../../utils/formatDate';

import './style.scss';

const Cashout = ({ sourceAddress, tokensTransferred, blockNumber, amountUSD, exchangeNumber, exchangeDate, t }) => {
  const formattedDate = formatDate(exchangeDate);

  return (
    <div className="TokensPage__cashout">
      <div className="TokensPage__cashout__header">
        <p className="TokensPage__cashout__address-label">{t('token.cashouts.cashout.address')}</p>
        <p className="TokensPage__cashout__address">{sourceAddress}</p>
      </div>
      <div className="TokensPage__cashout__main">
        <p className="TokensPage__cashout__label">{t('token.cashouts.cashout.tokensTransferred')}</p>
        <p className="TokensPage__cashout__value">{tokensTransferred}</p>
      </div>
      <div className="TokensPage__cashout__info">
        <div className="TokensPage__cashout__info-item">
          <p className="TokensPage__cashout__label">{t('token.cashouts.cashout.usdValue')}</p>
          <p className="TokensPage__cashout__value TokensPage__cashout__value--small">{`$${amountUSD.toFixed(3)}`}</p>
        </div>
        <div className="TokensPage__cashout__info-item">
          <p className="TokensPage__cashout__label">{t('token.cashouts.cashout.blockNumber')}</p>
          <p className="TokensPage__cashout__value TokensPage__cashout__value--small">{blockNumber}</p>
        </div>
        <div className="TokensPage__cashout__info-item">
          <p className="TokensPage__cashout__label">
            {t('token.cashouts.cashout.exchangeNumber')}
            {exchangeNumber}
          </p>
          <p className="TokensPage__cashout__value TokensPage__cashout__value--small">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

const CASHOUT_ITEM_WIDTH_WITH_MARGIN = 395 + 20;
const CASHOUT_SMALL_ITEM_WIDTH_WITH_MARGIN = 320 + 20;

const PendingCashouts = ({ cashouts }) => {
  const { width } = useWindowDimensions();
  const [pendingCashouts, setPendingCashouts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (cashouts) {
      setPendingCashouts(cashouts.filter(cashout => cashout.status === 'PENDING'));
    }
  }, [cashouts]);

  return (
    <div className="TokensPage__cashouts-wrapper">
      <div className="TokensPage__cashouts">
        <h2 className="TokensPage__cashouts__title">{t('token.cashouts.title')}</h2>
        <h3 className="TokensPage__cashouts__subtitle">{t('token.cashouts.subtitle')}</h3>
        <CardCarousel
          scrollAmount={width > 991 ? CASHOUT_ITEM_WIDTH_WITH_MARGIN : CASHOUT_SMALL_ITEM_WIDTH_WITH_MARGIN}
        >
          {pendingCashouts.map((pendingCashout, index) => (
            <Cashout
              key={pendingCashout.sender + index}
              sourceAddress={pendingCashout.sender.substring(0, width > 991 ? 19 : 15) + '...'}
              tokensTransferred={parseBalance(pendingCashout.amount)}
              amountUSD={pendingCashout.amountUSD}
              blockNumber={pendingCashout.blockHeight}
              exchangeNumber={index + 1}
              exchangeDate={pendingCashout.date}
              t={t}
            />
          ))}
        </CardCarousel>
      </div>
    </div>
  );
};

export default PendingCashouts;
