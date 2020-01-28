import React from 'react';
import { func } from 'prop-types';
import { ReactComponent as Logo } from '../../../assets/svg/logo-mark.svg';
import ActionButton from '../../ActionButton';
import BrandLayoutWrapper from '../../BrandLayoutWrapper';
import Button from '../../Button';
import data from '../../../data/pages/brand/story';
import './index.scss';

const propTypes = {
  onActionClick: func,
};

const StorySectionHeader = React.forwardRef(({ onActionClick }, ref) => {
  return (
    <BrandLayoutWrapper className="StorySectionHeader" ref={ref}>
      <div className="StorySectionHeader__container">
        <div className="StorySectionHeader__content">
          <h2 className="StorySectionHeader__title">{data.header.title}</h2>
          <div className="StorySectionHeader__description">
            <p>{data.header.description}</p>
          </div>
          <Button to="/manifesto" className="StorySectionHeader__button" large>
            {data.header.buttonText}
          </Button>
        </div>
        <div className="StorySectionHeader__image-wrapper">
          <Logo className="StorySectionHeader__image" />
        </div>
      </div>
      <ActionButton className="StorySectionHeader__action" onClick={onActionClick} />
    </BrandLayoutWrapper>
  );
});

StorySectionHeader.propTypes = propTypes;

export default StorySectionHeader;
