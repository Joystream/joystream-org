import React, { useState, useEffect } from 'react';
import AssetsSection from '../../../components/BrandAssets/AssetsSection';
import AssetTile from '../../../components/BrandAssets/AssetTile';
import BrandLayoutWrapper from '../../../components/BrandLayoutWrapper';
import BrandSidebar, { SidebarProvider } from '../../../components/BrandSidebar';
import SiteMetadata from '../../../components/SiteMetadata';
import BrandLayout from '../../../components/_layouts/Brand';
import fullAssets from '../../../data/pages/brand/assets-full';
import padNumber from '../../../utils/padNumber';
import scrollToIdElement from '../../../utils/scrollToIdElement';
import typographyImg from '../../../assets/images/typography-overview.png';
import './index.scss';

const ASSETS_LINK = 'https://raw.githubusercontent.com/Joystream/design/master/Assets-full';
const FONT_DOWNLOAD_URL = 'https://www.fontsquirrel.com/fonts/download/inter';

const getPackageLink = path => encodeURI(ASSETS_LINK + '/ZIPPED files' + path);

const themedAssetRenderer = asset => {
  return (
    <AssetTile key={asset.sha} darkTheme={asset.name.includes('white')} src={asset.download_url + '?sanitize=true'} />
  );
};

const sections = [
  {
    title: 'Logo',
    displayTitle: 'Logo Pack',
    downloadHref: getPackageLink('/Logo.zip'),
    assets: fullAssets.data.logo,
    id: 'logo',
    renderAsset: themedAssetRenderer,
  },
  {
    title: 'Logo Icons',
    downloadHref: getPackageLink('/Logo Icon.zip'),
    assets: fullAssets.data.logoIcon,
    id: 'logo-icons',
    renderAsset: themedAssetRenderer,
  },
  {
    title: 'Descriptive Icons',
    downloadHref: getPackageLink('/Descriptive Icons.zip'),
    assets: fullAssets.data.descriptiveIcons,
    id: 'descriptive-icons',
  },
  {
    title: 'Illustrations',
    downloadHref: getPackageLink('/Illustrations.zip'),
    assets: fullAssets.data.illustrations,
    id: 'illustrations',
  },
  {
    title: 'System Icons',
    downloadHref: getPackageLink('/System Icons.zip'),
    assets: fullAssets.data.systemIcons,
    id: 'system-icons',
  },
  {
    title: 'Typography',
    downloadHref: FONT_DOWNLOAD_URL,
    filesCount: 19,
    assets: [typographyImg],
    renderAsset: assetPath => {
      return <AssetTile large downloadHref={FONT_DOWNLOAD_URL} src={assetPath} />;
    },
    id: 'typography',
  },
  // {
  //   title: 'Twitter Covers',
  //   downloadHref: getPackageLink('/Twitter Covers.zip'),
  //   assets: fullAssets.data.twitterCovers,
  //   assetTileProps: {
  //     fullWidth: true,
  //   },
  //   id: 'twitter-covers',
  // },
  {
    title: 'Blog Post Covers',
    downloadHref: getPackageLink('/Blog Covers.zip'),
    assets: fullAssets.data.blogCovers,
    assetTileProps: {
      fullWidth: true,
    },
    id: 'blog-covers',
  },
];

const GuidesPage = () => {
  const [openSection, setOpenSection] = useState(sections[0].id);

  const toggleSection = id => {
    setOpenSection(openSection === id ? undefined : id);
  };

  useEffect(() => {
    openSection && scrollToIdElement(openSection);
  }, [openSection]);

  return (
    <BrandLayout>
      <SiteMetadata title="Joystream Brand Guide" />

      <BrandLayoutWrapper className="AssetsPage">
        <SidebarProvider>
          <BrandSidebar data={sections} light onSectionClick={id => toggleSection(id)} activeSectionId={openSection} />

          <div className="AssetsPage__wrapper">
            {sections.map(
              (
                { id, title, displayTitle, downloadHref, assets, renderAsset, assetTileProps = {}, filesCount },
                index
              ) => {
                return (
                  <AssetsSection
                    key={id}
                    id={id}
                    prefix={padNumber(index + 1)}
                    title={displayTitle || title}
                    downloadHref={downloadHref}
                    isOpen={openSection === id}
                    filesCount={filesCount || 0}
                    toggleOpen={() => toggleSection(id)}
                  >
                    {assets &&
                      assets.map(asset => {
                        return renderAsset ? (
                          renderAsset(asset)
                        ) : (
                          <AssetTile key={asset.sha} src={asset.download_url + '?sanitize=true'} {...assetTileProps} />
                        );
                      })}
                  </AssetsSection>
                );
              }
            )}
          </div>
        </SidebarProvider>
      </BrandLayoutWrapper>
    </BrandLayout>
  );
};

export default GuidesPage;
