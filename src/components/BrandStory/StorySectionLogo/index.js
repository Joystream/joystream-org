import { func } from 'prop-types';
import React from 'react';
import sketchImg from '../../../assets/images/logo-sketches.png';
import logoBackground from '../../../assets/svg/bg-brand-logo-top.svg';
import blueprintImg from '../../../assets/svg/logo-blueprint.svg';
import { ReactComponent as Logotype } from '../../../assets/svg/logo-white.svg';
import ColumnsLayout from '../../../components/ColumnsLayout';
import ActionButton from '../../ActionButton';
import BrandLayoutWrapper from '../../BrandLayoutWrapper';
import './index.scss';

const propTypes = {
  onActionClick: func,
};

const StorySectionLogo = React.forwardRef(({ onActionClick, t }, ref) => {
  return (
    <BrandLayoutWrapper blue className="StorySectionLogo" ref={ref}>
      <div className="StorySectionLogo__logos-container">
        <div className="StorySectionLogo__logo-container">
          <img className="StorySectionLogo__logo-background" src={logoBackground} alt="" />
          <Logotype className="StorySectionLogo__logo" style={{ color: 'white' }} />
        </div>
        <img className="StorySectionLogo__blueprint" src={blueprintImg} alt="" />
      </div>

      <div className="StorySectionLogo__header">
        <h2 className="StorySectionLogo__title">{t('brand.story.logo.title')}</h2>

        <div className="StorySectionLogo__sketch-img">
          <img src={sketchImg} alt="" />
        </div>
      </div>

      <ColumnsLayout className="StorySectionLogo__text">
        <div>
          <div className="StorySectionLogo__text-col">
            <p>{t('brand.story.logo.uniqueness')}</p>
            <p>{t('brand.story.logo.requirements')}</p>
          </div>
        </div>
        <div>
          <div className="StorySectionLogo__text-col">
            <p>{t('brand.story.logo.branding')}</p>
            <p>{t('brand.story.logo.challenge')}</p>
          </div>
        </div>
      </ColumnsLayout>

      <ActionButton className="StorySectionLogo__action" variant="on-blue" onClick={onActionClick} />
    </BrandLayoutWrapper>
  );
});

StorySectionLogo.propTypes = propTypes;

export default StorySectionLogo;
