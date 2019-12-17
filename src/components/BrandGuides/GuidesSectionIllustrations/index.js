import cn from 'classnames';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { createRef, useEffect, useState } from 'react';
import faceBlueImg from '../../../assets/images/face-blue.png';
import faceDarkImg from '../../../assets/images/face-dark.png';
import masksDesktopImg from '../../../assets/images/masks-desktop.png';
import masksMobileImg from '../../../assets/images/masks-mobile.png';
import { ReactComponent as ArrowSvg } from '../../../assets/svg/arrow-down-small.svg';
import guidesData from '../../../data/pages/brand/guides';
import importAll from '../../../utils/importAll';
import { Slider, ThemeSlide } from '../../Slider';
import { Section, SubSection, SubTitle, Text } from '../GuidesSection';
import './style.scss';

const sliderAssets = importAll(require.context('../../../assets/images/slides/illustrations', false, /\.png$/));

const ColorFigure = ({ color, withBorder }) => {
  return (
    <figure className="ColorFigure">
      <figcaption className="ColorFigure__text">{color}</figcaption>
      <div
        className={cn('ColorFigure__box', { 'ColorFigure__box--border': withBorder })}
        style={{ background: color }}
      ></div>
    </figure>
  );
};

const ImageReveal = () => {
  const [clipWidth, setClipWidth] = useState();
  const containerRef = createRef();
  const defaultValue = 50;

  useEffect(() => {
    setClipWidth((defaultValue * containerRef.current.offsetWidth) / 100);
  }, []);

  return (
    <div className="ImageReveal">
      <div className="ImageReveal__container" ref={containerRef}>
        <div
          className="ImageReveal__image-container ImageReveal__image-container--blue"
          style={{
            clip: `rect(0px, ${clipWidth}px, auto, auto)`,
          }}
        >
          <img src={faceBlueImg} className="ImageReveal__image" alt="" />
        </div>

        <div className="ImageReveal__image-container ImageReveal__image-container--black">
          <img src={faceDarkImg} className="ImageReveal__image" alt="" />
        </div>

        <div className="ImageReveal__color-boxes ImageReveal__color-boxes--left">
          <ColorFigure color="#FFFFFF" />
          <ColorFigure color="#B7CEFF" />
          <ColorFigure color="#4038FF" withBorder />
        </div>

        <div className="ImageReveal__color-boxes ImageReveal__color-boxes--right">
          <ColorFigure color="#000000" withBorder />
          <ColorFigure color="#C7CED8" />
          <ColorFigure color="#FFFFFF" />
        </div>
      </div>

      <RcSlider
        min={0}
        max={100}
        onChange={value => {
          setClipWidth((value * containerRef.current.offsetWidth) / 100);
        }}
        className="ImageReveal__track"
        defaultValue={defaultValue}
        handle={props => {
          return (
            <div className="ImageReveal__handle" style={{ left: props.value + '%' }}>
              <ArrowSvg className="ImageReveal__handle-left" />
              <ArrowSvg className="ImageReveal__handle-right" />
            </div>
          );
        }}
      />
    </div>
  );
};

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

        <Slider
          withSpacing
          slides={sliderAssets.map(assetPath => {
            return (
              <ThemeSlide>
                <img className="Illustrations__slide-img" src={assetPath} alt="" />
              </ThemeSlide>
            );
          })}
        />
      </SubSection>
      <SubSection title="Construction" id={subSection[0].id}>
        <Text>
          Illustrations will often go combined with patterns and in case of putting it on a blue background, the oultine
          of the illustration can be changed to a Joystream Blue in order to create a good color balance with patterns
          and the background.
        </Text>

        <ImageReveal />
      </SubSection>

      <SubSection>
        <SubTitle bold>Construction</SubTitle>
        <Text>
          Illustrations should be simple enough to be readable even in smaller resolutions down to 300x300px but they
          shouldn’t be vague either.
        </Text>

        <img src={masksMobileImg} className="Illustrations__masks-mobile" alt="" />
        <img src={masksDesktopImg} className="Illustrations__masks-desktop" alt="" />

        <Text>
          The ammount of detail should be adequate to what the illustration represents, in most cases they should be
          used no smaller than 500x500px.
        </Text>
      </SubSection>
    </Section>
  );
};
