import React from 'react';
import renderer from 'react-test-renderer';

import PrivacyPolicyPage from '../../src/pages/privacy-policy';

describe('PrivacyPolicyPage page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PrivacyPolicyPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
