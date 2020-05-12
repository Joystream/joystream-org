import React from 'react';
import data from './KPIs.json';
import TitleWrapper from '../../components/TitleWrapper';
import { formatNumber } from '../../utils/formatNumber';

function KPI({ number, title, description, reward }) {
  return (
    <div className="KPIs__Values__Card">
      <div className="KPIs__Values__Card__Number">
        <h2>{leadingZero(number)}</h2>
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
    </div>
  );
}

export default function LiveKPIs() {
  const { KPIs } = data;
  return (
    <TitleWrapper title="Current set of KPIs" className="KPIs__Values">
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
