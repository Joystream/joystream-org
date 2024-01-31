import React from 'react';
import cn from 'classnames';
import { string, func } from 'prop-types';

import { ReactComponent as NewTabIcon } from '../../../../assets/svg/dashboard/new-tab.svg';

import './style.scss';

const propTypes = {
  text: string.isRequired,
  onClick: func,
  buttonCn: string,
};

const ActionButton = ({ text, onClick, buttonCn }) => {
  return (
    <button className={cn('dashboard-team-action-button', { [buttonCn]: !!buttonCn })} onClick={onClick}>
      {text}
      <NewTabIcon />
    </button>
  );
};

ActionButton.propTypes = propTypes;

export default ActionButton;
