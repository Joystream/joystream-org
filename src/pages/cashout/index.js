import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { types } from '@joystream/types';
import { JoystreamWSProvider } from '../../data/shared';
import axios from 'axios';

// components
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';
import CashoutForm from '../../components/cashout-page/Form';
import { ArrowButton } from '../founding-members/index';

// utils
import getBchValue from '../../utils/getBchValue';

import './style.scss';

const STATUS_SERVER_URL = 'https://status-giza.joystream.app/status';
const CURRENCY_DATA_STORAGE_KEY = 'CashoutDataJoystream';
const CURRENCY_DATA_TIMEOUT_IN_SECONDS = 5 * 60;

const CashoutPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const [{ Api, ApiError }, setApiData] = useState({ Api: null, ApiError: false });
  const [{ joyInDollars, bchInDollars, error: currencyDataError }, setCurrencyData] = useState({
    joyInDollars: null,
    bchInDollars: null,
    error: false,
  });

  useEffect(() => {
    async function setUpApi() {
      try {
        const provider = new WsProvider(JoystreamWSProvider);

        // Attach error and disconnect listeners to set ApiError to true in case something goes wrong.
        provider.on('error', () => setApiData({ Api: null, ApiError: true }));
        provider.on('disconnect', () => setApiData({ Api: null, ApiError: true }));

        const api = await ApiPromise.create({ provider, types });
        await api.isReady;

        setApiData({ Api: api, ApiError: false });
      } catch (e) {
        setApiData({ Api: null, ApiError: true });
      }
    }
    setUpApi();
  }, []);

  useEffect(() => {
    const getStatusData = async () => {
      try {
        const response = await axios.get(STATUS_SERVER_URL);
        if (response.status === 200) {
          setCurrencyData(prev => ({ ...prev, joyInDollars: response.data.price, error: false }));
        } else {
          setCurrencyData(prev => ({ ...prev, error: true }));
        }
      } catch (e) {
        setCurrencyData(prev => ({ ...prev, error: true }));
      }
    };

    const getBchData = async () => {
      const bchValue = await getBchValue();

      setCurrencyData(prev => ({ ...prev, bchInDollars: bchValue }));
      localStorage.setItem(
        CURRENCY_DATA_STORAGE_KEY,
        JSON.stringify({ bchInDollars: bchValue, timestampString: new Date().toISOString() })
      );
    };

    getStatusData();

    const localStorageCashoutData = localStorage.getItem(CURRENCY_DATA_STORAGE_KEY);

    if (!localStorageCashoutData) {
      getBchData();
      return;
    }

    const { bchInDollars, timestampString } = JSON.parse(localStorageCashoutData);

    const timestamp = new Date(timestampString).getTime();
    const now = new Date().getTime();
    const timeDifference = (now - timestamp) / 1000;

    if (bchInDollars === null || timeDifference > CURRENCY_DATA_TIMEOUT_IN_SECONDS) {
      getBchData();
      return;
    }

    setCurrencyData(prev => ({ ...prev, bchInDollars }));
  }, []);

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('cashout.siteMetadata.title')}
        description={t('cashout.siteMetadata.description')}
      />

      <div className="CashoutPage">
        <div className="CashoutPage__header">
          <div className="CashoutPage__header__title-wrapper">
            <h1 className="CashoutPage__header__title">{t('cashout.header')}</h1>
          </div>
        </div>

        <div className="CashoutPage__body">
          <CashoutForm
            Api={Api}
            joyInDollars={joyInDollars}
            bchInDollars={bchInDollars}
            statusServerError={currencyDataError}
            apiError={ApiError}
          />
          <div className="CashoutPage__additional-info">
            <div className="CashoutPage__additional-info__header">
              <h2 className="CashoutPage__additional-info__header__title">{t('cashout.additionalInfo.title')}</h2>
            </div>
            <div className="CashoutPage__additional-info__body">
              <h2 className="CashoutPage__additional-info__body__title">
                {t('cashout.additionalInfo.accountAddress.title')}
              </h2>
              <p className="CashoutPage__additional-info__body__subtitle">
                {t('cashout.additionalInfo.accountAddress.subtitle')}
              </p>
              <ArrowButton
                link="https://testnet.joystream.org/"
                text={t('cashout.additionalInfo.goToPioneer')}
                className="CashoutPage__additional-info__body__button"
              />
              <h2 className="CashoutPage__additional-info__body__title">
                {t('cashout.additionalInfo.transferredFunds.title')}
              </h2>
              <p className="CashoutPage__additional-info__body__subtitle">
                {t('cashout.additionalInfo.transferredFunds.subtitle')}
              </p>
              <ArrowButton
                link="https://discord.gg/DE9UN3YpRP"
                text={t('cashout.additionalInfo.goToDiscord')}
                className="CashoutPage__additional-info__body__button"
              />
            </div>
            <div className="CashoutPage__additional-info__token-price-wrapper">
              <div className="CashoutPage__additional-info__token-price">
                <p className="CashoutPage__additional-info__token-price__title">
                  {t('cashout.additionalInfo.tokenPrice')}
                </p>
                <p className="CashoutPage__additional-info__token-price__value">
                  {joyInDollars ? `$${joyInDollars.toFixed(7)}` : t('cashout.additionalInfo.loading')}{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export { CashoutPage };
export default CashoutPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
