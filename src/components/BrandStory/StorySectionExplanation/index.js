import { func } from 'prop-types';
import React from 'react';
import brandExplanationImg from '../../../assets/images/square-face.png';
import ActionButton from '../../ActionButton';
import BrandLayoutWrapper from '../../BrandLayoutWrapper';
import './index.scss';

const propTypes = {
  onActionClick: func,
};

const StorySectionExplanation = React.forwardRef(({ onActionClick, t }, ref) => {
  return (
    <BrandLayoutWrapper className="StorySectionExplanation" ref={ref}>
      <div className="StorySectionExplanation__wrapper">
        <img src={brandExplanationImg} className="StorySectionExplanation__image" alt="" />
        <div className="StorySectionExplanation__content">
          <h2 className="StorySectionExplanation__title">{t('brand.story.explanation.title')}</h2>
          <div className="StorySectionExplanation__text">
            <p>{t('brand.story.explanation.balance')}</p>
            <p>{t('brand.story.explanation.patterns')}</p>
            <p>{t('brand.story.explanation.style')}</p>
          </div>
        </div>
      </div>

      <ActionButton
        className="StorySectionExplanation__action"
        variant="on-white"
        direction="up"
        onClick={onActionClick}
      >
        {t('brand.guides.general.more')}
      </ActionButton>
    </BrandLayoutWrapper>
  );
});

StorySectionExplanation.propTypes = propTypes;

export default StorySectionExplanation;
