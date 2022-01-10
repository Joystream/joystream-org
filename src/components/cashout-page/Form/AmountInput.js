import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { ReactComponent as NumberScrollPointer } from '../../../assets/svg/number-scroll-pointer.svg';

const Input = ({ id, placeholder, value, setValue }) => {
  return (
    <div className="CashoutPage__form__body__amount-input-wrapper">
      <input
        type="number"
        className={'CashoutPage__form__body__amount-input CashoutPage__form__body__amount-input--number'}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <div className="CashoutPage__form__body__amount-input__type">tJOY</div>
    </div>
  );
};

const ALLOWED_OUTPUT_CURRENCIES = ["BCH", "USD"];

const OutputValueInput = ({ joyAmount, outputValue, outputCurrency, setOutputCurrency }) => {
  return (
    <div className="CashoutPage__form__body__amount-input-wrapper">
      <input
        readOnly
        className={cn('CashoutPage__form__body__amount-input CashoutPage__form__body__amount-input--disabled', {
          'CashoutPage__form__body__amount-input--empty': !joyAmount,
        })}
        value={outputValue}
      />
      <div
        className={cn('CashoutPage__form__body__amount-input__type', {
          'CashoutPage__form__body__amount-input__type--empty': !joyAmount,
          'CashoutPage__form__body__amount-input__type--output': true,
        })}
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

const AmountInput = ({ id, label, placeholder, bchInDollars, joyInDollars }) => {
  const [joyAmount, setJoyAmount] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [outputCurrency, setOutputCurrency] = useState("USD");

  useEffect(() => {
    if(joyAmount) {
      if(bchInDollars && joyInDollars) {
        const valueToBeSentInDollars = Number(joyAmount) * joyInDollars;

        if(outputCurrency === "USD") {
          setOutputValue(valueToBeSentInDollars.toFixed(4));
        } else {
          setOutputValue((valueToBeSentInDollars/bchInDollars).toFixed(6));
        }
      } else { /* TODO: Deal with this case */ }
    }
  }, [joyAmount,bchInDollars,joyInDollars, outputCurrency]);

  return (
    <div className="CashoutPage__form__body__input-wrapper">
      <label htmlFor="amount-input">
        <p className="CashoutPage__form__body__input-label">{label}</p>
      </label>
      <div className="CashoutPage__form__body__amount-inputs">
        <Input id={id} placeholder={placeholder} value={joyAmount} setValue={setJoyAmount} />
        <p className="CashoutPage__form__body__approximation-symbol">≈</p>
        <OutputValueInput joyAmount={joyAmount} outputValue={outputValue} outputCurrency={outputCurrency} setOutputCurrency={setOutputCurrency}/>
      </div>
    </div>
  );
};

export default AmountInput;
