import React from 'react';
import motionVideo from '../../../assets/videos/mark.mp4';
import { ReactComponent as WarningSvg } from '../../../assets/svg/warning.svg';
import guidesData from '../../../data/pages/brand/guides';
import { Section, SubSection, SubTitle } from '../GuidesSection';
import './style.scss';

export default ({ t }) => {
  const section = guidesData.sidebar[7];

  return (
    <Section title={t('brand.guides.general.motion')} id={section.id} style={{ overflow: 'hidden' }}>
      <SubSection t={t} buttonToTop>
        <SubTitle>{t('brand.guides.motion.subtitle')}</SubTitle>
        <SubTitle>{t('brand.guides.motion.rules')}</SubTitle>

        <div className="Motion__warning">
          <WarningSvg className="Motion__warning-icon" />
          <div className="Motion__warning-text">{t('brand.guides.motion.notLimiting')}</div>
        </div>

        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video className="Motion__video" src={motionVideo} autoPlay="autoplay" loop muted />
      </SubSection>
    </Section>
  );
};
