import React from 'react';
import Countdown from 'react-countdown-now';
import axios from 'axios';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';

import { ArrowButton } from '../../../pages/founding-members/index';

import { CASHOUT_SERVER_URL, CASHOUT_ROUTE } from './index';
import { FINAL_UI_STATE_NOCASHOUT, FINAL_UI_STATE_SUCCESS, FINAL_UI_STATE_TIMEOUT, FINAL_UI_STATE_SERVERPROBLEM } from './FinalScreen';

const BURN_ADDRESS = '5D5PhZQNJzcJXVBxwJxZcsutjKPqUPydrvpu6HeiBfMaeKQu';

const addLeadingZero = number => {
  if(number < 10) {
    return `0${number}`
  }

  return `${number}`
}

const CASHOUT_TIMEOUT = "TIMEOUT";
const CASHOUT_NOCASHOUT = "NOCASHOUT";

const Success = ({ timeoutTimestamp, joystreamAddress, setCashoutResponse }) => {
  const { t } = useTranslation();

  const handleCashout = async () => {
    setCashoutResponse({ loading: true });

    try {
      const response = await axios.post(CASHOUT_SERVER_URL + CASHOUT_ROUTE, {
        joystreamAddress: joystreamAddress
      });

      if(response.status === 200) {
        const { dollarAmount } = response.data;

        setCashoutResponse({ success: FINAL_UI_STATE_SUCCESS, dollarAmount, loading: false });
      }
    } catch (e) {

      if(e?.response?.status === 400 && e?.response?.data?.errorType === CASHOUT_TIMEOUT) {
        setCashoutResponse({ error: FINAL_UI_STATE_TIMEOUT, loading: false });
        return;
      }

      if(e?.response?.status === 400 && e?.response?.data?.errorType === CASHOUT_NOCASHOUT) {
        setCashoutResponse({ error: FINAL_UI_STATE_NOCASHOUT, loading: false });
        return;
      }

      if(e?.response?.status === 500) {
        setCashoutResponse({ error: FINAL_UI_STATE_SERVERPROBLEM, loading: false });
        return;
      }

    }
  };

  return (
    <div className="CashoutPage__form__body__success">
      <p className="CashoutPage__form__body__success__title">{t("cashout.form.success.title")}</p>
      <p className="CashoutPage__form__body__success__subtitle">
        <Trans i18nKey="cashout.form.success.subtitle" components={[<span style={{ wordBreak: "break-all" }} role="presentation" onClick={() => navigator?.clipboard?.writeText(BURN_ADDRESS)}></span>]} />
      </p>
      <p className="CashoutPage__form__body__success__timeout">
        {t("cashout.form.success.timeout")}{' '}
        <Countdown
          onComplete={() => setCashoutResponse({ error: FINAL_UI_STATE_TIMEOUT })}
          date={new Date(timeoutTimestamp)}
          renderer={({ minutes, seconds }) => <span>{addLeadingZero(minutes)}:{addLeadingZero(seconds)}</span>}
          zeroPadTime={2}
        />
      </p>
      <ArrowButton onClick={() => handleCashout()} text="Cash out" className="CashoutPage__form__body__success__button" />
    </div>
  );
};

export default Success;
