import React, { useEffect, useState } from 'react';
// import Carousel from '../../Carousel';
import { ReactComponent as InformationIcon } from '../../../assets/svg/Information.svg';
import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import { ReactComponent as Twitter } from '../../../assets/svg/twitter-blue.svg';
import { ReactComponent as Discord } from '../../../assets/svg/discord-icon.svg';
import { ReactComponent as ArrowDown } from '../../../assets/svg/arrow-down-small.svg';
import { ReactComponent as SoundOn } from '../../../assets/svg/sound-on.svg';
import { ReactComponent as ArrowAfter } from '../../../assets/svg/arrow-after.svg';
import avatar from '../../../assets/images/avatar1.png';
import todayBackground from '../../../../public/today-background.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './style.scss';

const peopelData = [
  {
    name: 'Meltem demirors',
    nickName: 'melt_dem',
    followers: 250000,
  },
  {
    name: 'Meltem demirors',
    nickName: 'melt_dem',
    followers: 160000000,
  },
  {
    name: 'Meltem demirors',
    nickName: 'melt_dem',
    followers: 25000000,
  },
  {
    name: 'Meltem demirors',
    nickName: 'melt_dem',
    followers: 1400000,
  },
  {
    name: 'Meltem demirors',
    nickName: 'melt_dem',
    followers: 250000,
  },
  {
    name: 'Meltem demirors',
    nickName: 'melt_dem',
    followers: 250000,
  },
  {
    name: 'Meltem demirors',
    nickName: 'melt_dem',
    followers: 250000,
  },
  {
    name: 'Meltem demirors',
    nickName: 'melt_dem',
    followers: 250000,
  },
  {
    name: 'Meltem demirors',
    nickName: 'melt_dem',
    followers: 250000,
  },
  {
    name: 'Meltem demirors',
    nickName: 'melt_dem',
    followers: 250000,
  },
];

const PersonInfo = props => {
  const { item, key } = props;

  const formatNum = value => {
    if (value > 1000000) {
      return (value / 1000000).toLocaleString() + 'M';
    } else if (value > 1000) {
      return (value / 1000).toLocaleString() + 'K';
    } else return value.toLocaleString();
  };
  return (
    <div className="person-box" key={key}>
      <img src={avatar} alt="avatar" className="img" />
      <div className="fs-21 fw-600">{item.name}</div>
      <div className="fs-16 fw-400 fc-7B8A95">@{item.nickName}</div>
      <div className="flex fs-16">
        <div className="fc-FFF">{formatNum(item.followers)}</div>
        <div className="fc-7B8A95">Followers</div>
      </div>
    </div>
  );
};

const newInfo = [
  {
    backgroundImage: todayBackground,
    subtitle: 'DAO Daily Standup',
    date: '15 Nov 2023 at 10:30 CEST',
    desc:
      'Experience our daily standups, where our vibrant community comes together to share updates, network, and stay informed about the latest happenings in our DAO.',
  },
  {
    backgroundImage: todayBackground,
    subtitle: 'DAO Daily Standup',
    date: '15 Nov 2023 at 10:30 CEST',
    desc:
      'Experience our daily standups, where our vibrant community comes together to share updates, network, and stay informed about the latest happenings in our DAO.',
  },
  {
    backgroundImage: todayBackground,
    subtitle: 'DAO Daily Standup',
    date: '15 Nov 2023 at 10:30 CEST',
    desc:
      'Experience our daily standups, where our vibrant community comes together to share updates, network, and stay informed about the latest happenings in our DAO.',
  },
  {
    backgroundImage: todayBackground,
    subtitle: 'DAO Daily Standup',
    date: '15 Nov 2023 at 10:30 CEST',
    desc:
      'Experience our daily standups, where our vibrant community comes together to share updates, network, and stay informed about the latest happenings in our DAO.',
  },
  {
    backgroundImage: todayBackground,
    subtitle: 'DAO Daily Standup',
    date: '15 Nov 2023 at 10:30 CEST',
    desc:
      'Experience our daily standups, where our vibrant community comes together to share updates, network, and stay informed about the latest happenings in our DAO.',
  },
];

