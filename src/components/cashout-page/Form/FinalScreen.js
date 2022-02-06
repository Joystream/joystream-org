import React from 'react';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';

import { ArrowButton } from '../../../pages/founding-members/index';

import { ReactComponent as SuccessIcon } from '../../../assets/svg/success.svg';
import { ReactComponent as FailureIcon } from '../../../assets/svg/failure.svg';

export const FINAL_UI_STATE_SUCCESS = "SUCCESS";
export const FINAL_UI_STATE_FAILURE = "FAILURE";
export const FINAL_UI_STATE_TIMEOUT = "TIMEOUT";
export const FINAL_UI_STATE_SERVERDOWN = "SERVERDOWN";
export const FINAL_UI_STATE_SERVERPROBLEM = "SERVERPROBLEM";
export const FINAL_UI_STATE_NOCASHOUT = "NOCASHOUT";

const STATES = {
  [FINAL_UI_STATE_SUCCESS]: {
    icon: <SuccessIcon className="CashoutPage__form__final-screen__icon" />,
    title: (t) => t("cashout.form.finalScreen.success.title"),
    subtitle: ({ dollarAmount }) => <Trans i18nKey="cashout.form.finalScreen.success.subtitle" values={{ dollarAmount }} />,
  },
  [FINAL_UI_STATE_FAILURE]: {
    icon: <FailureIcon style={{ stroke: '#ffaf38' }} className="CashoutPage__form__final-screen__icon" />,
    title: (t) => t("cashout.form.finalScreen.failure.title"),
    subtitle: ({ t }) => t("cashout.form.finalScreen.failure.subtitle"),
  },
  [FINAL_UI_STATE_TIMEOUT]: {
    icon: <FailureIcon style={{ stroke: '#ff3861' }} className="CashoutPage__form__final-screen__icon" />,
    title: (t) => t("cashout.form.finalScreen.timeout.title"),
    subtitle: ({ t }) => t("cashout.form.finalScreen.timeout.subtitle"),
  },
  [FINAL_UI_STATE_SERVERDOWN]: {
    icon: <FailureIcon style={{ stroke: '#ff3861' }} className="CashoutPage__form__final-screen__icon" />,
    title: (t) => t("cashout.form.finalScreen.serverdown.title"),
    subtitle: ({ t }) => t("cashout.form.finalScreen.serverdown.subtitle"),
  },
  [FINAL_UI_STATE_SERVERPROBLEM]: {
    icon: <FailureIcon style={{ stroke: '#ff3861' }} className="CashoutPage__form__final-screen__icon" />,
    title: (t) => t("cashout.form.finalScreen.serverproblem.title"),
    subtitle: ({ t }) => t("cashout.form.finalScreen.serverproblem.subtitle"),
  },
  [FINAL_UI_STATE_NOCASHOUT]: {
    icon: <FailureIcon style={{ stroke: '#ff3861' }} className="CashoutPage__form__final-screen__icon" />,
    title: (t) => t("cashout.form.finalScreen.nocashout.title"),
    subtitle: ({ t }) => t("cashout.form.finalScreen.nocashout.subtitle"),
  },
};

const FinalScreen = ({ state, props }) => {
  const { t } = useTranslation();

  const currentState = state ?? FINAL_UI_STATE_FAILURE;

  return (
    <div className="CashoutPage__form__final-screen">
      <div className="CashoutPage__form__final-screen__body-wrapper">
        {STATES[currentState].icon}
        <h3 className="CashoutPage__form__final-screen__title">{STATES[currentState].title(t)}</h3>
        <p className="CashoutPage__form__final-screen__subtitle">{STATES[currentState].subtitle({ ...props, t })}</p>
      </div>
      {currentState === 'TIMEOUT' ? (
        <ArrowButton onClick={() => window?.location?.reload() } text="Start again" className="CashoutPage__form__final-screen__button" />
      ) : null}
    </div>
  );
};

export default FinalScreen;
