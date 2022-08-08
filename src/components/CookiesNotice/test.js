import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CookiesNotice from './';

configure({ adapter: new Adapter() });

describe('CookiesNotice component', () => {
  it('handle accept action', () => {
    const wrapper = mount(<CookiesNotice t={e=>e} />);
    expect(wrapper.state().visible).toBe(false);
    // delay to let the cookie data to load
    setTimeout(() => {
      expect(wrapper.state().visible).toBe(true);
      wrapper.find('button').simulate('click');
      expect(wrapper.state().visible).toBe(false);
    }, 200);
  });
});
