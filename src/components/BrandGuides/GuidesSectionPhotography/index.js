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

export default () => {
  const section = guidesData.sidebar[6];

  return (
    <Section title="Photography" id={section.id}>
      <SubSection>
        <SubTitle>
          Photography should be relevant to the topic they are describing but they shouldn’t be limited only to the
          technology. Joystream is much more than just technology, it is unifying, fresh and joyful. Imagery should
          convey this mood to the users.
        </SubTitle>
      </SubSection>
      <SubSection>
        <SubTitle small>How to use photography</SubTitle>
        <Text>
          Since Joystream is a unique and experimental project it provides a wide variety of the topics it can cover. It
          is highly technical especially now when we are in the community building phase, so good deal of the
          photographies will be tech related.
        </Text>

        <Text>
          One way to make sure the photographies are consistent is to use them in dual tones deriving from Branding
          colors. For that purpose we can use a handy tool to consistently change images to dual tones as described
          below.
        </Text>

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

        <a
          href="https://duotone.shapefactory.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="Photography__link"
        >
          https://duotone.shapefactory.co/
        </a>

        <Text>
          The mood that photos transfer is really important. It should by all means give a feel of building trust,
          community and joy. Photographies should show good ammount of diversity as it is meant to be for extremely wide
          variety of users. They don’t have to be used in dual tones but it is best if they are not „screaming” with
          colours.
        </Text>

        <SubTitle small>Photography in use - examples</SubTitle>
        <Slider size="small" withSpacing slides={[slide1, slide2, slide3]} />
      </SubSection>
    </Section>
  );
};
