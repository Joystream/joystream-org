import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Counter from './';

configure({ adapter: new Adapter() });

describe('DateCounter component', () => {
  it('renders "Launched on" title when countdown is finished', () => {
    const counter = render(<Counter date="2019/06/25 16:26" />);
    expect(counter.text().includes('Launched on')).toBe(true);
    expect(counter.text().includes('/')).toBe(true);
    expect(counter.text().includes(':')).toBe(false);
    expect(counter.text()).toEqual('Launched on25day/06month/19year');
  });

  it('renders "Time to launch" title when countdown is unfinished', () => {
    const unfinishedDate = new Date();
    unfinishedDate.setSeconds(unfinishedDate.getSeconds() + 5000);
    const counter = render(<Counter date={unfinishedDate} />);
    expect(counter.text().includes('Time to launch')).toBe(true);
    expect(counter.text().includes(':')).toBe(true);
    expect(counter.text().includes('/')).toBe(false);
  });

  it('changes title when countdown is finished', () => {
    const unfinishedDate = new Date();
    unfinishedDate.setSeconds(unfinishedDate.getSeconds() + 1);
    const counter = render(<Counter date={unfinishedDate} />);
    expect(counter.text().includes('Time to launch')).toBe(true);
    setTimeout(() => {
      expect(counter.text().includes('Launched on')).toBe(true);
    }, 1000);
  });

  it('renders text "week" when it is more than 1 week to finish', () => {
    const unfinishedDate = new Date();
    unfinishedDate.setMonth(unfinishedDate.getMonth() + 1);
    const counter = render(<Counter date={unfinishedDate} />);
    expect(counter.text().includes('week')).toBe(true);
    expect(counter.text().includes('minute')).toBe(false);
  });

  it('renders text "day" when it is more than 1 day to finish', () => {
    const unfinishedDate = new Date();
    unfinishedDate.setDate(unfinishedDate.getDay() + 2);
    const counter = render(<Counter date={unfinishedDate} />);
    expect(counter.text().includes('day')).toBe(true);
    expect(counter.text().includes('second')).toBe(false);
  });

  it('renders text "seconds" when it is less than 1 day to finish', () => {
    const unfinishedDate = new Date();
    unfinishedDate.setMinutes(unfinishedDate.getMinutes() + 60);
    const counter = render(<Counter date={unfinishedDate} />);
    expect(counter.text().includes('second')).toBe(true);
    expect(counter.text().includes('day')).toBe(false);
  });

  it('adds classes based on props', () => {
    const counter = render(<Counter date="2019/06/25 16:26" light large />);
    expect(counter.hasClass('DateCounter--light')).toEqual(true);
    expect(counter.hasClass('DateCounter--large')).toEqual(true);
  });
});
