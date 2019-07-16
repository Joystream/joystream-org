import React from 'react';
import renderer from 'react-test-renderer';

import { AcropolisPage } from '../../src/pages/acropolis';

import testContent from '../../__mocks__/data/testContent';

describe('AcropolisPage page', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AcropolisPage content={testContent} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
