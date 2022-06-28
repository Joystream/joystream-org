import React from 'react';

import './style.scss';

const Header = ({ t }) => {
  return (
    <div className='PrimerPage__header-wrapper'>
      <div className='PrimerPage__header'>
        <h1 className='PrimerPage__header__title'>{t('primer.header.title')}</h1>
        <h3 className='PrimerPage__header__subtitle'>{t('primer.header.subtitle')}</h3>
      </div>
    </div>
  );
};

export default Header;
