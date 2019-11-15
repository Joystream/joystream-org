import { func } from 'prop-types';
import React from 'react';
import brandExplanationImg from '../../../assets/images/square-face.png';
import data from '../../../data/pages/brand/story';
import ActionButton from '../../ActionButton';
import BrandLayoutWrapper from '../../BrandLayoutWrapper';
import './index.scss';

const propTypes = {
  onActionClick: func,
};

const StorySectionExplanation = React.forwardRef(({ onActionClick }, ref) => {
  return (
    <BrandLayoutWrapper className="StorySectionExplanation" ref={ref}>
      <div className="StorySectionExplanation__wrapper">
        <img src={brandExplanationImg} className="StorySectionExplanation__image" alt="" />
        <div className="StorySectionExplanation__content">
          <h2 className="StorySectionExplanation__title">{data.explanation.title}</h2>
          <div className="StorySectionExplanation__text">{data.explanation.description}</div>
        </div>
      </div>

      <ActionButton
        className="StorySectionExplanation__action"
        variant="on-white"
        direction="up"
        onClick={onActionClick}
      />
    </BrandLayoutWrapper>
  );
});

StorySectionExplanation.propTypes = propTypes;

export default StorySectionExplanation;
