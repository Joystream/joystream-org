import { sharedData } from '../../data/pages';

const links = [
  { to: '/about', label: 'navbar.about' },
  { to: '/community', label: 'navbar.community' },
  { to: '/token', label: 'navbar.token' },
  { href: 'https://dao.joystream.org', label: 'navbar.pioneer' },
  { to: '/manifesto', label: 'navbar.manifesto' },
  {
    to: '/#apps-built-on-joystream',
    label: 'navbar.viewApps',
    isButton: true,
  },
];

export { links };
