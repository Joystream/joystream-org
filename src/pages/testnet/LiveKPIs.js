import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/svg/KPI-arrow.svg';
import TitleWrapper from '../../components/TitleWrapper';
import content from '../../data/pages/testnet';
import { useSpring, animated } from 'react-spring';
import { formatNumber } from '../../utils/formatNumber';

function KPI({
  number,
  title,
  description,
  reward,
  annihilation,
  gradeDate,
  measurementPeriod,
  startDate,
  successEvents,
}) {
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
      {/* TODO: Add classes and markup to hide on media query*/}
      <div className="KPIs__Values__Card__Number OnlyLg">
        {hover ? (
          <>
            <div className="KPIs__Values__Card__Number__Hover ">
              <ArrowIcon className="KPIs__Values__Card__Number__Hover__Icon" />
              <span>more</span>
            </div>
          </>
        ) : (
          <h2>{leadingZero(number)}</h2>
        )}
      </div>
      <div>
        <div className="KPIs__Values__Card__Header">
          <div className="OnlyXs KPIs__Values__Card__Header__Top">
            <h2>{leadingZero(number)}</h2>
            <h2>${formatNumber(reward)}</h2>
          </div>
          <h1 className="KPIs__Values__Card__Header__Title">{title}</h1>
          <h2 className="OnlyLg">${formatNumber(reward)}</h2>
        </div>
        <div className="KPIs__Values__Card__Description">
          <p>{description}</p>
        </div>
        {expand && (
          <div className="KPIs__Values__Card__Info">
            <div className="KPIs__Values__Card__Info__Dates">
              <div className="KPIs__Values__Card__Info__Dates__Start">
                <span className="KPIs__Values__Card__Info__Dates__Label">Starts at:</span>
                <span className="KPIs__Values__Card__Info__Dates__Value">{startDate}</span>
              </div>
              <div className="KPIs__Values__Card__Info__Dates__Start">
                <span className="KPIs__Values__Card__Info__Dates__Label">Grading Date:</span>
                <span className="KPIs__Values__Card__Info__Dates__Value">{gradeDate}</span>
              </div>
              <div className="KPIs__Values__Card__Info__Dates__Period">
                <span className="KPIs__Values__Card__Info__Dates__Label">Measurement Period:</span>
                <span className="KPIs__Values__Card__Info__Dates__Value">{measurementPeriod}</span>
              </div>
            </div>
            <div className="KPIs__Values__Card__Info__Success">
              <span>Successful if:</span>
              <ol>
                {successEvents.map((ev, idx) => (
                  <li key={idx}>{ev}</li>
                ))}
              </ol>
            </div>
            <div className="KPIs__Values__Card__Info__Dates__Start">
              <span className="KPIs__Values__Card__Info__Dates__Label">Annihilation Condition:</span>
              <span className="KPIs__Values__Card__Info__Dates__Value">{annihilation}</span>
            </div>
          </div>
        )}
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
          measurementPeriod={kpi.measurementPeriod}
          annihilation={kpi.annihilation}
          startDate={kpi.startDate}
          gradeDate={kpi.gradeDate}
          successEvents={kpi.successEvents}
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
