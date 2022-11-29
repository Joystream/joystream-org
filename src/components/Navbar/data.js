import { sharedData } from '../../data/pages';

const links = [
  { href: '#apps-built-on-joystream', label: 'Apps' },
  { href: 'https://dao.joystream.org', label: 'navbar.pioneer' },
  { to: '/manifesto', label: 'navbar.manifesto' },
  { href: sharedData.social.discordLink, label: 'navbar.discord' },
  { to: '/primer', label: 'navbar.primer' },
  {
    href: '#apps-built-on-joystream',
    label: 'View apps',
    isButton: true,
  },
];

export { links };
