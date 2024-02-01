import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import RoleList from './';

import { ReactComponent as ValidatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as StorageImage } from '../../assets/svg/storage.svg';
import { ReactComponent as MemberImage } from '../../assets/svg/council-member.svg';

import testContent from '../../../__mocks__/data/testContent';

import mapStatusDataToRoles from '../../utils/mapStatusDataToRoles';

const rolesData = [
  {
    image: ValidatorsImage,
    title: 'Validator',
    to: '/roles#Validator',
    key: 'validatorsCount',
    hasLabel: false,
  },
  {
    image: MemberImage,
    title: 'Council Member',
    to: '/roles#Council-Member',
    key: 'councilMembersCount',
    hasLabel: false,
  },
  {
    image: StorageImage,
    title: 'Storage Provider',
    to: '/roles#Storage-Provider',
    key: 'storageProviders',
    hasLabel: true,
  },
];

storiesOf('Section|RoleList', module)
  .addDecorator(centered)
  .add('default', () => <RoleList roles={rolesData} content={mapStatusDataToRoles(testContent)} />);
