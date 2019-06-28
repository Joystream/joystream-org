import React from 'react';
import { instanceOf, oneOfType, string, bool } from 'prop-types';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';

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

  renderTitle = () => {
    const { title } = this.state;
    const { error } = this.props;

    if (error) {
      return (
        <>
          <Warning className="Card__icon" />
          Network down
        </>
      );
    }

    return (
      <>
        <Calendar className="Card__icon" />
        {title}
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

    return <DateCounter date={date} large light onTimeout={this.setTitle} />;
  };

  render() {
    const { error } = this.props;

    const classes = cn('Card', {
      'Card--error': error,
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
