import React, { useState } from 'react';
import cn from 'classnames';

import companyIcons from '../../../data/investors';

import './style.scss';

const OurInvestors = ({ t }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="Footer__our-investors-wrapper">
      <div className="Footer__our-investors">
        <h2 className="Footer__our-investors__title">
          {t('footer.ourInvestors')}
        </h2>
        <div className="Footer__our-investors__carousel">
          <div
            className={cn('Footer__our-investors__carousel__content', {
              'Footer__our-investors__carousel__content--paused': isPaused,
            })}
          >
            {companyIcons.map(({ Icon, key }) => (
              <div
                key={key}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="Footer__our-investors__carousel__list-item"
              >
                <Icon className="Footer__our-investors__carousel__list-item__icon" />
              </div>
            ))}
          </div>
          <div
            className={cn('Footer__our-investors__carousel__content', {
              'Footer__our-investors__carousel__content--paused': isPaused,
            })}
            aria-hidden="true"
          >
            {companyIcons.map(({ Icon, key }) => (
              <div
                key={key}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="Footer__our-investors__carousel__list-item"
              >
                <Icon className="Footer__our-investors__carousel__list-item__icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInvestors;
