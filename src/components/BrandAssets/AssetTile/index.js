import cn from 'classnames';
import React from 'react';
import downloadImg from '../../../assets/svg/download.svg';
import Button from '../../../components/Button';
import { string, bool } from 'prop-types';
import './style.scss';

const AssetTile = ({ src, darkTheme, fullWidth }) => {
  return (
    <div className="AssetTile">
      <div className={cn('AssetTile__inner', { 'AssetTile__inner--dark': darkTheme })}>
        <div className={cn('AssetTile__asset')}>
          <img src={src} alt="" className={cn('AssetTile__image', { 'AssetTile__image--full-width': fullWidth })} />
        </div>

        <Button className="AssetTile__download" href={src} download target="_blank" rel="noopener noreferrer">
          Download
          <img src={downloadImg} alt="" />
        </Button>
      </div>
    </div>
  );
};

AssetTile.propTypes = {
  src: string.isRequired,
  darkTheme: bool,
  fullWidth: bool,
};

export default AssetTile;
