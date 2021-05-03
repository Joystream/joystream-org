import React from 'react';
import patternsDistances from '../../../assets/images/patterns-distances.png';
import patternsSpacing from '../../../assets/images/patterns-spacing.png';
import slide1 from '../../../assets/images/slides/patterns/1.png';
import slide2 from '../../../assets/images/slides/patterns/2.png';
import slide3 from '../../../assets/images/slides/patterns/3.png';
import patternsColors from '../../../assets/svg/patterns-colors.svg';
import patternsDensity from '../../../assets/svg/patterns-density.svg';
import patternsSquares from '../../../assets/svg/patterns-squares.svg';
import guidesData from '../../../data/pages/brand/guides';
import { Slider } from '../../Slider';
import { Section, SubSection, SubTitle, Text } from '../GuidesSection';
import './style.scss';

export default ({ t }) => {
  const section = guidesData.sidebar[4];

  return (
    <Section title={t('brand.guides.general.patterns')} id={section.id}>
      <SubSection t={t}>
        <SubTitle>{t('brand.guides.patterns.translation')}</SubTitle>

        <SubTitle>{t('brand.guides.patterns.supportTool')}</SubTitle>
      </SubSection>
      <SubSection t={t}>
        <SubTitle small>{t('brand.guides.general.construction')}</SubTitle>
        <Text>{t('brand.guides.patterns.sixPieces')}</Text>

        <img src={patternsSquares} className="Patterns__squares" alt="" />

        <Text>{t('brand.guides.patterns.oneCommonVertex')}</Text>

        <div className="Patterns__row">
          <div className="Patterns__spacing">
            <img src={patternsSpacing} alt="" />
          </div>
          <div className="Patterns__distances">
            <img src={patternsDistances} alt="" />
          </div>
        </div>
      </SubSection>

      <SubSection t={t}>
        <SubTitle small>{t('brand.guides.patterns.howToUse')}</SubTitle>
        <Text>{t('brand.guides.patterns.oneOfFive')}</Text>

        <img src={patternsColors} alt="" className="Patterns__colors" />

        <Text>{t('brand.guides.patterns.density')}</Text>

        <img src={patternsDensity} alt="" className="Patterns__density" />
      </SubSection>

      <SubSection t={t}>
        <SubTitle small>{t('brand.guides.patterns.inUse')}</SubTitle>
        <Slider slides={[slide1, slide2, slide3]} size="small" withSpacing />
      </SubSection>
    </Section>
  );
};
