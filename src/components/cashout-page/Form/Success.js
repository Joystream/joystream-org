import React from 'react';
import Countdown from 'react-countdown-now';
import axios from 'axios';

import { ArrowButton } from '../../../pages/founding-members/index';

import { CASHOUT_SERVER_URL, CASHOUT_ROUTE } from './index';
import { FINAL_UI_STATE_TIMEOUT } from './FinalScreen';

const BURN_ADDRESS = '5D5PhZQNJzcJXVBxwJxZcsutjKPqUPydrvpu6HeiBfMaeKQu';

const addLeadingZero = number => {
  if(number < 10) {
    return `0${number}`
  }

  return `${number}`
}

const Success = ({ timeoutTimestamp, joystreamAddress, setCashoutInitiationResponse }) => {

  const handleCashout = async () => {
    try {
      const response = await axios.post(CASHOUT_SERVER_URL + CASHOUT_ROUTE, {
        joystreamAddress: joystreamAddress
      });

      console.log(response);
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <div className="CashoutPage__form__body__success">
      <p className="CashoutPage__form__body__success__title">You've succesfully initiated the cashout process!</p>
      <p className="CashoutPage__form__body__success__subtitle">
        Now, please send the same amount of tokens to this joystream address:{' '}
        <span
          role="presentation"
          onClick={() => navigator?.clipboard?.writeText(BURN_ADDRESS)}
        >
          5D5P...eKQu
        </span>{' '}
        and finish the process by clicking the button under after doing so.
      </p>
      <p className="CashoutPage__form__body__success__timeout">
        Timeout:{' '}
        <Countdown
          onComplete={() => setCashoutInitiationResponse({ error: FINAL_UI_STATE_TIMEOUT })}
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
