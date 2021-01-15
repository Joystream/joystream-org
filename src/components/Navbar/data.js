import { sharedData } from '../../data/pages';

const links = [
  { to: '/founding-members', label: 'Founding Members' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/roles', label: 'Roles' },
  { to: '/testnet', label: 'Incentives' },
  { href: sharedData.links.repository, label: 'Repository' },
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
