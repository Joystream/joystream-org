import React from 'react';
import './style.scss';
import Button from '../Button';
import Announcing from '../../assets/svg/announcing-white.svg';
import AtlasVideo from './AtlasVideo';

const AtlasDemo = ({}) => {
    return(
      <div className="AtlasDemo">
        <div className="AtlasDemo__container">
          <AtlasVideo />
          <p className="AtlasDemo__paragraph">Try out Atlas for the first time, enjoy unlimited content on all of your devices.</p>
          <div className="AtlasDemo__buttons">
            <Button secondary large >Try out Atlas</Button>
            <Button secondary large reversed>Learn more</Button>
          </div>
          <div className="AtlasDemo__announcement">
            <img src={Announcing} alt="Megaphone logo."/>
            <p className="AtlasDemo__announcement__info">You can also join our Newsletter and stay up to date:</p>
            <div className="AtlasDemo__announcement__form">
              <input placeholder="email address.." type="text" />
              <button>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AtlasDemo;
