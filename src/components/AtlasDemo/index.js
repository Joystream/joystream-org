import React from 'react';
import './style.scss';
import Button from '../Button';
import BackgroundLeft from '../../assets/svg/atlas-bg-shapes-left.svg';
import BackgroundRight from '../../assets/svg/atlas-bg-shapes-right.svg';
import AtlasVideo from './AtlasVideo';

const AtlasDemo = () => {
    return(
      <div className="AtlasDemo">
        <img src={BackgroundLeft} alt="" className="AtlasDemo__background-left"></img>
        <img src={BackgroundRight} alt="" className="AtlasDemo__background-right"></img>
        <div className="AtlasDemo__container">
          <AtlasVideo />
          <Button href="https://testnet.joystream.org/#/media"  className="AtlasDemo__try-out-button" secondary large >Try It Out</Button>
        </div>
      </div>
    );
};

export default AtlasDemo;
