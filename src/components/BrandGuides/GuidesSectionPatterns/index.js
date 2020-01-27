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

export default () => {
  const section = guidesData.sidebar[4];

  return (
    <Section title={section.title} id={section.id}>
      <SubSection>
        <SubTitle>
          Patterns are close translation of the logomark (J) into a form of geometrical shapes representing flow of
          information, technology and experimental nature.
        </SubTitle>

        <SubTitle>
          They were introduced as a support tool to make certain elements stand-out, build mood and as an inherent
          element of visual identity of the brand.
        </SubTitle>
      </SubSection>
      <SubSection>
        <SubTitle small>Construction</SubTitle>
        <Text>
          Patterns virtually consist of six different pieces that can be rotated by 90 degrees in any direction and
          should always have the dimensions of a perfect square.
        </Text>

        <img src={patternsSquares} className="Patterns__squares" alt="" />

        <Text>
          They should also have at least one common vertex when they touch. They do not always have to touch and when
          they don’t, space between pieces should always be equal to its’ width/height or the value multiplied.
        </Text>

        <div className="Patterns__row">
          <div className="Patterns__spacing">
            <img src={patternsSpacing} alt="" />
          </div>
          <div className="Patterns__distances">
            <img src={patternsDistances} alt="" />
          </div>
        </div>
      </SubSection>

      <SubSection>
        <SubTitle small>How to use patterns</SubTitle>
        <Text>
          Patterns can use five various colours depending on what background is used beneath and what is their main
          purpose in specific situation.
        </Text>

        <img src={patternsColors} alt="" className="Patterns__colors" />

        <Text>Depending on the situation can be used more or less densly.</Text>

        <img src={patternsDensity} alt="" className="Patterns__density" />
      </SubSection>

      <SubSection>
        <SubTitle small>Patterns in use - examples</SubTitle>
        <Slider slides={[slide1, slide2, slide3]} size="small" withSpacing />
      </SubSection>
    </Section>
  );
};
