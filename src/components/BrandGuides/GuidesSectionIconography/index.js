import React from 'react';
import guidesData from '../../../data/pages/brand/guides';
import { ThemeSlide, Slider } from '../../Slider';
import { Section, SubSection, SubTitle, Text } from '../GuidesSection';
import { ReactComponent as BellSvg } from '../../../assets/svg/bell.svg';

import descriptiveBoxImg from '../../../assets/images/descriptive-box.png';
import descriptiveIconsDesktop from '../../../assets/images/descriptive-icons-desktop.png';
import descriptiveIconsMobile from '../../../assets/images/descriptive-icons-mobile.png';
import constructionIcon from '../../../assets/svg/icon-construction.svg';
import iconsBasic from '../../../assets/images/icons-basic.png';
import iconsBlueOutlines from '../../../assets/images/icons-blue-outlines.png';
import iconsWhiteOutlines from '../../../assets/images/icons-white-outlines.png';
import iconsFull from '../../../assets/images/icons-full.png';

import { ReactComponent as ContentSvg } from '../../../assets/svg/content-curator.svg';
import { ReactComponent as DiscoverySvg } from '../../../assets/svg/discovery-provider.svg';
import { ReactComponent as BandwidthSvg } from '../../../assets/svg/bandwidth-provider.svg';

import './style.scss';

const BrandListItem = ({ bulletText, children }) => {
  return (
    <div className="BrandListItem">
      <div className="BrandListItem__bullet">{bulletText}</div>
      <div>{children}</div>
    </div>
  );
};

const IconSlide = ({ description, children }) => {
  return (
    <ThemeSlide className="IconSlide">
      {children}
      <span className="IconSlide__description">{description}</span>
    </ThemeSlide>
  );
};

const ShowcaseRow = ({ image, title }) => {
  return (
    <div className="Iconography__showcase-row">
      <h2 className="Iconography__showcase-title">{title}</h2>
      <img className="Iconography__showcase-image" src={image} alt="" />
    </div>
  );
};

export default ({ t }) => {
  const section = guidesData.sidebar[2];
  const subSection = section.subSections;

  return (
    <Section title={t('brand.guides.general.iconography')} id={section.id}>
      <SubSection id={subSection[0].id}>
        <SubTitle>{t('brand.guides.iconsOverview.text')}</SubTitle>
        <div className="Iconography__icon-types">
          <div className="Iconography__icon-type">
            <div className="Iconography__icon-descriptive">
              <DiscoverySvg />
            </div>
            <h4 className="Iconography__icon-text">{t('brand.guides.iconsOverview.typeDescriptive')}</h4>
          </div>
          <div className="Iconography__icon-type">
            <div className="Iconography__icon-system">
              <BellSvg />
            </div>
            <h4 className="Iconography__icon-text">{t('brand.guides.iconsOverview.typeSystem')}</h4>
          </div>
        </div>
      </SubSection>

      <SubSection title={t('brand.guides.descriptiveIcons.title')} id={subSection[1].id}>
        <Text>{t('brand.guides.descriptiveIcons.comprehensiveStyle')}</Text>

        <Text>{t('brand.guides.descriptiveIcons.symbolic')}</Text>

        <img className="Iconography__descriptive-icons--mobile" src={descriptiveIconsMobile} alt="" />
        <img className="Iconography__descriptive-icons--desktop" src={descriptiveIconsDesktop} alt="" />

        <SubTitle small>{t('brand.guides.general.construction')}</SubTitle>

        <BrandListItem bulletText={t('orderedNumbers.one')}>
          <Text>{t('brand.guides.descriptiveIcons.characteristicFeatures')}</Text>
          <Text>{t('brand.guides.descriptiveIcons.angle')}</Text>
        </BrandListItem>

        <BrandListItem bulletText={t('orderedNumbers.two')}>
          <Text>{t('brand.guides.descriptiveIcons.outlines')}</Text>
        </BrandListItem>

        <div className="Iconography__description">{t('brand.guides.descriptiveIcons.fit')}</div>

        <img src={descriptiveBoxImg} className="Iconography__descriptive-box" alt="" />

        <Slider
          themes={['white', 'blue', 'black']}
          size="large"
          withSpacing
          slides={[
            <IconSlide description={t('rolesData.discoveryProvider')}>
              <DiscoverySvg />
            </IconSlide>,
            <IconSlide description={t('rolesData.contentCurator')}>
              <ContentSvg />
            </IconSlide>,
            <IconSlide description={t('rolesData.bandwidthProvider')}>
              <BandwidthSvg />
            </IconSlide>,
          ]}
        />
      </SubSection>

      <SubSection title={t('brand.guides.systemIcons.title')} id={subSection[2].id}>
        <Text>{t('brand.guides.systemIcons.basicStyle')}</Text>

        <div className="Iconography__system-icon-container">
          <SubTitle small>{t('brand.guides.general.construction')}</SubTitle>

          <div className="Iconography__system-icon">
            <img src={constructionIcon} alt="" className="Iconography__system-icon-image" />
            <div>
              <Text>{t('brand.guides.systemIcons.strokes')}</Text>
              <Text>{t('brand.guides.systemIcons.subtleAccents')}</Text>
            </div>
          </div>
        </div>

        <SubTitle small>{t('brand.guides.systemIcons.types')}</SubTitle>
        <Text>{t('brand.guides.systemIcons.fourTypes.text')}</Text>

        <div className="Iconography__showcase">
          <ShowcaseRow title={t('brand.guides.systemIcons.fourTypes.basic')} image={iconsBasic} />
          <ShowcaseRow title={t('brand.guides.systemIcons.fourTypes.blue')} image={iconsBlueOutlines} />
          <ShowcaseRow title={t('brand.guides.systemIcons.fourTypes.white')} image={iconsWhiteOutlines} />
          <ShowcaseRow title={t('brand.guides.systemIcons.fourTypes.full')} image={iconsFull} />
        </div>
      </SubSection>
    </Section>
  );
};
