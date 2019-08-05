import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { SpartaPage } from '../../src/pages/sparta';

import testContent from '../../__mocks__/data/testContent';

configure({ adapter: new Adapter() });

describe('SpartaPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SpartaPage content={testContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
