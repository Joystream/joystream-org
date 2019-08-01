import React from 'react';
import renderer from 'react-test-renderer';

import { AthensPage } from '../../src/pages/athens';

import testContent from '../../__mocks__/data/testContent';

describe('AthensPage page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AthensPage content={testContent} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
