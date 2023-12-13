import React from 'react';
import { ReactComponent as InformationIcon } from '../../../assets/svg/Information.svg';
import { ReactComponent as PlayIcon } from '../../../assets/svg/play_1.svg';
import { ReactComponent as CheckIcon } from '../../../assets/svg/Check.svg';
import { ReactComponent as ChangeIcon } from '../../../assets/svg/Change_price.svg';
import { ReactComponent as CancelIcon } from '../../../assets/svg/Cancel.svg';
import Mexc from '../../../assets/images/mexc.png';
import Bitget from '../../../assets/images/bitget.png';
import HighChart from '../Highchart';
import PieChart from '../Piechart';
import AreaChart from '../Areachart';
import SectionTitle from '../SectionTitle';
import './style.scss';

const Token = () => {
  return (
    <div className="token">
      <SectionTitle title="Token" />
      <div className="price_section">
        <div className="widget">
          <div className="title">
            Price <InformationIcon />
          </div>
          <div>
            <div className="value">$0.041267</div>
            <div className="percent">+2% Last week</div>
          </div>
          {/* <HighChart /> */}
        </div>
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

      <div className="itemCard supply">
        <div className="title">
          Supply
          <InformationIcon />
        </div>
        <div className="flex w-100 justify-between gap-40 md-flex-column">
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

      <div className="buy_and_sell">
        <div className="buy_and_sell_title mt-24">
          Where to buy and sell JOY?
          <InformationIcon />
        </div>
        <div className="flex mt-8 md-flex-column">
          <div className="itemCard">
            <img src={Mexc} alt="Mexc logo" widdiv="88" />
            <div>MEXC</div>
            <div className="flex md-flex-column">
              <button>
                <InformationIcon /> Requires KYC
              </button>
              <button>
                <CheckIcon />
                Accepting users from: Poland
              </button>
              <button>
                <ChangeIcon />
                Pair: JOY &harr; USDT
              </button>
            </div>
            <button>How to buy?</button>
          </div>
          <div className="itemCard">
            <img src={Bitget} alt="Bitget logo" widdiv="88" />
            <div>Bitget</div>
            <div className="flex md-flex-column">
              <button>
                <InformationIcon /> Doesn’t require KYC
              </button>
              <button>
                <CancelIcon />
                Not accepting users from: Poland
              </button>
              <button>
                <ChangeIcon />
                Pair: JOY &harr; USDT
              </button>
            </div>
            <button>How to buy?</button>
          </div>
        </div>
      </div>

      <div className="itemCard mt-24">
        <div className="title">
          Release schedule
          <InformationIcon />
        </div>
        {/* <AreaChart /> */}
      </div>

      <div className="flex gap-24 md-flex-column">
        <div className="itemCard px-0 flex-1">
          <div className="title">
            Token allocation
            <InformationIcon />
          </div>
          <div className="table-div" style={{ overflowX: 'auto' }}>
            <div className="table ">
              <div className="tr th">
                <div>PURPOSE</div>
                <div className="justify-end">% OF TOTAL SUPPLY</div>
                <div className="justify-end">TOKEN AMOUNT</div>
                <div className="justify-end">TGE UNLOCK %</div>
              </div>
              <div className="tr">
                <div>Community FM</div>
                <div className="justify-end">21,2189609</div>
                <div className="justify-end">21218960900</div>
                <div className="justify-end">8</div>
              </div>
              <div className="tr">
                <div>JSGenesis FM</div>
                <div className="justify-end">31, 435</div>
                <div className="justify-end">3143 500 000</div>
                <div className="justify-end">8</div>
              </div>
              <div className="tr">
                <div>Community FM</div>
                <div className="justify-end">21,2189609</div>
                <div className="justify-end">21218960900</div>
                <div className="justify-end">8</div>
              </div>
            </div>
          </div>
        </div>
        <div className="itemCard flex-1">
          <div className="flex justify-between w-100 items-center piechart-title">
            <div className="flex justify-between items-center">
              Minting <InformationIcon />
            </div>
            <div className="flex justify-between items-center">
              Annual inflation: 2%
              <InformationIcon />
            </div>
          </div>
          {/* <PieChart /> */}
        </div>
      </div>

      <div className="staking flex gap-24 md-flex-column">
        <div className="itemCard flex-1">
          <div className="title">
            Supply staked for validation <InformationIcon />
          </div>
          <div className="value">25%</div>
        </div>
        <div className="itemCard flex-1">
          <div className="title">
            APR on staking <InformationIcon />
          </div>
          <div className="value">2.5%</div>
        </div>
      </div>

      <div className="flex gap-16 md-flex-column">
        <div className="itemCard px-0 flex-1">
          <div className="title">
            Return on investment (ROI)
            <InformationIcon />
          </div>
          {/* <div className="table-div"> */}
          <div className="table">
            <div className="tr th">
              <div>TIME</div>
              <div>RETURN</div>
            </div>
            <div className="tr">
              <div>1 hour</div>
              <div>+4.19%</div>
            </div>
            <div className="tr">
              <div>1 hour</div>
              <div>+4.19%</div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="itemCard px-0 flex-2">
          <div className="title">
            Supply distribution
            <InformationIcon />
          </div>
          {/* <div className="table-div" style={{ overflowX: 'auto' }}> */}
          <div className="table">
            <div className="tr th">
              <div>TYPE</div>
              <div>SUPPLY</div>
              <div>% of circulating supply</div>
            </div>
            <div className="tr">
              <div>Supply in Top 1$ Address</div>
              <div>21 2189 609</div>
              <div>10%</div>
            </div>
            <div className="tr">
              <div>Supply in Top 1$ Address</div>
              <div>21 2189 609</div>
              <div>10%</div>
            </div>
            <div className="tr">
              <div>Supply in Top 1$ Address</div>
              <div>21 2189 609</div>
              <div>10%</div>
            </div>
            <div className="tr">
              <div>Supply in Top 1$ Address</div>
              <div>21 2189 609</div>
              <div>10%</div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Token;
