import React from 'react';
import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import './style.scss';

const SectionTitle = (props) => {
  return(
    <div className="title">
      <div>{props.title}</div>
      <button>
        Copy link to this section
        <LinkIcon />
      </button>
    </div>
  )
}

export default SectionTitle;