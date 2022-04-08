import React from 'react';
import Loader from 'react-loader-spinner';
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
                <div className="Statistics__item__count">
                  {item.data && item.data.isLoading ? (
                    <Loader
                      className="Statistics__item__linechart__loader"
                      type="Oval"
                      color="#6C6CFF"
                      height="100%"
                      width="100%"
                      timeout={0}
                    />
                  ) : item.data.count ? (
                    item.data.count
                  ) : (
                    '0'
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Statistics;
