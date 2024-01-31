import React from 'react';

import chaos77Avatar from '../../../assets/images/dashboard/past-councils/chaos77.png';
import jen4phAvatar from '../../../assets/images/dashboard/past-councils/jen4ph.png';
import tomatoAvatar from '../../../assets/images/dashboard/past-councils/tomato.png';

import storageWorkingGroupLogo from '../../../assets/images/dashboard/storage-working-group.png';
import contentWorkingGroupLogo from '../../../assets/images/dashboard/content-working-group.png';
import membershipWorkingGroupLogo from '../../../assets/images/dashboard/membership-working-group.png';

import yyagiAvatar from '../../../assets/images/dashboard/workers/yyagi.png';
import adovrnAvatar from '../../../assets/images/dashboard/workers/adovrn.png';
import klaudiuszAvatar from '../../../assets/images/dashboard/workers/klaudiusz.png';
import zeroXTwoAvatar from '../../../assets/images/dashboard/workers/0x2bc.png';
import arsi44_dstAvatar from '../../../assets/images/dashboard/workers/arsi44_dst.png';
import kalpakciAvatar from '../../../assets/images/dashboard/workers/kalpakci.png';
import freakstaticAvatar from '../../../assets/images/dashboard/workers/freakstatic.png';
import sieemmaAvatar from '../../../assets/images/dashboard/workers/sieemma.png';
import igrexAvatar from '../../../assets/images/dashboard/workers/igrex.png';
import kira_skipperAvatar from '../../../assets/images/dashboard/workers/kira_skipper.png';
import firuz89Avatar from '../../../assets/images/dashboard/workers/firuz89.png';
import pronteraAvatar from '../../../assets/images/dashboard/workers/prontera.png';
import tes_hsnAvatar from '../../../assets/images/dashboard/workers/tes_hsn.png';
import Omer_OzdemirTRAvatar from '../../../assets/images/dashboard/workers/Omer_OzdemirTR.png';

import bedehoAvatar from '../../../assets/images/dashboard/founders/bedeho.png';
import mokhtarAvatar from '../../../assets/images/dashboard/founders/mokhtar.png';

import { ReactComponent as MailIcon } from '../../../assets/svg/dashboard/mail.svg';
import { ReactComponent as TwitterLogo } from '../../../assets/svg/dashboard/twitter-logo.svg';
import { ReactComponent as TelegramLogo } from '../../../assets/svg/dashboard/telegram-logo.svg';
import { ReactComponent as DiscordLogo } from '../../../assets/svg/dashboard/discord-logo.svg';

export const pastCouncils = [
  {
    linkToPioneerProfile: 'https://#',
    username: 'chaos77',
    avatar: chaos77Avatar,
    socialMediaUsernames: [
      {
        socialMedia: 'email',
        username: 'chrlschwb77@gmail.com',
      },
      {
        socialMedia: 'twitter',
        username: 'Chaos77125',
      },
      {
        socialMedia: 'telegram',
        username: 'Chaos_77',
      },
      {
        socialMedia: 'discord',
        username: 'chrlschwb',
      },
    ],
    timesServed: 7,
  },
  {
    linkToPioneerProfile: 'https://#',
    username: 'jen4ph',
    avatar: jen4phAvatar,
    socialMediaUsernames: [
      {
        socialMedia: 'email',
        username: 'jen4ph@gmail.com',
      },
      {
        socialMedia: 'twitter',
        username: 'JennyChizh',
      },
      {
        socialMedia: 'telegram',
        username: 'jen48632',
      },
      {
        socialMedia: 'discord',
        username: 'jen4ph',
      },
    ],
    timesServed: 8,
  },
  {
    linkToPioneerProfile: 'https://#',
    username: 'tomato',
    avatar: tomatoAvatar,
    socialMediaUsernames: [
      {
        socialMedia: 'email',
        username: 'abc@doctrinemachine.xyz',
      },
      {
        socialMedia: 'twitter',
        username: 'abcxyz_tomato',
      },
      {
        socialMedia: 'telegram',
        username: 'tomato_js',
      },
      {
        socialMedia: 'discord',
        username: 'tomato_js',
      },
    ],
    timesServed: 4,
  },
];

