import React from 'react';
import GuidesSectionLogo from '../../../components/BrandGuides/GuidesSectionLogo';
import GuidesSectionIllustrations from '../../../components/BrandGuides/GuidesSectionIllustrations';
import GuidesSectionPallete from '../../../components/BrandGuides/GuidesSectionPallete';
import GuidesSectionIconography from '../../../components/BrandGuides/GuidesSectionIconography';
import GuidesSectionMotion from '../../../components/BrandGuides/GuidesSectionMotion';
import GuidesSectionTypography from '../../../components/BrandGuides/GuidesSectionTypography';
import BrandLayoutWrapper from '../../../components/BrandLayoutWrapper';
import BrandSidebar, { SidebarProvider } from '../../../components/BrandSidebar';
import SiteMetadata from '../../../components/SiteMetadata';
import BrandLayout from '../../../components/_layouts/Brand';
import guidesData from '../../../data/pages/brand/guides';
import './index.scss';

const GuidesPage = () => {
  return (
    <BrandLayout>
      <SiteMetadata title="Joystream Brand Guide" />

      <BrandLayoutWrapper className="GuidesPage">
        <SidebarProvider>
          <BrandSidebar data={guidesData.sidebar} />
          <div className="GuidesPage__wrapper">
            <GuidesSectionLogo />

            <GuidesSectionPallete />

            <GuidesSectionIconography />

            <GuidesSectionIllustrations />

            <GuidesSectionTypography />

            <GuidesSectionMotion />
          </div>
        </SidebarProvider>
      </BrandLayoutWrapper>
    </BrandLayout>
  );
};

export default GuidesPage;
