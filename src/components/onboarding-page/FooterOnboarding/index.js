import React, { useState } from 'react';
import Button from '../../Button';
import FooterAction from './FooterAction';

import './style.scss';

const FooterOnboarding = ({ t }) => {
  return (
    <footer className="FooterOnboarding">
      <FooterAction
        title={t('onboarding.page1.footer.title')}
        subtitle={t('onboarding.page1.footer.subtitle')}
        buttonTitle={t('onboarding.footer.button.nextVideo.text')}
        to={'/next-page'}
      />
    </footer>
  );
};

export default FooterOnboarding;
