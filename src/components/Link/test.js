import React from 'react';
import { Link as DefaultLink } from 'gatsby';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Link from './';
import Button from '../Button/test';

configure({ adapter: new Adapter() });

describe('Link component', () => {
  it('renders as a "a" tag', () => {
    const wrapper = shallow(<Link href="/">Home link</Link>);
    expect(wrapper.type()).toEqual('a');
  });

  it('renders as a Link tag', () => {
    const wrapper = shallow(<Link to="/">Home link</Link>);
    expect(wrapper.type()).toEqual(DefaultLink);
  });

  it('renders as a highlighted Link tag', () => {
    const wrapper = shallow(
      <Link to="/" highlighted>
        Home link
      </Link>
    );
    expect(wrapper.hasClass('Link--highlighted')).toEqual(true);
  });

  it('has additional class passed with className prop', () => {
    const wrapper = shallow(
      <Link to="/" className="Link--test">
        Home link
      </Link>
    );
    expect(wrapper.prop('className')).toEqual('Link--test Link');
  });
});
