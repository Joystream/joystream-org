import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';

import importAll from '../../src/utils/importAll';
import parsePathToName from '../../src/utils/parsePathToName';

import ColumnsLayout from '../../src/components/ColumnsLayout';

const iconStyle = { height: '50vh', maxWidth: '100%' };

const iconsList = require.context('../../src/assets/svg', false, /\.(png|jpe?g|svg)$/);
const icons = importAll(iconsList);

const stories = storiesOf('Assets|Icons', module);
stories.addDecorator(centered);
stories.addParameters({
  backgrounds: [{ name: 'silver', value: '#cacaca', default: true }],
});

stories.add('_all', () => {
  return (
    <ColumnsLayout columnsCount={4} style={{ padding: '20px' }}>
      {icons.map((icon, i) => {
        const Icon = icon.ReactComponent;
        return (
          <div
            key={iconsList.keys()[i]}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Icon style={{ maxHeight: '200px', width: '100%' }} />
            <p style={{ marginTop: '12px' }}>{parsePathToName(iconsList.keys()[i])}</p>
          </div>
        );
      })}
    </ColumnsLayout>
  );
});

icons.forEach((icon, i) => {
  const Icon = icon.ReactComponent;

  stories.add(`${parsePathToName(iconsList.keys()[i])}`, () => <Icon style={iconStyle} />);
});
