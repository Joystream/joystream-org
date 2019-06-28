import React from 'react';
import { instanceOf, oneOfType, string, bool } from 'prop-types';
import cn from 'classnames';

import './style.scss';
import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg';
import { ReactComponent as Warning } from '../../assets/svg/warning.svg';
import DateCounter from '../DateCounter';

const propTypes = {
  date: oneOfType([string, instanceOf(Date)]),
  error: bool,
};

const defaultProps = {
  date: null,
  error: false,
};

class HeroCard extends React.Component {
  state = {
    title: 'Network live',
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.title !== nextState.title;
  }

  setTitle = () => {
    this.setState({ title: 'Network announced' });
  };

  render() {
    const { date, error } = this.props;
    const { title } = this.state;

    const classes = cn('Card', {
      'Card--error': !date,
    });

    return (
      <section className={classes}>
        <h2 className="Card__header">
          {error ? (
            <>
              <Warning className="Card__icon" />
              Network down
            </>
          ) : (
            <>
              <Calendar className="Card__icon" />
              {title}
            </>
          )}
        </h2>
        <div className="Card__content">
          {error ? (
            <div>
              <p className="Card__title"> Failure identified</p>
              <p className="Card__text">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad
                cum, doloremque dolores dolorum ducimus est facere facilis illo
                in nam neque non optio quaerat quisquam repellendus velit, vero
                voluptatem?
              </p>
            </div>
          ) : (
            <DateCounter date={date} large light onTimeout={this.setTitle} />
          )}
        </div>
      </section>
    );
  }
}

HeroCard.propTypes = propTypes;
HeroCard.defaultProps = defaultProps;

export default HeroCard;
