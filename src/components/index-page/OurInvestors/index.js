import React from 'react';
import useWindowDimensions from '../../../utils/useWindowDimensions';

import companyIcons from '../companies';

import './style.scss';

const OurInvestors = ({ t }) => {
  const { width } = useWindowDimensions();

  return (
    <div className="IndexPage__investors-wrapper">
      <div className="IndexPage__investors">
        <h2 className="IndexPage__investors__title">{t('landing.ourInvestors.title')}</h2>
        <div className="IndexPage__investors__list">
          {companyIcons.map(({ Icon, key }) => (
            <div key={key} className="IndexPage__investors__list-item">
              <Icon className="IndexPage__investors__list-item__icon" isMobile={width && width < 768} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurInvestors;
