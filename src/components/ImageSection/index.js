import React from 'react';
import { string, bool, number } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  image: string,
  imageClassName: string,
  title: string,
  grouped: bool,
  imageOffset: number,
};

const defaultProps = {};

const ImageSection = ({ image, title, children, grouped, imageOffset, imageClassName }) => {
  return (
    <section className={cn('ImageSection', { 'ImageSection--grouped': grouped })}>
      {!grouped && <h3 className={'ImageSection__title'}>{title}</h3>}

      <div className="ImageSection__content">
        <div className="ImageSection__image-container">
          <div
            className="ImageSection__image"
            style={
              imageOffset && {
                transform: 'none',
                top: imageOffset,
              }
            }
          >
            <img src={image} alt="" className={imageClassName} />
          </div>
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
