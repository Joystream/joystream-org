import React from 'react';
import { Slide } from 'pure-react-carousel';
import { string, bool, arrayOf } from 'prop-types';

import WidgetHeading from '../WidgetHeading';
import Carousel from '../Carousel';

import { ReactComponent as ExclamationMarkIcon } from '../../../assets/svg/dashboard/exclamation-mark-icon.svg';
import { ReactComponent as CheckAcceptedIcon } from '../../../assets/svg/dashboard/check-accepted-icon.svg';
import { ReactComponent as CancelRejectedIcon } from '../../../assets/svg/dashboard/cancel-rejected-icon.svg';
import { ReactComponent as ExchangerIcon } from '../../../assets/svg/dashboard/exchanger-icon.svg';

import { joyCarouselItems } from './data';

import './style.scss';

const joyCarouselItemPropTypes = {
  platformLogo: string.isRequired,
  platformName: string.isRequired,
  requiresKyc: bool.isRequired,
  acceptsUsersFromPoland: bool.isRequired,
  exchangePair: arrayOf(string),
};

const JoyCarouselItem = ({ platformLogo, platformName, requiresKyc, acceptsUsersFromPoland, exchangePair }) => {
  return (
    <div className="dashboard-joy-carousel__item">
      <img className="dashboard-joy-carousel__item-logo" src={platformLogo} alt={`${platformName}-logo`} />
      <h4 className="dashboard-joy-carousel__item-heading">{platformName}</h4>
      <ul className="dashboard-joy-carousel__tags">
        <li className="dashboard-joy-carousel__tags-item">
          <div className="dashboard-joy-carousel__tag">
            <ExclamationMarkIcon />
            <p className="dashboard-joy-carousel__tag-text">{requiresKyc ? 'Requires KYC' : 'Doesn’t require KYC'}</p>
          </div>
        </li>
        <li className="dashboard-joy-carousel__tags-item">
          <div className="dashboard-joy-carousel__tag">
            {acceptsUsersFromPoland ? <CheckAcceptedIcon /> : <CancelRejectedIcon />}
            <p className="dashboard-joy-carousel__tag-text">
              {acceptsUsersFromPoland ? 'Accepting users from: Poland' : 'Not accepting users from: Poland'}
            </p>
          </div>
        </li>
        <li className="dashboard-joy-carousel__tags-item">
          <div className="dashboard-joy-carousel__tag">
            <ExchangerIcon />
            <p className="dashboard-joy-carousel__tag-text">{`Pair: ${exchangePair[0]} <-> ${exchangePair[1]}`}</p>
          </div>
        </li>
      </ul>
      <button className="dashboard-joy-carousel__button-how-to-buy">How to buy?</button>
    </div>
  );
};

const DashboardJoyCarousel = () => {
  return (
    <div className="dashboard-joy-carousel">
      <WidgetHeading heading="Where to buy and sell JOY?" headingWrapperCn="dashboard-joy-carousel__heading" />
      <Carousel>
        {joyCarouselItems.map((joyCarouselItem, index) => {
          return (
            <Slide className="dashboard-joy-carousel__slide" key={index} index={index}>
              <JoyCarouselItem {...joyCarouselItem} />
            </Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

JoyCarouselItem.propTypes = joyCarouselItemPropTypes;

export default DashboardJoyCarousel;
