import React from 'react';
import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import './style.scss';

const SectionTitle = props => {
  return (
    <div className="section-title">
      <div className="title">
        <div>{props.title}</div>
        <button>
          Copy link<span className="hidden_425"> to this section</span>
          <LinkIcon />
        </button>
      </div>
    </div>
  );
};

export default SectionTitle;
