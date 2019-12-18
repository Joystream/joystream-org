import React from 'react';
import BrandLayoutWrapper from '../../../components/BrandLayoutWrapper';
import BrandSidebar, { SidebarProvider } from '../../../components/BrandSidebar';
import SiteMetadata from '../../../components/SiteMetadata';
import BrandLayout from '../../../components/_layouts/Brand';
import assetsData from '../../../data/pages/brand/assets';
import './index.scss';

const AssetsSection = () => {};

const GuidesPage = () => {
  return (
    <BrandLayout>
      <SiteMetadata title="Joystream Brand Guide" />

      <BrandLayoutWrapper className="AssetsPage">
        <SidebarProvider>
          <BrandSidebar data={assetsData.sidebar} light />
          <div className="AssetsPage__wrapper"></div>
        </SidebarProvider>
      </BrandLayoutWrapper>
    </BrandLayout>
  );
};

export default GuidesPage;
