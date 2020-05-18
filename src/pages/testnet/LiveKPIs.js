import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/svg/KPI-arrow.svg';
import TitleWrapper from '../../components/TitleWrapper';
import content from '../../data/pages/testnet';
import { useSpring, animated } from 'react-spring';
import { formatNumber } from '../../utils/formatNumber';

function KPI({ number, title, description, reward }) {
  const [expand, setExpand] = useState(false);
  const [hover, setHover] = useState(false);
  const containerProps = useSpring({ minHeight: expand ? '30rem' : '10rem', from: { minHeight: '10rem' } });
  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <animated.div
      style={containerProps}
      className={`KPIs__Values__Card ${expand ? '' : 'BreakText'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setExpand(!expand);
      }}
    >
      <div className="KPIs__Values__Card__Number">
        {hover ? (
          <div className="KPIs__Values__Card__Number__Hover">
            <ArrowIcon className="KPIs__Values__Card__Number__Hover__Icon" />
            <span>more</span>
          </div>
        ) : (
          <h2>{leadingZero(number)}</h2>
        )}
      </div>
      <div>
        <div className="KPIs__Values__Card__Header">
          <h1>{title}</h1>
          <h2>${formatNumber(reward)}</h2>
        </div>
        <div className="KPIs__Values__Card__Description">
          <p>{description}</p>
        </div>
      </div>
    </animated.div>
  );
}

export default function LiveKPIs({ id }) {
  const { KPIs } = content.KPIsValues;
  return (
    <TitleWrapper title="Current set of KPIs" className="KPIs__Values" id={id}>
      {KPIs.map((kpi, idx) => (
        <KPI
          key={`${kpi.title} - ${idx}`}
          number={kpi.number || idx}
          title={kpi.title}
          description={kpi.description}
          reward={kpi.reward}
        />
      ))}
    </TitleWrapper>
  );
}

function leadingZero(n) {
  if (n < 10 && n > 0) {
    return `0${n}`;
  }
}
