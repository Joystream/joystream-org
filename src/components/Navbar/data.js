import { sharedData } from '../../data/pages';

const links = [
  { to: '/community', label: 'navbar.community' },
  { href: 'https://dao.joystream.org', label: 'navbar.pioneer' },
  { to: '/manifesto', label: 'navbar.manifesto' },
  { href: sharedData.social.discordLink, label: 'navbar.discord' },
  { href: 'https://joystream.gitbook.io/testnet-workspace/', label: 'navbar.handbook' },
  {
    to: '/#apps-built-on-joystream',
    label: 'navbar.viewApps',
    isButton: true,
  },
];

export { links };
