import React from 'react';
import { func } from 'prop-types';
import laptopImg from '../../../assets/images/laptop-website.png';
import wavesImg from '../../../assets/svg/waves.svg';
import ActionButton from '../../ActionButton';
import BrandLayoutWrapper from '../../BrandLayoutWrapper';
import Link from '../../Link';
import data from '../../../data/pages/brand/story';
import './index.scss';

const propTypes = {
  onActionClick: func,
};

const StorySectionWebsite = React.forwardRef(({ onActionClick }, ref) => {
  return (
    <BrandLayoutWrapper className="StorySectionWebsite" ref={ref}>
      <h3 className="StorySectionWebsite__title">{data.website.title}</h3>
      <div className="StorySectionWebsite__row">
        <div className="StorySectionWebsite__container-dark">
          <img src={wavesImg} alt="" />
        </div>
        <div className="StorySectionWebsite__container-blue">
          <Link to="/" className="StorySectionWebsite__page-link">
            {data.website.linkText}
          </Link>
        </div>
        <div className="StorySectionWebsite__image-container">
          <img src={laptopImg} className="StorySectionWebsite__image" alt="" />
        </div>
      </div>

      <ActionButton className="StorySectionWebsite__action" onClick={onActionClick} />
    </BrandLayoutWrapper>
  );
});

StorySectionWebsite.propTypes = propTypes;

export default StorySectionWebsite;
