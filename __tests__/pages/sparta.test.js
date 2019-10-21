import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { SpartaPage } from '../../src/pages/sparta';
import testContent from '../../__mocks__/data/testContent';

describe('SpartaPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SpartaPage content={testContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
