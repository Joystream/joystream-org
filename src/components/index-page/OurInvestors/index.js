import React from 'react';
import Slider from 'react-slick';

import DCG from '../companies/dcg';
import Hypersphere from '../companies/hypersphere';
import DefiAlliance from '../companies/defiAlliance';
import D1Ventures from '../companies/d1Ventures';
import SignumCapital from '../companies/signumCapital';
import LDCapital from '../companies/ldCapital';
import GenBlockCapital from '../companies/genblockCapital';
import Bitmain from '../companies/bitmain';
import OKX from '../companies/okx';
import MEXCPioneer from '../companies/mexcPioneer';
import SkyVisionCapital from '../companies/skyvisionCapital';
import BoostVC from '../companies/boostVC';
import WaterDripCapital from '../companies/waterdripCapital';
import PNYXVentures from '../companies/pnyxVentures';
import GateIOLabs from '../companies/gateIOLabs';
import GSR from '../companies/gsr';
import VestigiumCapital from '../companies/vestigiumCapital';
import MasterVentures from '../companies/masterVentures';
import KernelVentures from '../companies/kernelVentures';
import IllusionistGroup from '../companies/illusionistGroup';
import LotusCapital from '../companies/lotusCapital';
import LancerCapital from '../companies/lancerCapital';
import PandaCapital from '../companies/pandaCapital';
import SunbarCapital from '../companies/sunbarCapital';
import SneakyVC from '../companies/sneakyVC';
import NewTribeVC from '../companies/newTribeCapital';
import PheonixVC from '../companies/phoenixVC';
import Capital8186 from '../companies/8186';
import LVTCapital from '../companies/lvtCapital';
import BasicsCapital from '../companies/basicsCapital';
import ZBCapital from '../companies/zbCapital';
import CabinVC from '../companies/cabinVC';
import StartupLab from '../companies/startupLab';
import Polkadotters from '../companies/polkadotters';
import LionLine from '../companies/lionLine';
import FMFW from '../companies/fmfw';

import './style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  vertical: false,
  pauseOnHover: false,
  rows: 1,
};

const OurInvestors = ({ t }) => {
  return (
    <div className="IndexPage__our-investors-wrapper">
      <div className="IndexPage__our-investors">
        <h2 className="IndexPage__our-investors__title">{t('landing.ourInvestors.title')}</h2>
        <div className="IndexPage__our-investors__carousels">
          <Slider {...settings} className="IndexPage__our-investors__carousels__top">
            <DCG/>
            <Hypersphere />
            <DefiAlliance />
            <D1Ventures />
            <SignumCapital />
            <LDCapital />
            <GenBlockCapital/>
            <Bitmain />
            <OKX />
            <MEXCPioneer />
            <SkyVisionCapital />
            <BoostVC />
            <WaterDripCapital/>
            <PNYXVentures />
            <GateIOLabs />
            <GSR />
            <VestigiumCapital />
            <MasterVentures />
          </Slider>
          <Slider {...settings} centerPadding="82px" className="IndexPage__our-investors__carousels__top">
            <KernelVentures/>
            <IllusionistGroup />
            <LotusCapital />
            <LancerCapital />
            <PandaCapital />
            <SunbarCapital />
            <SneakyVC/>
            <NewTribeVC />
            <PheonixVC />
            <Capital8186 />
            <LVTCapital />
            <BasicsCapital />
            <ZBCapital/>
            <CabinVC />
            <StartupLab />
            <Polkadotters />
            <LionLine />
            <FMFW />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurInvestors;
