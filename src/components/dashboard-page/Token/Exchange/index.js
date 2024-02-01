import React, { useMemo, useEffect, useState } from 'react';
import cn from 'classnames';
import { string, number } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import useDashboardMedia from '../../../../utils/useDashboardMedia';

import { ReactComponent as ToggleButtonChevron } from '../../../../assets/svg/dashboard/toggle-button-chevron.svg';

import { exchangeOptions, formatNumberWithCommas } from './utils';

import './style.scss';

const exchangeOptionPropTypes = {
  logo: string.isRequired,
  name: string.isRequired,
  volume: number.isRequired,
  depthUp2: number.isRequired,
  depthDown2: number.isRequired,
};

export const ExchangeOption = ({ logo, name, volume, depthUp2, depthDown2 }) => {
  return (
    <div className="dashboard-token-exchange__option">
      <div
        className="dashboard-token-exchange__option-inner-bg"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(16, 18, 21, .6) 0%, #101215 100%), url(${logo})` }}
      ></div>

      <div className="dashboard-token-exchange__option-logo-name-wrapper">
        <img src={logo} alt="exchange-option-logo" className="dashboard-token-exchange__option-logo" />
        <h4 className="dashboard-token-exchange__option-name">{name}</h4>
      </div>

      <h5 className="dashboard-token-exchange__option-volume-depth">Volume (24h)</h5>
      <p className="dashboard-token-exchange__option-volume">&#36;{formatNumberWithCommas(volume)}</p>

      <ul className="dashboard-token-exchange__option-depths-list">
        <li className="dashboard-token-exchange__option-depths-list-item">
          <h5 className="dashboard-token-exchange__option-volume-depth">+2% Depth</h5>
          <p className="dashboard-token-exchange__option-depth">&#36;{formatNumberWithCommas(depthUp2)}</p>
        </li>
        <li className="dashboard-token-exchange__option-depths-list-item">
          <h5 className="dashboard-token-exchange__option-volume-depth">-2% Depth</h5>
          <p className="dashboard-token-exchange__option-depth">&#36;{formatNumberWithCommas(depthDown2)}</p>
        </li>
      </ul>
    </div>
  );
};

ExchangeOption.propTypes = exchangeOptionPropTypes;

const Exchange = () => {
  const { currentBreakpoints } = useDashboardMedia();
  const columnsCount = useMemo(() => {
    switch (currentBreakpoints) {
      case 'xxs':
        return 1;
      case 'xs':
        return 2;
      case 'sm':
        return 3;
      default:
        return 4;
    }
  }, [currentBreakpoints]);
  const placeholdersCount = useMemo(() => {
    if (columnsCount === 1) {
      return 0;
    }
    return exchangeOptions.length % columnsCount === 0 ? 0 : columnsCount - (exchangeOptions.length % columnsCount);
  }, [columnsCount]);

  const totalCount = exchangeOptions.length;
  const initShownCount = useMemo(() => {
    switch (currentBreakpoints) {
      case 'xxs':
      case 'sm':
        return 3;
      default:
        return 4;
    }
  }, [currentBreakpoints]);

  useEffect(() => {
    setShownCount(initShownCount);
  }, [initShownCount]);

  const [shownCount, setShownCount] = useState(initShownCount);
  const toggleShownCount = () =>
    setShownCount(prevShownCount => (prevShownCount === initShownCount ? totalCount : initShownCount));
  const shownExchangeOptions = useMemo(() => exchangeOptions.slice(0, shownCount), [shownCount]);
  const exchangeOptionsExpanded = useMemo(() => shownCount === totalCount, [shownCount, totalCount]);

  return (
    <div className="dashboard-token-exchange">
      <WidgetHeading heading="Where to buy and sell JOY?" headingWrapperCn="dashboard-token-exchange__heading" />
      <div className="dashboard-token-exchange__options">
        {shownExchangeOptions.map((exchangeOption, index) => {
          return <ExchangeOption key={index} {...exchangeOption} />;
        })}
        {exchangeOptionsExpanded &&
          Array.from({ length: placeholdersCount }, (_, i) => {
            return <div className="dashboard-token-exchange__option-placeholder"></div>;
          })}
      </div>
      <button
        className={cn('dashboard-token-exchange__button-toggle-shown-options', {
          'options-expanded': exchangeOptionsExpanded,
        })}
        onClick={toggleShownCount}
      >
        {`${exchangeOptionsExpanded ? 'Hide' : 'Show'} more exchanges`}
        <ToggleButtonChevron />
      </button>
    </div>
  );
};

export default Exchange;
