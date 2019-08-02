import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { AthensPage } from '../../src/pages/athens';

import testContent from '../../__mocks__/data/testContent';

configure({ adapter: new Adapter() });

describe('AthensPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AthensPage content={testContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
