import React from 'react';

import './style.scss';

const Statistics = ({ t, data }) => {
  return (
    <div className="Statistics__wrapper">
      <div className="Statistics__content">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="Statistics__item">
                <div className="Statistics__item__title">{t(item.title)}</div>
                <div className="Statistics__item__count">{item.count}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Statistics;
