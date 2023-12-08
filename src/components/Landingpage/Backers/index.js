import React from 'react';

import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import { ReactComponent as InformationIcon } from '../../../assets/svg/Information.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow.svg';
import Backer1 from '../../../assets/images/backer1.png';
import Backer2 from '../../../assets/images/backer2.png';
import Backer3 from '../../../assets/images/backer3.png';
import Backer4 from '../../../assets/images/backer4.png';
import Backer5 from '../../../assets/images/backer5.png';
import Backer6 from '../../../assets/images/backer6.png';
import preview from '../../../assets/images/preview.png';
import coinDesk from '../../../assets/images/coindesk.png';
import './styles.scss';

const Backers = () => {
  return (
    <div className="backers">
      <div className="title">
        <div>Backers</div>
        <button>
          Copy link to this section
          <LinkIcon />
        </button>
      </div>
      <hr />
      <div className="cardList">
        <div className="title">
          Including <InformationIcon />
        </div>
        <div className="flex ">
          <div className="flex-2 flex gap-24">
            <img src={Backer1} />
            <img src={Backer2} />
            <img src={Backer3} />
            <img src={Backer4} />
          </div>
          <div className="flex-1 flex gap-24">
            <img src={Backer5} />
            <img src={Backer6} />
          </div>
        </div>
      </div>
      <div className="flex coindesk gap-24 mt-24">
        <div className="flex-2 flex border-background left">
          <div className="flex-1 p-32 flex flex-column justify-between">
            <div className="">
              <div className="first-title">FEATURED ON</div>
              <button className="first-button flex">
                <img src={coinDesk} alt="coindesk" />
              </button>
            </div>
            <div>
              <div className="second-title">Decentralized Creator Platform Joystream Raises $5.8M</div>
              <div className="second-content">
                The Polkadot-based platform allows creators to sell their videos as NFTs and turn their channels into
                tokens.
              </div>
              <div className="mt-24 flex items-center read-detail">Read article<Arrow/></div>
            </div>
          </div>
          <div className="flex-1">
            <img src={preview} alt="coindesk" />
          </div>
        </div>
        <div className="flex-1 border-background right">
          <div className="p-32 flex flex-column gap-16 h-100">
            <div className="title justify-start items-center first-title">
              Final venture round <InformationIcon />
            </div>
            <div className="flex flex-column justify-center flex-1 items-start">
              <div className="second-title">$60M</div>
              <div className="value">FDV Valuation | Q1 2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backers;
