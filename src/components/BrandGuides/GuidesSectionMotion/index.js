import React from 'react';
import guidesData from '../../../data/pages/brand/guides';
import { ThemeSlide, Slider } from '../../Slider';
import { Section, SubSection, SubTitle, Text, Heading } from '../GuidesSection';
import { ReactComponent as BellSvg } from '../../../assets/svg/bell.svg';

import motionLogo from '../../../assets/images/motion-logo.png';

import { ReactComponent as WarningSvg } from '../../../assets/svg/warning.svg';

import './style.scss';

export default () => {
  const section = guidesData.sidebar[2];
  const subSection = section.subSections;

  return (
    <Section title="Motion" id={section.id}>
      <SubSection>
        <SubTitle>
          Joystream is an experimental and exciting platform and so should be its motion along with the interactions.
        </SubTitle>
        <SubTitle>
          General rules for motion can be described with a few simple principles: Smooth transitions, dynamic but fluid
          motion and good amount of easing at the keyframes. This combination should provide a consistent and flexible
          animation style to cover most of the use cases.
        </SubTitle>

        <div className="Motion__warning">
          <WarningSvg className="Motion__warning-icon" />
          <div className="Motion__warning-text">
            Guides shouldn’t be by no means limiting, they should only serve a purpose of providing consistency for
            animations.
          </div>
        </div>

        <img src={motionLogo} alt="" />
      </SubSection>
    </Section>
  );
};
