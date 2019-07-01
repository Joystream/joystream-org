import React from 'react';
import { instanceOf, oneOfType, string, bool } from 'prop-types';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';

import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg';
import { ReactComponent as Warning } from '../../assets/svg/warning.svg';
import DateCounter from '../DateCounter';

import './style.scss';

const propTypes = {
  date: oneOfType([string, instanceOf(Date)]),
  error: bool,
  content: string,
};

const defaultProps = {
  date: null,
  error: false,
  content: null,
};

const status = {
  active: { title: 'Network live' },
  error: { title: 'Network down', icon: Warning, class: 'Card--error' },
  finished: { title: 'Network announced' },
};

class HeroCard extends React.Component {
  state = {
    currentStatus: 'active',
  };

  componentDidMount() {
    if (this.props.error) {
      this.setStatus('error');
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

    return (
      <>
        <Icon className="Card__icon" />
        {status[currentStatus].title}
      </>
    );
  };

  renderContent = () => {
    const { error, content, date } = this.props;

    if (error) {
      return (
        <div>
          <ReactMarkdown source={content} />
        </div>
      );
    }

    return (
      <DateCounter
        date={date}
        large
        light
        onTimeout={() => this.setStatus('finished')}
      />
    );
  };

  render() {
    const { currentStatus } = this.state;

    const classes = cn('Card', status[currentStatus].class);

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
