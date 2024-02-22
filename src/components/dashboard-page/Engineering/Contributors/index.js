import React, { useMemo, useEffect, useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import useDashboardMedia from '../../../../utils/useDashboardMedia';

import './style.scss';

const propTypes = {
  topContributors: arrayOf(
    shape({
      avatar: string,
      name: string.isRequired,
      username: string,
    })
  ).isRequired,
};

const Contributors = ({ topContributors }) => {
  const { currentBreakpoints } = useDashboardMedia();

  const totalCount = topContributors.length;
  const initShownCount = useMemo(() => {
    switch (currentBreakpoints) {
      case 'xxs':
      case 'xs':
        return 3;
      case 'sm':
        return 6;
      case 'md':
        return 8;
      default:
        return 12;
    }
  }, [currentBreakpoints]);

  useEffect(() => {
    setShownCount(initShownCount);
  }, [initShownCount]);

  const initHiddenCount = useMemo(() => totalCount - initShownCount, [totalCount, initShownCount]);

  const [shownCount, setShownCount] = useState(initShownCount);
  const toggleShownCount = () =>
    setShownCount(prevShownCount => (prevShownCount === initShownCount ? totalCount : initShownCount));

  const shownContributors = useMemo(() => topContributors.slice(0, shownCount), [topContributors, shownCount]);
  const toggleButtonText = useMemo(() => {
    if (shownCount === initShownCount) {
      return `Show ${totalCount} top contributors`;
    }
    return `Hide ${initHiddenCount} contributors`;
  }, [initHiddenCount, initShownCount, totalCount, shownCount]);

  const getUnifiedUsername = user => user.username || user.name;

  return (
    <div className="dashboard-engineering-contributors">
      <ul className="dashboard-engineering-contributors__list">
        {shownContributors.map((contributor, index) => (
          <li key={index} className="dashboard-engineering-contributors__list-item">
            <a href={`https://github.com/${getUnifiedUsername(contributor)}`} target="_blank" rel="noreferrer">
              <div className="dashboard-engineering-contributors__contributor">
                <img
                  src={contributor.avatar}
                  alt={`${getUnifiedUsername(contributor)}-avatar`}
                  className="dashboard-engineering-contributors__contributor-avatar"
                />
                <p className="dashboard-engineering-contributors__contributor-name">{contributor.name}</p>
                {!!contributor.username && (
                  <p className="dashboard-engineering-contributors__contributor-username">{contributor.username}</p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
      <button className="dashboard-engineering-contributors__button-toggle-shown" onClick={toggleShownCount}>
        {toggleButtonText}
      </button>
    </div>
  );
};

Contributors.propTypes = propTypes;

export default Contributors;
