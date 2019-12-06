import React from 'react';
import guidesData from '../../../data/pages/brand/guides';
import { Slide, Slider } from '../../Slider';
import { Section, SubSection, SubTitle, Text } from '../GuidesSection';
import cn from 'classnames';
import { string, array, bool } from 'prop-types';
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

export default () => {
  const section = guidesData.sidebar[1];
  const subSection = section.subSections;

  return (
    <Section title="Branding Colour Palette" id={section.id}>
      <SubSection>
        <SubTitle>
          Our brand colours combine three primary colours, Black, White and Blue. They define the mood and present
          values such as:
        </SubTitle>

        <Text>Stability, Trust, Freedom, Responsibility, Loyalty, Wisdom, Confidence, Intelligence</Text>
      </SubSection>

      <SubSection title="01. Primary Colours">
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

      <SubSection title="02. Supportive Colour Palette">
        <Text>
          Supportive palette serves a purpose of convenience and usability. They provide a comprehensive range of
          different shades of primary colours and can be utilised in many different ways depending on a need.
        </Text>
      </SubSection>

      <SubSection title="03. Secondary Colour Palette">
        <Text>
          These are colours that can represent certain states of the network, they can stand for an error, success,
          warning and more.
        </Text>
      </SubSection>
    </Section>
  );
};
