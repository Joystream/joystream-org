import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const Jsgenesis = () => {
  return (
    <div className='IndexPage__jsgenesis-wrapper'>
      <div className='IndexPage__jsgenesis'>
        <div className='IndexPage__jsgenesis__content'>
          <h3 className='IndexPage__jsgenesis__section-title'>JSGENESIS</h3>
          <h2 className='IndexPage__jsgenesis__title'>We’re building<br/>Joystream to set it free</h2>
          <Link to="/about">
            <p className='IndexPage__jsgenesis__link'>
              Meet the Team
              <ArrowIcon className='IndexPage__jsgenesis__link__arrow' />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Jsgenesis;