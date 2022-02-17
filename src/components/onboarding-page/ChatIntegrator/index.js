import React, { useState, useEffect } from 'react';
import WidgetBot from '@widgetbot/react-embed';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const ChatIntegrator = ({ t }) => {
  const [widget, setWidget] = useState();

  useEffect(() => {
    setWidget(
      <WidgetBot
        className="ChatIntegrator__discord-widget"
        server="811216481340751934"
        channel="938083062040911953"
        shard="https://emerald.widgetbot.io"
      />
    );
  }, []);

  return (
    <div className="ChatIntegrator__wrapper">
      <div className="ChatIntegrator__title__wrapper">
        <h2 className="ChatIntegrator__title">{t('onboarding.contributorRoles.chatIntergrator.title')}</h2>
        <h2 className="ChatIntegrator__subtitle">{t('onboarding.contributorRoles.chatIntergrator.subtitle.text1')}</h2>
        <h2 className="ChatIntegrator__subtitle ChatIntegrator__subtitle--example-message">
          {t('onboarding.contributorRoles.chatIntergrator.subtitle.example')}
        </h2>
      </div>
      <div className="ChatIntegrator__content">
        {widget && widget}
        <h2 className="ChatIntegrator__subtitle ChatIntegrator__subtitle--caption">
          {t('onboarding.contributorRoles.chatIntergrator.subtitle.exampleCaption')}
        </h2>
        <h2 className="ChatIntegrator__subtitle">{t('onboarding.contributorRoles.chatIntergrator.subtitle.text2')}</h2>
        <a
          className="ChatIntegrator__link-wrapper"
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/DE9UN3YpRP"
        >
          <div className="ChatIntegrator__link">
            <p className="ChatIntegrator__link-text">
              {t('onboarding.contributorRoles.chatIntergrator.subtitle.discordLink')}
            </p>
            <Arrow className="ChatIntegrator__link-arrow" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ChatIntegrator;
