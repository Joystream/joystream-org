import React from 'react';
import './style.scss';

const CouncilResponsibilities = ({ t, title, data }) => {
  return (
    <div className="CouncilResponsibilities__wrapper">
      {title && <h2 className="CouncilResponsibilities__title">{t(title)}</h2>}
      <div className="CouncilResponsibilities__content">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="CouncilResponsibilities__item">
                {item.image}
                <div className="CouncilResponsibilities__item__title">{t(item.title)}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CouncilResponsibilities;
