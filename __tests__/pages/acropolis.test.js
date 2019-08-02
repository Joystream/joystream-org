import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { AcropolisPage } from '../../src/pages/acropolis';

import testContent from '../../__mocks__/data/testContent';

configure({ adapter: new Adapter() });

describe('AcropolisPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AcropolisPage content={testContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
