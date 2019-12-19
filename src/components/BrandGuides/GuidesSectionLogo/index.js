import React from 'react';
import schematicsDark from '../../../assets/images/logo-construction-schematics-dark.png';
import schematicsWhite from '../../../assets/images/logo-construction-schematics-white.png';
import logoDevelopmentImg from '../../../assets/images/logo-development.png';
import logoConstructionImg from '../../../assets/images/logomark-construction.png';
import logoExclusionImg from '../../../assets/images/logomark-exclusion.png';
import { ReactComponent as Logo } from '../../../assets/svg/logo-white.svg';
import { ReactComponent as LargeLogo } from '../../../assets/svg/logo-large-white.svg';
import { ReactComponent as LogoMark } from '../../../assets/svg/logo-mark.svg';
import downloadImg from '../../../assets/svg/download.svg';
import guidesData from '../../../data/pages/brand/guides';
import Button from '../../Button';
import { Slider } from '../../Slider';
import { BlueSection, DetailText, Image, Section, SubSection, SubTitle, Text } from '../GuidesSection';
import './style.scss';

import importAll from '../../../utils/importAll';

const forbiddenLogoSlides = importAll(require.context('../../../assets/images/slides/logo-forbidden', false, /\.png$/));
const logoSlides = importAll(require.context('../../../assets/images/slides/logo', false, /\.png$/));

export default () => {
  const section = guidesData.sidebar[0];
  const subSection = section.subSections;

  return (
    <Section title="Logo" id={section.id} className="GuidesSectionLogo">
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

        <Button
          href="https://raw.githubusercontent.com/Joystream/design/master/Assets-full/ZIPPED%20files/Logo.zip"
          download
        >
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

        <Slider slides={logoSlides} className="GuidesSectionLogo__slider" />

        <SubTitle small>The smallest safe use</SubTitle>
        <Text>
          In order to ensure the best visual communication of the logo, it is best presented in size between{' '}
          <strong>200 and 500+px</strong> width on digital devices.
        </Text>

        <div className="GuidesSectionLogo__safe-use SafeUse">
          <div className="SafeUse__col">
            <div className="SafeUse__logos">
              <Logo className="SafeUse__logo SafeUse__logo--xl" />
              <Logo className="SafeUse__logo SafeUse__logo--md" />
              <Logo className="SafeUse__logo SafeUse__logo--sm" />
            </div>
            <div className="SafeUse__description">
              The Joystream logo should never be narrower than 100px in digital or 20mm in print horisontal lockup.
            </div>
          </div>

          <div className="SafeUse__col">
            <div className="SafeUse__logos SafeUse__logos--horizontal">
              <LargeLogo className="SafeUse__large-logo SafeUse__large-logo--xl" />
              <LargeLogo className="SafeUse__large-logo SafeUse__large-logo--md" />
              <LargeLogo className="SafeUse__large-logo SafeUse__large-logo--sm" />
            </div>
            <div className="SafeUse__description">
              Vertical lockup should never be narrower than 70px in digital or 15mm in print.
            </div>
          </div>
        </div>
      </SubSection>

      <SubSection title="04. Social Icons" id={subSection[4].id}>
        <Text>
          In cases when the Joystream brand has already been established we can simply use the icon on its own. While
          the icon can exist without the wordmark, the wordmark should never exist without the icon.
        </Text>
        <div className="SocialIcons__row">
          <div className="SocialIcons__icon SocialIcons__icon--blue SocialIcons__icon--bg-white">
            <LogoMark />
          </div>
          <div className="SocialIcons__icon SocialIcons__icon--white SocialIcons__icon--bg-blue">
            <LogoMark />
          </div>
          <div className="SocialIcons__icon SocialIcons__icon--white SocialIcons__icon--bg-black">
            <LogoMark />
          </div>
          <div className="SocialIcons__icon SocialIcons__icon--black SocialIcons__icon--bg-white">
            <LogoMark />
          </div>
        </div>
      </SubSection>

      <SubSection title="05. Forbidden uses of the logo" id={subSection[5].id}>
        <Text>
          Logotype and the icon ought to follow certain rules and there are general cases of use that should be avoided
          at all cost! In order to preserve the brand voice remember to avoid following examples:
        </Text>

        <Slider size="large" withSpacing slides={forbiddenLogoSlides} />
      </SubSection>
    </Section>
  );
};
