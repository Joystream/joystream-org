import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { AthensPage } from '../../src/pages/athens';
import testContent from '../../__mocks__/data/testContent';

describe('AthensPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AthensPage content={testContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
