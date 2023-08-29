import React from 'react';
import { ReactComponent as LeftArrow } from '../../../assets/svg/left_arrow.svg';

import './style.scss';

function GlossaryHead({ head }) {
  return (
    <div className="GlossaryHead">
      <a href="/roadmap">
        <span className="GlossaryHead__roadmap">Roadmap </span>
      </a>
      <LeftArrow />
      <span className="GlossaryHead__content">{head}</span>
    </div>
  );
}

export default GlossaryHead;
