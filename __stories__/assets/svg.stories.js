import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';

import importAll from '../../src/utils/importAll';

const iconStyle = { height: '50vh', maxWidth: '100%' };

const iconsList = require.context('../../src/assets/svg', false, /\.(png|jpe?g|svg)$/);
const icons = importAll(iconsList);

const stories = storiesOf('Assets|Icons', module);
stories.addDecorator(centered);
stories.addParameters({
  backgrounds: [{ name: 'silver', value: '#cacaca', default: true }],
});

icons.forEach((icon, i) => {
  const Icon = icon.ReactComponent;
  stories.add(`${iconsList.keys()[i]}`, () => <Icon style={iconStyle} />);
});
