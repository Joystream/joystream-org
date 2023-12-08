import React from 'react';

import { ReactComponent as InformationIcon } from '../../../assets/svg/Information.svg';
import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import BarChart from '../BarChart';

import './styles.scss';

const Traction = () => {
  return (
    <div className="traction">
      <div className="title">
        <div>Traction</div>
        <button>
          Copy link to this section
          <LinkIcon />
        </button>
      </div>
      <hr />
      <div className="flex gap-24">
        <div className="flex-1 border-background p-32">
          <div className="title flex justify-start items-center first-title">
            Content creators <InformationIcon />
          </div>
          <div className="value">1.2K</div>
          <div className="percent">+5% Changes</div>
          <div className="second-title mt-16">Sign ups per week</div>
          <div className="mt-8">
            <BarChart />
          </div>
        </div>
        <div className="flex-1 border-background p-32">
          <div className="title flex justify-start items-center first-title">
            Videos uploaded <InformationIcon />
          </div>
          <div className="value">300K</div>
          <div className="percent">+2% Changes</div>
          <div className="second-title mt-16">uploads per week</div>
          <div className="mt-8">
            <BarChart />
          </div>
        </div>
        <div className="flex-1 border-background p-32">
          <div className="title flex justify-start items-center first-title">
            Comments & reactions <InformationIcon />
          </div>
          <div className="value">1.9K</div>
          <div className="percent">+12% Changes</div>
          <div className="second-title mt-16">Comments & reactions per week</div>
          <div className="mt-8">
            <BarChart />
          </div>
        </div>
      </div>
      <div className="border-background p-32 mt-24">
        <div className="title flex justify-start items-center first-title">
          Chain metrics <InformationIcon />
        </div>
        <div className="flex justify-between metrics mt-16">
          <div>
            <div className="title flex justify-start items-center first-title">
              Average block time <InformationIcon />
            </div>
            <div className='value'>7 sec</div>
          </div>
          <div>
            <div className="title flex justify-start items-center first-title">
              Transactions <InformationIcon />
            </div>
            <div className='value'>2 543 432</div>
            <div className='percent'>+12% Last week</div>
          </div>
          <div>
            <div className="title flex justify-start items-center first-title">
              Holders <InformationIcon />
            </div>
            <div className='value'>1 221 556</div>
            <div className='percent'>+2% Last week</div>
          </div>
          <div>
            <div className="title flex justify-start items-center first-title">
              Daily active account <InformationIcon />
            </div>
            <div className='value'>1900</div>
            <div className='percent'>+2% Last week</div>
          </div>
        </div>
      </div>
      <div className="flex mt-24 gap-24">
        <div className="flex-1 border-background p-32">
          <div className="title flex justify-start items-center first-title">
            NFTs <InformationIcon />
          </div>
          <div className="value">$260K</div>
          <div className="percent">+5% Changes</div>
          <div className="second-title mt-16">Traded volume per week</div>
          <div className="mt-8">
            <BarChart />
          </div>
        </div>
        <div className="flex-1 border-background p-32">
          <div className="title flex justify-start items-center first-title">
            Creator tokens <InformationIcon />
          </div>
          <div className="value">$260K</div>
          <div className="percent">+5% Changes</div>
          <div className="second-title mt-16">Traded volume per week</div>
          <div className="mt-8">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traction;
