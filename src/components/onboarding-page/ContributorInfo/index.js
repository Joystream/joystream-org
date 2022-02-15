import React from 'react';
import './style.scss';

const ContributorInfo = ({ t, title, specialities, image }) => {
  return (
    <div className="ContributorInfo__wrapper">
      <div className="ContributorInfo__content">
        <div className="ContributorInfo__text">
          <h2 className="ContributorInfo__title">{title}</h2>
          <ul className="ContributorInfo__specialities">
            {specialities &&
              specialities.map((item, i) => (
                <li key={i} className="ContributorInfo__description">
                  {t(item)}
                </li>
              ))}
          </ul>
        </div>
        {image && (
          <img className="ContributorInfo__image" src={image} alt={t('landing.exploreJoystream.pioneer.imageAlt')} />
        )}
      </div>
    </div>
  );
};

export default ContributorInfo;
