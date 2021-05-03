import cn from 'classnames';
import React from 'react';
import downloadColorImg from '../../../assets/svg/download-color.svg';
import eyeImg from '../../../assets/svg/eye.svg';
import { string, oneOfType, func, number, bool } from 'prop-types';
import './style.scss';

const AssetsSection = ({ prefix, title, downloadHref, filesCount, children, isOpen, toggleOpen, id, t }) => {
  return (
    <section className="AssetsSection" id={id}>
      <div className="AssetsSection__header">
        <button
          className={cn('AssetsSection__title', {
            'AssetsSection__title--open': isOpen,
            'AssetsSection__title--togglable': !!children,
          })}
          onClick={!!children ? toggleOpen : undefined}
        >
          <span className="AssetsSection__title-count">{prefix}.</span> {title}
        </button>

        <div className="AssetsSection__controls">
          <div className="AssetsSection__files-info">
            <span className="AssetsSection__files-count">{filesCount || children.length}</span> {t('brand.assets.files')}
          </div>
          {children && (
            <button className="AssetsSection__toggle" onClick={toggleOpen}>
              <img src={eyeImg} alt="toggle" />
            </button>
          )}

          <a className="AssetsSection__download" href={downloadHref} download>
            <img src={downloadColorImg} alt="download" />
          </a>
        </div>
      </div>
      {children && isOpen && <div className="AssetsSection__drawer">{children}</div>}
    </section>
  );
};

AssetsSection.propTypes = {
  prefix: string.isRequired,
  title: string.isRequired,
  downloadHref: string.isRequired,
  filesCount: oneOfType([string, number]),
  isOpen: bool.isRequired,
  toggleOpen: func.isRequired,
  id: string.isRequired,
};

export default AssetsSection;
