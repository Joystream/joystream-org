import { sharedData } from '../../data/pages';

const links = [
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/roles', label: 'Roles' },
  { to: '/tokens', label: 'Tokens' },
  {
    href: sharedData.links.whitepaper,
    label: 'Whitepaper',
  },
  { href: sharedData.links.blog, label: 'Blog' },
  {
    href: sharedData.links.openings,
    label: 'We are hiring!',
    isButton: true,
  },
];

export { links };
