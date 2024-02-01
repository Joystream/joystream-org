import React from 'react';

import { storiesOf } from '@storybook/react';

import TitleWrapper from './index';
import Link from '../Link';

storiesOf('Layout|TitleWrapper', module)
  .add('default', () => (
    <TitleWrapper title="Testnet Goals">
      <p>Content</p>
    </TitleWrapper>
  ))
  .add('with subtitle', () => (
    <TitleWrapper
      title="Testnet Goals"
      subtitle={
        <p>
          The goals below are a simplified representation of the Key Results listed in our Release{' '}
          <Link href="/#">OKR</Link>
        </p>
      }
    >
      <p>Content</p>
    </TitleWrapper>
  ));
