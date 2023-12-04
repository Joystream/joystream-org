import React from 'react';
import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import { ReactComponent as InformationIcon } from '../../../assets/svg/Information.svg';
import { ReactComponent as PlayIcon } from '../../../assets/svg/play_1.svg';

import './style.scss';

const Token = () => {
  return (
    <div className="token">
      <div className="title">
        <label>Token</label>
        <button>
          Copy link to this section
          <LinkIcon />
        </button>
      </div>
      <hr />
      <div className="flex">
        <div className="chart"></div>
        <div className="info">
          <div className="itemCard">
            <div className="title">
              Marketcap <InformationIcon />
            </div>
            <div className="value">$204.4M</div>
            <div className="percent">+2%</div>
          </div>
          <div className="itemCard">
            <div className="title">
              Volume (24h) <InformationIcon />
            </div>
            <div className="value">$33.4M</div>
            <div className="percent">+20%</div>
          </div>
          <div className="itemCard">
            <div className="title">
              FDV
              <InformationIcon />
            </div>
            <div className="value">$400.4M</div>
          </div>
        </div>
      </div>

      <div className="itemCard mt-24 supply">
        <div className="title">
          Supply
          <InformationIcon />
        </div>
        <div className="flex w-100 justify-between">
          <div className="">
            <div className="title">Circulating supply</div>
            <div className="value">28,832,006.35 JOY</div>
            <div className="percent">$15.4M</div>
          </div>
          <div className="">
            <div className="title">Total supply</div>
            <div className="value">24,918,514.38 JOY</div>
            <div className="percent">$15.4M</div>
          </div>
          <div className="">
            <div className="title">
              <InformationIcon />
              Joy tokens does not have max supply
            </div>
            <button className="value mt-8">
              <PlayIcon />
              Learn why <span>(2:30min)</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className='title'>Where to buy and sell JOY?<InformationIcon /></div>
        <div className="flex">
          <div className="itemCard"></div>
          <div className="itemCard"></div>
        </div>
      </div>
    </div>
  );
};

export default Token;
