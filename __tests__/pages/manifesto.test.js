import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { ManifestoPage } from '../../src/pages/manifesto';

describe('ManifestoPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ManifestoPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
