import { sharedData } from '../../data/pages';

const links = [
  { to: '/#apps-built-on-joystream', label: 'navbar.apps' },
  { href: 'https://dao.joystream.org', label: 'navbar.pioneer' },
  { to: '/manifesto', label: 'navbar.manifesto' },
  { href: sharedData.social.discordLink, label: 'navbar.discord' },
  { to: '/primer', label: 'navbar.primer' },
  {
    to: '/#apps-built-on-joystream',
    label: 'navbar.viewApps',
    isButton: true,
  },
];

export { links };
