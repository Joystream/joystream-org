import React from 'react';

import { ReactComponent as NoticeIcon } from '../../../assets/svg/notice.svg';

const formatJoystreamAddress = (joystreamAddress) => {
  let finalString = "";

  finalString += joystreamAddress.substring(0, 4);
  finalString += "...";
  finalString += joystreamAddress.substring(joystreamAddress.length - 4);

  return finalString;
}

const Notice = ({ data }) => {
  const { tokenAmount, joystreamAddress } = data;

  return (
    <section className="CashoutPage__form__body__notice">
      <header className="CashoutPage__form__body__notice__header">
        <NoticeIcon className="CashoutPage__form__body__notice__header__icon" />
        <p>We noticed that a similar payment is being processed</p>
      </header>
      <p>
        You’ve recently made a transaction from <span>{formatJoystreamAddress(joystreamAddress)}</span> address for an amount of{' '}
        <span>{tokenAmount} tJOY</span>. Click on submit to continue. If you have any doubts about a previous transaction,
        please let us know on our <a href="https://discord.gg/DE9UN3YpRP">Discord Channel</a>.
      </p>
    </section>
  );
};

export default Notice;
