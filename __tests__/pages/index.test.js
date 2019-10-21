import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { IndexPage } from '../../src/pages';
import testContent from '../../__mocks__/data/testContent';

describe('IndexPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<IndexPage content={testContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
