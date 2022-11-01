import React from 'react';

import { ReactComponent as InfoIcon } from '../../../assets/svg/landing/info.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import GleevLogo from '../../../assets/images/landing/gleev-logo.png';
import GleevIllustration from '../../../assets/images/landing/gleev-illustration.png';

import './styles.scss';

const Ecosystem = () => {
  return (
    <section className="IndexPage__ecosystem-wrapper">
      <div className="IndexPage__ecosystem">
        <div className="IndexPage__ecosystem__hero">
          <header>
            <span className="IndexPage__ecosystem__hero__section-title">ECOSYSTEM</span>
            <h2 className="IndexPage__ecosystem__hero__title">One platform. Multiple apps.</h2>
          </header>
          <p className="IndexPage__ecosystem__hero__subtitle">
            Joystream is an open source platform, with the proprietary blockchain network at its core, powering multiple
            video streaming Apps at once. Videos uploaded via any app built on Joystream can reach consumers of other
            apps on the network, allowing creators to expand their audience with the single account without extra
            effort.
          </p>
        </div>

        <div className="IndexPage__ecosystem__apps">
          <h3 className="IndexPage__ecosystem__apps__title">
            Check out apps built on Joystream <div className="IndexPage__ecosystem__apps__title__app-count">1</div>
          </h3>
          <div className="IndexPage__ecosystem__apps__main">
            <div className="IndexPage__ecosystem__apps__main__about">
              <img
                className="IndexPage__ecosystem__apps__main__about__gleev-logo"
                src={GleevLogo}
                alt="gleev platform logo"
              />
              <div className="IndexPage__ecosystem__apps__main__about__section-title">FEATURED</div>
              <h4 className="IndexPage__ecosystem__apps__main__about__platform-name">Gleev</h4>
              <p className="IndexPage__ecosystem__apps__main__about__platform-description">
                Gleev has its sole focus on the Web3 and Crypto content vertical, bringing together the like-minded
                creators and viewers around the shared passion of the present and the future of Crypto affairs.
              </p>
              <p className="IndexPage__ecosystem__apps__main__about__platforms-title">Platforms</p>
              <p className="IndexPage__ecosystem__apps__main__about__platforms">Web</p>
              <a
                className="IndexPage__ecosystem__apps__main__about__link"
                href="https://www.google.com"
                target="_blank"
              >
                Visit <ArrowIcon className="IndexPage__ecosystem__apps__main__about__link__icon" />
              </a>
            </div>
            <div className="IndexPage__ecosystem__apps__main__visual">
              <img src={GleevIllustration} alt="illustration of the gleev platform homepage" />
              <div className='IndexPage__ecosystem__apps__main__visual__bottom-gradient'></div>
            </div>
          </div>
          <p className="IndexPage__ecosystem__apps__info">
            <InfoIcon className="IndexPage__ecosystem__apps__info__icon" />
            We've just launched, so our app collection is yet to grow. Check back soon for more exciting apps built on
            Joystream.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
