import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import GuidesSectionLogo from '../../../components/BrandGuides/GuidesSectionLogo';
import GuidesSectionIllustrations from '../../../components/BrandGuides/GuidesSectionIllustrations';
import GuidesSectionPallete from '../../../components/BrandGuides/GuidesSectionPallete';
import GuidesSectionIconography from '../../../components/BrandGuides/GuidesSectionIconography';
import GuidesSectionMotion from '../../../components/BrandGuides/GuidesSectionMotion';
import GuidesSectionTypography from '../../../components/BrandGuides/GuidesSectionTypography';
import GuidesSectionPhotography from '../../../components/BrandGuides/GuidesSectionPhotography';
import GuidesSectionPatterns from '../../../components/BrandGuides/GuidesSectionPatterns';
import BrandLayoutWrapper from '../../../components/BrandLayoutWrapper';
import BrandSidebar, { SidebarProvider } from '../../../components/BrandSidebar';
import SiteMetadata from '../../../components/SiteMetadata';
import BrandLayout from '../../../components/_layouts/Brand';
import guidesData from '../../../data/pages/brand/guides';
import convertToCamelCase from '../../../utils/convertToCamelCase';
import './index.scss';

const GuidesPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BrandLayout t={t}>
      <SiteMetadata lang={language} title={t('brand.siteMetadata.title')} />

      <BrandLayoutWrapper className="GuidesPage">
        <SidebarProvider>
          <BrandSidebar
            data={guidesData.sidebar.map(({ title, subSections, ...rest }) => {
              return {
                title: t(`brand.guides.general.${convertToCamelCase(title)}`),
                subSections: subSections?.map(({ title: subsectionTitle, ...subSectionRest }) => ({
                  title: t(`brand.guides.general.${convertToCamelCase(subsectionTitle)}`),
                  ...subSectionRest,
                })),
                ...rest,
              };
            })}
          />
          <div className="GuidesPage__wrapper">
            <GuidesSectionLogo t={t} />

            <GuidesSectionPallete t={t} />

            <GuidesSectionIconography t={t} />

            <GuidesSectionIllustrations t={t} />

            <GuidesSectionPatterns t={t} />

            <GuidesSectionTypography t={t} />

            <GuidesSectionPhotography t={t} />

            <GuidesSectionMotion t={t} />
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
