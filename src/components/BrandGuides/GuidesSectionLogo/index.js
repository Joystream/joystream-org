import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
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

export default ({ t }) => {
  const section = guidesData.sidebar[0];
  const subSection = section.subSections;

  return (
    <Section title={t('brand.guides.general.logo')} id={section.id} className="GuidesSectionLogo">
      <SubSection id={subSection[0].id}>
        <SubTitle>{t('brand.guides.logo.experimentation')}</SubTitle>
        <Image src={logoDevelopmentImg} alt="" />
        <Text>{t('brand.guides.logo.conceptIterations')}</Text>

        <Button href="https://github.com/Joystream/design/tree/master/logo" download>
          <img src={downloadImg} alt="" />
          {t('brand.button.text.downloadLogo')}
        </Button>
      </SubSection>

      <SubSection title={t('brand.guides.logomarkConstruction.title')} id={subSection[1].id}>
        <Text>{t('brand.guides.logomarkConstruction.simplePrinciples')}</Text>
        <Image src={logoConstructionImg} alt="" />
        <Text>{t('brand.guides.logomarkConstruction.combination')}</Text>
        <Image
          className="GuidesSectionLogo__exclusion-img"
          description={t('brand.guides.logomarkConstruction.image.logomarkDescription')}
          src={logoExclusionImg}
          alt=""
        />
      </SubSection>

      <SubSection title={t('brand.guides.logoConstruction.title')} id={subSection[2].id}>
        <Text>{t('brand.guides.logoConstruction.combination')}</Text>

        <BlueSection bottom>
          <DetailText>{t('brand.guides.logoConstruction.horizontalLockup')}</DetailText>
          <div className="GuidesSectionLogo__construction-white-bg">
            <Image src={schematicsDark} alt="" />
          </div>
        </BlueSection>

        <BlueSection>
          <DetailText>{t('brand.guides.logoConstruction.verticalLockup')}</DetailText>
          <Image src={schematicsWhite} alt="" className="GuidesSectionLogo__schematics-white" />
        </BlueSection>
      </SubSection>

      <SubSection title={t('brand.guides.logoUseCases.title')} id={subSection[3].id}>
        <Text>{t('brand.guides.logoUseCases.originalForm')}</Text>

        <Slider slides={logoSlides} className="GuidesSectionLogo__slider" />

        <SubTitle small>{t('brand.guides.logoUseCases.safeUse')}</SubTitle>
        <Text>
          <Trans i18nKey='brand.guides.logoUseCases.visualPresentation' components={[<strong/>]}/>
        </Text>

        <div className="GuidesSectionLogo__safe-use SafeUse">
          <div className="SafeUse__col">
            <div className="SafeUse__logos">
              <Logo className="SafeUse__logo SafeUse__logo--xl" />
              <Logo className="SafeUse__logo SafeUse__logo--md" />
              <Logo className="SafeUse__logo SafeUse__logo--sm" />
            </div>
            <div className="SafeUse__description">{t('brand.guides.logoUseCases.horizontalNarrow')}</div>
          </div>

          <div className="SafeUse__col">
            <div className="SafeUse__logos SafeUse__logos--horizontal">
              <LargeLogo className="SafeUse__large-logo SafeUse__large-logo--xl" />
              <LargeLogo className="SafeUse__large-logo SafeUse__large-logo--md" />
              <LargeLogo className="SafeUse__large-logo SafeUse__large-logo--sm" />
            </div>
            <div className="SafeUse__description">{t('brand.guides.logoUseCases.verticalNarrow')}</div>
          </div>
        </div>
      </SubSection>

      <SubSection title={t('brand.guides.logoSocialIcons.title')} id={subSection[4].id}>
        <Text>{t('brand.guides.logoSocialIcons.icon')}</Text>
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

      <SubSection title={t('brand.guides.logoForbiddenUses.title')} id={subSection[5].id}>
        <Text>{t('brand.guides.logoForbiddenUses.rules')}</Text>

        <Slider size="large" withSpacing slides={forbiddenLogoSlides} />
      </SubSection>
    </Section>
  );
};
