import React, { memo, useRef, useState } from 'react';
import TypeWriter from 'typewriter-effect';
import { Trans } from 'gatsby-plugin-react-i18next';
import cn from 'classnames';

import { ArrowButton } from '../../ArrowButton';
import useScroll from '../../../utils/useScroll';
import useHeroAnimation from './useHeroAnimation';

import Browser1 from '../../../assets/images/landing/hero/browser-1.webp';
import Browser2 from '../../../assets/images/landing/hero/browser-2.webp';
import Browser3 from '../../../assets/images/landing/hero/browser-3.webp';

import './style.scss';
import Button from '../../Button';

const ILLUSTRATION_MESSAGES = [
  {
    variantClassSuffix: 'application',
    title: 'landing.hero.stepOne.title',
    subtitle: 'landing.hero.stepOne.subtitle',
  },
  {
    variantClassSuffix: 'storage',
    title: 'landing.hero.stepTwo.title',
    subtitle: 'landing.hero.stepTwo.subtitle',
  },
  {
    variantClassSuffix: 'content',
    title: 'landing.hero.stepThree.title',
    subtitle: 'landing.hero.stepThree.subtitle',
  },
  {
    variantClassSuffix: 'blockchain',
    title: 'landing.hero.stepFour.title',
    subtitle: 'landing.hero.stepFour.subtitle',
  },
];

const IllustrationMessage = memo(({ variant, messageToShow, t }) => {
  return (
    <div
      className={cn(
        `IndexPage__hero__illustration-message IndexPage__hero__illustration-message--${ILLUSTRATION_MESSAGES[variant].variantClassSuffix}`,
        {
          'IndexPage__hero__illustration-message--show': messageToShow === variant,
        }
      )}
    >
      <div
        className={cn(
          `IndexPage__hero__illustration-message__pointer IndexPage__hero__illustration-message__pointer--${ILLUSTRATION_MESSAGES[variant].variantClassSuffix}`,
          {
            'IndexPage__hero__illustration-message__pointer--show': messageToShow === variant,
          }
        )}
      >
        <div className="IndexPage__hero__illustration-message__pointer__line"></div>
        <div className="IndexPage__hero__illustration-message__pointer__circle"></div>
      </div>
      <div className="IndexPage__hero__illustration-message__content">
        <p className="IndexPage__hero__illustration-message__content__title">
          {messageToShow === variant ? t(ILLUSTRATION_MESSAGES[variant].title) : null}
        </p>
        <p className="IndexPage__hero__illustration-message__content__subtitle">
          {messageToShow === variant ? t(ILLUSTRATION_MESSAGES[variant].subtitle) : null}
        </p>
      </div>
    </div>
  );
});

const Illustration = ({ animationInfo, isAnimationDone, setIsAnimationDone, t }) => {
  const canvasRef = useRef();
  const illustrationWrapperRef = useRef();
  const [messageToShow, setMessageToShow] = useState(null);

  useHeroAnimation(canvasRef, illustrationWrapperRef, animationInfo, setIsAnimationDone, setMessageToShow);

  return (
    <>
      <div className="IndexPage__hero__illustration-background" ref={illustrationWrapperRef}>
        <div
          className={cn('IndexPage__hero__illustration-wrapper', {
            'IndexPage__hero__illustration-wrapper--updated': isAnimationDone,
          })}
        >
          <canvas className="IndexPage__hero__illustration" ref={canvasRef} width={1080} height={656} />
          {!isAnimationDone ? (
            <>
              <IllustrationMessage variant={0} messageToShow={messageToShow} t={t} />
              <IllustrationMessage variant={1} messageToShow={messageToShow} t={t} />
              <IllustrationMessage variant={2} messageToShow={messageToShow} t={t} />
              <IllustrationMessage variant={3} messageToShow={messageToShow} t={t} />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

const BrowserImage = ({ className, variant, imageSrc, isAnimationDone }) => {
  return (
    <img className={cn(className, { [`${className}--update-${variant}`]: isAnimationDone })} src={imageSrc} alt="" />
  );
};

const Hero = ({ t }) => {
  const animationInfo = useScroll();
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  return (
    <div className="IndexPage__hero-wrapper">
      <section className="IndexPage__hero">
        <header>
          <h1 className="IndexPage__hero__title">
            <Trans
              i18nKey="landing.hero.title"
              components={{
                span: <span />,
                typewriter: (
                  <TypeWriter
                    options={{
                      strings: [
                        t('landing.hero.typewriterOptions.creators'),
                        t('landing.hero.typewriterOptions.builders'),
                        t('landing.hero.typewriterOptions.users'),
                      ],
                      autoStart: true,
                      loop: true,
                      wrapperClassName: 'IndexPage__hero__typewriter-title',
                      cursorClassName: 'IndexPage__hero__typewriter-cursor',
                    }}
                  />
                ),
              }}
            />
          </h1>
        </header>
        <p className="IndexPage__hero__subtitle">{t('landing.hero.subtitle')}</p>
        <div className="IndexPage__hero__buttons">
          <ArrowButton
            link="#apps-built-on-joystream"
            text={t('landing.hero.viewApps')}
            className="IndexPage__hero__button"
            textClassname="IndexPage__hero__button-text"
          />
          <Button href="#start-your-community" className="IndexPage__hero__community-button">
            {t('landing.hero.startYourCommunity')}
          </Button>
        </div>
        <div className="IndexPage__hero__browsers-wrapper">
          <div
            className={cn('IndexPage__hero__browsers', {
              'IndexPage__hero__browsers--updated': isAnimationDone,
            })}
          >
            <BrowserImage
              className="IndexPage__hero__browsers__second-alt"
              variant={1}
              imageSrc={Browser3}
              isAnimationDone={isAnimationDone}
            />
            <BrowserImage
              className="IndexPage__hero__browsers__second-alt"
              variant={2}
              imageSrc={Browser3}
              isAnimationDone={isAnimationDone}
            />
            <BrowserImage
              className="IndexPage__hero__browsers__alt"
              variant={1}
              imageSrc={Browser2}
              isAnimationDone={isAnimationDone}
            />
            <BrowserImage
              className="IndexPage__hero__browsers__alt"
              variant={2}
              imageSrc={Browser2}
              isAnimationDone={isAnimationDone}
            />
            <img className="IndexPage__hero__browsers__main" alt="" src={Browser1} />
          </div>
        </div>
        <Illustration
          animationInfo={animationInfo}
          isAnimationDone={isAnimationDone}
          setIsAnimationDone={setIsAnimationDone}
          t={t}
        />
      </section>
    </div>
  );
};

export default Hero;
