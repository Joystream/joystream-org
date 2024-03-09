import React, { useMemo, useEffect, useState } from 'react';
import cn from 'classnames';
import { string, number, object, bool } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import { ExchangeBlockSkeleton } from '../Skeletons';
import Feature from '../../../Feature';
import useDashboardMedia from '../../../../utils/useDashboardMedia';

import { ReactComponent as ToggleButtonChevron } from '../../../../assets/svg/dashboard/toggle-button-chevron.svg';
import { ReactComponent as ExchangePlaceholderIcon } from '../../../../assets/svg/dashboard/exchange-placeholder-icon.svg';

import { parseExchangeOptions, formatNumberWithCommas } from './utils';

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

const ExchangePlaceholder = () => {
  return (
    <div className="dashboard-token-exchange__option-placeholder">
      <ExchangePlaceholderIcon />
      <p className="dashboard-token-exchange__option-placeholder__text">Coming soon...</p>
    </div>
  );
};

ExchangeOption.propTypes = exchangeOptionPropTypes;

const exchangePropTypes = {
  data: object,
  loading: bool,
};

const Exchange = ({ data, loading }) => {
  const toggleOptionsVisibilityEnabled = false;

  const parsedExchangeOptions = parseExchangeOptions(data);

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
    return parsedExchangeOptions.length % columnsCount === 0
      ? 0
      : columnsCount - (parsedExchangeOptions.length % columnsCount);
  }, [parsedExchangeOptions, columnsCount]);

  const totalCount = parsedExchangeOptions.length;
  const initShownCount = useMemo(() => {
    if (!toggleOptionsVisibilityEnabled) {
      return totalCount;
    }
    switch (currentBreakpoints) {
      case 'xxs':
      case 'sm':
        return 3;
      default:
        return 4;
    }
  }, [toggleOptionsVisibilityEnabled, totalCount, currentBreakpoints]);

  useEffect(() => {
    setShownCount(initShownCount);
  }, [initShownCount]);

  const [shownCount, setShownCount] = useState(initShownCount);
  const toggleShownCount = () =>
    setShownCount(prevShownCount => (prevShownCount === initShownCount ? totalCount : initShownCount));
  const shownExchangeOptions = useMemo(() => parsedExchangeOptions.slice(0, shownCount), [
    shownCount,
    parsedExchangeOptions,
  ]);

  const exchangeOptionsExpanded = useMemo(() => (toggleOptionsVisibilityEnabled ? shownCount === totalCount : true), [
    toggleOptionsVisibilityEnabled,
    shownCount,
    totalCount,
  ]);

  return (
    <div className="dashboard-token-exchange">
      <WidgetHeading
        heading="Where to buy and sell JOY?"
        headingWrapperCn="dashboard-token-exchange__heading"
        termDefinitionKey="whereToBuyJoy"
      />

      {loading ? (
        <ExchangeBlockSkeleton bps={currentBreakpoints} />
      ) : (
        <>
          <div className="dashboard-token-exchange__options">
            {shownExchangeOptions.map((exchangeOption, index) => {
              return <ExchangeOption key={index} {...exchangeOption} />;
            })}
            {exchangeOptionsExpanded &&
              Array.from({ length: placeholdersCount }, (_, i) => <ExchangePlaceholder key={i} />)}
          </div>

          <Feature disabled={!toggleOptionsVisibilityEnabled}>
            {totalCount > initShownCount && (
              <button
                className={cn('dashboard-token-exchange__button-toggle-shown-options', {
                  'options-expanded': exchangeOptionsExpanded,
                })}
                onClick={toggleShownCount}
              >
                {`${exchangeOptionsExpanded ? 'Hide' : 'Show'} more exchanges`}
                <ToggleButtonChevron />
              </button>
            )}
          </Feature>
        </>
      )}
    </div>
  );
};

Exchange.propTypes = exchangePropTypes;

export default Exchange;
