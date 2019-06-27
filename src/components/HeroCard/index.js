import React from 'react';
import { instanceOf, oneOfType, string } from 'prop-types';
import cn from 'classnames';

import './style.scss';
import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg';
import { ReactComponent as Warning } from '../../assets/svg/warning.svg';
import DateCounter from '../DateCounter';

const propTypes = {
  title: string,
  date: oneOfType([string, instanceOf(Date)]),
};

const defaultProps = {
  title: 'Network live',
  date: null,
};

const HeroCard = ({ date, title, error, ...props }) => {
  const classes = cn('Card', {
    'Card--error': !date,
  });

  const now = new Date();
  const dateObj = new Date(date);

  return (
    <section className={classes} {...props}>
      <h2 className="Card__header">
        {!date ? (
          <>
            <Warning className="Card__icon" />
            Network down
          </>
        ) : (
          <>
            <Calendar className="Card__icon" />
            {now > dateObj ? 'Network announced' : 'Network live'}
          </>
        )}
      </h2>
      <div className="Card__content">
        {!date ? (
          <div>
            <p className="Card__title"> Failure identified</p>
            <p className="Card__text">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad
              cum, doloremque dolores dolorum ducimus est facere facilis illo in
              nam neque non optio quaerat quisquam repellendus velit, vero
              voluptatem?
            </p>
          </div>
        ) : (
          <DateCounter date={date} large light />
        )}
      </div>
    </section>
  );
};

HeroCard.propTypes = propTypes;
HeroCard.defaultProps = defaultProps;

export default HeroCard;
