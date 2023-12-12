import React, { useState } from 'react';
import { ReactComponent as InformationIcon } from '../../../assets/svg/Information.svg';
import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import './style.scss';
import avatar from '../../../assets/images/avatar1.png';
import SectionTitle from '../SectionTitle';
import LineChart from '../Linechart';

const Grid_box = props => {
  return (
    <div className="flex flex-column">
      <div className="subtitle2">
        {props.title}
        <InformationIcon />
      </div>
      <div className="box-value">{props.value}</div>
    </div>
  );
};

const ContributorBox = props => {
  const { item, key } = props;
  return (
    <div className="contri-box" key={key}>
      <div className="img">
        <img src={item.image} alt="avatar" />
      </div>
      <div>{item.name}</div>
      {item.nickName && <div className="nick-name">{item.nickName}</div>}
    </div>
  );
};

const contributors = [
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: '',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: '',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },

  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: '',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: '',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },

  {
    name: 'Bedeho Mender',
    image: avatar,
    nickName: 'bedeho',
  },
];

const Enginerring = () => {
  const [openShow, setOpenShow] = useState(false);
  return (
    <div className="engineering">
      <SectionTitle title="Enginerring" />
      <div className="flex flex-column gap-24 mt-24">
        <div className="flex gap-24">
          <div className="eng_info flex-3">
            <div className="subtitle">
              Github stats <InformationIcon />
            </div>
            <div className="grid-3">
              <Grid_box title="Stars" value="325" />
              <Grid_box title="Commits" value="10K" />
              <Grid_box title="Commits this week" value="250" />
              <Grid_box title="Open PRs" value="325" />
              <Grid_box title="Open issues" value="255" />
              <Grid_box title="Repositiories" value="12" />
            </div>
          </div>
          <div className="eng-followers flex-1">
            <div className="subtitle">
              Followers <InformationIcon />
            </div>
            <div className="fol-body">
              <div className="box-value">590</div>
              <div className="subtitle2">+2% Last month</div>
            </div>
          </div>
        </div>
        <div className="border-background contribution">
          <div className="subtitle">
            Contributions <InformationIcon />
          </div>
          <LineChart />
        </div>
        <div className="flex flex-column">
          <div className="subtitle mt-12">
            Contributors(17) <InformationIcon />
          </div>
          <div className="contributors grid">
            {openShow
              ? contributors.map((contributor, index) => <ContributorBox item={contributor} key={index} />)
              : contributors
                  .slice(1, 13)
                  .map((contributor, index) => <ContributorBox item={contributor} key={index} />)}
          </div>
          <div className="eng-btn">
            {openShow ? (
              <button className="show-btn" onClick={() => setOpenShow(false)}>
                Hide
              </button>
            ) : (
              <button className="show-btn" onClick={() => setOpenShow(true)}>
                Show all {contributors.length} contributors
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Enginerring;
