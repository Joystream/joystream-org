import React from 'react';

import './style.scss';

const InfoSection = ({ title, text, isCentered }) => {
  return (
    <div className="InfoSection__wrapper">
      <div className="InfoSection__manifesto-cta">
        <div className="InfoSection__manifesto-cta__content">
          <h2
            className={`InfoSection__manifesto-cta__title ${
              isCentered ? 'InfoSection__manifesto-cta__title--centered' : ''
            }`}
          >
            {title}
          </h2>
          <h4
            className={`InfoSection__manifesto-cta__subtitle ${
              isCentered ? 'InfoSection__manifesto-cta__subtitle--centered' : ''
            }`}
          >
            {text.split('<br/>').map((line, index) => {
              return (
                <span key={index}>
                  {line}
                  <br />
                  <br />
                </span>
              );
            })}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
