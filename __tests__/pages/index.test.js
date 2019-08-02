import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { IndexPage } from '../../src/pages';

import testContent from '../../__mocks__/data/testContent';

configure({ adapter: new Adapter() });

describe('IndexPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<IndexPage content={testContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
