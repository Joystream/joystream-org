import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import PrivacyPolicyPage from '../../src/pages/privacy-policy';

describe('PrivacyPolicyPage page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PrivacyPolicyPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
