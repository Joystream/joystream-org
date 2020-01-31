import cn from 'classnames';
import React from 'react';
import downloadImg from '../../../assets/svg/download.svg';
import Button from '../../../components/Button';
import { string, bool } from 'prop-types';
import './style.scss';

const AssetTile = ({ src, downloadHref, darkTheme, fullWidth, large }) => {
  return (
    <div className={cn('AssetTile', { 'AssetTile--large': large })}>
      <div className={cn('AssetTile__inner', { 'AssetTile__inner--dark': darkTheme })}>
        <div className={cn('AssetTile__asset')}>
          <img src={src} alt="" className={cn('AssetTile__image', { 'AssetTile__image--full-width': fullWidth })} />
        </div>

        <Button
          className="AssetTile__download"
          href={downloadHref || src}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
          <img src={downloadImg} alt="" />
        </Button>
      </div>
    </div>
  );
};

AssetTile.propTypes = {
  src: string.isRequired,
  downloadHref: string,
  darkTheme: bool,
  large: bool,
  fullWidth: bool,
};

export default AssetTile;
