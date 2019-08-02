import React from 'react';
import { shallow, configure } from 'enzyme';
import 'intersection-observer';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import RolesPage from '../../src/pages/roles';

configure({ adapter: new Adapter() });

describe('RolesPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RolesPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
