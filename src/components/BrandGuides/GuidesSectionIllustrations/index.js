import React from 'react';
import guidesData from '../../../data/pages/brand/guides';
import { Slider } from '../../Slider';
import { Section, SubSection, SubTitle } from '../GuidesSection';
import './style.scss';

export default () => {
  const section = guidesData.sidebar[3];
  const subSection = section.subSections;

  return (
    <Section title="Illustartions" id={section.id}>
      <SubSection id={subSection[0].id}>
        <SubTitle>
          Joystream Illustrations are symbolic representation of important steps in the Joystream project, for example a
          new testnet, role on the network or other equaly significant subject.
        </SubTitle>
        <SubTitle>They can be quite visualy complex despite using only three colors and no gradients.</SubTitle>
        <Slider themes={['white', 'blue']} size="large" withSpacing slides={[]} />
      </SubSection>
    </Section>
  );
};
