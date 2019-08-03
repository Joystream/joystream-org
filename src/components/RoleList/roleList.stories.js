import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import RoleList from './';

import validatorsImage from '../../assets/svg/active-validators.svg';
import storageImage from '../../assets/svg/storage.svg';
import memberImage from '../../assets/svg/council-member.svg';

import testContent from '../../../__mocks__/data/testContent';

import mapStatusDataToRoles from '../../utils/mapStatusDataToRoles';

const rolesData = [
    {
      image: validatorsImage,
      title: 'Validator',
      to: '/roles#Validator',
      key: 'validatorsCount',
      hasLabel: false,
    },
    {
      image: memberImage,
      title: 'Council Member',
      to: '/roles#Council-Member',
      key: 'councilMembersCount',
      hasLabel: false,
    },
    {
      image: storageImage,
      title: 'Storage Provider',
      to: '/roles#Storage-Provider',
      key: 'storageProviders',
      hasLabel: true,
    },
];

storiesOf('Section|RoleList', module)
  .addDecorator(centered)
  .add('default', () => <RoleList roles={rolesData} content={mapStatusDataToRoles(testContent)} />);
