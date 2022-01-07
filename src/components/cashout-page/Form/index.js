import React, { useState, useEffect } from 'react';

import Input from './Input';
import AmountInput from './AmountInput';
import { ArrowButton } from '../../../pages/founding-members/index';
import { isValidJoystreamAddress, isValidTokenAmount, validateBchAddress, isValidEmail, validateUser } from './util/validation';

import './style.scss';

const CashoutForm = ({ Api }) => {
  const [joystreamAddress, setJoystreamAddress] = useState({ value: '', error: null });
  const [tokenAmount, setTokenAmount] = useState({ value: '', error: null });
  const [bchAddress, setBchAddress] = useState({ value: '', error: null, warning: null });
  const [email, setEmail] = useState({ value: '', error: null });
  const [joystreamHandle, setJoystreamHandle] = useState({ value: '', error: null });

  // TODO:
  // 1. You can move the error messages into validation functions returns.
  const validateData = async () => {
    // validate address
    if (isValidJoystreamAddress(joystreamAddress.value)) {
      setJoystreamAddress(prev => ({ ...prev, error: null }));
    } else {
      setJoystreamAddress(prev => ({ ...prev, error: 'Invalid address.' }));
    }

    // validate token amount
    if (isValidTokenAmount(tokenAmount.value)) {
      setTokenAmount(prev => ({ ...prev, error: null }));
    } else {
      setTokenAmount(prev => ({ ...prev, error: 'Invalid value.' }));
    }

    // validate BCH address
    const validatedBchAddress = validateBchAddress(bchAddress.value);

    if (validatedBchAddress) {
      setBchAddress(prev => ({ ...prev, error: null, warning: validatedBchAddress.warning }));
    } else {
      setBchAddress(prev => ({ ...prev, error: 'Invalid BCH Address.' }));
    }

    const trimmedEmail = email.value.trimStart().trimEnd();
    if (isValidEmail(trimmedEmail)) {
      setEmail({ value: trimmedEmail, error: null });
    } else {
      setEmail(prev => ({ ...prev, error: 'Invalid email address.' }));
    }

    const validatedUser = await validateUser(Api, joystreamHandle.value, joystreamAddress.value);
    if (!validatedUser.error) {
      setJoystreamHandle(prev => ({ ...prev, error: null }));
    } else {
      setJoystreamHandle(prev => ({ ...prev, error: validatedUser.error }));
    }

    return;
  };

  const handleSubmit = () => {
    if (Api) {
      validateData();
    }
  };

  useEffect(() => {
    console.log({
      joystreamAddress,
      tokenAmount,
      bchAddress,
      email,
      joystreamHandle,
    });

    const inputsNotEmpty =
      !!joystreamAddress.value && !!tokenAmount.value && !!bchAddress.value && !!email.value && !!joystreamHandle.value;
    const noErrors =
      !joystreamAddress.error && !tokenAmount.error && !bchAddress.error && !email.error && !joystreamHandle.error;

    if (inputsNotEmpty && noErrors) {
      const sendDataToServer = async () => {
        await fetch('https://www.localhost:', {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ joystreamAddress, tokenAmount, bchAddress, email, joystreamHandle }),
        });
      };
      sendDataToServer();
    }
  }, [joystreamAddress, tokenAmount, bchAddress, email, joystreamHandle]);

  return (
    <div className="CashoutPage__form-wrapper">
      <div className="CashoutPage__form">
        <header className="CashoutPage__form__header">
          <h2 className="CashoutPage__form__header__title">Joystream Cashout</h2>
        </header>
        <div className="CashoutPage__form__body">
          <Input
            id="joystreamAddress"
            label="Send from"
            placeholder="Testnet address"
            updateValue={setJoystreamAddress}
            errorMessage={joystreamAddress.error}
            info="tJOY Account address"
          />
          <AmountInput
            id="tokenAmount"
            label="Amount"
            placeholder="Amount"
          />
          <Input
            id="bchAddress"
            label="Destination address"
            placeholder="Account address"
            updateValue={setBchAddress}
            errorMessage={bchAddress.error}
            warning={bchAddress.warning}
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
          />
          <Input
            id="joystreamHandle"
            label="Joystream Handle/ID"
            placeholder="Handle/ID"
            updateValue={setJoystreamHandle}
            errorMessage={joystreamHandle.error}
            info="Optional"
            help="Help us to contact you in case of any problems"
          />
          <ArrowButton text="Submit" className='CashoutPage__form__body__button' onClick={() => handleSubmit()} />
        </div>
      </div>
    </div>
  );
};

export default CashoutForm;
