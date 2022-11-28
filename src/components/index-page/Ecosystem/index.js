import React from 'react';

import GleevLogo from '../../../assets/images/landing/gleev-logo.webp';
import GleevIllustration from '../../../assets/images/landing/gleev-illustration.webp';

import { ReactComponent as InfoIcon } from '../../../assets/svg/landing/info.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import { ReactComponent as CodeWindowControls } from '../../../assets/svg/landing/code-window-controls.svg';

import './styles.scss';

const DevelopmentStep = ({ stepNumber, sectionTitle, title, subtitle }) => (
  <div className="IndexPage__ecosystem__developers__steps__item">
    <p className="IndexPage__ecosystem__developers__steps__item__number">{stepNumber}</p>
    <p className="IndexPage__ecosystem__developers__steps__item__section-title">{sectionTitle}</p>
    <p className="IndexPage__ecosystem__developers__steps__item__title">{title}</p>
    <p className="IndexPage__ecosystem__developers__steps__item__subtitle">{subtitle}</p>
  </div>
);

const DEVELOPERS_SECTION_CODE = `
`;

const Ecosystem = () => {
  return (
    <section className="IndexPage__ecosystem-wrapper">
      <div className="IndexPage__ecosystem">
        <div className="IndexPage__ecosystem__hero">
          <header>
            <span className="IndexPage__ecosystem__hero__section-title">ECOSYSTEM</span>
            <h2 className="IndexPage__ecosystem__hero__title">One platform.<br/> Multiple apps.</h2>
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
              <p className="IndexPage__ecosystem__apps__main__about__platforms-title">PLATFORMS</p>
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
              <img
                className="IndexPage__ecosystem__apps__main__visual__image"
                src={GleevIllustration}
                alt="illustration of the gleev platform homepage"
              />
              <div className="IndexPage__ecosystem__apps__main__visual__bottom-gradient"></div>
            </div>
          </div>
          <div className="IndexPage__ecosystem__apps__info">
            <InfoIcon className="IndexPage__ecosystem__apps__info__icon" />
            <p className="IndexPage__ecosystem__apps__info__text">
              We've just launched, so our app collection is yet to grow. Check back soon for more exciting apps built on
              Joystream.
            </p>
          </div>
        </div>

        <div className="IndexPage__ecosystem__developers">
          <div className="IndexPage__ecosystem__developers__main">
            <div className="IndexPage__ecosystem__developers__main__about">
              <div className="IndexPage__ecosystem__developers__main__about__section-title">DEVELOPERS</div>
              <h3 className="IndexPage__ecosystem__developers__main__about__title">
                How about starting your own video community?
              </h3>
              <p className="IndexPage__ecosystem__developers__main__about__subtitle">
                Spinning up your very own app was never easier before. Configurable feature set, no-code approach, and
                support from the DAO lowers the set up barriers and lets you focus on your mission instead.
              </p>
              <a href="https://github.com/Joystream/atlas" target="_blank">
                <div className="IndexPage__ecosystem__developers__main__about__link">
                  Start your community{' '}
                  <ArrowIcon className="IndexPage__ecosystem__developers__main__about__link__icon" />
                </div>
              </a>
            </div>
            <div className="IndexPage__ecosystem__developers__main__visual">
              <CodeWindowControls />
              <pre className="IndexPage__ecosystem__developers__main__visual__code">
                <span>1</span>
                {/* This line is rendered on desktop: */}
                <code className="IndexPage__ecosystem__developers__main__visual__code__full-line">git clone https://github.com/Joystream/atlas</code>
                {/* This line is rendered on mobile: */}
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line">
                  git clone https://
                </code>
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line IndexPage__ecosystem__developers__main__visual__code__broken-line--newline">
                  github.com/Joystream/atlas
                </code>
                {'\n'}
                <span>2</span>
                <code>cd atlas</code>
                {'\n'}
                <span>3</span>
                <code>yarn install</code>
                {'\n'}
                <span>4</span>
                <code>yarn atlas:dev</code>
                {'\n'}
                <span>5</span>
                {'\n'}
                <span>6</span>
                {/* This line is rendered on desktop: */}
                <code className="IndexPage__ecosystem__developers__main__visual__code__full-line">
                  // this is where you're stepping in{' '}
                  <span role="img" aria-label="rocketship emoji">
                    🚀
                  </span>
                </code>
                {/* This line is rendered on mobile: */}
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line">
                  // this is where you're
                </code>
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line IndexPage__ecosystem__developers__main__visual__code__broken-line--newline">
                  stepping in{' '}
                  <span role="img" aria-label="rocketship emoji">
                    🚀
                  </span>
                </code>
                {'\n'}
              </pre>
            </div>
          </div>

          <div className="IndexPage__ecosystem__developers__steps">
            <DevelopmentStep
              stepNumber="1"
              sectionTitle="STEP 1"
              title="Customize"
              subtitle="Pick a name, logo & content theme. Update the design and make it yours."
            />
            <DevelopmentStep
              stepNumber="2"
              sectionTitle="STEP 2"
              title="Launch"
              subtitle="Make your webapp available to the world on your domain."
            />
            <DevelopmentStep
              stepNumber="3"
              sectionTitle="STEP 3"
              title="Build"
              subtitle="Build a community of creators and consumers around your business model."
            />
            <DevelopmentStep
              stepNumber="4"
              sectionTitle="STEP 4"
              title="Earn"
              subtitle="Get paid a share of the value the creators and audience generates."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
