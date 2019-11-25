import React from 'react';
import { string, node } from 'prop-types';
import cn from 'classnames';
import './style.scss';

export const Section = ({ children, title }) => {
  return (
    <section className="GuidesSection__section">
      {title && <h4 className="GuidesSection__section-title">{title}</h4>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: string,
};

export const SubSection = ({ children, title }) => {
  return (
    <div className="GuidesSection__subsection">
      {title && <h4 className="GuidesSection__subsection-title">{title}</h4>}
      {children}
    </div>
  );
};

SubSection.propTypes = {
  title: string,
};

export const SubTitle = ({ children }) => {
  return <h5 className="GuidesSection__sub-title">{children}</h5>;
};

SubTitle.propTypes = {};

export const Text = ({ children }) => {
  return <p className="GuidesSection__text">{children}</p>;
};

Text.propTypes = {};

export const Image = ({ className, description, ...props }) => {
  return (
    <>
      <img className={cn('GuidesSection__image', className)} alt="" {...props} />
      {description && <p className="GuidesSection__image-description">{description}</p>}
    </>
  );
};

Image.propTypes = {
  className: string,
  description: node,
};
