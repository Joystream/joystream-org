import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';

import CoindeskArticleScreenshot from '../../../assets/images/coindesk-article-screenshot.webp';
import CoindeskLogo from '../../../assets/images/coindesk-logo.webp';

import './style.scss';

const PressStory = ({ t }) => (
  <a
    href="ttps://www.coindesk.com/business/2022/03/23/decentralized-creator-platform-joystream-raises-58m/"
    target="_blank"
    className="AboutPage__press__story-link"
  >
    <div className="AboutPage__press__story">
      <div className="AboutPage__press__story__about">
        <div className="AboutPage__press__story__about__section-title">{t('about.press.story.sectionTitle')}</div>
        <div className="AboutPage__press__story__about__logo-wrapper">
          <img className="AboutPage__press__story__about__logo" src={CoindeskLogo} alt="coindesk logo" />
        </div>
        <h4 className="AboutPage__press__story__about__title">{t('about.press.story.title')}</h4>
        <p className="AboutPage__press__story__about__platform-description">{t('about.press.story.description')}</p>
        <p className="AboutPage__press__story__about__link">
          {t('about.press.story.readArticle')}
          <ArrowIcon className="AboutPage__press__story__about__link__icon" />
        </p>
      </div>
      <div className="AboutPage__press__story__visual">
        <img
          className="AboutPage__press__story__visual__image"
          src={CoindeskArticleScreenshot}
          alt="coindesk article screenshot"
        />
        <div className="AboutPage__press__story__visual__bottom-gradient"></div>
      </div>
    </div>
  </a>
);

const Press = () => {
  const { t } = useTranslation();

  return (
    <section className="AboutPage__press-wrapper">
      <div className="AboutPage__press">
        <header className="AboutPage__press__header">
          <span className="AboutPage__press__header__section-title">{t('about.press.sectionTitle')}</span>
          <h2 className="AboutPage__press__header__title">{t('about.press.title')}</h2>
        </header>
        <PressStory t={t} />
      </div>
    </section>
  );
};

export default Press;
