import React, { useState } from 'react';
import cn from 'classnames';

import Input from './Input';
import AmountInput from './AmountInput';
import { ArrowButton } from '../../../pages/founding-members/index';
import Notice from './Notice';
import Loader from 'react-loader-spinner';
import FinalScreen from './FinalScreen';

//util
import {
  validateBchAddress,
  validateUser,
  validateJoystreamAddress,
  validateTokenAmount,
  validateEmail,
} from './util/validation';

import './style.scss';

const CashoutForm = ({ Api, joyInDollars, bchInDollars, statusServerError, apiError }) => {
  const [joystreamAddress, setJoystreamAddress] = useState({ value: '', error: null });
  const [tokenAmount, setTokenAmount] = useState({ value: '', error: null });
  const [bchAddress, setBchAddress] = useState({ value: '', error: null, warning: null });
  const [email, setEmail] = useState({ value: '', error: null });
  const [joystreamHandle, setJoystreamHandle] = useState({ value: '', error: null });

  // state-derived variables
  const formIsFilled =
    !!joystreamAddress.value && !!tokenAmount.value && !!bchAddress.value && !!email.value && !!joystreamHandle.value;
  const formIsLoading = !(Api && joyInDollars);

  const formFinalizationState = () => {
    if (statusServerError || apiError) {
      return { state: 'SERVERDOWN' };
    }

    return null;
  };

  const submit = async () => {
    const trimmedEmail = email.value.trimStart().trimEnd();

    const joystreamAddressError = validateJoystreamAddress(joystreamAddress.value);
    const tokenAmountError = validateTokenAmount(tokenAmount.value);
    const bchAddressError = validateBchAddress(bchAddress.value);
    const emailError = validateEmail(trimmedEmail);
    const userError = await validateUser(Api, joystreamHandle.value, joystreamAddress.value);

    const isValidBchAddress = !bchAddressError || !!bchAddressError?.warningMessage;

    // validate address
    if (!joystreamAddressError) {
      setJoystreamAddress(prev => ({ ...prev, error: null }));
    } else {
      setJoystreamAddress(prev => ({ ...prev, error: joystreamAddressError }));
    }

    // validate token amount
    if (!tokenAmountError) {
      setTokenAmount(prev => ({ ...prev, error: null }));
    } else {
      setTokenAmount(prev => ({ ...prev, error: tokenAmountError }));
    }

    // validate BCH address
    if (isValidBchAddress) {
      setBchAddress(prev => ({
        ...prev,
        error: null,
        ...(bchAddressError?.warningMessage && { warning: bchAddressError.warningMessage }),
      }));
    } else {
      setBchAddress(prev => ({ ...prev, error: bchAddressError?.errorMessage }));
    }

    if (!emailError) {
      setEmail({ value: trimmedEmail, error: null });
    } else {
      setEmail(prev => ({ ...prev, error: emailError }));
    }

    if (!userError) {
      setJoystreamHandle(prev => ({ ...prev, error: null }));
    } else {
      setJoystreamHandle(prev => ({ ...prev, error: userError }));
    }

    const isDataValid = !joystreamAddressError && !tokenAmountError && isValidBchAddress && !emailError && !userError;

    if (isDataValid) {
      console.log('Sending data to server: ', { joystreamAddress, tokenAmount, bchAddress, email, joystreamHandle });
    }
  };

  const renderBody = () => (
    <div
      className={cn('CashoutPage__form__body', {
        'CashoutPage__form__body--loading': formIsLoading,
      })}
    >
      <Input
        id="joystreamAddress"
        label="Send from"
        placeholder="Testnet address"
        updateValue={setJoystreamAddress}
        errorMessage={joystreamAddress.error}
        info="tJOY Account address"
        isLoading={formIsLoading}
      />
      <AmountInput
        id="tokenAmount"
        label="Amount"
        placeholder="Amount"
        updateValue={setTokenAmount}
        errorMessage={tokenAmount.error}
        joyInDollars={joyInDollars}
        bchInDollars={bchInDollars}
        isLoading={formIsLoading}
      />
      <Input
        id="bchAddress"
        label="Destination address"
        placeholder="Account address"
        updateValue={setBchAddress}
        errorMessage={bchAddress.error}
        warning={bchAddress.warning}
        info="BCH Account address"
        isLoading={formIsLoading}
      />
      <Input
        id="email"
        label="Email"
        placeholder="Email"
        inputType="text"
        updateValue={setEmail}
        errorMessage={email.error}
        info="Optional"
        help="Help us to contact you in case of any problems"
        isLoading={formIsLoading}
      />
      <Input
        id="joystreamHandle"
        label="Joystream Handle/ID"
        placeholder="Handle/ID"
        updateValue={setJoystreamHandle}
        errorMessage={joystreamHandle.error}
        info="Optional"
        help="Help us to contact you in case of any problems"
        isLoading={formIsLoading}
      />
      {!formIsLoading ? (
        <ArrowButton
          text="Submit"
          className={cn('CashoutPage__form__body__button', {
            'CashoutPage__form__body__button--active': formIsFilled,
          })}
          onClick={() => {
            if (formIsFilled && Api) {
              submit();
            }
          }}
        />
      ) : (
        <Loader
          className="CashoutPage__form__body__loader"
          type="Oval"
          color="#302ABF"
          secondaryColor="#00000"
          height="100%"
          width="100%"
          timeout={0}
        />
      )}
    </div>
  );

  return (
    <div className="CashoutPage__form-wrapper">
      <div className="CashoutPage__form">
        <header className="CashoutPage__form__header">
          <h2 className="CashoutPage__form__header__title">Withdraw details</h2>
        </header>
        {formFinalizationState() ? <FinalScreen state={formFinalizationState().state} /> : renderBody()}
      </div>
    </div>
  );
};

export default CashoutForm;
