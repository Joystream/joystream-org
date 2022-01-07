import React, { useState, useEffect } from 'react';
import cn from 'classnames';

const HelpIcon = React.forwardRef(({ className, hovered, setHovered }, ref) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={hovered ? '#E8EDF6' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <path
        d="M0.5 8C0.5 3.86014 3.86014 0.5 8 0.5C12.1399 0.5 15.5 3.86014 15.5 8C15.5 12.1399 12.1399 15.5 8 15.5C3.86014 15.5 0.5 12.1399 0.5 8Z"
        stroke={hovered ? '#D3DAFF' : '#C4CAD6'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.44732 8.11332L10.0473 7.49999C10.4273 7.11999 10.6673 6.58666 10.6673 5.99999C10.6673 4.52666 9.47398 3.33333 8.00065 3.33333C6.52732 3.33333 5.33398 4.52666 5.33398 5.99999H6.66732C6.66732 5.26666 7.26732 4.66666 8.00065 4.66666C8.73398 4.66666 9.33398 5.26666 9.33398 5.99999C9.33398 6.36666 9.18732 6.69999 8.94065 6.93999L8.11398 7.77999C7.63398 8.26665 7.33398 8.93332 7.33398 9.66665V9.99999H8.66732C8.66732 8.99999 8.96732 8.59999 9.44732 8.11332ZM7.33377 12.6667H8.6671V11.3333H7.33377V12.6667Z"
        fill={hovered ? '#3F38FF' : '#5D6B80'}
      />
    </svg>
  );
});

const Input = ({ id, label, placeholder, inputType, updateValue, errorMessage, warning, info, help }) => {
  const [inputValue, setInputValue] = useState('');
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    updateValue(prev => ({ ...prev, value: inputValue }));
  }, [inputValue]);

  return (
    <div className="CashoutPage__form__body__input-wrapper">
      <label className="CashoutPage__form__body__input-label-wrapper" htmlFor={id}>
        <p className="CashoutPage__form__body__input-label">{label}</p>
        {help ? (
          <HelpIcon hovered={hovered} setHovered={setHovered} className="CashoutPage__form__body__help-icon" />
        ) : null}
      </label>
      <input
        id={id}
        type={inputType ?? 'text'}
        className={cn('CashoutPage__form__body__input', {
          'CashoutPage__form__body__input--number': inputType === 'number',
        })}
        value={inputValue}
        onChange={e => {
          // add basic validation based on inputType or similar..
          setInputValue(e.target.value);
        }}
        placeholder={placeholder ?? ''}
      />
      {errorMessage ? <p className="CashoutPage__form__body__input-error">{errorMessage}</p> : null}
      {warning ? <p className="CashoutPage__form__body__input-error">{warning}</p> : null}
      {info ? <p className="CashoutPage__form__body__input-info">{info}</p> : null}
    </div>
  );
};

export default Input;
