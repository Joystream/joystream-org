import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import AssetsSection from '../../../components/BrandAssets/AssetsSection';
import AssetTile from '../../../components/BrandAssets/AssetTile';
import BrandLayoutWrapper from '../../../components/BrandLayoutWrapper';
import BrandSidebar, { SidebarProvider } from '../../../components/BrandSidebar';
import SiteMetadata from '../../../components/SiteMetadata';
import BrandLayout from '../../../components/_layouts/Brand';
import fullAssets from '../../../data/pages/brand/assets-full';
import padNumber from '../../../utils/padNumber';
import scrollToIdElement from '../../../utils/scrollToIdElement';
import convertToCamelCase from '../../../utils/convertToCamelCase';
import typographyImg from '../../../assets/images/typography-overview.png';
import './index.scss';

const ASSETS_LINK = 'https://raw.githubusercontent.com/Joystream/design/master';
const FONT_DOWNLOAD_URL = 'https://www.fontsquirrel.com/fonts/download/inter';

const getPackageLink = path => encodeURI(ASSETS_LINK + '/zipped-assets' + path);

const themedAssetRenderer = (asset, t) => {
  return (
    <AssetTile key={asset.sha} darkTheme={asset.name.includes('white')} src={asset.download_url + '?sanitize=true'} t={t}/>
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
    renderAsset: (assetPath, t) => {
      return <AssetTile large downloadHref={FONT_DOWNLOAD_URL} src={assetPath} t={t}/>;
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
  const { t } = useTranslation();
  const { language } = useI18next();

  const toggleSection = id => {
    setOpenSection(openSection === id ? undefined : id);
  };

  useEffect(() => {
    openSection && scrollToIdElement(openSection);
  }, [openSection]);

  return (
    <BrandLayout t={t}>
      <SiteMetadata lang={language} title={t("brand.siteMetadata.title")} />

      <BrandLayoutWrapper className="AssetsPage">
        <SidebarProvider>
          <BrandSidebar
            data={sections.map(({ title, ...rest }) => ({
              title: t(`brand.assets.${convertToCamelCase(title)}`),
              ...rest,
            }))}
            light
            onSectionClick={id => toggleSection(id)}
            activeSectionId={openSection}
          />

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
                    title={
                      displayTitle
                        ? t(`brand.assets.displayTitle.${convertToCamelCase(displayTitle)}`)
                        : t(`brand.assets.${convertToCamelCase(title)}`)
                    }
                    downloadHref={downloadHref}
                    isOpen={openSection === id}
                    filesCount={filesCount || 0}
                    toggleOpen={() => toggleSection(id)}
                    t={t}
                  >
                    {assets &&
                      assets.map(asset => {
                        return renderAsset ? (
                          renderAsset(asset, t)
                        ) : (
                          <AssetTile key={asset.sha} src={asset.download_url + '?sanitize=true'} {...assetTileProps} t={t}/>
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

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
