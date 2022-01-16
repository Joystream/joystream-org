import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { ReactComponent as NumberScrollPointer } from '../../../assets/svg/number-scroll-pointer.svg';


const Input = ({ id, placeholder, value, setValue }) => {
  return (
    <div className="CashoutPage__form__body__amount-input-wrapper">
      <input
        type="number"
        className="CashoutPage__form__body__amount-input CashoutPage__form__body__amount-input--active CashoutPage__form__body__amount-input--number"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <div className="CashoutPage__form__body__amount-input__type CashoutPage__form__body__amount-input__type--active">
        tJOY
      </div>
    </div>
  );
};

const ALLOWED_OUTPUT_CURRENCIES = ['BCH', 'USD'];

const OutputValueInput = ({ isActive, outputValue, outputCurrency, setOutputCurrency }) => {
  return (
    <div className="CashoutPage__form__body__amount-input-wrapper">
      <input
        readOnly
        className={cn('CashoutPage__form__body__amount-input', {
          'CashoutPage__form__body__amount-input--active': isActive && outputValue,
        })}
        value={outputValue}
      />
      <div
        className={cn(
          'CashoutPage__form__body__amount-input__type CashoutPage__form__body__amount-input__type--output',
          {
            'CashoutPage__form__body__amount-input__type--active': isActive && outputValue,
          }
        )}
        role="presentation"
        onClick={() => setOutputCurrency(ALLOWED_OUTPUT_CURRENCIES.filter(currency => currency !== outputCurrency)[0])}
      >
        {outputCurrency}
        <div className="CashoutPage__form__body__amount-input__scroller">
          <NumberScrollPointer />
          <NumberScrollPointer />
        </div>
      </div>
    </div>
  );
};

const AmountInput = ({ id, label, placeholder, updateValue, errorMessage, joyInDollars, bchInDollars }) => {
  const [joyAmount, setJoyAmount] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [outputCurrency, setOutputCurrency] = useState('USD');

  useEffect(() => {
    updateValue(prev => ({ ...prev, value: joyAmount }));
  }, [joyAmount])

  useEffect(() => {
    if (joyAmount) {
      if (outputCurrency === 'USD' && joyInDollars) {
        const valueToBeSentInDollars = Number(joyAmount) * joyInDollars;
        setOutputValue(valueToBeSentInDollars.toFixed(4));
        return;
      }

      if (outputCurrency === 'BCH' && joyInDollars && bchInDollars) {
        const valueToBeSentInDollars = Number(joyAmount) * joyInDollars;
        setOutputValue((valueToBeSentInDollars / bchInDollars).toFixed(6));
        return;
      }

      setOutputValue('');
    } else {
      setOutputValue('');
    }
  }, [joyAmount, bchInDollars, joyInDollars, outputCurrency]);

  return (
    <div className="CashoutPage__form__body__input-wrapper">
      <label className="CashoutPage__form__body__input-label-wrapper" htmlFor="amount-input">
        <p className="CashoutPage__form__body__input-label">{label}</p>
      </label>
      <div className="CashoutPage__form__body__amount-inputs">
        <Input id={id} placeholder={placeholder} value={joyAmount} setValue={setJoyAmount} />
        <p className="CashoutPage__form__body__approximation-symbol">≈</p>
        <OutputValueInput
          isActive={joyAmount}
          outputValue={outputValue}
          outputCurrency={outputCurrency}
          setOutputCurrency={setOutputCurrency}
        />
      </div>
      {errorMessage ? <p className="CashoutPage__form__body__input-error">{errorMessage}</p> : null}
    </div>
  );
};

export default AmountInput;
