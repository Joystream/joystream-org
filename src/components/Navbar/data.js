import { sharedData } from '../../data/pages';

const links = [
  // Language "en" is a workaround to disallow gatsby to route to language specific routes here (e.g. ru/lightpaper.pdf)
  {
    isDropdown: true,
    label: 'Projects',
    isScrollUp: true,
    links: [
      { to: '/roadmap', label: 'navbar.roadmap' },
      { to: '/lightpaper.pdf', label: 'navbar.lightpaper', language: 'en' },
      { to: '/manifesto', label: 'navbar.manifesto' },
    ],
  },
  { to: '/about', label: 'navbar.about' },
  { to: '/community', label: 'navbar.community' },
  { to: '/token', label: 'navbar.token' },
  { href: 'https://dao.joystream.org', label: 'navbar.pioneer' },
  { href: 'https://handbook.joystream.org/', label: 'navbar.handbook' },
];

export { links };
