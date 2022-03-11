import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

import { ReactComponent as BuilderCTA } from '../../../assets/svg/builder-cta.svg';
import { ReactComponent as BuilderAlt } from '../../../assets/svg/builder-cta-alt.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import './style.scss';

const EarnTokens = ({ t }) => (
  <div className="IndexPage__earntokens-wrapper">
    <div className="IndexPage__earntokens">
      <div className="IndexPage__earntokens__content">
        <h2 className="IndexPage__earntokens__title">{t('landing.earnTokens.title')}</h2>
        <Link to="/start-here/what-is-joystream" className="IndexPage__earntokens__button-container">
          <div className="IndexPage__earntokens__button">
            <p className="IndexPage__earntokens__button-text">{t('button.getStarted.text')}</p>
            <p className="IndexPage__earntokens__button-text IndexPage__earntokens__button-text--alt">
              {t('button.getStarted.altText')}
            </p>
            <Arrow className="IndexPage__earntokens__button-arrow" />
          </div>
        </Link>
      </div>
      <BuilderCTA className="IndexPage__earntokens__image" />
      <BuilderAlt className="IndexPage__earntokens__image-alt" />
    </div>
  </div>
);

export default EarnTokens;
