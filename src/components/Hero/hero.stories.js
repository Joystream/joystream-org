import React from 'react';
import { storiesOf } from '@storybook/react';

import masksImage from '../../assets/svg/roles-masks.svg';
import platformImage from '../../assets/svg/platform.svg';
import acropolisImage from '../../assets/svg/acropolis.svg';

import Button from '../Button';
import Link from '../Link';
import HeroCard from '../HeroCard';

import Hero from './';
import './hero.stories.scss';

const today = new Date();
const unfinishedDate = new Date();
unfinishedDate.setHours(today.getHours() + 2);

storiesOf('Section|Hero', module)
  .addParameters({
    backgrounds: [{ name: 'black', value: '#000000', default: true }],
  })
  .add('plain content with an image', () => (
    <Hero image={masksImage} title="Discover various roles on the platform">
      <p className="HeroStory__paragraph">
        Explore available roles and pick the one that suits you the most. Influence platforms development earning Monero
        in the process.
      </p>
    </Hero>
  ))
  .add('custom content', () => (
    <Hero image={platformImage} title="A user governed video platform">
      <p className="HeroStory__paragraph">Earn Monero by participating in the current Athens testnet</p>
      <div className="HeroStory__group">
        <Button secondary className="HeroStory__button">
          Earn Monero
        </Button>
        <Button secondary reversed className="HeroStory__button">
          Launch UI
        </Button>
      </div>
    </Hero>
  ))
  .add('without image', () => (
    <Hero title="Discover various roles on the platform">
      <p className="HeroStory__paragraph">
        <strong>Jsgenesis values your privacy.</strong>
        This Privacy Policy ("Privacy Policy") and Cookie Policy ("Cookie Policy") explains how Jsgenesis AS
        ("Jsgenesis", "Company", "We", "Us", "Our") collect and use data and information when you ("User) use on or any
        of the Joystream products, developed in the GitHub organization
        <Link href="https://github.com/JoyStream" highlighted>
          {' '}
          Joystream
        </Link>
        . These products (collectively "Software") include, but are not limited to, all pages under the
        <Link href="https://www.joystream.org/" highlighted>
          {' '}
          joystream.org{' '}
        </Link>
        domain ("Website"), the
        <Link href="https://github.com/Joystream/substrate-node-joystream" highlighted>
          {' '}
          Joyful node{' '}
        </Link>
        ("Full Node"), the
        <Link href="https://github.com/Joystream/storage-node-joystream" highlighted>
          {' '}
          Colossus Storage Node{' '}
        </Link>
        ("Storage node"), and the Pioneer User Interface, either
        <Link href="https://github.com/Joystream/apps" highlighted>
          {' '}
          self hosted{' '}
        </Link>
        or
        <Link href="http://testnet.joystream.org/" highlighted>
          {' '}
          hosted by Us{' '}
        </Link>
        ("App").
      </p>
    </Hero>
  ))
  .add(
    'with indent and counter',
    () => (
      <Hero title="Acropolis Network" image={acropolisImage} indent>
        <p className="HeroStory__paragraph">
          Explore available roles and pick the one that suits you the most. Influence platforms development earning
          Monero in the process.
        </p>
        <HeroCard date={unfinishedDate} />
      </Hero>
    ),
    {
      backgrounds: [{ name: 'white', value: '#ffffff', default: true }],
    }
  );
