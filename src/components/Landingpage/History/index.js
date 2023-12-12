import React, { useState } from 'react';
import { ReactComponent as InformationIcon } from '../../../assets/svg/Information.svg';
import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import historyBackground from '../../../assets/images/history-background.png';
import { ReactComponent as ArrowDown } from '../../../assets/svg/arrow-down-small.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './style.scss';

const HistoryBox = props => {
  const { item, key } = props;
  return (
    <div className="history-info" key={key ? key : ''}>
      <div className="history-img">
        <img src={item.image} alt="Historyimage" className="img" />
      </div>
      <div className="history-body">
        <div className="text">
          <div className="date">{item.date}</div>
          <div className="desc">{item.desc}</div>
        </div>
        <div className="read">
          <div className="other-font">Read more</div>
          <div className="arrow">
            <ArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

const historyData = [
  {
    image: historyBackground,
    date: 'Jun 2019',
    desc: 'The idea for the Joystream product',
  },
  {
    image: historyBackground,
    date: 'Jun 2019',
    desc: 'The idea for the Joystream product',
  },
  {
    image: historyBackground,
    date: 'Jun 2019',
    desc: 'The idea for the Joystream product',
  },
  {
    image: historyBackground,
    date: 'Jun 2019',
    desc: 'The idea for the Joystream product',
  },
  {
    image: historyBackground,
    date: 'Jun 2019',
    desc: 'The idea for the Joystream product',
  },
  {
    image: historyBackground,
    date: 'Jun 2019',
    desc: 'The idea for the Joystream product',
  },
  {
    image: historyBackground,
    date: 'Jun 2019',
    desc: 'The idea for the Joystream product',
  },
  {
    image: historyBackground,
    date: 'Jun 2019',
    desc: 'The idea for the Joystream product',
  },
  {
    image: historyBackground,
    date: 'Jun 2019',
    desc: 'The idea for the Joystream product',
  },
];

const History = () => {

  return (
    <div className="history">
      <div className="title">
        <div>History</div>
        <button className='hidden'>
          Copy link
          <LinkIcon />
        </button>
        <button className='show'>
          Copy link to this section
          <LinkIcon />
        </button>
      </div>
      <div className='history-carousel'>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={25}
          width={1440}
          >
          {historyData.map((item, index) => (
            <HistoryBox item={item} key={index} />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default History;
