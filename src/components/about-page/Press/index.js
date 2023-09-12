import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';

import CoindeskArticleScreenshot from '../../../assets/images/coindesk-article-screenshot.png';
import CoindeskLogo from '../../../assets/images/coindesk-logo.png';

import './style.scss';

const PressStory = ({ t }) => (
  <a
    href="ttps://www.coindesk.com/business/2022/03/23/decentralized-creator-platform-joystream-raises-58m/"
    target="_blank"
  >
    <div className="AboutPage__press__story">
      <div className="AboutPage__press__story__about">
        <div className="AboutPage__press__story__about__section-title">FEATURED ON</div>
        <div className="AboutPage__press__story__about__logo-wrapper">
          <img className="AboutPage__press__story__about__logo" src={CoindeskLogo} alt="coindesk logo" />
        </div>
        <h4 className="AboutPage__press__story__about__title">Decentralized Creator Platform Joystream Raises $5.8M</h4>
        <p className="AboutPage__press__story__about__platform-description">
          The Polkadot-based platform allows creators to sell their videos as NFTs and turn their channels into tokens.
        </p>
        <p className="AboutPage__press__story__about__link">
          Read article
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
          <span className="AboutPage__press__header__section-title">PRESS</span>
          <h2 className="AboutPage__press__header__title">Learn more about us through media stories</h2>
        </header>
        <PressStory t={t} />
      </div>
    </section>
  );
};

export default Press;
