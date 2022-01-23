import React, { useState } from 'react';

import { ArrowButton } from '../../../pages/founding-members/index';

import { ReactComponent as SuccessIcon } from '../../../assets/svg/success.svg';
import { ReactComponent as FailureIcon } from '../../../assets/svg/failure.svg';

export const FINAL_UI_STATE_SUCCESS = "SUCCESS";
export const FINAL_UI_STATE_FAILURE = "FAILURE";
export const FINAL_UI_STATE_TIMEOUT = "TIMEOUT";
export const FINAL_UI_STATE_SERVERDOWN = "SERVERDOWN";
export const FINAL_UI_STATE_SERVERPROBLEM = "SERVERPROBLEM";

const STATES = {
  [FINAL_UI_STATE_SUCCESS]: {
    icon: <SuccessIcon className="CashoutPage__form__final-screen__icon" />,
    title: 'Success',
    subtitle: 'Your transaction has been accepted and you will receive 7 500 USD',
  },
  [FINAL_UI_STATE_FAILURE]: {
    icon: <FailureIcon style={{ stroke: '#ffaf38' }} className="CashoutPage__form__final-screen__icon" />,
    title: 'Something went wrong',
    subtitle:
      'Your transaction has been logged, and the Jsgenesis team will complete your cashout shortly, but feel free to warn us on Discord. Your tJOY/USD rate has been locked in, and you will receive USD.',
  },
  [FINAL_UI_STATE_TIMEOUT]: {
    icon: <FailureIcon style={{ stroke: '#ff3861' }} className="CashoutPage__form__final-screen__icon" />,
    title: 'Your time expired',
    subtitle:
      'If you still want to perform the cashout, please go back and start again. If you transferred the funds in time, please contact us on Discord.',
  },
  [FINAL_UI_STATE_SERVERDOWN]: {
    icon: <FailureIcon style={{ stroke: '#ff3861' }} className="CashoutPage__form__final-screen__icon" />,
    title: 'Server is down',
    subtitle: "We can't process any transaction right now, please contact us on Discord.",
  },
  [FINAL_UI_STATE_SERVERPROBLEM]: {
    icon: <FailureIcon style={{ stroke: '#ff3861' }} className="CashoutPage__form__final-screen__icon" />,
    title: 'Server problem',
    subtitle: "Server had a problem while processing your transaction, please contact us on Discord.",
  },
};

const FinalScreen = ({ state }) => {
  const [currentState, setCurrentState] = useState(state ?? FINAL_UI_STATE_FAILURE);

  return (
    <div className="CashoutPage__form__final-screen">
      <div className="CashoutPage__form__final-screen__body-wrapper">
        {STATES[currentState].icon}
        <h3 className="CashoutPage__form__final-screen__title">{STATES[currentState].title}</h3>
        <p className="CashoutPage__form__final-screen__subtitle">{STATES[currentState].subtitle}</p>
      </div>
      {currentState === 'TIMEOUT' ? (
        <ArrowButton text="Start again" className="CashoutPage__form__final-screen__button" />
      ) : null}
    </div>
  );
};

export default FinalScreen;
