import React from 'react';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const AtlasInfo = ({
  t,
  title,
  text,
  buttonText,
  isButtonAction,
  image,
  isImageRight,
  isBackroundBlack,
  onButtonClick,
  noTopPadding,
}) => {
  return (
    <div className={`AtlasInfo__wrapper ${isBackroundBlack ? 'AtlasInfo__wrapper--blackBg' : ''}`}>
      {isImageRight ? (
        <div
          className={`AtlasInfo__content__wrapper ${
            noTopPadding ? 'AtlasInfo__content__wrapper--no-top-padding' : ''
          } `}
        >
          <div className="AtlasInfo__content">
            <h2 className={`AtlasInfo__title ${isBackroundBlack ? 'AtlasInfo__title--bgBlack' : ''}`}>{t(title)}</h2>
            <h4 className={`AtlasInfo__subtitle ${isBackroundBlack ? 'AtlasInfo__title--bgBlack' : ''}`}>{t(text)}</h4>
          </div>
          <div className="AtlasInfo__content">
            <img className="AtlasInfo__image" src={image} alt={t('landing.exploreJoystream.atlas.imageAlt')} />
          </div>
        </div>
      ) : (
        <div
          className={`AtlasInfo__content__wrapper ${
            noTopPadding ? 'AtlasInfo__content__wrapper--no-top-padding' : ''
          } AtlasInfo__content__wrapper--image-right`}
        >
          <div className="AtlasInfo__content">
            <img className="AtlasInfo__image" src={image} alt={t('landing.exploreJoystream.atlas.imageAlt')} />
          </div>
          <div className="AtlasInfo__content">
            <h2 className={`AtlasInfo__title ${isBackroundBlack ? 'AtlasInfo__title--bgBlack' : ''}`}>{t(title)}</h2>
            <h4
              className={`AtlasInfo__subtitle ${buttonText ? 'AtlasInfo__subtitle--no-margin' : ''} ${
                isBackroundBlack ? 'AtlasInfo__title--bgBlack' : ''
              }`}
            >
              {t(text)}
            </h4>
            {buttonText &&
              (isButtonAction ? (
                <div role="presentation" className="AtlasInfo__button" onClick={onButtonClick}>
                  <p className="AtlasInfo__link-text">{t(buttonText)}</p>
                  <Arrow className="AtlasInfo__link-arrow" />
                </div>
              ) : (
                <a
                  className="AtlasInfo__link-wrapper"
                  target="_blank"
                  rel="noreferrer"
                  href="https://play.joystream.org/"
                >
                  <div className="AtlasInfo__link">
                    <p className="AtlasInfo__link-text">{t(buttonText)}</p>
                    <Arrow className="AtlasInfo__link-arrow" />
                  </div>
                </a>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AtlasInfo;
