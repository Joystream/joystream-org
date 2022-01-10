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

const getValue = async (setCurrencyData) => {
  const bchValue = await getBchValue();
  const response = await axios.get("https://status.joystream.org/status");

  let joyValue = null;
  if(response.status === 200) {
    joyValue = response.data.price;
  }

  setCurrencyData({ joy: joyValue, bch: bchValue });
}

const CashoutPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const [Api, setApi] = useState();
  const [currencyData, setCurrencyData] = useState({
    joy: null,
    bch: null
  });

  useEffect(() => {
    getValue(setCurrencyData);
    const interval = setInterval(() => {
      getValue(setCurrencyData);
    }, 30000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    async function setUpApi() {
      const provider = new WsProvider(JoystreamWSProvider);
      const api = await ApiPromise.create({ provider, types });
      await api.isReady;
      setApi(api);
    }
    setUpApi();
  }, []);

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('landing.siteMetadata.description')}
      />

      <div className="CashoutPage">
        <div className="CashoutPage__header">
          <div className="CashoutPage__header__title-wrapper">
            <h1 className="CashoutPage__header__title">Cashout Funds</h1>
          </div>
        </div>

        <div className="CashoutPage__body">
          <CashoutForm {...currencyData} />

          <div className="CashoutPage__additional-info">
            <div className="CashoutPage__additional-info__header">
              <h2 className="CashoutPage__additional-info__header__title">Additional info</h2>
            </div>
            <div className="CashoutPage__additional-info__body">
              <h2 className='CashoutPage__additional-info__body__title'>Where can I find my account address?</h2>
              <p className='CashoutPage__additional-info__body__subtitle'>
                It’s simple. Enter the transfer tab inside the Pioneer and copy the account you want to withdraw funds.
              </p>
              <ArrowButton
                link="https://testnet.joystream.org/"
                text="Go to Pioneer"
                className="CashoutPage__additional-info__body__button"
              />
              <h2 className='CashoutPage__additional-info__body__title'>You transferred funds but nothing happens?</h2>
              <p className='CashoutPage__additional-info__body__subtitle'>
                Don’t worry. Let us know on the Discord about the situation and we will solve the problem as soon as we
                can.
              </p>
              <ArrowButton
                link="https://discord.gg/DE9UN3YpRP"
                text="Go to Discord"
                className="CashoutPage__additional-info__body__button"
              />
            </div>
            <div className="CashoutPage__additional-info__token-price-wrapper">
              <div className="CashoutPage__additional-info__token-price">
                <p className='CashoutPage__additional-info__token-price__title'>Price of Token</p>
                <p className='CashoutPage__additional-info__token-price__value'>$0.0000278</p>
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
