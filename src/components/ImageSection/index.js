import React from 'react';
import { string, bool, number } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  grouped: bool,
  imageOffset: number,
};

const defaultProps = {};

const ImageSection = ({ image, title, children, grouped, imageOffset }) => {
  return (
    <section className={cn('ImageSection', { 'ImageSection--grouped': grouped })}>
      {!grouped && <h3 className={'ImageSection__title'}>{title}</h3>}

      <div className="ImageSection__content">
        <div className="ImageSection__image-container">
          <img
            src={image}
            alt=""
            className="ImageSection__image"
            style={
              imageOffset && {
                transform: 'none',
                top: imageOffset,
              }
            }
          />
        </div>
        <div className="ImageSection__text">
          {grouped && <h4 className="ImageSection__secondary-title">{title}</h4>}
          {children}
        </div>
      </div>
    </section>
  );
};

ImageSection.defaultProps = defaultProps;
ImageSection.propTypes = propTypes;

export default ImageSection;
