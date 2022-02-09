import React, { useState, useEffect } from 'react';
import WidgetBot from '@widgetbot/react-embed';
import { ReactComponent as InfoIcon } from '../../../assets/svg/exclamation-mark.svg';

import './style.scss';

const ChatIntegrator = ({ t }) => {
  const [widget, setWidget] = useState();

  useEffect(() => {
    setWidget(
      <WidgetBot className="ChatIntegrator__discord-widget" server="882629308496105572" channel="882629308496105576" />
    );
  }, []);

  return (
    <div className="ChatIntegrator__wrapper">
      <div className="ChatIntegrator__title__wrapper">
        <h2 className="ChatIntegrator__title">{t('onboarding.contributorRoles.chatIntergrator.title')}</h2>
        <h2 className="ChatIntegrator__subtitle">
          <InfoIcon className="ChatIntegrator__subtitle--icon" />
          {t('onboarding.contributorRoles.chatIntergrator.subtitle')}
        </h2>
      </div>
      <div className="ChatIntegrator__content">{widget && widget}</div>
    </div>
  );
};

export default ChatIntegrator;
