import React from 'react';
import cn from 'classnames';
import { node, string, bool, object } from 'prop-types';
import Plx from 'react-plx';

import './style.scss';

const propTypes = {
  title: string.isRequired,
  image: object,
  indent: bool,
  children: node,
  chip: node,
};

const defaultProps = {
  image: null,
  indent: false,
  children: null,
  chip: null,
};

const Hero = ({ title, children, image, indent, chip }) => {
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 40,
          endValue: -40,
          property: 'translateY',
        },
      ],
    },
  ];

  return (
    <section className={cn('Hero', { 'Hero--indented': indent })}>
      <div className="Hero__container">
        <div className="Hero__content">
          <h1 className="Hero__title">{title}</h1>
          <div className="Hero__description">{children}</div>
        </div>
        {image && (
          <div className="Hero__image-wrapper">
            {chip && chip}
            <Plx parallaxData={parallaxData}>
              <img src={image} alt={title} className="Hero__image" />
            </Plx>
          </div>
        )}
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
