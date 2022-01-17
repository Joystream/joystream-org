import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import Input from './Input';
import AmountInput from './AmountInput';
import { ArrowButton } from '../../../pages/founding-members/index';
import Notice from './Notice';
import Loader from 'react-loader-spinner';
import FinalScreen from './FinalScreen';

//util
import {
  isValidJoystreamAddress,
  isValidTokenAmount,
  validateBchAddress,
  isValidEmail,
  validateUser,
} from './util/validation';

import './style.scss';

const CashoutForm = ({ Api, joyInDollars, bchInDollars, statusServerError, apiError }) => {
  const [joystreamAddress, setJoystreamAddress] = useState({ value: '', error: null });
  const [tokenAmount, setTokenAmount] = useState({ value: '', error: null });
  const [bchAddress, setBchAddress] = useState({ value: '', error: null, warning: null });
  const [email, setEmail] = useState({ value: '', error: null });
  const [joystreamHandle, setJoystreamHandle] = useState({ value: '', error: null });
  const [formState, setFormState] = useState({ isFilled: false, hasErrors: false, isLoading: true, finalized: null });

  const validateData = async () => {
    // validate address
    if (isValidJoystreamAddress(joystreamAddress.value)) {
      setJoystreamAddress(prev => ({ ...prev, error: null }));
    } else {
      setJoystreamAddress(prev => ({ ...prev, error: 'Incorrect account adress. Please try again' }));
    }

    // validate token amount
    if (isValidTokenAmount(tokenAmount.value)) {
      setTokenAmount(prev => ({ ...prev, error: null }));
    } else {
      setTokenAmount(prev => ({ ...prev, error: 'Invalid value. Please try again' }));
    }

    // validate BCH address
    const validatedBchAddress = validateBchAddress(bchAddress.value);

    if (validatedBchAddress) {
      setBchAddress(prev => ({ ...prev, error: null, warning: validatedBchAddress.warning }));
    } else {
      setBchAddress(prev => ({ ...prev, error: 'Incorrect account adress. Please try again' }));
    }

    const trimmedEmail = email.value.trimStart().trimEnd();
    if (isValidEmail(trimmedEmail)) {
      setEmail({ value: trimmedEmail, error: null });
    } else {
      setEmail(prev => ({ ...prev, error: 'Incorrect email adress. Please try again' }));
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
    const isFilled =
      !!joystreamAddress.value && !!tokenAmount.value && !!bchAddress.value && !!email.value && !!joystreamHandle.value;
    const hasErrors =
      joystreamAddress.error || tokenAmount.error || bchAddress.error || email.error || joystreamHandle.error;

    setFormState(prev => ({ ...prev, isFilled, hasErrors }));
  }, [joystreamAddress, tokenAmount, bchAddress, email, joystreamHandle]);

  useEffect(() => {
    const { isFilled, hasErrors } = formState;

    if (isFilled && !hasErrors) {
      // const sendDataToServer = async () => {
      //   await fetch('https://www.localhost:', {
      //     method: 'POST',
      //     headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ joystreamAddress, tokenAmount, bchAddress, email, joystreamHandle }),
      //   });
      // };
      // sendDataToServer();

      console.log('Sending data to server: ', { joystreamAddress, tokenAmount, bchAddress, email, joystreamHandle });
    }
  }, [formState]);

  useEffect(() => {
    if (Api && joyInDollars) {
      setFormState(prev => ({ ...prev, isLoading: false }));
    }
  }, [Api, joyInDollars]);

  useEffect(() => {
    // TODO:
    // Possibly add differentiating errors for api/status server.
    if (statusServerError || apiError) {
      setFormState(prev => ({ ...prev, finalized: { state: 'SERVERDOWN' } }));
    }
  }, [statusServerError, apiError]);

  const renderBody = () => (
    <div
      className={cn('CashoutPage__form__body', {
        'CashoutPage__form__body--loading': formState.isLoading,
      })}
    >
      <Input
        id="joystreamAddress"
        label="Send from"
        placeholder="Testnet address"
        updateValue={setJoystreamAddress}
        errorMessage={joystreamAddress.error}
        info="tJOY Account address"
        isLoading={formState.isLoading}
      />
      <AmountInput
        id="tokenAmount"
        label="Amount"
        placeholder="Amount"
        updateValue={setTokenAmount}
        errorMessage={tokenAmount.error}
        joyInDollars={joyInDollars}
        bchInDollars={bchInDollars}
        isLoading={formState.isLoading}
      />
      <Input
        id="bchAddress"
        label="Destination address"
        placeholder="Account address"
        updateValue={setBchAddress}
        errorMessage={bchAddress.error}
        warning={bchAddress.warning}
        info="BCH Account address"
        isLoading={formState.isLoading}
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
        isLoading={formState.isLoading}
      />
      <Input
        id="joystreamHandle"
        label="Joystream Handle/ID"
        placeholder="Handle/ID"
        updateValue={setJoystreamHandle}
        errorMessage={joystreamHandle.error}
        info="Optional"
        help="Help us to contact you in case of any problems"
        isLoading={formState.isLoading}
      />
      {!formState.isLoading ? (
        <ArrowButton
          text="Submit"
          className={cn('CashoutPage__form__body__button', {
            'CashoutPage__form__body__button--active': formState.isFilled,
          })}
          onClick={() => {
            if (formState.isFilled) {
              handleSubmit();
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
        {formState.finalized ? <FinalScreen state={formState.finalized.state} /> : renderBody()}
      </div>
    </div>
  );
};

export default CashoutForm;
