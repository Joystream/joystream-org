import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'intersection-observer';
import React from 'react';
import RolesPage from '../../src/pages/roles';

describe('RolesPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RolesPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
