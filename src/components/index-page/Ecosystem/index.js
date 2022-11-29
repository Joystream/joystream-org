import React from 'react';
import { Trans } from 'react-i18next';

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

const Ecosystem = ({ t }) => {
  return (
    <section className="IndexPage__ecosystem-wrapper">
      <div className="IndexPage__ecosystem">
        <div className="IndexPage__ecosystem__hero">
          <header>
            <span className="IndexPage__ecosystem__hero__section-title">{t("landing.ecosystem.sectionTitle")}</span>
            <h2 className="IndexPage__ecosystem__hero__title"><Trans i18nKey="landing.ecosystem.title" components={{ br: <br /> }} /></h2>
          </header>
          <p className="IndexPage__ecosystem__hero__subtitle">
            {t("landing.ecosystem.subtitle")}
          </p>
        </div>

        <div className="IndexPage__ecosystem__apps" id="apps-built-on-joystream">
          <h3 className="IndexPage__ecosystem__apps__title">
            {t("landing.ecosystem.appsBuiltOnJoystream.title")} <div className="IndexPage__ecosystem__apps__title__app-count">1</div>
          </h3>
          <div className="IndexPage__ecosystem__apps__main">
            <div className="IndexPage__ecosystem__apps__main__about">
              <img
                className="IndexPage__ecosystem__apps__main__about__gleev-logo"
                src={GleevLogo}
                alt="gleev platform logo"
              />
              <div className="IndexPage__ecosystem__apps__main__about__section-title">{t("landing.ecosystem.appsBuiltOnJoystream.sectionTitle")}</div>
              <h4 className="IndexPage__ecosystem__apps__main__about__platform-name">{t("landing.ecosystem.appsBuiltOnJoystream.platformName")}</h4>
              <p className="IndexPage__ecosystem__apps__main__about__platform-description">
                {t("landing.ecosystem.appsBuiltOnJoystream.platformDescription")}
              </p>
              <p className="IndexPage__ecosystem__apps__main__about__platforms-title">{t("landing.ecosystem.appsBuiltOnJoystream.platformsTitle")}</p>
              <p className="IndexPage__ecosystem__apps__main__about__platforms">{t("landing.ecosystem.appsBuiltOnJoystream.platforms")}</p>
              <a
                className="IndexPage__ecosystem__apps__main__about__link"
                href="https://gleev.xyz"
                target="_blank"
              >
                {t("landing.ecosystem.appsBuiltOnJoystream.link")} <ArrowIcon className="IndexPage__ecosystem__apps__main__about__link__icon" />
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
              {t("landing.ecosystem.appsBuiltOnJoystream.info")}
            </p>
          </div>
        </div>

        <div className="IndexPage__ecosystem__developers" id="start-your-community">
          <div className="IndexPage__ecosystem__developers__main">
            <div className="IndexPage__ecosystem__developers__main__about">
              <div className="IndexPage__ecosystem__developers__main__about__section-title">{t("landing.developers.sectionTitle")}</div>
              <h3 className="IndexPage__ecosystem__developers__main__about__title">
                {t("landing.developers.title")}
              </h3>
              <p className="IndexPage__ecosystem__developers__main__about__subtitle">
                {t("landing.developers.subtitle")}
              </p>
              <a href="https://github.com/Joystream/atlas" target="_blank">
                <div className="IndexPage__ecosystem__developers__main__about__link">
                  {t("landing.developers.link")}
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
                  {t("landing.developers.commentPartOne")}{' '}{t("landing.developers.commentPartTwo")}{' '}
                  <span role="img" aria-label="rocketship emoji">
                    🚀
                  </span>
                </code>
                {/* This line is rendered on mobile: */}
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line">
                  {t("landing.developers.commentPartOne")}
                </code>
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line IndexPage__ecosystem__developers__main__visual__code__broken-line--newline">
                  {t("landing.developers.commentPartTwo")}{' '}
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
              sectionTitle={t("landing.developers.stepOne.sectionTitle")}
              title={t("landing.developers.stepOne.title")}
              subtitle={t("landing.developers.stepOne.subtitle")}
            />
            <DevelopmentStep
              stepNumber="2"
              sectionTitle={t("landing.developers.stepTwo.sectionTitle")}
              title={t("landing.developers.stepTwo.title")}
              subtitle={t("landing.developers.stepTwo.subtitle")}
            />
            <DevelopmentStep
              stepNumber="3"
              sectionTitle={t("landing.developers.stepThree.sectionTitle")}
              title={t("landing.developers.stepThree.title")}
              subtitle={t("landing.developers.stepThree.subtitle")}
            />
            <DevelopmentStep
              stepNumber="4"
              sectionTitle={t("landing.developers.stepFour.sectionTitle")}
              title={t("landing.developers.stepFour.title")}
              subtitle={t("landing.developers.stepFour.subtitle")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
