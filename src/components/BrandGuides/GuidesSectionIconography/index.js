import React from 'react';
import guidesData from '../../../data/pages/brand/guides';
import { ThemeSlide, Slider } from '../../Slider';
import { Section, SubSection, SubTitle, Text, Heading } from '../GuidesSection';
import { ReactComponent as BellSvg } from '../../../assets/svg/bell.svg';

import descriptiveBoxImg from '../../../assets/images/descriptive-box.png';
import descriptiveIconsDesktop from '../../../assets/images/descriptive-icons-desktop.png';
import descriptiveIconsMobile from '../../../assets/images/descriptive-icons-mobile.png';

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

export default () => {
  const section = guidesData.sidebar[2];
  const subSection = section.subSections;

  return (
    <Section title="Iconography" id={section.id}>
      <SubSection>
        <SubTitle>
          Icons can be devided into two groups with different purpose. Descriptive icons are form of a substitute for
          illustrations and system icons are purely functional part of the interface.
        </SubTitle>
        <div className="Iconography__icon-types">
          <div className="Iconography__icon-type">
            <div className="Iconography__icon-descriptive">
              <DiscoverySvg />
            </div>
            <h4 className="Iconography__icon-text">01. Descriptive</h4>
          </div>
          <div className="Iconography__icon-type">
            <div className="Iconography__icon-system">
              <BellSvg />
            </div>
            <h4 className="Iconography__icon-text">02. System</h4>
          </div>
        </div>
      </SubSection>

      <SubSection title="01. Descriptive Icons">
        <Text>
          Joystream iconography is a custom, comprehensive icon style that helps explaining certain complex topics in a
          simple, digestable manner.
        </Text>

        <Text>
          They are not always very direct and often carry a symbolic meaning but they help visualising and estinguish
          important elements.
        </Text>

        <img className="Iconography__descriptive-icons--mobile" src={descriptiveIconsMobile} alt="" />
        <img className="Iconography__descriptive-icons--desktop" src={descriptiveIconsDesktop} alt="" />

        <SubTitle bold>Construction</SubTitle>

        <BrandListItem bulletText="01.">
          <Text>
            Characteristic feature of the descriptive icons are paralell striped fills. They are a translation of logo
            stripes and represent shadows.
          </Text>
          <Text>Lines have an angle of 45° they should have 2px girth and 8px space between them at 100% scale.</Text>
        </BrandListItem>

        <BrandListItem bulletText="02.">
          <Text>
            Icons are drawn using outlines of 12px width at 100% scale, they have square linecaps and can have various
            sizes depending on the composition.
          </Text>
        </BrandListItem>

        <SubTitle bold>Icons at 100% scale should fit into a box of 800x500px.</SubTitle>

        <img src={descriptiveBoxImg} className="Iconography__descriptive-box" alt="" />

        <Slider
          themes={['white', 'blue', 'black']}
          size="large"
          withSpacing
          slides={[
            <IconSlide description="Discovery Provider">
              <DiscoverySvg />
            </IconSlide>,
            <IconSlide description="Content Curator">
              <ContentSvg />
            </IconSlide>,
            <IconSlide description="Bandwidth Provider">
              <BandwidthSvg />
            </IconSlide>,
          ]}
        />
      </SubSection>

      <SubSection title="02. System Icons">
        <Text>
          System icons in their basic style combine two colours: Black and Joystream Blue. Their purpose is to represent
          certain actions on the website or platform. They are readable even in small sizes down to 18x18px.
        </Text>

        <Text>
          They are not always very direct and often carry a symbolic meaning but they help visualising and estinguish
          important elements.
        </Text>

        <SubTitle bold>Types of system icons</SubTitle>
        <Text>
          We destinguish four types of system icons and they should be used preferably in their basic style but can be
          used interchangeably when neccessary.
        </Text>
      </SubSection>
    </Section>
  );
};
