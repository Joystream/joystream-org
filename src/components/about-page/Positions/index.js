import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Jsgenesis from '../../../assets/svg/jsgenesis-gray.svg';
import FrontEndIcon from '../../../assets/svg/front-end-icon.svg';
import BlockchainDevIcon from '../../../assets/svg/blockchain-dev-icon.svg';
import DesignLeadIcon from '../../../assets/svg/design-lead-icon.svg';

import './style.scss';

const Position = ({ Icon, role, location, employmentType, salary, link, iconType }) => {
  return (
    <a href={link} target="_blank">
      <div className="AboutPage__position">
        <div className="AboutPage__position__icon-wrapper">
          <img src={Icon} className={`AboutPage__position__icon AboutPage__position__icon--${iconType}`} alt='' />
        </div>
        <h4 className="AboutPage__position__role">{role}</h4>
        <div className="AboutPage__position__info">
          <p>
            {location}
            <span>|</span>
          </p>
          <p>{employmentType}</p>
        </div>
        <p className="AboutPage__position__salary">{salary}</p>
      </div>
    </a>
  );
};

const Positions = () => {
  const { t } = useTranslation();
  
  return (
    <div className="AboutPage__positions-wrapper">
      <div className="AboutPage__positions">
        <h2 className="AboutPage__positions__title">{t('about.positions.title')}</h2>
        <h3 className="AboutPage__positions__jobs">{t('about.positions.available')}</h3>
        <div className="AboutPage__positions__subtitle">
          <span>{t('about.positions.join')}</span>{' '}
          <img src={Jsgenesis} className="AboutPage__positions__jsgenesis" alt={t('about.general.jsgenesisAlt')} />
        </div>
        <div className="AboutPage__positions__list">
          <Position
            Icon={FrontEndIcon}
            role={t('about.positions.roles.frontEnd')}
            location={t('about.positions.location')}
            employmentType={t('about.positions.employmentType')}
            salary={t('about.positions.salary.frontEnd')}
            link="https://www.jsgenesis.com/jobs/front-end-developer"
            iconType="frontend"
          />
          <Position
            Icon={BlockchainDevIcon}
            role={t('about.positions.roles.blockchain')}
            location={t('about.positions.location')}
            employmentType={t('about.positions.employmentType')}
            salary={t('about.positions.salary.blockchain')}
            link="https://www.jsgenesis.com/jobs/blockchain-developer"
            iconType="blockchain"
          />
          <Position
            Icon={DesignLeadIcon}
            role={t('about.positions.roles.designer')}
            location={t('about.positions.location')}
            employmentType={t('about.positions.employmentType')}
            salary={t('about.positions.salary.designer')}
            link="https://www.jsgenesis.com/jobs/uiux-design-lead"
            iconType="design"
          />
        </div>
      </div>
    </div>
  );
};

export default Positions;
