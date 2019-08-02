import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import validatorsImage from '../../assets/svg/active-validators.svg';

import RoleCard from './';

const defaultProps = {
  image: validatorsImage,
  title: 'Validator',
  count: 20,
  to: '/',
};

storiesOf('Components|RoleCard', module)
  .addDecorator(centered)
  .addParameters({
    backgrounds: [{ name: 'black', value: '#000000', default: true }],
  })
  .add('default', () => <RoleCard {...defaultProps} />)
  .add('with label', () => <RoleCard hasLabel {...defaultProps} />)
  .add('type current (default)', () => <RoleCard {...defaultProps} />)
  .add('type migration', () => <RoleCard type="migration" {...defaultProps} />)
  .add('type most', () => <RoleCard type="most" {...defaultProps} />)
  .add('small', () => <RoleCard to="/" type="most" image={validatorsImage} title="Validator" />);
