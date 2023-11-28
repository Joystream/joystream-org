import React, { useState, useEffect, useRef } from 'react';
import { VictoryLine } from 'victory';

import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';

import './style.scss';

const Container = ({ title, type, children, t }) => {
  return (
    <div
      className={`IndexPage__tokenomics__metrics__container-wrapper IndexPage__tokenomics__metrics__container-wrapper--${type}`}
    >
      <div className="IndexPage__tokenomics__metrics__container">
        <div className="IndexPage__tokenomics__metrics__container__title">
          {title}
          <div className="IndexPage__tokenomics__metrics__container__title__info">
            <InfoIcon />
            <div className="IndexPage__tokenomics__metrics__container__title__info__modal">
              {t('landing.tokenomics.modalText')}
            </div>
          </div>
        </div>
        <div className="IndexPage__tokenomics__metrics__container__content">{children}</div>
      </div>
    </div>
  );
};

const parseValue = (value, price = undefined) => {
  if (!value) return '0';

  if (price && price === 0) {
    return '0';
  }

  let options = {};
  if (price) {
    value = Math.round(value * price);
    options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 };
  }

  const intlNumber = new Intl.NumberFormat('en-US', options).formatToParts(value);
  return intlNumber.map(part => (part.value === ',' ? ' ' : part.value)).join('');
};

