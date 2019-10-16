import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';

import importAll from '../../src/utils/importAll';
import parsePathToName from '../../src/utils/parsePathToName';

import ColumnsLayout from '../../src/components/ColumnsLayout';

const backgroundsList = require.context('../../src/assets/background', false, /\.(png|jpe?g|svg)$/);
const backgrounds = importAll(backgroundsList);

const stories = storiesOf('Assets|Backgrounds', module);
stories.addDecorator(centered);
stories.addParameters({
  backgrounds: [{ name: 'silver', value: '#cacaca', default: true }],
});

stories.add('_all', () => {
  return (
    <ColumnsLayout columnsCount={4} style={{ padding: '20px' }}>
      {backgrounds.map((background, i) => {
        return (
          <div
            key={backgroundsList.keys()[i]}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <img src={background} alt={parsePathToName(backgroundsList.keys()[i])} />
            <p style={{ marginTop: '12px' }}>{parsePathToName(backgroundsList.keys()[i])}</p>
          </div>
        );
      })}
    </ColumnsLayout>
  );
});

backgrounds.forEach((background, i) => {
  stories.add(`${parsePathToName(backgroundsList.keys()[i])}`, () => (
    <img src={background} alt={parsePathToName(backgroundsList.keys()[i])} />
  ));
});
