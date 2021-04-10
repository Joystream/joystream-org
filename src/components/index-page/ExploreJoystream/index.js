import React from 'react';
import AtlasVisual from '../../../assets/images/atlas-visual.png';
import PioneerVisual from '../../../assets/images/pioneer-visual.png';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const ExploreJoystream = ({ t }) => (
  <div className="IndexPage__explore-wrapper">
    <div className="IndexPage__explore">
      <h2 className="IndexPage__explore__title">{t('landing.exploreJoystream.title')}</h2>
      <h3 className="IndexPage__explore__subtitle">{t('landing.exploreJoystream.subtitle')}</h3>

      <div className="IndexPage__explore__explanation">
        <a href="https://play.joystream.org/">
          <img src={AtlasVisual} alt="overview visual of atlas" />
        </a>
        <div className="IndexPage__explore__explanation__content">
          <h3 className="IndexPage__explore__explanation__title">Atlas</h3>
          <p className="IndexPage__explore__explanation__text">{t('landing.exploreJoystream.atlas.text')}</p>
          <a className="IndexPage__explore__explanation__link-wrapper" href="https://play.joystream.org/">
            <div className="IndexPage__explore__explanation__link">
              <p className="IndexPage__explore__explanation__link-text">{t('landing.exploreJoystream.atlas.link')}</p>
              <Arrow className="IndexPage__explore__explanation__link-arrow" />
            </div>
          </a>
        </div>
      </div>

      <div className="IndexPage__explore__explanation IndexPage__explore__explanation--reverse">
        <div className="IndexPage__explore__explanation__content">
          <h3 className="IndexPage__explore__explanation__title">Pioneer</h3>
          <p className="IndexPage__explore__explanation__text">{t('landing.exploreJoystream.pioneer.text')}</p>
          <a className="IndexPage__explore__explanation__link-wrapper" href="https://testnet.joystream.org/">
            <div className="IndexPage__explore__explanation__link">
              <p className="IndexPage__explore__explanation__link-text">{t('landing.exploreJoystream.pioneer.link')}</p>
              <Arrow className="IndexPage__explore__explanation__link-arrow" />
            </div>
          </a>
        </div>
        <a href="https://testnet.joystream.org/">
          <img src={PioneerVisual} alt="overview visual of pioneer" />
        </a>
      </div>
    </div>
  </div>
);

export default ExploreJoystream;
