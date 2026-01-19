import React, { useEffect, useRef, useState } from 'react';
import { Trans } from 'react-i18next';
import cn from 'classnames';

import L1Logo from '../../../assets/images/landing/ecosystem-app-icons/l1-media.webp';
import L1Illustration from '../../../assets/images/landing/l1-media-illustration.webp';
//import GleevLogo from '../../../assets/images/landing/ecosystem-app-icons/gleev.webp';
//import GleevIllustration from '../../../assets/images/landing/browser-mockup-container.webp';
import Browser1 from '../../../assets/images/landing/hero/browser-1.webp';
import Browser2 from '../../../assets/images/landing/hero/browser-2.webp';
import Browser3 from '../../../assets/images/landing/hero/browser-3.webp';
import VideoPlayer from '../../../assets/images/landing/hero/illustration-ecosystem-l1.webp';
import PioneerLogo from '../../../assets/images/landing/ecosystem-app-icons/app-icon-3.webp';
// import JoyStatsLogo from '../../../assets/images/landing/ecosystem-app-icons/app-icon.webp';
import JScanLogo from '../../../assets/images/landing/ecosystem-app-icons/app-icon-1.webp';
import JoyUtilsLogo from '../../../assets/images/landing/ecosystem-app-icons/app-icon-2.webp';

import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import { ReactComponent as CodeWindowControls } from '../../../assets/svg/landing/code-window-controls.svg';

import './styles.scss';

const DevelopmentStep = ({ stepNumber, sectionTitle, title, subtitle }) => (
  <div className="IndexPage__ecosystem__developers__steps__item-wrapper">
    <div className="IndexPage__ecosystem__developers__steps__item">
      <p className="IndexPage__ecosystem__developers__steps__item__number">{stepNumber}</p>
      <p className="IndexPage__ecosystem__developers__steps__item__section-title">{sectionTitle}</p>
      <p className="IndexPage__ecosystem__developers__steps__item__title">{title}</p>
      <p className="IndexPage__ecosystem__developers__steps__item__subtitle">{subtitle}</p>
    </div>
  </div>
);

const BrowserImage = ({ className, variant, imageSrc }) => {
  return <img className={`${className} ${className}--${variant}`} src={imageSrc} alt="" />;
};

const CarouselItem = ({ logo, name, description, platforms, link, t }) => (
  <a href={link} target="_blank">
    <div className="IndexPage__ecosystem__apps__carousel__item">
      <div className="IndexPage__ecosystem__apps__carousel__item__logo-wrapper">
        <img className="IndexPage__ecosystem__apps__carousel__item__logo" src={logo} alt="" />
      </div>
      <p className="IndexPage__ecosystem__apps__carousel__item__title">{name}</p>
      <p className="IndexPage__ecosystem__apps__carousel__item__content">{description}</p>
      <p className="IndexPage__ecosystem__apps__carousel__item__platforms-title">
        {t('landing.ecosystem.appsBuiltOnJoystream.platformsTitle')}
      </p>
      <p className="IndexPage__ecosystem__apps__carousel__item__platforms">{platforms}</p>
    </div>
  </a>
);

const CarouselControl = ({ scroll, isActive }) => {
  return (
    <div
      role="presentation"
      onClick={() => scroll()}
      className={cn('IndexPage__ecosystem__apps__carousel-controls__item', {
        'IndexPage__ecosystem__apps__carousel-controls__item--active': isActive,
      })}
    ></div>
  );
};

const NUMBER_OF_CONTROLS = 4;

