import React from 'react';
import { string } from 'prop-types';

import './style.scss';

const propTypes = {
  image: string.isRequired,
  title: string.isRequired,
};

const defaultProps = {};

const ImageSection = ({ image, title, children }) => {
  return (
    <section className="ImageSection">
      <h3 className="ImageSection__title">{title}</h3>

      <div className="ImageSection__content">
        <div className="ImageSection__image-container">
          <img src={image} alt="" className="ImageSection__image" />
        </div>
        <div className="ImageSection__text">{children}</div>
      </div>
    </section>
  );
};

ImageSection.defaultProps = defaultProps;
ImageSection.propTypes = propTypes;

export default ImageSection;
