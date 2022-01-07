import React, { useState } from 'react';
import cn from 'classnames';

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

const OutputValueInput = ({ joyAmount }) => {
  return (
    <div className="CashoutPage__form__body__amount-input-wrapper">
      <input
        readOnly
        className={cn('CashoutPage__form__body__amount-input CashoutPage__form__body__amount-input--disabled', {
          'CashoutPage__form__body__amount-input--empty': !joyAmount,
        })}
      />
      <div
        className={cn('CashoutPage__form__body__amount-input__type', {
          'CashoutPage__form__body__amount-input__type--empty': !joyAmount,
        })}
      >
        USD
      </div>
    </div>
  );
};

const AmountInput = ({ id, label, placeholder }) => {
  const [joyAmount, setJoyAmount] = useState("");

  console.log(joyAmount);
  return (
    <div className="CashoutPage__form__body__input-wrapper">
      <label htmlFor="amount-input">
        <p className="CashoutPage__form__body__input-label">{label}</p>
      </label>
      <div className="CashoutPage__form__body__amount-inputs">
        <Input id={id} placeholder={placeholder} value={joyAmount} setValue={setJoyAmount} />
        <p className="CashoutPage__form__body__approximation-symbol">≈</p>
        <OutputValueInput joyAmount={joyAmount}/>
      </div>
    </div>
  );
};

export default AmountInput;
