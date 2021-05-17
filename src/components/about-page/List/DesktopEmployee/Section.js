import React, { useRef } from 'react';
import cn from 'classnames';

import EmployeeIcon from './Icon';

import employees, { filters } from '../../employee-data';

const DesktopEmployeeSection = ({ filterState, setFilterState, categoryValues, windowWidth, t }) => {
  const wrapperRef = useRef();

  return (
    <>
      <div className="AboutPage__list__filters">
        <div
          role="presentation"
          className={cn('AboutPage__list__filter', {
            'AboutPage__list__filter--active': filterState === 'all',
          })}
          onClick={() => setFilterState('all')}
        >
          {t('about.general.roles.all')} ({categoryValues.all})
        </div>
        {filters.map(filter => {
          return (
            <div
              role="presentation"
              key={filter.name}
              className={cn('AboutPage__list__filter', {
                'AboutPage__list__filter--active': filterState === filter.name,
              })}
              onClick={() => setFilterState(filter.name)}
            >
              {t(`about.general.roles.${filter.name}`)} ({categoryValues[filter.name]})
            </div>
          );
        })}
      </div>
      <div ref={wrapperRef} className="AboutPage__list__icons">
        {employees.map(({ Icon, type, name, jobTitle, color }, index) =>
          filterState === 'all' || type.includes(filterState) ? (
            <EmployeeIcon
              wrapperRef={wrapperRef}
              jobTitle={t(jobTitle)}
              key={index.toString() + type}
              Icon={Icon}
              name={name}
              color={{ color: color }}
              windowWidth={windowWidth}
            />
          ) : null )}
      </div>
    </>
  );
};

export default DesktopEmployeeSection;
