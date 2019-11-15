import React from 'react';
import ColumnsLayout from '../../../components/ColumnsLayout';
import BrandLayoutWrapper from '../../BrandLayoutWrapper';
import data from '../../../data/pages/brand/story';
import './index.scss';

const StorySectionDescription = React.forwardRef((props, ref) => {
  return (
    <BrandLayoutWrapper className="StorySectionDescription" ref={ref}>
      <p className="StorySectionDescription__header">{data.description.header}</p>
      <ColumnsLayout className="StorySectionDescription__text">
        <div>
          <div className="StorySectionDescription__text-col">{data.description.leftCol}</div>
        </div>
        <div>
          <div className="StorySectionDescription__text-col">{data.description.rightCol}</div>
        </div>
      </ColumnsLayout>
      <p className="StorySectionDescription__footer">{data.description.footer}</p>
    </BrandLayoutWrapper>
  );
});

export default StorySectionDescription;