const Carousel = ({ t }) => {
  const [activeCarouselControlItem, setActiveCarouselControlItem] = useState(0);
  const [numberOfControlItems, setNumberOfControlItems] = useState(0);
  const carouselRef = useRef(null);
  const carouselMetadata = useRef({
    maxCarouselWidth: 1264,
    baseScrollAmount: 1264 / NUMBER_OF_CONTROLS,
  });

  useEffect(() => {
    function handleResize() {
      if (typeof window !== undefined && carouselMetadata.current) {
        if (window.innerWidth < 1024) {
          carouselMetadata.current = {
            maxCarouselWidth: 1184,
            baseScrollAmount: 1184 / NUMBER_OF_CONTROLS,
          };
        } else {
          carouselMetadata.current = {
            maxCarouselWidth: 1264,
            baseScrollAmount: 1264 / NUMBER_OF_CONTROLS,
          };
        }
      }

      if (carouselRef.current && carouselMetadata.current) {
        const scrollableAmount = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const timesFits = Math.ceil(scrollableAmount / carouselMetadata.current.baseScrollAmount);

        setNumberOfControlItems(timesFits + 1);
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = index => {
    if (carouselRef.current && carouselMetadata.current) {
      const currentScrollPosition = carouselRef.current.scrollLeft;
      const newScrollPosition = carouselMetadata.current.baseScrollAmount * index;

      carouselRef.current.scrollBy({
        left: Math.floor(newScrollPosition - currentScrollPosition),
        behavior: 'smooth',
      });
    }
  };

  const getCarouselItemByScrollPosition = () => {
    const currentScrollPosition = carouselRef.current.scrollLeft;

    if (currentScrollPosition === 0 || !carouselMetadata.current) return 0;

    for (let i = 0; i < NUMBER_OF_CONTROLS; i++) {
      const lowerAmount = carouselMetadata.current.baseScrollAmount * i;
      const upperAmount = carouselMetadata.current.baseScrollAmount * (i + 1);

      if (currentScrollPosition >= lowerAmount && currentScrollPosition < upperAmount + 1) {
        return i + 1;
      }
    }
  };

  return (
    <>
      <div
        onScroll={() => {
          if (carouselRef.current) {
            setActiveCarouselControlItem(getCarouselItemByScrollPosition());
          }
        }}
        ref={carouselRef}
        className="IndexPage__ecosystem__apps__carousel"
      >
        <CarouselItem
          logo={PioneerLogo}
          name={t('landing.ecosystem.appsBuiltOnJoystream.pioneer.name')}
          description={t('landing.ecosystem.appsBuiltOnJoystream.pioneer.description')}
          platforms={t('landing.ecosystem.appsBuiltOnJoystream.pioneer.platforms')}
          link="https://pioneerapp.xyz/"
          t={t}
        />
        {/* <CarouselItem
          logo={JoyStatsLogo}
          name={t('landing.ecosystem.appsBuiltOnJoystream.joystats.name')}
          description={t('landing.ecosystem.appsBuiltOnJoystream.joystats.description')}
          platforms={t('landing.ecosystem.appsBuiltOnJoystream.joystats.platforms')}
          link="https://joystreamstats.live/"
          t={t}
        /> */}
        <CarouselItem
          logo={JScanLogo}
          name={t('landing.ecosystem.appsBuiltOnJoystream.jscan.name')}
          description={t('landing.ecosystem.appsBuiltOnJoystream.jscan.description')}
          platforms={t('landing.ecosystem.appsBuiltOnJoystream.jscan.platforms')}
          link="https://jscan.io/"
          t={t}
        />
        <CarouselItem
          logo={JoyUtilsLogo}
          name={t('landing.ecosystem.appsBuiltOnJoystream.joyutils.name')}
          description={t('landing.ecosystem.appsBuiltOnJoystream.joyutils.description')}
          platforms={t('landing.ecosystem.appsBuiltOnJoystream.joyutils.platforms')}
          link="https://joyutils.org/"
          t={t}
        />
      </div>
      {numberOfControlItems > 1 ? (
        <div className="IndexPage__ecosystem__apps__carousel-controls">
          {Array.from({ length: numberOfControlItems }).map((_, index) => (
            <CarouselControl
              key={index}
              currentActiveItem={activeCarouselControlItem}
              scroll={() => scroll(index)}
              isActive={index === activeCarouselControlItem}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

const FeaturedPlatform = ({ image, platformName, platformDescription, platforms, link, illustration, t }) => (
  <div className="IndexPage__ecosystem__apps__main">
    <div className="IndexPage__ecosystem__apps__main__about">
      <div className="IndexPage__ecosystem__apps__main__about__logo-wrapper">
        <img
          className="IndexPage__ecosystem__apps__main__about__logo"
          src={image}
          alt={`${platformName} platform logo`}
        />
      </div>
      <div className="IndexPage__ecosystem__apps__main__about__section-title">
        {t('landing.ecosystem.appsBuiltOnJoystream.sectionTitle')}
      </div>
      <h4 className="IndexPage__ecosystem__apps__main__about__platform-name">{platformName}</h4>
      <p className="IndexPage__ecosystem__apps__main__about__platform-description">{platformDescription}</p>
      <p className="IndexPage__ecosystem__apps__main__about__platforms-title">
        {t('landing.ecosystem.appsBuiltOnJoystream.platformsTitle')}
      </p>
      <p className="IndexPage__ecosystem__apps__main__about__platforms">{platforms}</p>
      <a className="IndexPage__ecosystem__apps__main__about__link" href={link} target="_blank">
        {t('landing.ecosystem.appsBuiltOnJoystream.link')}{' '}
        <ArrowIcon className="IndexPage__ecosystem__apps__main__about__link__icon" />
      </a>
    </div>
    <div className="IndexPage__ecosystem__apps__main__visual">
      <img
        className="IndexPage__ecosystem__apps__main__visual__image"
        src={illustration}
        alt={`illustration of the ${platformName} platform homepage`}
      />
      <div className="IndexPage__ecosystem__apps__main__visual__bottom-gradient"></div>
    </div>
  </div>
);

const Ecosystem = ({ t }) => {
  return (
    <section className="IndexPage__ecosystem-wrapper">
      <div className="IndexPage__ecosystem">
        <header className="IndexPage__ecosystem__header">
          <span className="IndexPage__ecosystem__header__section-title">{t('landing.ecosystem.sectionTitle')}</span>
          <h2 className="IndexPage__ecosystem__header__title">
            <Trans i18nKey="landing.ecosystem.title" components={{ br: <br /> }} />
          </h2>
        </header>
        <p className="IndexPage__ecosystem__subtitle">{t('landing.ecosystem.subtitle')}</p>
        <div className="IndexPage__ecosystem__browsers">
          <BrowserImage className="IndexPage__ecosystem__browsers__second-alt" variant={1} imageSrc={Browser3} />
          <BrowserImage className="IndexPage__ecosystem__browsers__second-alt" variant={2} imageSrc={Browser3} />
          <BrowserImage className="IndexPage__ecosystem__browsers__alt" variant={1} imageSrc={Browser2} />
          <BrowserImage className="IndexPage__ecosystem__browsers__alt" variant={2} imageSrc={Browser2} />
          <img className="IndexPage__ecosystem__browsers__main" alt="" src={Browser1} />
          <img className="IndexPage__ecosystem__browsers__video-player" alt="" src={VideoPlayer} />
        </div>
        <div className="IndexPage__ecosystem__apps" id="apps-built-on-joystream">
          <h3 className="IndexPage__ecosystem__apps__title">
            {t('landing.ecosystem.appsBuiltOnJoystream.title')}{' '}
            {/* TODO: This will need to be made dynamic alogn with the rest of the content in the carousel. */}
            <div className="IndexPage__ecosystem__apps__title__app-count">4</div>
          </h3>
          <FeaturedPlatform
            image={L1Logo}
            platformName={t('landing.ecosystem.appsBuiltOnJoystream.l1Media.name')}
            platformDescription={t('landing.ecosystem.appsBuiltOnJoystream.l1Media.description')}
            platforms={t('landing.ecosystem.appsBuiltOnJoystream.l1Media.platforms')}
            link="https://l1.media"
            illustration={L1Illustration}
            t={t}
          />
          <Carousel t={t} />
          <div className="IndexPage__ecosystem__apps__info">
            <InfoIcon className="IndexPage__ecosystem__apps__info__icon" />
            <p className="IndexPage__ecosystem__apps__info__text">{t('landing.ecosystem.appsBuiltOnJoystream.info')}</p>
          </div>
        </div>

        <div className="IndexPage__ecosystem__developers" id="start-your-community">
          <div className="IndexPage__ecosystem__developers__main">
            <div className="IndexPage__ecosystem__developers__main__about">
              <div className="IndexPage__ecosystem__developers__main__about__section-title">
                {t('landing.developers.sectionTitle')}
              </div>
              <h3 className="IndexPage__ecosystem__developers__main__about__title">{t('landing.developers.title')}</h3>
              <p className="IndexPage__ecosystem__developers__main__about__subtitle">
                {t('landing.developers.subtitle')}
              </p>
              <a href="https://github.com/Joystream/atlas" target="_blank">
                <div className="IndexPage__ecosystem__developers__main__about__link">
                  {t('landing.developers.link')}
                  <ArrowIcon className="IndexPage__ecosystem__developers__main__about__link__icon" />
                </div>
              </a>
            </div>
            <div className="IndexPage__ecosystem__developers__main__visual">
              <CodeWindowControls />
              <pre className="IndexPage__ecosystem__developers__main__visual__code">
                <span>1</span>
                {/* This line is rendered on desktop: */}
                <code className="IndexPage__ecosystem__developers__main__visual__code__full-line">
                  git clone https://github.com/Joystream/atlas
                </code>
                {/* This line is rendered on mobile: */}
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line">
                  git clone https://
                </code>
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line IndexPage__ecosystem__developers__main__visual__code__broken-line--newline">
                  github.com/Joystream/
                  <span>atlas</span>
                </code>
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line IndexPage__ecosystem__developers__main__visual__code__broken-line--newline">
                  atlas
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
                  {t('landing.developers.commentPartOne')} {t('landing.developers.commentPartTwo')}{' '}
                  <span role="img" aria-label="rocketship emoji">
                    🚀
                  </span>
                </code>
                {/* This line is rendered on mobile: */}
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line">
                  {t('landing.developers.commentPartOne')}
                </code>
                <code className="IndexPage__ecosystem__developers__main__visual__code__broken-line IndexPage__ecosystem__developers__main__visual__code__broken-line--newline">
                  {t('landing.developers.commentPartTwo')}{' '}
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
              sectionTitle={t('landing.developers.stepOne.sectionTitle')}
              title={t('landing.developers.stepOne.title')}
              subtitle={t('landing.developers.stepOne.subtitle')}
            />
            <DevelopmentStep
              stepNumber="2"
              sectionTitle={t('landing.developers.stepTwo.sectionTitle')}
              title={t('landing.developers.stepTwo.title')}
              subtitle={t('landing.developers.stepTwo.subtitle')}
            />
            <DevelopmentStep
              stepNumber="3"
              sectionTitle={t('landing.developers.stepThree.sectionTitle')}
              title={t('landing.developers.stepThree.title')}
              subtitle={t('landing.developers.stepThree.subtitle')}
            />
            <DevelopmentStep
              stepNumber="4"
              sectionTitle={t('landing.developers.stepFour.sectionTitle')}
              title={t('landing.developers.stepFour.title')}
              subtitle={t('landing.developers.stepFour.subtitle')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
