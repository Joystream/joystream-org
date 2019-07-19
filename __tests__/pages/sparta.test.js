import React from 'react';
import renderer from 'react-test-renderer';

import { SpartaPage } from '../../src/pages/sparta';

import testContent from '../../__mocks__/data/testContent';

describe('SpartaPage page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SpartaPage content={testContent} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