const TodayInfo = props => {
  const { item, key } = props;
  return (
    <div className="today-info" key={key ? key : 0}>
      <div className="today-img" style={{ backgroundImage: `url(${item.backgroundImage})` }}></div>
      <div className="today-body">
        <div className="fs-24">{item.subtitle}</div>
        <div className="fs-14 fc-7B8A95 mt-4 fw-400">{item.date}</div>
        <div className="fs-14 mt-8 fw-400">{item.desc}</div>
        <div className="fs-14 fw-600 flex gap-8 mt-28">
          <SoundOn /> Discord - voice_2
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  const [carouselWidth, setCarouselWidth] = useState(37);
  const [windowWidth, setWindowWidth] = useState(1920);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.outerWidth);
    }
  };

  useEffect(() => {
    if (windowWidth > 1024) setCarouselWidth(37);
    else if (windowWidth <= 1024 && windowWidth > 768) {
      setCarouselWidth(37);
    } else if (windowWidth <= 768 && windowWidth > 425) setCarouselWidth(30);
    else if (windowWidth <= 425) setCarouselWidth(23);
  }, [windowWidth]);
  return (
    <div className="community">
      <div className="title">
        <div>Community</div>
        <button className="hidden">
          Copy link
          <LinkIcon />
        </button>
        <button className="show">
          Copy link to this section
          <LinkIcon />
        </button>
      </div>
      <div className="flex flex-column gap-28">
        <div className="community-1">
          <div className="twitter-discord">
            <div className="number twitter-back">
              <div className="img">
                <Twitter />
              </div>
              <div className="fs-18">Twitter / X</div>
              <div className="fs-73 fw-600">57.2K</div>
              <div className=".fc-B5C1C9 fs-21">+2% Last month</div>
            </div>
            <div className="number discord-back">
              <div className="img">
                <Discord />
              </div>
              <div className="fs-18">Discord</div>
              <div className="fs-73 fw-600">57.2K</div>
              <div className=".fc-B5C1C9 fs-21">+2% Last month</div>
            </div>
          </div>
          <div className="other-number">
            <div className="box-1">
              <div className="fs-18">Datank</div>
              <div className="fs-42 fw-600">26.2K</div>
              <div className="fs-21 fc-B5C1C9">+2% Last month</div>
            </div>
            <div className="box-1">
              <div className="fs-18">Telegram</div>
              <div className="fs-42 fw-600">26.2K</div>
              <div className="fs-21 fc-B5C1C9">+2% Last month</div>
            </div>
            <div className="box-2">
              <div className="subtitle">
                Tweetscout score <InformationIcon />
              </div>
              <div className="flex flex-column">
                <div className="fs-55 fw-600">411</div>
                <div className="fs-21 fc-B5C1C9">Level2</div>
              </div>
              <div className="fc-6C6CFF fs-16 flex gap-8">
                Open tweetscout
                <div className="rotate-90">
                  <ArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="community-2">
          <div className="subtitle">
            Featured followers <InformationIcon />
          </div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            centerMode={true}
            centerSlidePercentage={28}
            width={1300}
          >
            {peopelData.map((item, index) => (
              <PersonInfo item={item} key={index} />
            ))}
          </Carousel>
        </div>
        <div className="community-3">
          <div className="subtitle">
            Open events <InformationIcon />
          </div>
          <div className="today-tomorrow">
            <div className="today">
              <div className="today-btn">
                <button className="btn">Today</button>
              </div>
              <TodayInfo item={newInfo[0]} />
            </div>
            <div className="tomorrow">
              <div className="tomorrow-btn">
                <button className="btn">Tomorrow</button>
              </div>
              <Carousel
                autoPlay={false}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={false}
                centerMode={true}
                centerSlidePercentage={carouselWidth}
              >
                {newInfo.map((item, index) => (
                  <TodayInfo item={item} key={index} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Community;
