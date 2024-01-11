import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import DashboardSectionHeader from '../DashboardSectionHeader';

import { ReactComponent as AccentPointer } from '../../assets/svg/dashboard/accent-pointer.svg';

import { historyStages } from './data';

import './style.scss';

const dashboardHistoryStagePropTypes = {
  img: string.isRequired,
  date: string.isRequired,
  shortDesr: string.isRequired,
  longDescr: string,
};

const DashboardHistoryStage = ({ img, date, shortDescr, longDescr }) => {
  return (
    <div style={{ flexShrink: 0 }} className={cn('dashboard-history__stage', { 'card-interactive': !!longDescr })}>
      <div className="dashboard-history__stage-img-wrapper">
        <img className="dashboard-history__stage-img" src={img} alt="joystream-history-stage-img" />
        <div className="dashboard-history__stage-img-overlay"></div>
      </div>
      <div className="dashboard-history__stage-descr-wrapper">
        <div className="dashboard-history__stage-short-descr-wrapper">
          <h4 className="dashboard-history__stage-date">{date}</h4>
          <p className="dashboard-history__stage-descr">{shortDescr}</p>
        </div>
        {!!longDescr && (
          <button className="dashboard-history__button-read-more">
            Read more
            <AccentPointer />
          </button>
        )}
      </div>
    </div>
  );
};

DashboardHistoryStage.propTypes = dashboardHistoryStagePropTypes;

const DashboardHistory = () => {
  return (
    <section className="dashboard-history">
      <div style={{ overflowX: 'hidden' }} className="dashboard-history__container">
        <DashboardSectionHeader sectionId="history" sectionHeading="History" />
        <div style={{ display: 'flex', gap: '24px' }}>
          {historyStages.map((historyStage, index) => {
            return <DashboardHistoryStage key={index} {...historyStage} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardHistory;
