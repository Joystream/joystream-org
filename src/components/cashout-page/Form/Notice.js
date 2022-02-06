import React from 'react';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';

import { ReactComponent as NoticeIcon } from '../../../assets/svg/notice.svg';

const formatJoystreamAddress = (joystreamAddress) => {
  let finalString = "";

  finalString += joystreamAddress.substring(0, 4);
  finalString += "...";
  finalString += joystreamAddress.substring(joystreamAddress.length - 4);

  return finalString;
}

const Notice = ({ data }) => {
  const { t } = useTranslation(); 
  const { tokenAmount, joystreamAddress } = data;

  return (
    <section className="CashoutPage__form__body__notice">
      <header className="CashoutPage__form__body__notice__header">
        <NoticeIcon className="CashoutPage__form__body__notice__header__icon" />
        <p>{t('cashout.form.notice.title')}</p>
      </header>
      <p>
        <Trans
          i18nKey="cashout.form.notice.text"
          components={[<span></span>, <a href="https://discord.gg/DE9UN3YpRP">Discord Channel</a>]}
          values={{ joystreamAddress: formatJoystreamAddress(joystreamAddress), tokenAmount }}
        />
      </p>
    </section>
  );
};

export default Notice;
