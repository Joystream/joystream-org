import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { AcropolisPage } from '../../src/pages/acropolis';
import testContent from '../../__mocks__/data/testContent';

describe('AcropolisPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AcropolisPage content={testContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
