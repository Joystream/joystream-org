import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeroCard from './';

configure({ adapter: new Adapter() });

describe('HeroCard component', () => {
  it('renders error HeroCard', () => {
    const card = shallow(<HeroCard error content={'Error content'} t={key => key} />);
    expect(card.hasClass('Card--error')).toEqual(true);
    expect(card.state()).toHaveProperty('currentStatus', 'error');
    expect(card.text().includes('heroCard.error')).toBe(true);
  });

  it('renders active HeroCard', () => {
    const unfinishedDate = new Date();
    unfinishedDate.setSeconds(unfinishedDate.getSeconds() + 5000);
    const card = shallow(<HeroCard date={unfinishedDate} t={key => key} />);
    expect(card.state()).toHaveProperty('currentStatus', 'active');
    expect(card.text().includes('heroCard.active')).toBe(true);
  });

  it('renders info HeroCard', () => {
    const card = shallow(<HeroCard info date="2019/06/25 16:26" t={key => key} />);
    expect(card.hasClass('Card--info')).toEqual(true);
    expect(card.state()).toHaveProperty('currentStatus', 'info');
    expect(card.text().includes('heroCard.info')).toBe(true);
  });

  it('renders finished HeroCard', () => {
    const card = mount(<HeroCard date="2019/06/25 16:26" t={key => key} />);
    expect(card.state()).toHaveProperty('currentStatus', 'finished');
    expect(card.text().includes('heroCard.finished')).toBe(true);
  });
});
