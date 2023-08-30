import React from 'react';
import { ReactComponent as LeftArrow } from '../../../assets/svg/left_arrow.svg';

import './style.scss';

function GlossaryHead({ head, onclick }) {
  return (
    <div className="GlossaryHead">
      <span
        className="GlossaryHead__roadmap"
        onKeyPress={onclick}
        role="button"
        tabIndex="0"
      >
        Roadmap{' '}
      </span>

      <LeftArrow />
      <span className="GlossaryHead__content">{head}</span>
    </div>
  );
}

export default GlossaryHead;
