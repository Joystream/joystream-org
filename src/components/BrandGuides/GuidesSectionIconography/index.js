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

export default () => {
  const section = guidesData.sidebar[2];
  const subSection = section.subSections;

  return (
    <Section title={section.title} id={section.id}>
      <SubSection id={subSection[0].id}>
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

      <SubSection title="01. Descriptive Icons" id={subSection[1].id}>
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

        <SubTitle small>Construction</SubTitle>

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

        <div className="Iconography__description">Icons at 100% scale should fit into a box of 800x500px.</div>

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

      <SubSection title="02. System Icons" id={subSection[2].id}>
        <Text>
          System icons in their basic style combine two colours: Black and Joystream Blue. Their purpose is to represent
          certain actions on the website or platform. They are readable even in small sizes down to 18x18px.
        </Text>

        <div className="Iconography__system-icon-container">
          <SubTitle small>Construction</SubTitle>

          <div className="Iconography__system-icon">
            <img src={constructionIcon} alt="" className="Iconography__system-icon-image" />
            <div>
              <Text>System Icons are drawn using 2px strokes with square linecaps on a 24px grid frame.</Text>
              <Text>
                When possible, icons should have subtle blue accents in ammounts no greater than 40% of the whole.
              </Text>
            </div>
          </div>
        </div>

        <SubTitle small>Types of system icons</SubTitle>
        <Text>
          We destinguish four types of system icons and they should be used preferably in their basic style but can be
          used interchangeably when neccessary.
        </Text>

        <div className="Iconography__showcase">
          <ShowcaseRow title="Basic style" image={iconsBasic} />
          <ShowcaseRow title="Blue outlines" image={iconsBlueOutlines} />
          <ShowcaseRow title="White outlines" image={iconsWhiteOutlines} />
          <ShowcaseRow title="Full style" image={iconsFull} />
        </div>
      </SubSection>
    </Section>
  );
};