export const workingGroups = [
  {
    name: 'Storage',
    logo: storageWorkingGroupLogo,
    link: 'https://#',
    lead: {
      avatar: yyagiAvatar,
      username: 'yyagi',
    },
    currentBudget: '28 109 JOY',
    workers: [
      {
        avatar: yyagiAvatar,
        username: 'yyagi',
      },
      {
        username: 'JonnyBoy',
      },
      {
        avatar: adovrnAvatar,
        username: 'adovrn',
      },
      {
        avatar: klaudiuszAvatar,
        username: 'klaudiusz',
      },
      {
        username: 'Create',
      },
      {
        avatar: zeroXTwoAvatar,
        username: '0x2bc',
      },
      {
        avatar: arsi44_dstAvatar,
        username: 'arsi44_dst',
      },
      {
        avatar: kalpakciAvatar,
        username: 'kalpakci',
      },
      {
        avatar: freakstaticAvatar,
        username: 'freakstatic',
      },
      {
        username: 'itornews',
      },
      {
        avatar: sieemmaAvatar,
        username: 'sieemma',
      },
    ],
  },
  {
    name: 'Content',
    logo: contentWorkingGroupLogo,
    link: 'https://#',
    lead: {
      avatar: igrexAvatar,
      username: 'igrex',
    },
    currentBudget: '87 049 JOY',
    workers: [
      {
        avatar: igrexAvatar,
        username: 'igrex',
      },
      {
        avatar: kira_skipperAvatar,
        username: 'kira_skipper',
      },
      {
        avatar: firuz89Avatar,
        username: 'firuz89',
      },
      {
        avatar: pronteraAvatar,
        username: 'prontera',
      },
      {
        avatar: tes_hsnAvatar,
        username: 'tes_hsn',
      },
      {
        username: 'mikasa',
      },
      {
        avatar: Omer_OzdemirTRAvatar,
        username: 'Omer_OzdemirTR',
      },
    ],
  },
  {
    name: 'Membership',
    logo: membershipWorkingGroupLogo,
    link: 'https://#',
    lead: {
      avatar: tomatoAvatar,
      username: 'tomato',
    },
    currentBudget: '222 278 JOY',
    workers: [
      {
        avatar: tomatoAvatar,
        username: 'tomato',
      },
    ],
  },
];

export const founders = [
  {
    name: 'Bedeho Mender',
    avatar: bedehoAvatar,
    socialMediaUsernames: [
      {
        socialMedia: 'email',
        username: 'bedeho@jsgenesis.com',
      },
      {
        socialMedia: 'twitter',
        username: 'bedeho',
      },
      {
        socialMedia: 'telegram',
        username: 'bedeho',
      },
      {
        socialMedia: 'discord',
        username: 'bedeho',
      },
    ],
  },
  {
    name: 'Mokhtar Naamani',
    avatar: mokhtarAvatar,
    socialMediaUsernames: [
      {
        socialMedia: 'email',
        username: 'mokhtar@jsgenesis.com',
      },
      {
        socialMedia: 'twitter',
        username: 'Mokhtar',
      },
      {
        socialMedia: 'telegram',
        username: 'Mokhtar',
      },
      {
        socialMedia: 'discord',
        username: 'Mokhtar',
      },
    ],
  },
];

export const renderSocialMediaLogo = socialMedia => {
  switch (socialMedia) {
    case 'email':
      return <MailIcon />;
    case 'twitter':
      return <TwitterLogo />;
    case 'telegram':
      return <TelegramLogo />;
    case 'discord':
      return <DiscordLogo />;
    default:
      return null;
  }
};
