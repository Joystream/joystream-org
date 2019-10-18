import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { RomePage } from '../../src/pages/rome';
import testContent from '../../__mocks__/data/testContent';

configure({ adapter: new Adapter() });

describe('RomePage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RomePage content={testContent} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
