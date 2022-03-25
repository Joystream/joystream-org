import React from 'react';
import cn from 'classnames';
import { node, string, bool, number, oneOf, oneOfType } from 'prop-types';
import Plx from 'react-plx';

import './style.scss';

const propTypes = {
  title: node.isRequired,
  image: string,
  indent: bool,
  children: node,
  chip: node,
  animationStartValue: number,
  animationEndValue: number,
  animationEnd: oneOfType([number, string]),
  theme: oneOf(['blue', 'black']),
  noOverflow: bool,
};

const defaultProps = {
  image: null,
  indent: false,
  children: null,
  chip: null,
  animationStartValue: 70,
  animationEndValue: -40,
  animationEnd: 500,
  theme: 'black',
  noOverflow: false,
  reverse: false,
};

const Hero = ({
  title,
  children,
  image,
  indent,
  chip,
  animationStartValue,
  animationEnd,
  animationEndValue,
  theme,
  noOverflow,
  reverse,
}) => {
  const parallaxData = [
    {
      start: 0,
      end: animationEnd,
      properties: [
        {
          startValue: animationStartValue,
          endValue: animationEndValue,
          property: 'translateY',
        },
      ],
    },
  ];

  return (
    <section className={cn('Hero', `Hero--${theme}`, { 'Hero--indented': indent, 'Hero--no-overflow': noOverflow })}>
      <div className={cn('Hero__container', { 'Hero__container--reverse' : reverse })}>
        <div className={cn('Hero__content', { 'Hero__content--reverse' : reverse })}>
          <h1 className="Hero__title">{title}</h1>
          <div className="Hero__description">{children}</div>
        </div>
        {image && (
          <div className={cn('Hero__image-wrapper', { 'Hero__image-wrapper--reverse' : reverse })}>
            <Plx parallaxData={parallaxData}>
              <img src={image} alt={title} className="Hero__image" />
            </Plx>
            {chip && <div className="Hero__chip">{chip}</div>}
          </div>
        )}
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
