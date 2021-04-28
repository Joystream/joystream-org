import React from 'react';
import { instanceOf, oneOfType, string, bool, node } from 'prop-types';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';

import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg';
import { ReactComponent as Warning } from '../../assets/svg/warning.svg';
import DateCounter from '../DateCounter';

import './style.scss';

const propTypes = {
  date: oneOfType([string, instanceOf(Date)]),
  error: bool,
  info: bool,
  content: string,
  counterTitle: oneOfType([string, node]),
};

const defaultProps = {
  date: null,
  error: false,
  info: false,
  content: null,
  counterTitle: '',
};

const status = {
  active: { title: 'Network announced' },
  error: { title: 'Network down', icon: Warning },
  info: { title: 'Network replaced' },
  finished: { title: 'Network live' },
};

class HeroCard extends React.Component {
  state = {
    currentStatus: 'active',
  };

  componentDidMount() {
    const { error, info, date } = this.props;

    if (error) {
      return this.setStatus('error');
    }

    const isDatePast = new Date(date) < new Date();

    if (isDatePast) {
      return this.setStatus(info ? 'info' : 'finished');
    }

    if (info) {
      return this.setStatus('info');
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.currentStatus !== nextState.currentStatus;
  }

  setStatus = status => {
    this.setState({ currentStatus: status });
  };

  renderTitle = () => {
    const { currentStatus } = this.state;
    const Icon = status[currentStatus].icon || Calendar;

    const { t } = this.props;

    return (
      <>
        <Icon className="Card__icon" />
        {t(`heroCard.${currentStatus}`)}
      </>
    );
  };

  renderContent = () => {
    const { error, info, content, date, counterTitle } = this.props;

    if (error) {
      return (
        <div>
          <ReactMarkdown source={content} />
        </div>
      );
    }

    const isDatePast = new Date(date) < new Date();

    return (
      <DateCounter
        date={date}
        large
        light
        t={this.props.t}
        {...(!isDatePast && { onTimeout: () => this.setStatus(info ? 'info' : 'finished') })}
        title={counterTitle}
      />
    );
  };

  render() {
    const { error, info } = this.props;

    const classes = cn('Card', {
      'Card--error': error,
      'Card--info': info,
    });

    return (
      <div className={classes}>
        <p className="Card__header">{this.renderTitle()}</p>
        <div className="Card__content">{this.renderContent()}</div>
      </div>
    );
  }
}

HeroCard.propTypes = propTypes;
HeroCard.defaultProps = defaultProps;

export default HeroCard;
