import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { RomePage } from '../../src/pages/rome';
import testContent from '../../__mocks__/data/testContent';

describe('RomePage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RomePage content={testContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
