import React from 'react';
import peopleImg from '../../../assets/images/people.png';
import photographyImg from '../../../assets/images/photography.png';
import slide1 from '../../../assets/images/slides/photography/1.png';
import slide2 from '../../../assets/images/slides/photography/2.png';
import slide3 from '../../../assets/images/slides/photography/3.png';
import guidesData from '../../../data/pages/brand/guides';
import { Slider } from '../../Slider';
import { Section, SubSection, SubTitle, Text } from '../GuidesSection';
import './style.scss';

const GradientBar = ({ startColor, endColor }) => {
  return (
    <div className="Photography__gradient">
      <div
        className="Photography__gradient-bar"
        style={{ background: `linear-gradient(to right, ${startColor} 0%, ${endColor} 100%)` }}
      />
      <div className="Photography__gradient-start">{startColor}</div>
      <div className="Photography__gradient-end">{endColor}</div>
    </div>
  );
};

export default ({ t }) => {
  const section = guidesData.sidebar[6];

  return (
    <Section title={t('brand.guides.general.photography')} id={section.id}>
      <SubSection t={t}>
        <SubTitle>{t('brand.guides.photography.overview')}</SubTitle>
      </SubSection>
      <SubSection t={t}>
        <SubTitle small>{t('brand.guides.photography.howToUse')}</SubTitle>
        <Text>{t('brand.guides.photography.variety')}</Text>

        <Text>{t('brand.guides.photography.consistency')}</Text>

        <div className="Photography__col">
          <div className="Photography__row">
            <img src={peopleImg} alt="" className="Photography__image" />
            <GradientBar startColor="#000" endColor="#FFF" />
          </div>

          <div className="Photography__row">
            <img src={photographyImg} alt="" className="Photography__image" />
            <GradientBar startColor="#3F38FF" endColor="#FFFFFF" />
          </div>
        </div>

        <Text>{t('brand.guides.photography.consistentDuotones')}</Text>
        <a
          href="https://duotone.shapefactory.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="Photography__link"
        >
          https://duotone.shapefactory.co/
        </a>

        <Text>{t('brand.guides.photography.mood')}</Text>

        <SubTitle small>{t('brand.guides.photography.inUse')}</SubTitle>
        <Slider size="small" withSpacing slides={[slide1, slide2, slide3]} />
      </SubSection>
    </Section>
  );
};
