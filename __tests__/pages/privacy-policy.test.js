import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import PrivacyPolicyPage from '../../src/pages/privacy-policy';

configure({ adapter: new Adapter() });

describe('PrivacyPolicyPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PrivacyPolicyPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
