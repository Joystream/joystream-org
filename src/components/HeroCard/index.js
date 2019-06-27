import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';
import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg';
import DateCounter from '../DateCounter';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  title: 'Network live',
};

const HeroCard = ({ title, error, ...props }) => {
  const classes = cn('Card', {
    'Card--error': error,
  });

  return (
    <section className={classes} {...props}>
      <h2 className="Card__header">
        <Calendar className="Card__icon" />
        {title}
      </h2>
      <div className="Card__content">
        <DateCounter date="2019/06/25 16:26" large light />
      </div>
    </section>
  );
};

HeroCard.propTypes = propTypes;
HeroCard.defaultProps = defaultProps;

export default HeroCard;