const Graph = ({ data }) => {
  const graphWrapperRef = useRef(null);
  const [{ width, height }, setDimensions] = useState({ width: 600, height: 120 });
  const updateDimensions = () => {
    if (graphWrapperRef.current) {
      setDimensions({
        width: graphWrapperRef.current.offsetWidth,
        height: graphWrapperRef.current.offsetHeight,
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    updateDimensions();
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [graphWrapperRef.current]);

  return (
    <div ref={graphWrapperRef} className="IndexPage__tokenomics__metrics__container__content__price__graph-wrapper">
      <div className="IndexPage__tokenomics__metrics__container__content__price__graph">
        <svg viewBox={'0 0' + ' ' + width + ' ' + height} preserveAspectRatio="none" width="100%">
          <VictoryLine
            height={height}
            width={width}
            style={{
              data: { stroke: 'rgba(12, 152, 70, 1)', strokeWidth: '4px' },
            }}
            domainPadding={{ x: [0, 0], y: [2, 2] }}
            data={data}
            padding={{ top: 0, bottom: 0, left: 0, right: 0 }}
            standalone={false}
          />
        </svg>
      </div>
    </div>
  );
};

const graphPriceData = [
  {
    feed_at: 1700179200,
    price: '0.0339493358363636',
  },
  {
    feed_at: 1700182800,
    price: '0.0335150250090909',
  },
  {
    feed_at: 1700186400,
    price: '0.0338089164181818',
  },
  {
    feed_at: 1700190000,
    price: '0.03396695665',
  },
  {
    feed_at: 1700193600,
    price: '0.0340814857363636',
  },
  {
    feed_at: 1700197200,
    price: '0.03378493105',
  },
  {
    feed_at: 1700200800,
    price: '0.033650194',
  },
  {
    feed_at: 1700204400,
    price: '0.0337310555272727',
  },
  {
    feed_at: 1700208000,
    price: '0.0337483720583333',
  },
  {
    feed_at: 1700211600,
    price: '0.0335729536833333',
  },
  {
    feed_at: 1700215200,
    price: '0.0335302724090909',
  },
  {
    feed_at: 1700218800,
    price: '0.0335379294181818',
  },
  {
    feed_at: 1700222400,
    price: '0.0335687603272727',
  },
  {
    feed_at: 1700226000,
    price: '0.03367630886',
  },
  {
    feed_at: 1700229600,
    price: '0.0338175767416667',
  },
  {
    feed_at: 1700233200,
    price: '0.0336530861181818',
  },
  {
    feed_at: 1700236800,
    price: '0.03353112083',
  },
  {
    feed_at: 1700240400,
    price: '0.0336217694666667',
  },
  {
    feed_at: 1700244000,
    price: '0.0335118590363636',
  },
  {
    feed_at: 1700247600,
    price: '0.0334873597090909',
  },
  {
    feed_at: 1700251200,
    price: '0.0335837742583333',
  },
  {
    feed_at: 1700254800,
    price: '0.033574987075',
  },
  {
    feed_at: 1700258400,
    price: '0.0337413111545455',
  },
  {
    feed_at: 1700262000,
    price: '0.034811886575',
  },
  {
    feed_at: 1700265600,
    price: '0.03590375072',
  },
  {
    feed_at: 1700269200,
    price: '0.0357655892375',
  },
  {
    feed_at: 1700272800,
    price: '0.03645491678',
  },
  {
    feed_at: 1700276400,
    price: '0.0375146078090909',
  },
  {
    feed_at: 1700280000,
    price: '0.037946307',
  },
  {
    feed_at: 1700283600,
    price: '0.0368514931666667',
  },
  {
    feed_at: 1700287200,
    price: '0.0370549244909091',
  },
  {
    feed_at: 1700290800,
    price: '0.0369512726727273',
  },
  {
    feed_at: 1700294400,
    price: '0.0367151654166667',
  },
  {
    feed_at: 1700298000,
    price: '0.0368453644083333',
  },
  {
    feed_at: 1700301600,
    price: '0.0371974589454545',
  },
  {
    feed_at: 1700305200,
    price: '0.0372000861454545',
  },
  {
    feed_at: 1700308800,
    price: '0.03638533615',
  },
  {
    feed_at: 1700312400,
    price: '0.036334090075',
  },
  {
    feed_at: 1700316000,
    price: '0.0368766144',
  },
  {
    feed_at: 1700319600,
    price: '0.0351655693416667',
  },
  {
    feed_at: 1700323200,
    price: '0.0348134332333333',
  },
  {
    feed_at: 1700326800,
    price: '0.0354228225454545',
  },
  {
    feed_at: 1700330400,
    price: '0.0363033333909091',
  },
  {
    feed_at: 1700334000,
    price: '0.0366435649583333',
  },
  {
    feed_at: 1700337600,
    price: '0.0365831753833333',
  },
  {
    feed_at: 1700341200,
    price: '0.037135750025',
  },
  {
    feed_at: 1700344800,
    price: '0.0373611499454545',
  },
  {
    feed_at: 1700348400,
    price: '0.03681609374',
  },
  {
    feed_at: 1700352000,
    price: '0.0372397101083333',
  },
  {
    feed_at: 1700355600,
    price: '0.0371201417727273',
  },
  {
    feed_at: 1700359200,
    price: '0.0380410739416667',
  },
  {
    feed_at: 1700362800,
    price: '0.0380216602818182',
  },
  {
    feed_at: 1700366400,
    price: '0.0381576645833333',
  },
  {
    feed_at: 1700370000,
    price: '0.0386539003615385',
  },
  {
    feed_at: 1700373600,
    price: '0.0382547162',
  },
  {
    feed_at: 1700377200,
    price: '0.0378313632727273',
  },
  {
    feed_at: 1700380800,
    price: '0.0386804656538462',
  },
  {
    feed_at: 1700384400,
    price: '0.0392414869166667',
  },
  {
    feed_at: 1700388000,
    price: '0.0389813348583333',
  },
  {
    feed_at: 1700391600,
    price: '0.0406067280272727',
  },
  {
    feed_at: 1700395200,
    price: '0.0418798900916667',
  },
  {
    feed_at: 1700398800,
    price: '0.0412926717083333',
  },
  {
    feed_at: 1700402400,
    price: '0.0398582366923077',
  },
  {
    feed_at: 1700406000,
    price: '0.0401349947545455',
  },
  {
    feed_at: 1700409600,
    price: '0.0408504129615385',
  },
  {
    feed_at: 1700413200,
    price: '0.0413800140166667',
  },
  {
    feed_at: 1700416800,
    price: '0.042188252675',
  },
  {
    feed_at: 1700420400,
    price: '0.0428030725909091',
  },
  {
    feed_at: 1700424000,
    price: '0.0426840527833333',
  },
  {
    feed_at: 1700427600,
    price: '0.0423702218416667',
  },
  {
    feed_at: 1700431200,
    price: '0.0424584088583333',
  },
  {
    feed_at: 1700434800,
    price: '0.04236421',
  },
  {
    feed_at: 1700438400,
    price: '0.0427768879818182',
  },
  {
    feed_at: 1700442000,
    price: '0.0433785480181818',
  },
  {
    feed_at: 1700445600,
    price: '0.0433240191272727',
  },
  {
    feed_at: 1700449200,
    price: '0.0439537241',
  },
  {
    feed_at: 1700452800,
    price: '0.0440339561083333',
  },
  {
    feed_at: 1700456400,
    price: '0.0445620661666667',
  },
  {
    feed_at: 1700460000,
    price: '0.042933211075',
  },
  {
    feed_at: 1700463600,
    price: '0.0432056764',
  },
  {
    feed_at: 1700467200,
    price: '0.0416966342615385',
  },
  {
    feed_at: 1700470800,
    price: '0.0408053394818182',
  },
  {
    feed_at: 1700474400,
    price: '0.0408036549333333',
  },
  {
    feed_at: 1700478000,
    price: '0.0417367393333333',
  },
  {
    feed_at: 1700481600,
    price: '0.0421308505',
  },
  {
    feed_at: 1700485200,
    price: '0.0437013625538462',
  },
  {
    feed_at: 1700488800,
    price: '0.0441815158727273',
  },
  {
    feed_at: 1700492400,
    price: '0.0437471891307692',
  },
  {
    feed_at: 1700496000,
    price: '0.0448135696833333',
  },
  {
    feed_at: 1700499600,
    price: '0.04577898905',
  },
  {
    feed_at: 1700503200,
    price: '0.0447000557818182',
  },
  {
    feed_at: 1700506800,
    price: '0.0449780972615385',
  },
  {
    feed_at: 1700510400,
    price: '0.0462510818545455',
  },
  {
    feed_at: 1700514000,
    price: '0.0476528459153846',
  },
  {
    feed_at: 1700517600,
    price: '0.0513451129636364',
  },
  {
    feed_at: 1700521200,
    price: '0.0543872679384615',
  },
  {
    feed_at: 1700524800,
    price: '0.052342618625',
  },
  {
    feed_at: 1700528400,
    price: '0.054059368725',
  },
  {
    feed_at: 1700532000,
    price: '0.0525328731818182',
  },
  {
    feed_at: 1700535600,
    price: '0.0526799668230769',
  },
  {
    feed_at: 1700539200,
    price: '0.0541653063333333',
  },
  {
    feed_at: 1700542800,
    price: '0.0543205881166667',
  },
  {
    feed_at: 1700546400,
    price: '0.05388701335',
  },
  {
    feed_at: 1700550000,
    price: '0.0551556124583333',
  },
  {
    feed_at: 1700553600,
    price: '0.05558511185',
  },
  {
    feed_at: 1700557200,
    price: '0.0536635556363636',
  },
  {
    feed_at: 1700560800,
    price: '0.0530792915',
  },
  {
    feed_at: 1700564400,
    price: '0.0519335597333333',
  },
  {
    feed_at: 1700568000,
    price: '0.051944066725',
  },
  {
    feed_at: 1700571600,
    price: '0.0530317061416667',
  },
  {
    feed_at: 1700575200,
    price: '0.054703420125',
  },
  {
    feed_at: 1700578800,
    price: '0.0538772104090909',
  },
  {
    feed_at: 1700582400,
    price: '0.0540269127846154',
  },
  {
    feed_at: 1700586000,
    price: '0.0541391135727273',
  },
  {
    feed_at: 1700589600,
    price: '0.0514201167',
  },
  {
    feed_at: 1700593200,
    price: '0.0470397016090909',
  },
  {
    feed_at: 1700596800,
    price: '0.0455981102416667',
  },
  {
    feed_at: 1700600400,
    price: '0.0470707520846154',
  },
  {
    feed_at: 1700604000,
    price: '0.0470615358583333',
  },
  {
    feed_at: 1700607600,
    price: '0.0448515689583333',
  },
  {
    feed_at: 1700611200,
    price: '0.0432284278166667',
  },
  {
    feed_at: 1700614800,
    price: '0.0449691260166667',
  },
  {
    feed_at: 1700618400,
    price: '0.045679560125',
  },
  {
    feed_at: 1700622000,
    price: '0.0464011655583333',
  },
  {
    feed_at: 1700625600,
    price: '0.0465604089416667',
  },
  {
    feed_at: 1700629200,
    price: '0.0463242456545455',
  },
  {
    feed_at: 1700632800,
    price: '0.045254577925',
  },
  {
    feed_at: 1700636400,
    price: '0.0458176578416667',
  },
  {
    feed_at: 1700640000,
    price: '0.0440064345461538',
  },
  {
    feed_at: 1700643600,
    price: '0.0424727820083333',
  },
  {
    feed_at: 1700647200,
    price: '0.0415829943222222',
  },
  {
    feed_at: 1700650800,
    price: '0.0418338141307692',
  },
  {
    feed_at: 1700654400,
    price: '0.0422859586916667',
  },
  {
    feed_at: 1700658000,
    price: '0.0434793397416667',
  },
  {
    feed_at: 1700661600,
    price: '0.0439092335916667',
  },
  {
    feed_at: 1700665200,
    price: '0.0441711757416667',
  },
  {
    feed_at: 1700668800,
    price: '0.0444174349181818',
  },
  {
    feed_at: 1700672400,
    price: '0.0449101916076923',
  },
  {
    feed_at: 1700676000,
    price: '0.045251464025',
  },
  {
    feed_at: 1700679600,
    price: '0.0462093121916667',
  },
  {
    feed_at: 1700683200,
    price: '0.0481525104333333',
  },
  {
    feed_at: 1700686800,
    price: '0.0502219472416667',
  },
  {
    feed_at: 1700690400,
    price: '0.0520634874636364',
  },
  {
    feed_at: 1700694000,
    price: '0.0512982880666667',
  },
  {
    feed_at: 1700697600,
    price: '0.051043071775',
  },
  {
    feed_at: 1700701200,
    price: '0.0524746750461538',
  },
  {
    feed_at: 1700704800,
    price: '0.0522173173090909',
  },
  {
    feed_at: 1700708400,
    price: '0.0533998408846154',
  },
  {
    feed_at: 1700712000,
    price: '0.0530743789545455',
  },
  {
    feed_at: 1700715600,
    price: '0.0519691205666667',
  },
  {
    feed_at: 1700719200,
    price: '0.0524237795923077',
  },
  {
    feed_at: 1700722800,
    price: '0.0531786519916667',
  },
  {
    feed_at: 1700726400,
    price: '0.0534659797909091',
  },
  {
    feed_at: 1700730000,
    price: '0.0523068673333333',
  },
  {
    feed_at: 1700733600,
    price: '0.0508225116076923',
  },
  {
    feed_at: 1700737200,
    price: '0.0487096694818182',
  },
  {
    feed_at: 1700740800,
    price: '0.0490029255153846',
  },
  {
    feed_at: 1700744400,
    price: '0.0483665600454545',
  },
  {
    feed_at: 1700748000,
    price: '0.0483933667090909',
  },
  {
    feed_at: 1700751600,
    price: '0.0488730812538462',
  },
  {
    feed_at: 1700755200,
    price: '0.0490482999909091',
  },
  {
    feed_at: 1700758800,
    price: '0.0489889367',
  },
  {
    feed_at: 1700762400,
    price: '0.0491268894583333',
  },
  {
    feed_at: 1700766000,
    price: '0.0496953323',
  },
  {
    feed_at: 1700769600,
    price: '0.0513196438',
  },
  {
    feed_at: 1700773200,
    price: '0.05101874145',
  },
  {
    feed_at: 1700776800,
    price: '0.0484488987153846',
  },
  {
    feed_at: 1700780400,
    price: '0.0478986492818182',
  },
];

const Tokenomics = ({ tokenomicsData, priceData, t }) => {
  // TODO: Remove this placeholder data:
  tokenomicsData = {
    tokenPrices: graphPriceData,
  };

  const graphData = tokenomicsData?.tokenPrices
    ? tokenomicsData.tokenPrices.map((item, index) => ({ x: index + 1, y: Number(item.price) }))
    : [{ x: 0, y: 0 }];
  const lastWeekChange = tokenomicsData?.lastWeekChange ?? 0;

  return (
    <section className="IndexPage__tokenomics-wrapper">
      <div className="IndexPage__tokenomics">
        <header className="IndexPage__tokenomics__header">
          <span className="IndexPage__tokenomics__header__section-title">{t('landing.tokenomics.sectionTitle')}</span>
          <h2 className="IndexPage__tokenomics__header__title">{t('landing.tokenomics.title')}</h2>
        </header>
        <div className="IndexPage__tokenomics__metrics">
          <Container
            title={t('landing.tokenomics.price')}
            type="price"
            children={
              <div className="IndexPage__tokenomics__metrics__container__content__price">
                <p className="IndexPage__tokenomics__metrics__container__content__price__value">
                  ${priceData.price.toFixed(6)}
                </p>
                <p className="IndexPage__tokenomics__metrics__container__content__price__change">
                  {Math.round(lastWeekChange)}% {t('landing.tokenomics.lastWeek')}
                </p>
                <Graph data={graphData} />
              </div>
            }
            t={t}
          />
          <Container
            title={t('landing.tokenomics.marketCap')}
            type="market-cap"
            children={
              <p className="IndexPage__tokenomics__metrics__container__content__simple-value">
                {parseValue(tokenomicsData?.circulatingSupply, priceData.price)}
              </p>
            }
            t={t}
          />
          <Container
            title={t('landing.tokenomics.totalSupply')}
            type="total-supply"
            children={
              <p className="IndexPage__tokenomics__metrics__container__content__simple-value">
                {parseValue(tokenomicsData?.totalSupply)}
              </p>
            }
            t={t}
          />
          <Container
            title={t('landing.tokenomics.circulatingSupply')}
            type="circulating-supply"
            children={
              <p className="IndexPage__tokenomics__metrics__container__content__simple-value">
                {parseValue(tokenomicsData?.circulatingSupply)}
              </p>
            }
            t={t}
          />
          <Container
            title={t('landing.tokenomics.fdv')}
            type="fdv"
            children={
              <p className="IndexPage__tokenomics__metrics__container__content__simple-value">
                {parseValue(tokenomicsData?.totalSupply, priceData.price)}
              </p>
            }
            t={t}
          />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
