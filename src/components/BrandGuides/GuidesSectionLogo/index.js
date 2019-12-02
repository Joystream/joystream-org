import React from 'react';
import './style.scss';

import Button from '../../Button';
import { Section, SubSection, Text, SubTitle, Image, BlueSection, DetailText } from '../GuidesSection';

import guidesData from '../../../data/pages/brand/guides';
import logoDevelopmentImg from '../../../assets/images/logo-development.png';
import logoConstructionImg from '../../../assets/images/logomark-construction.png';
import logoExclusionImg from '../../../assets/images/logomark-exclusion.png';
import downloadImg from '../../../assets/svg/download.svg';

import schematicsWhite from '../../../assets/images/logo-construction-schematics-white.png';
import schematicsDark from '../../../assets/images/logo-construction-schematics-dark.png';

export default () => {
  const section = guidesData.sidebar[0];
  const subSection = section.subSections;

  return (
    <Section title="Logo" id={section.id}>
      <SubSection id={subSection[0].id}>
        <SubTitle>
          "...Our brand should carry this feeling of experimentation, excitement and building something ethical and
          dynamic."
        </SubTitle>
        <Image src={logoDevelopmentImg} alt="" />
        <Text>
          Before we agreed on a final logo concept we went through multiple iterations of various concepts. We have
          explored various ideas in depth...
        </Text>

        <Button href={logoDevelopmentImg} download="logo">
          <img src={downloadImg} alt="" />
          Download logo
        </Button>
      </SubSection>

      <SubSection title="01. Logomark Construction" id={subSection[1].id}>
        <Text>
          Finally we came up with a logomark that combines several simple principles which translate well to the voice
          of the brand.
        </Text>
        <Image src={logoConstructionImg} alt="" />
        <Text>
          Logomark is a combination of letter J (acronym of the name Joystream) and three parallel stripes that are
          representation of the stream, flow of information and technology.
        </Text>
        <Image
          className="GuidesSectionLogo__exclusion-img"
          description="Logomarks exclusion zone is equal to the blue square height (marked as 5a in the diagram)."
          src={logoExclusionImg}
          alt=""
        />
      </SubSection>

      <SubSection title="02. Logo Construction" id={subSection[2].id}>
        <Text>
          Joystream Logo is a combination of the logomark and dedicated typography that was designed to be the best link
          between logomark and what Joystream stands for. It is firm and technical but shows plasticity and sense of a
          structure.
        </Text>

        <BlueSection bottom>
          <DetailText>Horizontal Lockup</DetailText>
          <div className="GuidesSectionLogo__construction-white-bg">
            <Image src={schematicsDark} alt="" />
          </div>
        </BlueSection>

        <BlueSection>
          <DetailText>Vertical Lockup</DetailText>
          <Image src={schematicsWhite} alt="" className="GuidesSectionLogo__schematics-white" />
        </BlueSection>
      </SubSection>

      <SubSection title="03. Logo Use Cases" id={subSection[3].id}>
        <Text>
          Joystream Logo is primarly used in it’s original form on white backgrounds but it can also be used in it’s
          complimentary forms if necessary. Examples show such use cases below.
        </Text>
        {/* slider */}
      </SubSection>
    </Section>
  );
};
