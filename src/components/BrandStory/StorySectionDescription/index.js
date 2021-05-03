import React from 'react';
import ColumnsLayout from '../../../components/ColumnsLayout';
import BrandLayoutWrapper from '../../BrandLayoutWrapper';
import './index.scss';

const StorySectionDescription = React.forwardRef(({ t }, ref) => {
  return (
    <BrandLayoutWrapper className="StorySectionDescription" ref={ref}>
      <p className="StorySectionDescription__header">
        {t('brand.story.description.header')}
      </p>
      <ColumnsLayout className="StorySectionDescription__text">
        <div>
          <div className="StorySectionDescription__text-col">
            <p>{t('brand.story.description.meaningfulRole')}</p>
            <p>{t('brand.story.description.powerfulTool')}</p>
            <p>{t('brand.story.description.experimental')}</p>
          </div>
        </div>
        <div>
          <div className="StorySectionDescription__text-col">
            <p>{t('brand.story.description.empowering')}</p>
            <p>{t('brand.story.description.governance')}</p>
          </div>
        </div>
      </ColumnsLayout>
      <p className="StorySectionDescription__footer">
        {t('brand.story.description.footer')}
      </p>
    </BrandLayoutWrapper>
  );
});

export default StorySectionDescription;
