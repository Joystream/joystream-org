import React from 'react';
import renderer from 'react-test-renderer';

import { IndexPage } from '../../src/pages';

import testContent from '../../__mocks__/data/testContent';

describe('IndexPage page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IndexPage content={testContent} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
