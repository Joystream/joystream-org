import cn from 'classnames';
import { array, bool, string } from 'prop-types';
import React from 'react';
import guidesData from '../../../data/pages/brand/guides';
import { Section, SubSection, SubTitle, Text } from '../GuidesSection';
import './style.scss';

const ColorTile = ({ small, noMargin, withBorder, textColor = '#FFF', name, cmyk, rgb, hex }) => {
  return (
    <div
      className={cn('ColorTile', {
        'ColorTile--no-margin': noMargin,
        'ColorTile--border': withBorder,
        'ColorTile--small': small,
      })}
      style={{ background: hex, color: textColor }}
    >
      <h3 className="ColorTile__name">{name}</h3>
      <div className="ColorTile__section">
        {!small && <div className="ColorTile__color-name">CMYK</div>}
        <div className="ColorTile__value">
          {cmyk[0]} / {cmyk[1]} / {cmyk[2]} / {cmyk[3]}
        </div>
      </div>
      <div className="ColorTile__section">
        {!small && <div className="ColorTile__color-name">RGB</div>}
        <div className="ColorTile__value">
          {rgb[0]} / {rgb[1]} / {rgb[2]}
        </div>
      </div>
      <div className="ColorTile__section">
        {!small && <div className="ColorTile__color-name">HEX</div>}
        <div className="ColorTile__value">{hex}</div>
      </div>
    </div>
  );
};

ColorTile.propTypes = {
  noMargin: bool,
  name: string,
  cmyk: array,
  rgb: array,
  hex: string,
  textColor: string,
  small: bool,
  withBorder: bool,
};

const ColorBoxContainer = ({ darkText, withBorder, className, ...props }) => {
  return (
    <div
      className={cn('ColorBoxContainer', className, {
        'ColorBoxContainer--border': withBorder,
        'ColorBoxContainer--dark-text': darkText,
      })}
      {...props}
    />
  );
};

const ColorBox = ({ name, hex, size = 1 }) => {
  return (
    <div className="ColorBox" style={{ height: size * 60, background: hex }}>
      {name && <div className="ColorBox__name">{name}</div>}
      {hex}
    </div>
  );
};

const ColorArray = ({ hex, className }) => {
  const ColorStop = ({ opacity = 1 }) => (
    <div className="ColorArray__color-stop" style={{ background: hex, opacity }} />
  );

  return (
    <div className={cn('ColorArray', className)}>
      <ColorStop />
      <ColorStop opacity={0.6} />
      <ColorStop opacity={0.4} />
      <ColorStop opacity={0.2} />
      <ColorStop opacity={0.1} />
    </div>
  );
};

export default () => {
  const section = guidesData.sidebar[1];
  const subSection = section.subSections;

  return (
    <Section title="Branding Colour Palette" id={section.id}>
      <SubSection id={subSection[0].id}>
        <SubTitle>
          Our brand colours combine three primary colours, Black, White and Blue. They define the mood and present
          values such as:
        </SubTitle>

        <Text>Stability, Trust, Freedom, Responsibility, Loyalty, Wisdom, Confidence, Intelligence</Text>
      </SubSection>

      <SubSection title="01. Primary Colours" id={subSection[1].id}>
        <Text>
          Primarly used colors are black, Joystream blue which is a distinctive colour that helps to put focus and draw
          attention. Colour white to calm, provide clarity and good readability.
        </Text>
        <Text>
          One additional colour to combine with the three primary colours is blue tinted grey, its purpose is similar to
          white but gives a good amount of contrast to the white elements when necessary.
        </Text>
        <ColorTile name="Joystream Blue" hex="#4038FF" cmyk={[87, 73, 0, 0]} rgb={[64, 56, 255]} />
        <ColorTile noMargin textColor="#000" name="White" hex="#FFFFFF" cmyk={[0, 0, 0, 0]} rgb={[255, 255, 255]} />
        <ColorTile
          small
          name="Joystream Grey"
          textColor="#A7AEB7"
          hex="#E8EDF6"
          cmyk={[11, 5, 2, 0]}
          rgb={[232, 237, 246]}
        />
        <ColorTile withBorder name="Black" hex="#000000" cmyk={[30, 30, 30, 100]} rgb={[0, 0, 0]} />
      </SubSection>

      <SubSection title="02. Supportive Colour Palette" id={subSection[2].id}>
        <Text>
          Supportive palette serves a purpose of convenience and usability. They provide a comprehensive range of
          different shades of primary colours and can be utilised in many different ways depending on a need.
        </Text>
        <div className="GuidesSectionPallete__boxes">
          <ColorBoxContainer className="GuidesSectionPallete__box-blue">
            <ColorBox hex="#261EE4" />
            <ColorBox hex="#2F2FF4" />
            <ColorBox name="Joystream Blue" hex="#4038FF" size={2} />
            <ColorBox hex="#5252FF" />
            <ColorBox hex="#6C6CFF" />
          </ColorBoxContainer>

          <ColorBoxContainer darkText className="GuidesSectionPallete__box-light">
            <ColorBox hex="#A7AEB7" />
            <ColorBox hex="#D3D8E0" />
            <ColorBox hex="#E8EDF6" size={2} />
            <ColorBox hex="#F2F5F9" />
            <ColorBox hex="#FFFFFF" />
          </ColorBoxContainer>

          <ColorBoxContainer withBorder className="GuidesSectionPallete__box-dark">
            <ColorBox hex="#000000" size={4} />
            <ColorBox hex="#121519" />
            <ColorBox hex="#1F252E" />
          </ColorBoxContainer>
        </div>
      </SubSection>

      <SubSection title="03. Secondary Colour Palette" id={subSection[3].id}>
        <Text>
          These are colours that can represent certain states of the network, they can stand for an error, success,
          warning and more.
        </Text>

        <div className="GuidesSectionPallete__color-array-container">
          <ColorArray hex="#FF3861" className="GuidesSectionPallete__color-array" />
          <ColorArray hex="#00DBB0" className="GuidesSectionPallete__color-array" />
          <ColorArray hex="#FFE538" className="GuidesSectionPallete__color-array" />
        </div>
      </SubSection>
    </Section>
  );
};
