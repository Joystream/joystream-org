import { sharedData } from '../../data/pages';

const links = [
  { href: sharedData.links.blog, label: 'Blog' },
  { to: '/manifesto', label: 'Manifesto' },
  {
    href: sharedData.links.whitepaper,
    label: 'Whitepaper',
  },
  { to: '/roles', label: 'Roles' },
  { href: sharedData.links.repository, label: 'Repository' },
  {
    href: sharedData.links.openings,
    label: 'We are hiring!',
    isButton: true,
  },
];

export { links };
