import React from 'react';

import { ReactComponent as MetricIcon } from '../../../assets/svg/landing/metric-visual.svg';

import './style.scss';

const Traction = ({ t }) => {
  return (
    <div className="IndexPage__traction-wrapper">
      <div className="IndexPage__traction">
        <header className="IndexPage__traction__header">
          <span className="IndexPage__traction__header__section-title">TRACTION</span>
          <h2 className="IndexPage__traction__header__title">Growh and Engagement</h2>
        </header>
        <div className="IndexPage__traction__cards">
          <div className="IndexPage__traction__card">
            <div className="IndexPage__traction__card__visual">
              <MetricIcon />
            </div>
            <div className="IndexPage__traction__card__change">+12% Last week</div>
            <div className="IndexPage__traction__card__value">2 134 321</div>
          </div>
          <div className="IndexPage__traction__card">
            <div className="IndexPage__traction__card__visual">
              <MetricIcon />
            </div>
            <div className="IndexPage__traction__card__change">+5% Last week</div>
            <div className="IndexPage__traction__card__value">3 545</div>
          </div>
          <div className="IndexPage__traction__card">
            <div className="IndexPage__traction__card__visual">
              <MetricIcon />
            </div>
            <div className="IndexPage__traction__card__change">+7% Last week</div>
            <div className="IndexPage__traction__card__value">1 530</div>
          </div>
          <div className="IndexPage__traction__card">
            <div className="IndexPage__traction__card__visual">
              <MetricIcon />
            </div>
            <div className="IndexPage__traction__card__change">+5% Last week</div>
            <div className="IndexPage__traction__card__value">5 432</div>
          </div>
          <div className="IndexPage__traction__card">
            <div className="IndexPage__traction__card__visual">
              <MetricIcon />
            </div>
            <div className="IndexPage__traction__card__change">+2% Last week</div>
            <div className="IndexPage__traction__card__value">954</div>
          </div>
          <div className="IndexPage__traction__card">
            <div className="IndexPage__traction__card__visual">
              <MetricIcon />
            </div>
            <div className="IndexPage__traction__card__change">+9% Last week</div>
            <div className="IndexPage__traction__card__value">$25 323</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traction;
