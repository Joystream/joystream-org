import { sharedData } from '../../data/pages';

const links = [
  {
    label: 'Product',
    isDropdown: true,
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
    isDropdown: true,
    links: [
      {
        to: '/founding-members',
        label: 'Overview',
      },
      {
        to: '/founding-members/leaderboards',
        label: 'Direct score ranking',
      },
      {
        to: '/founding-members/leaderboards',
        label: 'Referral score ranking',
      },
      {
        to: '/founding-members/form',
        label: 'Scoring period form',
      },
    ],
  },
  { href: sharedData.links.blog, label: 'Community' },
  {
    to: '/get-started',
    label: 'Start earning',
    isButton: true,
  },
];

export { links };
