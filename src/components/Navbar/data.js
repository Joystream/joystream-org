import { sharedData } from '../../data/pages';

const links = [
  {
    label: 'Product',
    links: [
      {
        href: 'https://play.joystream.org/',
        label: 'Atlas',
      },
      {
        href: 'https://testnet.joystream.org/',
        label: 'Pioneer',
      },
    ],
  },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/roles', label: 'Roles' },
  {
    label: 'Founding Members',
    links: [
      {
        to: '/founding-members',
        label: 'Overview',
      },
      {
        to: '/founding-members/leaderboards',
        label: 'Direct scoring ranking',
      },
      {
        to: '/founding-members/leaderboards',
        label: 'Referral scoring ranking',
      },
      {
        to: '/founding-members/form',
        label: 'Scoring Period Form',
      },
    ],
  },
  { href: sharedData.links.repository, label: 'Community' },
  {
    href: sharedData.links.openings,
    label: 'Start earning',
    isButton: true,
  },
];

export { links };
