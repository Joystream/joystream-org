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
  const opacityHex = {
    '1': 'FF',
    '0.6': '99',
    '0.4': '66',
    '0.2': '33',
    '0.1': '1A',
  };

  const ColorStop = ({ opacity = 1 }) => {
    const alphaHex = '#' + hex.replace('#', '') + opacityHex[opacity];

    return (
      <div className="ColorArray__color-stop" style={{ background: alphaHex, color: opacity === 1 && '#000' }}>
        {alphaHex}
      </div>
    );
  };

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

export default ({ t }) => {
  const section = guidesData.sidebar[1];
  const subSection = section.subSections;

  return (
    <Section title={t('brand.guides.general.colorPalettes')} id={section.id}>
      <SubSection t={t} id={subSection[0].id}>
        <SubTitle>{t('brand.guides.colorOverview.combine')}</SubTitle>

        <Text>{t('brand.guides.colorOverview.example')}</Text>
      </SubSection>

      <SubSection t={t} title={t('brand.guides.primaryColors.title')} id={subSection[1].id}>
        <Text>{t('brand.guides.primaryColors.blackAndBlue')}</Text>
        <Text>{t('brand.guides.primaryColors.blueGrey')}</Text>
        <ColorTile name={t('colors.joystreamBlue')} hex="#4038FF" cmyk={[87, 73, 0, 0]} rgb={[64, 56, 255]} />
        <ColorTile
          noMargin
          textColor="#000"
          name={t('colors.white')}
          hex="#FFFFFF"
          cmyk={[0, 0, 0, 0]}
          rgb={[255, 255, 255]}
        />
        <ColorTile
          small
          name={t('colors.joystreamGrey')}
          textColor="#A7AEB7"
          hex="#E8EDF6"
          cmyk={[11, 5, 2, 0]}
          rgb={[232, 237, 246]}
        />
        <ColorTile withBorder name={t('colors.black')} hex="#000000" cmyk={[30, 30, 30, 100]} rgb={[0, 0, 0]} />
      </SubSection>

      <SubSection t={t} title={t('brand.guides.supportiveColors.title')} id={subSection[2].id}>
        <Text>{t('brand.guides.supportiveColors.purpose')}</Text>
        <div className="GuidesSectionPallete__boxes">
          <ColorBoxContainer className="GuidesSectionPallete__box-blue">
            <ColorBox hex="#261EE4" />
            <ColorBox hex="#2F2FF4" />
            <ColorBox name={t('colors.joystreamBlue')} hex="#4038FF" size={2} />
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

      <SubSection t={t} title={t('brand.guides.secondaryColors.title')} id={subSection[3].id}>
        <Text>{t('brand.guides.secondaryColors.states')}</Text>

        <div className="GuidesSectionPallete__color-array-container">
          <ColorArray hex="#FF3861" className="GuidesSectionPallete__color-array" />
          <ColorArray hex="#00DBB0" className="GuidesSectionPallete__color-array" />
          <ColorArray hex="#FFE538" className="GuidesSectionPallete__color-array" />
        </div>
      </SubSection>
    </Section>
  );
};
