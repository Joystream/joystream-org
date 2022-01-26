import React from 'react';
import FooterAction from './FooterAction';

import './style.scss';

const FooterOnboarding = ({ t, nextVideoText, nextVideoUrl }) => {
  return (
    <footer className="FooterOnboarding">
      <FooterAction
        title={t('onboarding.page1.footer.title')}
        subtitle={nextVideoText}
        buttonTitle={t('onboarding.footer.button.nextVideo.text')}
        to={nextVideoUrl}
      />
    </footer>
  );
};

export default FooterOnboarding;
