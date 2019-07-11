import React from 'react';
import { string, oneOf } from 'prop-types';
import cn from 'classnames';

import { ReactComponent as AchievedIcon } from '../../assets/svg/achieved.svg';
import { ReactComponent as InProgressIcon } from '../../assets/svg/in-progress.svg';
import { ReactComponent as PostponedIcon } from '../../assets/svg/postponed.svg';

import './style.scss';

const propTypes = {
  title: string.isRequired,
  className: string,
  state: oneOf(['achieved', 'inprogress', 'postponed']),
};

const defaultProps = {
  className: '',
  state: 'achieved',
};

const states = {
  achieved: { icon: AchievedIcon, name: 'Achieved' },
  inprogress: { icon: InProgressIcon, name: 'In Progress' },
  postponed: { icon: PostponedIcon, name: 'Postponed' },
};

const GoalItem = ({ title, className, state, children, ...props }) => {
  const classes = cn('GoalItem', className);

  const Icon = states[state].icon;
  return (
    <div className={classes} {...props}>
      <div className="GoalItem__icon-container">
        <Icon className="GoalItem__icon" />
        <p className={`GoalItem__status GoalItem__status--${state}`}>{states[state].name}</p>
      </div>
      <div className="GoalItem__content">
        <p className="GoalItem__title">{title}</p>
        {children}
      </div>
    </div>
  );
};

GoalItem.propTypes = propTypes;
GoalItem.defaultProps = defaultProps;

export default GoalItem;
