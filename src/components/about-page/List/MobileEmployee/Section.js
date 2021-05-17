import React, { useState } from 'react';

import { ReactComponent as ArrowDown } from '../../../../assets/svg/arrow-down-small.svg';

import employees, { filters } from '../../employee-data';

const MobileIconSection = ({ Icon, name, color, jobTitle }) => {
  return (
    <div className="AboutPage__list__mobile-section">
      <Icon style={color} className="AboutPage__list__mobile-section__icon" />
      <div className="AboutPage__list__mobile-section__content">
        <p className="AboutPage__list__mobile-section__name">{name}</p>
        <p className="AboutPage__list__mobile-section__job-title">{jobTitle}</p>
      </div>
    </div>
  );
};

const MobileEmployeeSection = ({ filterState, setFilterState, categoryValues, t }) => {
  const [mobileAmountRendered, setMobileAmountRendered] = useState(6);
  const allFilteredEmployees = employees
  .reduce((previous, { Icon, type, name, jobTitle, color }, index) => {
    if (filterState === 'all' || type.includes(filterState)) {
      return [
        ...previous,
        <MobileIconSection
          jobTitle={t(jobTitle)}
          key={index.toString() + type}
          Icon={Icon}
          name={name}
          color={{ color: color }}
        />,
      ];
    }

    return previous;
  }, []);

  return (
    <>
      {/* eslint-disable-next-line */}
      <select
        value={filterState}
        onChange={e => {
          setFilterState(e.target.value);
          setMobileAmountRendered(6);
        }}
        className="AboutPage__list__select"
      >
        <option value="all">{t('about.general.roles.allMembers')} ({categoryValues.all})</option>
        {filters.map(filter => (
          <option key={filter.name} value={filter.name}>
            {t(`about.general.roles.${filter.name}`)} ({categoryValues[filter.name]})
          </option>
        ))}
      </select>
      <div className="AboutPage__list__mobile-sections">
        {allFilteredEmployees.slice(0, mobileAmountRendered)}
      </div>
      {mobileAmountRendered < allFilteredEmployees.length ? (
        <p role='presentation' onClick={() => setMobileAmountRendered(prev => prev + 6)} className="AboutPage__list__load-more">
          {t('about.ourTeam.moreMembers')}
          <ArrowDown className="AboutPage__list__load-more__arrow"/>
        </p>
      ) : null}
    </>
  );
};

export default MobileEmployeeSection;
