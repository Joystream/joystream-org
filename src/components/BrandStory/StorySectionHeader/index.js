import React from 'react';
import { func } from 'prop-types';
import { Trans } from 'gatsby-plugin-react-i18next';
import { ReactComponent as Logo } from '../../../assets/svg/logo-mark.svg';
import ActionButton from '../../ActionButton';
import BrandLayoutWrapper from '../../BrandLayoutWrapper';
import Button from '../../Button';
import './index.scss';

const propTypes = {
  onActionClick: func,
};

const StorySectionHeader = React.forwardRef(({ onActionClick, t }, ref) => {
  return (
    <BrandLayoutWrapper className="StorySectionHeader" ref={ref}>
      <div className="StorySectionHeader__container">
        <div className="StorySectionHeader__content">
          <h2 className="StorySectionHeader__title">{t('brand.story.header.title')}</h2>
          <div className="StorySectionHeader__description">
            <p><Trans i18nKey='brand.story.header.description' components={[<strong />]} /></p>
          </div>
          <Button to="/manifesto" className="StorySectionHeader__button" large>
            {t('brand.story.header.buttonText')}
          </Button>
        </div>
        <div className="StorySectionHeader__image-wrapper">
          <Logo className="StorySectionHeader__image" />
        </div>
      </div>
      <ActionButton className="StorySectionHeader__action" onClick={onActionClick}>
        {t('brand.guides.general.more')}
      </ActionButton>
    </BrandLayoutWrapper>
  );
});

StorySectionHeader.propTypes = propTypes;

export default StorySectionHeader;
